// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

     address nft = 0x80Aa447D916aa168F8656196fa0Bb2b2B84Ad898;
        address discuntReceiver = address(0x5CFE9e2386150C655F1941DDe8978f862336A858);
        uint discountPercentage = 10;
        uint maxDiscountPerTx = 0.1 ether;

import "../lib/forge-std/src/Script.sol";
import "../src/NftDiscountModule.sol";
import "../src/UndeadNFT.sol";
contract DeployerScriptNFT is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivKey = vm.envUint("DEPLOYER_PRIV_KEY");
        vm.broadcast(deployerPrivKey);
        UndeadNFT undead = new UndeadNFT();

       /*
        UndeadNFT undead = UndeadNFT(0x86E192Bd7a223a39a251c42BC7C9ec000F7086Cd);
        undead.mintNFT(0xd9CdFbBb0dCA90F1367673337F441EcF09172b7B, "https://af1-lookbook.rtfkt.com/assets/images/dna/genesis/apparel/af1_1.jpg");
        */
    }
}
