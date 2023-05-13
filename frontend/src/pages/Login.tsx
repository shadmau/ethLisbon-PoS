import React from 'react'
import { useWeb3Auth } from '../hooks/useWeb3Auth';

interface LoginPageProps {
    clientId: string
}

export function LoginPage ({ clientId }: LoginPageProps) {

    const { login, logout, getUserInfo, getBalance, signMessage, sendTransaction, provider } = useWeb3Auth(clientId)

    const loggedInView = (
        <>
          <div className="flex-container">
            <div>
              <button onClick={getUserInfo} className="card">
                Get User Info
              </button>
            </div>
            <div>
              <button onClick={getBalance} className="card">
                Get Balance
              </button>
            </div>
            <div>
              <button onClick={signMessage} className="card">
                Sign Message
              </button>
            </div>
            <div>
              <button onClick={sendTransaction} className="card">
                Send Transaction
              </button>
            </div>
            <div>
              <button onClick={logout} className="card">
                Log Out
              </button>
            </div>
          </div>
    
          <div id="console" style={{ whiteSpace: "pre-line" }}>
            <p style={{ whiteSpace: "pre-line" }}>Logged in Successfully!</p>
          </div>
        </>
      );

      const unloggedInView = (
        <button onClick={login} className="card">
          Login
        </button>
      );


    return (
        <div className="grid">{provider ? loggedInView : unloggedInView}</div>
    )
}