//SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

error NotOwner();

contract faucet{
    address payable i_owner;
    constructor(){
        i_owner = payable(msg.sender);
    }

    modifier onlyOwner {
        if (msg.sender != i_owner) revert NotOwner();
        _;
    }
    function send() payable public{
    }

    function withdraw() payable public{
        (bool success, ) = payable(msg.sender).call{value: 10000000000000000}(""); //0.01 eth
        require(success,"withdraw failed"); 
    }
}
