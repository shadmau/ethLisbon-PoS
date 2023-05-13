import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import { Web3Auth } from "@web3auth/modal";
import RPC from "../web3RPC";
import { useEffect, useState } from "react";

export function useWeb3Auth(clientId: string) {
    const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
    const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);

    useEffect(() => {
        const init = async () => {
            try {
                const web3auth = new Web3Auth({
                    clientId,
                    web3AuthNetwork: "testnet", // mainnet, aqua, celeste, cyan or testnet
                    chainConfig: {
                        chainNamespace: CHAIN_NAMESPACES.EIP155,
                        chainId: "0x1",
                        rpcTarget: "https://rpc.ankr.com/eth", // This is the public RPC we have added, please pass on your own endpoint while creating an app
                    },
                });

                setWeb3auth(web3auth);

                await web3auth.initModal();

                if (web3auth.provider) {
                    setProvider(web3auth.provider);
                };

            } catch (error) {
                console.error(error);
            }
        };

        init();
    }, []);

    const login = async () => {
        if (!web3auth) {
            uiConsole("web3auth not initialized yet");
            return;
        }
        const web3authProvider = await web3auth.connect();
        setProvider(web3authProvider);
    };

    const authenticateUser = async () => {
        if (!web3auth) {
            uiConsole("web3auth not initialized yet");
            return;
        }
        const idToken = await web3auth.authenticateUser();
        uiConsole(idToken);
    };

    const getUserInfo = async () => {
        if (!web3auth) {
            uiConsole("web3auth not initialized yet");
            return;
        }
        const user = await web3auth.getUserInfo();
        uiConsole(user);
    };

    const logout = async () => {
        if (!web3auth) {
            uiConsole("web3auth not initialized yet");
            return;
        }
        await web3auth.logout();
        setProvider(null);
    };

    const getChainId = async () => {
        if (!provider) {
            uiConsole("provider not initialized yet");
            return;
        }
        const rpc = new RPC(provider);
        const chainId = await rpc.getChainId();
        uiConsole(chainId);
    };
    const getAccounts = async () => {
        if (!provider) {
            uiConsole("provider not initialized yet");
            return;
        }
        const rpc = new RPC(provider);
        const address = await rpc.getAccounts();
        uiConsole(address);
    };

    const getBalance = async () => {
        if (!provider) {
            uiConsole("provider not initialized yet");
            return;
        }
        const rpc = new RPC(provider);
        const balance = await rpc.getBalance();
        uiConsole(balance);
    };

    const sendTransaction = async () => {
        if (!provider) {
            uiConsole("provider not initialized yet");
            return;
        }
        const rpc = new RPC(provider);
        const receipt = await rpc.sendTransaction();
        uiConsole(receipt);
    };

    const signMessage = async () => {
        if (!provider) {
            uiConsole("provider not initialized yet");
            return;
        }
        const rpc = new RPC(provider);
        const signedMessage = await rpc.signMessage();
        uiConsole(signedMessage);
    };

    const getPrivateKey = async () => {
        if (!provider) {
            uiConsole("provider not initialized yet");
            return;
        }
        const rpc = new RPC(provider);
        const privateKey = await rpc.getPrivateKey();
        uiConsole(privateKey);
    };

    function uiConsole(...args: any[]): void {
        const el = document.querySelector("#console>p");
        if (el) {
            el.innerHTML = JSON.stringify(args || {}, null, 2);
        }
    }

    return {
        login,
        logout,
        authenticateUser,
        getUserInfo,
        getChainId,
        getAccounts,
        getBalance,
        sendTransaction,
        signMessage,
        getPrivateKey,
        web3auth,
        provider
    }
}