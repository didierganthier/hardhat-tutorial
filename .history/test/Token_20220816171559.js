const { expect } = require('chai');

describe('Token contract', function () {
    it("Deployment should assign the correct address", async function () {
        const Token = await Token.new();
        const address = await Token.address;
        expect(address).to.equal(Token.address);
    });
})