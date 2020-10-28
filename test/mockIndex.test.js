const app = require('../index')
const supertest = require('supertest')
const request = supertest(app)

describe('mock test api endpoints', () => {

    app.get('/test', (req, res) => {
        res.json({ message: 'pass!' })
    })

    app.post('/test', (req, res) => {
        let blogs = []
        const testBlog = { 
            "id": (blogs.length + 1).toString(),
            "content": "Test blog"
        }
        if (testBlog.id && testBlog.content) {
            blogs.push(testBlog)
            res.json(testBlog)
        }
    })

    let testBlogs = [
        { "id": "1", "content": "Test 1" },
        { "id": "2", "content": "Test 2" },
    ]

    app.delete('/test/:id', (req, res) => {
        const { id } = req.params
        if (id) {
            testBlogs.forEach((blog, index) => {
                if (blog.id === id) {
                    testBlogs.splice(index, 1)
                }
            })
            res.json(testBlogs)
        }
    })

    it('GETs the test endpoint', async done => {
        const res = await request.get('/test')
        expect(res.status).toBe(200)
        expect(res.body.message).toBe('pass!')
        done()
    })

    it('POSTs an entry to the blog list', async done => {
        const res = await request.post('/test')
        expect(res.body.content).toEqual('Test blog')
        expect(res.body.id).toEqual("1")
        done()
    })

    it('DELETEs an entry from the blog list', async done => {
        const res = await request.delete('/test/1')
        expect(res.body[0].id).toEqual("2")
        expect(res.body[0].content).toEqual("Test 2")
        done()
    })
})
