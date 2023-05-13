
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "../lib/forge-std/src/Script.sol";
import "../src/NftDiscountModule.sol";
import "../src/UndeadNFT.sol";

contract MintScript is Script {
    function setUp() public {}

    function run() public {
        uint256 deployerPrivKey = vm.envUint("DEPLOYER_PRIV_KEY");
        vm.broadcast(deployerPrivKey);

        UndeadNFT undead = UndeadNFT(0x86E192Bd7a223a39a251c42BC7C9ec000F7086Cd);
        undead.mintNFT(0xDc2543d90a20C306cb74714F2A36C7BD8Fa1444b, "https://af1-lookbook.rtfkt.com/assets/images/dna/genesis/apparel/af1_1.jpg");

    }
}

