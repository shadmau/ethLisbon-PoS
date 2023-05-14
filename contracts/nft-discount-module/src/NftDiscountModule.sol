 // SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;


import "@zodiac/guard/BaseGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract NftDiscountModule is BaseGuard, Ownable, ReentrancyGuard {
    
    IERC721 public nftContract;
    address public discountReceiver;
    uint256 public discountPercentage;
    uint256 public maxDiscountPerTx;
    event DiscountApplied(address indexed user, uint256 discountAmount);

    constructor(
        address _nftContract,
        address _discountReceiver,
        uint256 _discountPercentage,
        uint256 _maxDiscountPerTx
    ) payable {
        nftContract = IERC721(_nftContract);
        discountReceiver = _discountReceiver;
        discountPercentage = _discountPercentage;
        maxDiscountPerTx = _maxDiscountPerTx;
    }

    function setDiscountReceiver(address _discountReceiver) external onlyOwner {
        discountReceiver = _discountReceiver;
    }

    function setDiscountPercentage(
        uint256 _discountPercentage
    ) external onlyOwner {
        require(
            _discountPercentage <= 100,
            "Percentage should be between 0 and 100"
        );
        discountPercentage = _discountPercentage;
    }

    function setMaxDiscountPerTx(uint256 _maxDiscountPerTx) external onlyOwner {
        maxDiscountPerTx = _maxDiscountPerTx;
    }

    function calculateDiscount(
        uint256 value,
        address user
    ) private view returns (uint256) {
        uint256 discount = 0;
        if (nftContract.balanceOf(user) > 0) {
            discount = (value * discountPercentage) / 100;
            if (discount > maxDiscountPerTx) {
                discount = maxDiscountPerTx;
            }
        }
        return discount;
    }

    receive() external payable {}

    //abstract guard methods
    function checkTransaction(
        address to,
        uint256 value,
        bytes memory data,
        Enum.Operation operation,
        uint256 safeTxGas,
        uint256 baseGas,
        uint256 gasPrice,
        address gasToken,
        address payable refundReceiver,
        bytes memory signatures,
        address msgSender
    ) external override nonReentrant {
        require(
            to != address(0) && to != address(this),
            "Invalid 'to' address"
        );
        if (to == discountReceiver) {
            uint256 contractBalance = address(this).balance;

            if (contractBalance > 0) {
                uint256 discount = calculateDiscount(value, msgSender);
                require(
                    value >= discount,
                    "Transaction value should be greater than or equal to the discount"
                );

                if (discount > contractBalance) {
                    discount = contractBalance;
                }

                if (discount > 0) {
                    (bool success, ) = payable(msgSender).call{value: discount}("");
                    require(success, "Refund transfer failed");
                    emit DiscountApplied(msgSender, discount);
                }
            }
        }
    }

    function checkAfterExecution(
        bytes32 txHash,
        bool success
    ) external override {}

    


}