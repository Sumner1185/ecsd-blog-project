const app = require('../src/index')
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

//  describe('live api endpoints', () => {  
//     test('GET route', async done => {
//         const { body } = await request(app).get('/blogs')
//         expect(body.length).toEqual(3)
//         expect(body[0].id).toEqual(1)
//         done()
//     })

//     test('POST route', async done => {
//         const { body } = await request(app).post('/blogs')
//         done()
//     })
//  })
