//SPDX-License-Identifier: UNLICENSED

// Solidity files have to start with this pragma.
// It will be used by the Solidity compiler to validate its version.
pragma solidity ^0.8.9;

contract Token {
    // Some string type variables to identify the token.
    string public name = "Nice Token";
    string public symbol = "NTC";

    // The fixed amount of tokens, stored in an unsigned integer type variable
    uint256 public totalSupply = 1000000;

    // An address type variable is used to store ethereum accounts.
    address public owner;
}