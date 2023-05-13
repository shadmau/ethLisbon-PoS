window.global ||= window;

import Safe, {
  EthersAdapter,
  SafeFactory,
  SafeAccountConfig,
  getSafeContract,
} from "@safe-global/protocol-kit";
import {
  MetaTransactionData,
  MetaTransactionOptions,
  OperationType,
  RelayTransaction,
  SafeTransactionDataPartial,
} from "@safe-global/safe-core-sdk-types";
import { ethers } from "ethers";
import { GelatoRelayPack } from "@safe-global/relay-kit";

const provider = new ethers.providers.JsonRpcProvider(
  "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
);

// It is a wallet for hackathon use, so write the private key directly on it.
const owner1 = new ethers.Wallet(
  "38a4b99ec4b1f3a4d3ebb0c5a78c91d844569c424313a764eb9ed146d63c6a5f",
  provider
);

const owner2 = new ethers.Wallet(
  "36ea6f0661a35191bcbd01d90d903b298491d37843bb06b3702482df937b8682",
  provider
);

const owner3 = new ethers.Wallet(
  "c4464e31fbd3ebba87f07a9df614d6e911d9641f816c91f16d751f096fa1cdc1",
  provider
);
console.log("owner1: ", owner1);

const ethAdapter = new EthersAdapter({
  ethers,
  signerOrProvider: owner1,
});

console.log("ethAdapter: ", ethAdapter);

function SendTransaction() {
  const deploySafe = async () => {
    const safeFactory = await SafeFactory.create({ ethAdapter });

    const owners = [
      await owner1.getAddress(),
      await owner2.getAddress(),
      await owner3.getAddress(),
    ];

    const threshold = 1;
    const safeAccountConfig: SafeAccountConfig = {
      owners,
      threshold,
    };

    console.log("deploying safe...");
    const safeSdk: Safe = await safeFactory.deploySafe({
      safeAccountConfig,
    });

    const safeAddress = await safeSdk.getAddress();

    console.log("safe address: ", safeAddress);
    console.log("safeSdk: ", safeSdk);
  };

  const sendTransaction = async () => {
    console.log(await owner1.getAddress());
    // const safeSdk = await Safe.create({
    //   ethAdapter,
    //   safeAddress: "0x3c517ed4047d0752ef5ef64e033ba9f7c8e52384",
    // });

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

  const requestRelay = async () => {
    const safeAddress = "0x676bDe3B3c48E33E2f57Dc8111e73Da117a9837f";
    const destinationAddress = "";
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

    const relayKit = new GelatoRelayPack(process.env.GELATO_RELAY_API_KEY!);

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
  return (
    <>
      {/* <button onClick={() => deploySafe()}>Deploy Safe</button> */}
      <button onClick={() => sendTransaction()}>Send Transaction</button>
    </>
  );
}

export default SendTransaction;
