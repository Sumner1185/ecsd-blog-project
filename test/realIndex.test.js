const request = require('supertest')
const app = require('../index')

 describe('API emdpoints', () => {

    it('should GET blog posts', async () => {
        const res = await request(app)
        .get('/blogs')
        expect(res.statusCode).toEqual(200)
        expect(res.body[0].id).toEqual(1)
        expect(res.body[0].title).toEqual('Innovation at Scale')
    })

    it('should create a new post', async () => {
      const res = await request(app)
        .post('/blogs')
        .send({
          "id": 1,
          "title": "Hello",
          "content": 'test is cool',
        })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('content')
        expect(res.body).toHaveProperty('title')
    })

    it('should error with 400 if post data incorrect', async () => {
        const res = await request(app)
        .post('/blogs')
        .send({
            "id": 1,
            "header": "test"
        })
        expect(res.statusCode).toEqual(400)
    })
})