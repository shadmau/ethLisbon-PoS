import Safe, { getSafeContract } from "@safe-global/protocol-kit";
import { GelatoRelayPack } from "@safe-global/relay-kit";
import { MetaTransactionData, OperationType, MetaTransactionOptions, RelayTransaction, EthAdapter } from "@safe-global/safe-core-sdk-types";
import { ethers } from "ethers";

export const requestRelay = async (destinationAddress: string, safeAddress: string, ethAdapter: EthAdapter) => {
    // const destinationAddress = "";
    const chainId = 5;
    // Create a transaction object
    const safeTransactionData: MetaTransactionData = {
        to: destinationAddress,
        data: "0x", // leave blank for native token transfers
        value: ethers.utils.parseUnits("0.001", "ether").toString(),
        operation: OperationType.Call,
    };
    const options: MetaTransactionOptions = {
        gasLimit: "100000",
        isSponsored: true,
    };
    const safeSDK = await Safe.create({
        ethAdapter,
        safeAddress,
    });

    const relayKit = new GelatoRelayPack(import.meta.env.VITE_GELATO_RELAY_API_KEY);

    const safeTransaction = await safeSDK.createTransaction({
        safeTransactionData,
    });

    const signedSafeTx = await safeSDK.signTransaction(safeTransaction);
    const safeSingletonContract = await getSafeContract({
        ethAdapter,
        safeVersion: await safeSDK.getContractVersion(),
    });

    const encodedTx = safeSingletonContract.encode("execTransaction", [
        signedSafeTx.data.to,
        signedSafeTx.data.value,
        signedSafeTx.data.data,
        signedSafeTx.data.operation,
        signedSafeTx.data.safeTxGas,
        signedSafeTx.data.baseGas,
        signedSafeTx.data.gasPrice,
        signedSafeTx.data.gasToken,
        signedSafeTx.data.refundReceiver,
        signedSafeTx.encodedSignatures(),
    ]);

    const relayTransaction: RelayTransaction = {
        target: safeAddress,
        encodedTransaction: encodedTx,
        chainId,
        options,
    };
    const response = await relayKit.relayTransaction(relayTransaction);

    console.log(
        `Relay Transaction Task ID: https://relay.gelato.digital/tasks/status/${response.taskId}`
    );
};