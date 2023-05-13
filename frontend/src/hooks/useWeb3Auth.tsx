import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import { Web3AuthOptions } from "@web3auth/modal";
import { useEffect, useState } from "react";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { SafeAuthKit, Web3AuthModalPack, SafeAuthSignInData } from "@safe-global/auth-kit";

export function useWeb3Auth(clientId: string) {
    // const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
    // const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);

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
                    web3AuthNetwork: 'testnet',
                    chainConfig: {
                        chainNamespace: CHAIN_NAMESPACES.EIP155,
                        chainId: '0x5',
                        // https://chainlist.org/
                        rpcTarget: `https://rpc.ankr.com/eth_goerli`
                    },
                    uiConfig: {
                        theme: 'dark',
                        loginMethodsOrder: ['google', 'facebook']
                    }
                }

                // https://web3auth.io/docs/sdk/web/modal/initialize#configuring-adapters
                //   const modalConfig = {
                //     [WALLET_ADAPTERS.TORUS_EVM]: {
                //       label: 'torus',
                //       showOnModal: false
                //     },
                //     [WALLET_ADAPTERS.METAMASK]: {
                //       label: 'metamask',
                //       showOnDesktop: true,
                //       showOnMobile: false
                //     }
                //   }

                const openloginAdapter = new OpenloginAdapter({
                    loginSettings: {
                        mfaLevel: 'mandatory'
                    },
                    adapterSettings: {
                        uxMode: 'popup',
                        whiteLabel: {
                            name: 'Safe'
                        }
                    }
                })

                const pack = new Web3AuthModalPack(options, [openloginAdapter], {})

                const safeAuthKit = await SafeAuthKit.init(pack, {
                    txServiceUrl: 'https://safe-transaction-goerli.safe.global'
                })

                setSafeAuth(safeAuthKit)

            } catch (error) {
                console.error(error);
            }
        };

        init();
    }, []);

    const login = async () => {
        if (!safeAuth) return

        const response = await safeAuth.signIn()
        console.log('SIGN IN RESPONSE: ', response)

        setSafeAuthSignInResponse(response)
        setProvider(safeAuth.getProvider() as SafeEventEmitterProvider)
        console.log('PROVIDER: ', provider)
        // onLoggedIn?.(safeAuth)
    }

    const logout = async () => {
        if (!safeAuth) return
    
        await safeAuth.signOut()
    
        setProvider(null)
        setSafeAuthSignInResponse(null)
      }

    return {
        login,
        logout,
        safeAuthSignInResponse,
        provider,
    }
}