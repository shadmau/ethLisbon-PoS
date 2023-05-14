import React, { useContext } from 'react'
import { sendTransaction } from "../utils/sendTransaction"
import { WalletContext } from '../context/Wallet';
export function SendTransaction() {
  const { privateKey, provider } = useContext(WalletContext)
  // console.log('provider: ', provider)
  return (
    <>
      {/* <button onClick={() => deploySafe()}>Deploy Safe</button> */}
      <button onClick={() => sendTransaction(privateKey)}>Send Transaction</button>
    </>
  );
}

