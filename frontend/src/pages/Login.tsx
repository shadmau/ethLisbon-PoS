import React from 'react'
import { useWeb3Auth } from '../hooks/useWeb3Auth';

interface LoginPageProps {
    clientId: string
    handleLogin: () => Promise<void>
}

export function LoginPage ({ handleLogin }: LoginPageProps) {


    return (
      <button onClick={handleLogin} className="card">
        Login
    </button>
    )
}