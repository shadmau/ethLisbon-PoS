// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "../lib/forge-std/src/Script.sol";
import "../src/NftDiscountModule.sol";

contract DeployerScript is Script {
    function setUp() public {}

    function run() public {
        address nft = 0x86E192Bd7a223a39a251c42BC7C9ec000F7086Cd;
        address discuntReceiver = address(0x5CFE9e2386150C655F1941DDe8978f862336A858);
        uint discountPercentage = 10;
        uint maxDiscountPerTx = 0.1 ether;

        uint256 deployerPrivKey = vm.envUint("DEPLOYER_PRIV_KEY");

        vm.broadcast(deployerPrivKey);
        new NftDiscountModule{value: 0.05 ether}(nft, discuntReceiver, discountPercentage, maxDiscountPerTx);
        
    }
}
