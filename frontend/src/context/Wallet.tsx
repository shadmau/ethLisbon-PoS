import { ReactNode, createContext, useEffect, useState } from "react";
import { useWeb3Auth } from "../hooks/useWeb3Auth";
import { SafeEventEmitterProvider } from "@web3auth/base";

interface WalletContextData {
  accounts?: any;
  privateKey?: any;
  chainId?: any;
  provider: SafeEventEmitterProvider | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  isMerchant: boolean;
  handleSetUserAsMerchant: () => void;
  safeAddress: string | undefined
}

interface WalletContextProps {
  children: ReactNode;
}

const clientId =
  "BHfw1_06o5qSzwHyB1uLHaaKth-pEYa26ukwFC2ESPPP8iotJ8DsF-HRHfAXTDpNx7NNIjXN3lnwBUoiZhu794A";

export const WalletContext = createContext({} as WalletContextData);

export function WalletProvider({ children }: WalletContextProps) {
  const { login, logout, provider, getAccounts, getPrivateKey, getChainId, getSafeAddress, getPublicAddress } =
    useWeb3Auth(clientId);
  const [accounts, setAccounts] = useState<any>();
  const [privateKey, setPrivateKey] = useState<any>();
  const [chainId, setChainId] = useState<any>();
  const [isMerchant, setIsMerchant] = useState(false);
  const [providerData, setProviderData] = useState<SafeEventEmitterProvider | null>(provider)
  const [safeAddress, setSafeAddress] = useState<string>()

  async function updateData() {
    const getAccountsData = await getAccounts();
    const getPrivateKeyData = await getPrivateKey();
    const getChainIdData = await getChainId();
    setProviderData(provider)
    setAccounts(getAccountsData);
    setPrivateKey(getPrivateKeyData);
    setChainId(getChainIdData);
    setSafeAddress(getSafeAddress())
  }

  function handleSetUserAsMerchant() {
    setIsMerchant(true);
  }

  useEffect(() => {
    updateData();
  }, [provider]);

  return (
    <WalletContext.Provider
      value={{
        login,
        logout,
        provider: providerData,
        accounts,
        privateKey,
        chainId,
        isMerchant,
        handleSetUserAsMerchant,
        safeAddress,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}
