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
       // UndeadNFT undead = new UndeadNFT();

       
        UndeadNFT undead = UndeadNFT(0x0957b85B61B0824a859Dd44FCBb3153FE6669371);
        undead.mintNFT(0xd5f005e4eaeaa52d9d2ef05bf9c8f464092c6bdc, "https://af1-lookbook.rtfkt.com/assets/images/dna/genesis/apparel/af1_1.jpg");
        
    }
}
