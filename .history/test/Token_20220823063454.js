const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token contract', function () {
    async function deployTokenFixture() {
        const Token = await ethers.getContractFactory('Token');
        const [owner, addr1, addr2] = await ethers.getSigners();

        const hardhatToken = await Token.deploy();

        await hardhatToken.deployed();

        return { Token, hardhatToken, owner, addr1, addr2 };
    }
    it("Should assign the total supply of tokens to the owner", async function () {
        const { Token, hardhatToken, owner, addr1, addr2 } = await loadFixture();

        const totalSupply = await Token.totalSupply();
        expect(totalSupply).to.eq(ethers.utils.parseEther('1000000'));
    }
})