import { Web3AuthOptions } from "@web3auth/modal";
import { useEffect, useState } from "react";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { SafeAuthKit, Web3AuthModalPack, SafeAuthSignInData, Web3AuthEventListener } from "@safe-global/auth-kit";
import { ADAPTER_EVENTS, CHAIN_NAMESPACES, SafeEventEmitterProvider, WALLET_ADAPTERS } from '@web3auth/base';
import RPC from "../web3RPC";
import { DEFAULT_CHAIN, chainsList } from "../utils/chains"
import { ethers } from "ethers";

const connectedHandler: Web3AuthEventListener = (data) => console.log('CONNECTED', data)
const disconnectedHandler: Web3AuthEventListener = (data) => console.log('DISCONNECTED', data)

export function useWeb3Auth(clientId: string) {
    const [safeAuthSignInResponse, setSafeAuthSignInResponse] = useState<SafeAuthSignInData | null>(
        null
    )
    const [safeAuth, setSafeAuth] = useState<SafeAuthKit<Web3AuthModalPack>>()
    const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null)

    useEffect(() => {
        const init = async () => {
            try {
                const options: Web3AuthOptions = {
                    clientId,
                    web3AuthNetwork: 'mainnet',
                    chainConfig: {
                        chainNamespace: CHAIN_NAMESPACES.EIP155,
                        ...DEFAULT_CHAIN
                    },
                    uiConfig: {
                        theme: 'dark',
                        loginMethodsOrder: ['google', 'facebook']
                    }
                }


                // https://web3auth.io/docs/sdk/web/modal/initialize#configuring-adapters
                const modalConfig = {
                    [WALLET_ADAPTERS.TORUS_EVM]: {
                        label: 'torus',
                        showOnModal: false
                    },
                    [WALLET_ADAPTERS.METAMASK]: {
                        label: 'metamask',
                        showOnDesktop: true,
                        showOnMobile: false
                    }
                }

                const openloginAdapter = new OpenloginAdapter({
                    loginSettings: {
                        mfaLevel: 'none'
                    },
                    adapterSettings: {
                        uxMode: 'popup',
                        whiteLabel: {
                            name: 'Safe'
                        }
                    }
                })

                const pack = new Web3AuthModalPack(options, [openloginAdapter], modalConfig)

                const safeAuthKit = await SafeAuthKit.init(pack, {
                    txServiceUrl: 'https://safe-transaction-goerli.safe.global'
                })

                safeAuthKit.subscribe(ADAPTER_EVENTS.CONNECTED, connectedHandler)

                safeAuthKit.subscribe(ADAPTER_EVENTS.DISCONNECTED, disconnectedHandler)

                setSafeAuth(safeAuthKit)

            } catch (error) {
                console.error(error);
            }
        };

        init();

        return () => {
            if (safeAuth) {
                safeAuth.unsubscribe(ADAPTER_EVENTS.CONNECTED, connectedHandler)
                safeAuth.unsubscribe(ADAPTER_EVENTS.DISCONNECTED, disconnectedHandler)
            }
        }
    }, []);

    const login = async () => {
        if (!safeAuth) return

        const response = await safeAuth.signIn()
        console.log('SIGN IN RESPONSE: ', response)

        setSafeAuthSignInResponse(response)
        // const providerEth = new ethers.providers.JsonRpcProvider( DEFAULT_CHAIN.rpcTarget)
        console.log('chain ', DEFAULT_CHAIN)
        setProvider(safeAuth.getProvider() as SafeEventEmitterProvider)
        // setProvider(providerEth)
        console.log('PROVIDER: ', provider)
        // onLoggedIn?.(safeAuth)
    }

    const logout = async () => {
        if (!safeAuth) return

        await safeAuth.signOut()

        setProvider(null)
        setSafeAuthSignInResponse(null)
    }

    const getChainId = async () => {
        if (!provider) {
            return;
        }
        const rpc = new RPC(provider);
        const chainId = await rpc.getChainId();
        return chainId
    };

    const getAccounts = async () => {
        if (!provider) {
            return;
        }
        const rpc = new RPC(provider);
        const address = await rpc.getAccounts();
        return address
    };

    const getPrivateKey = async () => {
        if (!provider) {
            return;
        }
        const rpc = new RPC(provider);
        const privateKey = await rpc.getPrivateKey();
        return privateKey
    };

    const getPublicAddress = () => {
        return safeAuthSignInResponse?.eoa
    }

    const getSafeAddress = () => {
        if (safeAuthSignInResponse?.safes) {
            return safeAuthSignInResponse.safes[0]
        }
        return undefined
    }

    return {
        login,
        logout,
        safeAuthSignInResponse,
        provider,
        getChainId,
        getPrivateKey,
        getAccounts,
        getPublicAddress,
        getSafeAddress
    }
}