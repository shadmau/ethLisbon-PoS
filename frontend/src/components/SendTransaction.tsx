import React, { useContext } from 'react'
import { sendTransaction } from "../utils/sendTransaction"
import { WalletContext } from '../context/Wallet';
export function SendTransaction() {
  const { privateKey, safeAddress } = useContext(WalletContext)
  // console.log('provider: ', provider)
  return (
    <>
      {/* <button onClick={() => deploySafe()}>Deploy Safe</button> */}
      <button onClick={() => sendTransaction(privateKey, safeAddress || '')}>Send Transaction</button>
    </>
  );
}

