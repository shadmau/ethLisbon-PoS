// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "../lib/forge-std/src/Script.sol";
import "../src/NftDiscountModule.sol";

contract DeployerScript is Script {
    function setUp() public {}

    function run() public {
        address nft = 0x0957b85B61B0824a859Dd44FCBb3153FE6669371;
        address discuntReceiver = address(0x5CFE9e2386150C655F1941DDe8978f862336A858);
        uint discountPercentage = 10;
        uint maxDiscountPerTx = 0.1 ether;

        uint256 deployerPrivKey = vm.envUint("DEPLOYER_PRIV_KEY");

        vm.broadcast(deployerPrivKey);
        new NftDiscountModule{value: 0.05 ether}(nft, discuntReceiver, discountPercentage, maxDiscountPerTx);
        
    }
}
