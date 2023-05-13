import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
} from "react";
import { SafeInfo, SafeBalances } from "@gnosis.pm/safe-apps-sdk";
import { ethers } from "ethers";

// import Chain from "src/models/chain";
// import chains, { initialChain } from "src/chains/chains";
// import usePolling from "src/hooks/usePolling";

// TODO [W2.1]: uncomment those 3 lines below to import the SDK and the safe app provider
// import SafeAppsSDK from "@gnosis.pm/safe-apps-sdk";
// import { SafeAppProvider } from "@gnosis.pm/safe-apps-provider";
// const appsSdk = new SafeAppsSDK();

type Wallet = SafeInfo & { label: string };

type walletContextValue = {
    userAddress?: string;
    userBalance?: SafeBalances;
    wallet?: Wallet;
    showConnectWalletModal: () => Promise<void>;
    // switchChain: (chain: Chain) => Promise<void>;
    disconnectWallet: () => void;
    isWalletConnected: boolean;
    isSafeAppWallet: boolean;
    isValidChain?: boolean;
    // chain: Chain;
    provider?: ethers.providers.Web3Provider;
};

const initialState = {
    isWalletConnected: false,
    isSafeAppWallet: false,
    showConnectWalletModal: () => Promise.resolve(),
    switchChain: () => Promise.resolve(),
    disconnectWallet: () => { },
    // chain: initialChain,
};

const walletContext = createContext<walletContextValue>(initialState);

const useWallet = () => {
    const context = useContext(walletContext);

    if (!context) {
        throw new Error("useWallet should be used within a WalletContext Provider");
    }

    return context;
};

const WalletProvider = ({ children }: { children: JSX.Element }) => {
    const [wallet, setWallet] = useState<Wallet>();

    // const [chain, setChain] = useState<Chain>(initialChain);
    // const [isValidChain, setIsValidChain] = useState<boolean>();

    const [userBalance, setUserBalance] = useState<SafeBalances>();

    const [provider, setProvider] = useState<ethers.providers.Web3Provider>();

    //  Get the Safe information
    const getSafeInfo = useCallback(async () => {
        // TODO [W2.2]: uncomment those 6 lines below to set the Safe information in the React state
        // const safeWallet = await appsSdk.safe.getInfo();
        // console.log("safe Wallet: ", safeWallet);
        // setWallet({
        //   ...safeWallet,
        //   label: "Gnosis Safe",
        // });
    }, []);

    useEffect(() => {
        getSafeInfo();
    }, [getSafeInfo]);

    // Get the Chain information
    const getChainInfo = useCallback(async () => {
        // TODO [W2.3]: uncomment those 8 lines below to set the Chain information in the React state
        // const chainInfo = await appsSdk.safe.getChainInfo();
        // console.log("chain: ", chainInfo);
        // const chain = chains.find(
        //   ({ id }) => Number(id) === Number(chainInfo.chainId)
        // );
        // const isValidChain = !!chain;
        // setIsValidChain(isValidChain);
        // setChain(isValidChain ? chain : initialChain);
    }, []);

    useEffect(() => {
        getChainInfo();
    }, [getChainInfo]);

    // Get the Balance information
    const getBalanceInfo = useCallback(async () => {
        // TODO [W2.4]: uncomment those 3 lines below to set the Safe Balance information in the React state
        // const balances = await appsSdk.safe.experimental_getBalances();
        // console.log("balances: ", balances);
        // setUserBalance(balances);
    }, []);

    useEffect(() => {
        getBalanceInfo();
    }, [getBalanceInfo]);

    // we can update the balances in real time using this polling
    // usePolling(getBalanceInfo);

    // we set the provider
    useEffect(() => {
        // TODO [W2.5]: uncomment those 5 lines below to set the Safe Provider in the React state
        // if (wallet) {
        //   setProvider(
        //     new ethers.providers.Web3Provider(new SafeAppProvider(wallet, appsSdk))
        //   );
        // }
    }, [wallet]);

    // We do not need these functions for a Safe App
    const showConnectWalletModal = useCallback(async () => { }, []);
    const disconnectWallet = useCallback(async () => { }, []);
    // const switchChain = useCallback(async (chain: Chain) => { }, []);

    const userAddress = wallet?.safeAddress;
    const isWalletConnected = !!userAddress;

    const isSafeAppWallet = true; // always true in our case

    const state = {
        wallet,
        provider,
        // chain,
        // isValidChain,

        isWalletConnected,
        isSafeAppWallet,
        userAddress,
        userBalance,

        showConnectWalletModal,
        // switchChain,
        disconnectWallet,
    };

    return (
        <walletContext.Provider value={state}>{children}</walletContext.Provider>
    );
};

export { useWallet, WalletProvider };