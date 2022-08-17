const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token contract', function () {
    it("Deployment should assign the total supply of tokens to the owner", async function () {
        const [owner] = await ethers.getSigners();
        const token = await ethers.getContractFactory('Token');
        const hardhatToken = await token.deploy();
    });
})