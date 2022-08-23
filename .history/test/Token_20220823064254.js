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
        const { hardhatToken, owner } = await loadFixture(deployTokenFixture);

        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(hardhatToken.totalSupply()).to.eq(ownerBalance);
    });
    it("Should transfer tokens from the owner to another address", async function () {
        const { hardhatToken, owner, addr1, addr2 } = await loadFixture(deployTokenFixture);

        await expect(hardhatToken.connect(addr1).transfer(addr2.address, 50),).to.changeTokenBalances(hardhatToken, [addr1, addr2], [-50, 50]);
    });
})