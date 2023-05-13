![logo]()

# <Project name>

## Summary

## Problem
In Web3, there are already a big number of people with crypto who want to use crypto as payment, but there are very few merchants who accept crypto as a form of payment.
## Solution
We are building a decentralized network of plugins/addons to extend capabilities of the smart wallet to give both sides the ability to do more with their payment. First off, we can easily onboard the merchant with social login with Google. Secondly, some of our addons make it easier to pay such as our QR payment module, NFT discount, and posting to Lens social network.


### Architecture


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

### Goerli

| contract |                           contract address |
| :------- | -----------------------------------------: |
| Voting   | 0x2A1b3760d3AEcC8E6b8965404409596084664441 |
| OFT      | 0xBcA9C6f43F2AE64682E92a8404732cC4C26c52FB |

### Gnosis Chain

| contract    |                           contract address |
| :---------- | -----------------------------------------: |
| VoteRequest | 0x7268d5bc5AD0d3E0f333a481a306108A766b0A8C |
| OFT         | 0xDd14C00Aa47b585c06d48F8FaCB6EaB9a20aCdDc |

### Polygon

| contract    |                           contract address |
| :---------- | -----------------------------------------: |
| VoteRequest | 0x26D3Fe47c2948Ff67650dA41AD54cb615504F310 |
| OFT         | 0xB9207fFEf813A97394a814098f37a11B9523D7Ae |

### Optimism

| contract    |                           contract address |
| :---------- | -----------------------------------------: |
| VoteRequest | 0x79b71573F5c73D89C767717D98693FDd7d6C942B |
| OFT         | 0x88650b018f0F0981d8C136B25d7e12F1e2ffd264 |

## Transactions

Hyperlane: https://explorer.hyperlane.xyz/message/113809

## Others

### Demo movie
https://www.youtube.com/watch?v=pDM4ci3XoFk&feature=youtu.be

### Demo site
https://cross-chain-voting-frontend.vercel.app
