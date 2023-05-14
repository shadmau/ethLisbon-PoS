import { ReactNode, createContext, useEffect, useState } from "react"
import { useWeb3Auth } from "../hooks/useWeb3Auth"
import { SafeEventEmitterProvider } from "@web3auth/base"

interface WalletContextData {
    accounts?: any
    privateKey?: any
    chainId?: any
    provider: SafeEventEmitterProvider | null
    login: () => Promise<void>
    logout: () => Promise<void>
    isMerchant: boolean
    handleSetUserAsMerchant: () => void
}

interface WalletContextProps {
    children: ReactNode
}

const clientId = import.meta.env.VITE_REACT_APP_WEB3_AUTH_CLIENT_ID

export const WalletContext = createContext({} as WalletContextData)

export function WalletProvider({ children }: WalletContextProps) {
    const {
        login,
        logout,
        provider,
        getAccounts,
        getPrivateKey,
        getChainId,
      } = useWeb3Auth(clientId)
      const [accounts, setAccounts] = useState<any>()
      const [privateKey, setPrivateKey] = useState<any>()
      const [chainId, setChainId] = useState<any>()
      const [isMerchant, setIsMerchant] = useState(false)

      async function updateData () {
        const getAccountsData = await getAccounts()
        const getPrivateKeyData = await getPrivateKey()
        const getChainIdData = await getChainId()
        setAccounts(getAccountsData)
        setPrivateKey(getPrivateKeyData)
        setChainId(getChainIdData)
      }

      function handleSetUserAsMerchant () {
        setIsMerchant(true)
      }

      useEffect(() => {
        updateData()
      }, [provider])

    return (
        <WalletContext.Provider value={{ login, logout, provider, accounts, privateKey, chainId, isMerchant, handleSetUserAsMerchant }}>
            {children}
        </WalletContext.Provider>
    )
}

