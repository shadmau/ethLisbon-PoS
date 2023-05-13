window.global ||= window;

import Safe, {
  EthersAdapter,
  SafeFactory,
  SafeAccountConfig,
} from "@safe-global/protocol-kit";
import { SafeTransactionDataPartial } from "@safe-global/safe-core-sdk-types";
import { ethers } from "ethers";

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
  return (
    <>
      {/* <button onClick={() => deploySafe()}>Deploy Safe</button> */}
      <button onClick={() => sendTransaction()}>Send Transaction</button>
    </>
  );
}

export default SendTransaction;
