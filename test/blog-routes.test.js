const request = require('supertest')
const app = require('../index')

 describe('API emdpoints', () => {

    describe('GET', () => {

      it('should GET blog posts', async () => {
          const res = await request(app)
          .get('/blogs')
          expect(res.statusCode).toEqual(200)
          expect(res.body[0].id).toEqual(1)
          expect(res.body[0].title).toEqual('Innovation at Scale')
      })

    })
 
    describe('POST', () => {

      afterEach(async (done) => {
        await request(app)
          .delete('/blogs/4')
        done()
      })

      it('should create a new post', async () => {
        const res = await request(app)
          .post('/blogs')
          .send({
            "id": 4,
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
              "id": 4,
              "header": "test"
          })
          expect(res.statusCode).toEqual(400)
      })

    })

    describe('DELETE', () => {

      // beforeEach(async (done) => {
      // await request(app)
      //   .post('/blogs')
      //   .send({
      //     "id": 5,
      //     "title": "Testing",
      //     "content": 'Also a test',
      //   })
      //   done()
      // })

      // it('should delete a post', (done) => {
      //   request(app)
      //     .delete('/blogs/4')
      //     .send({ message: 'Test' })
      //     .expect(200, {
      //       message: 'Test'
      //     }, done)
      // })

    })
})