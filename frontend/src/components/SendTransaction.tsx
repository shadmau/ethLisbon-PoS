import React, { useContext } from 'react'
import { sendTransaction } from "../utils/sendTransaction"
import { useWeb3Auth } from '../hooks/useWeb3Auth';
import { WalletContext } from '../context/Wallet';
export function SendTransaction() {
  const { privateKey, provider } = useContext(WalletContext)
  return (
    <>
      {/* <button onClick={() => deploySafe()}>Deploy Safe</button> */}
      <button onClick={() => sendTransaction(privateKey, provider)}>Send Transaction</button>
    </>
  );
}

