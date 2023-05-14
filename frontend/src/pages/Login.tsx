import React from 'react'

interface LoginPageProps {
    handleLogin: () => Promise<void>
}

export function LoginPage({ handleLogin }: LoginPageProps) {


    return (
        <button onClick={handleLogin} className="card">
            Login
        </button>
    )
}