![WingWallet logo](https://drive.google.com/uc?export=view&id=1IsH9vsdLEzG65t22RZB5AaIOLkx1Dd1B)

# WingWallet

## Summary

## Problem
In Web3, there are already a big number of people with crypto who want to use crypto as payment, but there are very few merchants who accept crypto as a form of payment.
## Solution
We are building a decentralized network of plugins/addons to extend capabilities of the smart wallet to give both sides the ability to do more with their payment. First off, we can easily onboard the merchant with social login with Google. Secondly, some of our addons make it easier to pay such as our QR payment module, NFT discount, and posting to Lens social network.


### Buyer and merchant flows


## User Flow
The user has an existing wallet and would connect their external wallet with the app to pre-load it with crypto. The seller (merchant) doesn't have a Web3 wallet yet, so he/she would create a wallet through Web3 login. The wallet (EOA) that is created with social login would in turn create the safe. This safe would then help to conduct transactions with the buyer from seller.
1. After both accounts are created, buyer and seller can select the appropriate addons that they would like to enable for their accounts. For example, seller can enable addon to receive money in the currency of their choice.
2. When buyer goes to the store and wants to buy a real-life item with crypto, he/she would inform the seller of the item.
3. Seller would then fill out the invoice with the item description along with the amount to charge the buyer.
4. Seller would generate the QR code and share it with buyer.
5. Buyer can scan the QR code and then pay for the item through buyer's smart wallet.
6. The applicable discount would be applied if the buyer's wallet meets the required conditions.
7. Buyer confirm the transaction and the seller's safe carries out the transaction with the applicable discount.
8. The transaction is recorded on the blockchain. Buyer has the ability to post the transaction on the Lenster network afterwards.

## Future Work
Some thoughts for how the whole project can be built out further:
- Build more addons for both buyers and sellers.
- Launch on new chains that are outside of Safe's currently deployed chains.
- Reviews and/or audits for addons to ensure they are safe.
- To create a fully decentralized L2 network of addons.

## Deployed contract

### Goerli (chainID: 5)

| Contract |                           Contract address |
| :------- | -----------------------------------------: |
| Nike NFT    | 0x5b21d9f94e5f0627683f5e0d63bc5d69848b5dd3 |
| Safe module | 0x6499fe8dcf7fa706075554a22d54ab007c5c166f |

### Gnosis Chain mainnet (chainID: 100)

| Contract    |                           Contract address |
| :---------- | -----------------------------------------: |
| Nike NFT    | 0x0957b85b61b0824a859dd44fcbb3153fe6669371 |
| Safe module | 0x80aa447d916aa168f8656196fa0bb2b2b84ad898 |
The verified smart contract for Gnosis Chain mainnet is:
https://gnosisscan.io/address/0x80aa447d916aa168f8656196fa0bb2b2b84ad898#code

### Polygon Mumbai (chainID: 80001)

| Contract    |                           Contract address |
| :---------- | -----------------------------------------: |
| Nike NFT    | 0x0957b85b61b0824a859dd44fcbb3153fe6669371 |
| Safe module | 0x80aa447d916aa168f8656196fa0bb2b2b84ad898 |
The verified smart contract for Polygon Mumbai is:
https://mumbai.polygonscan.com/address/0x80aa447d916aa168f8656196fa0bb2b2b84ad898#code

### Optimism Goerli testnet (chainID: 420)

| Contract    |                           Contract address |
| :---------- | -----------------------------------------: |
| Nike NFT    | 0x0957b85b61b0824a859dd44fcbb3153fe6669371 |
| Safe module | 0x0957b85B61B0824a859Dd44FCBb3153FE6669371 |
The verified smart contract for Optimism Goerli testnet is:
https://goerli-optimism.etherscan.io/address/0x80aa447d916aa168f8656196fa0bb2b2b84ad898#code

### Scroll Alpha testnet (chainID: 534353)

| Contract    |                           Contract address |
| :---------- | -----------------------------------------: |
| Nike NFT    | 0x80Aa447D916aa168F8656196fa0Bb2b2B84Ad898 |
| Safe module | 0x217b0580e5ceeef9e5966825ed523717ea779b5d |
The verified smart contract for Scroll Alpha testnet is:
https://blockscout.scroll.io/address/0x0957b85B61B0824a859Dd44FCBb3153FE6669371/contracts#address-tabs

### Linea testnet (chainID: 59140)

| Contract    |                           Contract address |
| :---------- | -----------------------------------------: |
| Nike NFT    | 0x0957b85B61B0824a859Dd44FCBb3153FE6669371 |
| Safe module | 0x80Aa447D916aa168F8656196fa0Bb2b2B84Ad898 |
The verified smart contract for Linea testnet is:
https://explorer.goerli.linea.build/address/0x80Aa447D916aa168F8656196fa0Bb2b2B84Ad898/contracts#address-tabs

### Mantle testnet (chainID: 5001)

| Contract    |                           Contract address |
| :---------- | -----------------------------------------: |
| Nike NFT    | 0x80Aa447D916aa168F8656196fa0Bb2b2B84Ad898 |
| Safe module | 0x80Aa447D916aa168F8656196fa0Bb2b2B84Ad898 |
The verified smart contract for Mantle testnet is:
https://explorer.testnet.mantle.xyz/address/0x80Aa447D916aa168F8656196fa0Bb2b2B84Ad898/contracts#address-tabs

## Transactions

Hyperlane: https://explorer.hyperlane.xyz/message/113809

## Others

### Demo movie
https://www.youtube.com/watch?v=pDM4ci3XoFk&feature=youtu.be

### Demo site
https://cross-chain-voting-frontend.vercel.app

### How to run locally
1. Go to the frontend folder
2. npm install
3. npm run dev
