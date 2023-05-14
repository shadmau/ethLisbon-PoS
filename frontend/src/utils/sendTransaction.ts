import Safe, { EthersAdapter } from "@safe-global/protocol-kit";
import { SafeTransactionDataPartial } from "@safe-global/safe-core-sdk-types";
import { ethers } from "ethers";
import { DEFAULT_CHAIN } from "./chains";

export const sendTransaction = async (privKey: string, safeAddress: string) => {
    console.log(1)
    const provider = new ethers.providers.JsonRpcProvider( DEFAULT_CHAIN.rpcTarget)
    const signer = new ethers.Wallet(privKey, provider)

    const ethAdapter = new EthersAdapter({
        ethers,
        signerOrProvider: signer,
    });

    console.log('safe add ', safeAddress)

    const safeSdk = await Safe.create({
        ethAdapter,
        safeAddress: "0x3b6e4a4949F04595FCD97b8A29dee609FE87F397",
    });

    const safeTransactionData: SafeTransactionDataPartial = {
        to: "0x3b6e4a4949F04595FCD97b8A29dee609FE87F397",
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