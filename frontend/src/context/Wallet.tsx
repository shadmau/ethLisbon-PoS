import { ReactNode, createContext, useEffect, useState } from "react"
import { useWeb3Auth } from "../hooks/useWeb3Auth"
import { SafeEventEmitterProvider } from "@web3auth/base"

interface WalletContextData {
    accounts?: any
    provider: SafeEventEmitterProvider | null
    login: () => Promise<void>
    logout: () => Promise<void>
    getAccounts: () => Promise<any>
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
      } = useWeb3Auth(clientId)
      const [accounts, setAccounts] = useState<any>()

      async function updateData () {
        const getAccountsData = await getAccounts()
        setAccounts(getAccountsData)
      }

      useEffect(() => {
        updateData()
      }, [provider])

    return (
        <WalletContext.Provider value={{ login, logout, provider, getAccounts, accounts }}>
            {children}
        </WalletContext.Provider>
    )
}

