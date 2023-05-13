import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { WalletProvider } from './context/Wallet.tsx'

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('/service-worker.js');
//   });
// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <WalletProvider>
    <App />
  </WalletProvider>
)
