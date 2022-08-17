const { expect } = require('chai');

describe('Token contract', function () {
    it("Deployment should assign the total number of supply to the owner", async function () {
        const [owner] = await web3.eth.getSigners();
    });
})