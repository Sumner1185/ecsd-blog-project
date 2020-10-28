const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)

describe('mock test api endpoints', () => {

    app.get('/test', async (req, res) => {
        res.json({ message: 'pass!' })
    })

    app.post('/test', async (req, res) => {
        let blogs = []
        const testBlog = { 
            "id": (blogs.length + 1).toString(),
            "content": "Test blog"
        }
        if (testBlog.id && testBlog.content) {
            blogs.push(testBlog)
            res.json(testBlog)
        } else {
            res.status(400).json({ error: 'Missing information' })
        }
    })

    it('GETs the test endpoint', async done => {
        const res = await request.get('/test')
        expect(res.status).toBe(200)
        expect(res.body.message).toBe('pass!')
        done()
    })

    it('Adds an entry to the blog list', async done => {
        const res = await request.post('/test')
        console.log(res.body[0])
        expect(res.body.content).toEqual('Test blog')
        expect(res.body.id).toEqual("1")
        done()
    })
})

