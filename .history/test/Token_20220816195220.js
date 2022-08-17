const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token contract', function () {
    //Write a test verifying that the address of the deployed Token contract is correct.
    it('should have the correct address', async function () {
        const { deployments } = await ethers.getSigner();
        const token = await deployments.get('Token');
        expect(token.address).to.equal('0x0000000000000000000000000000000000000001');
    });
    it("Deployment should assign the total supply of tokens to the owner", async function () {
        const [owner] = await ethers.getSigners();
        const token = await ethers.getContractFactory('Token');
        const hardhatToken = await token.deploy();

        const ownerBalance = await hardhatToken.balanceOf(owner.address);
        expect(ownerBalance).to.equal(await hardhatToken.totalSupply());
    });
})