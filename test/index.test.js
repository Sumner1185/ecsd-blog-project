const { expect } = require("chai")
const { test } = require("mocha")

Routes = require('../src/routes/blog-routes')
    
    describe('Mock test', () => {
    it('Should pass', () => {
        const testPhrase = "Passing test"
        expect(testPhrase).to.equal("Passing test")
    })
})