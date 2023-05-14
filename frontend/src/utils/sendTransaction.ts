import Safe, { EthersAdapter } from "@safe-global/protocol-kit";
import { SafeTransactionDataPartial } from "@safe-global/safe-core-sdk-types";
import { ethers } from "ethers";

export const sendTransaction = async (privKey: string, provider: any) => {
    const signer = new ethers.Wallet(privKey, provider)

    const ethAdapter = new EthersAdapter({
        ethers,
        signerOrProvider: signer,
    });

    const safeSdk = await Safe.create({
        ethAdapter,
        safeAddress: "0x676bDe3B3c48E33E2f57Dc8111e73Da117a9837f",
    });

    const safeTransactionData: SafeTransactionDataPartial = {
        to: "0x5CFE9e2386150C655F1941DDe8978f862336A858",
        value: ethers.utils.parseUnits("0.001", "ether").toString(),
        data: "0x",
    };
    const safeTransaction = await safeSdk.createTransaction({
        safeTransactionData,
    });

    await safeSdk.signTransaction(safeTransaction);

    const executeTxResponse = await safeSdk.executeTransaction(safeTransaction);

    console.log("executeTxResponse: ", executeTxResponse);

    const receipt = await executeTxResponse.transactionResponse?.wait();

    console.log("Transaction executed:");
    if (receipt) {
        console.log(`https://goerli.etherscan.io/tx/${receipt.transactionHash}`);
    }
};