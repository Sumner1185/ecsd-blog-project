const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)
    
describe('Mock test', () => {
    
    test('should pass', () => {
        const testPhrase = "Passing test"
        expect(testPhrase).toEqual("Passing test")
    })

})

describe('mock test api endpoint', () => {

    app.get('/test', async (req, res) => {
        res.json({ message: 'pass!' })
    })

    it('gets the test endpoint', async done => {
        const res = await request.get('/test')
        expect(res.status).toBe(200)
        expect(res.body.message).toBe('pass!')
        done()
    })
})

