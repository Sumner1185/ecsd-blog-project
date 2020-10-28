// const express = require("express"); 
// const Routes = require("../src/routes/blog-routes"); 
// const request = require("supertest"); 
// const app = express(); 
// // const axios = require('axios');
// app.use("/blogs", Routes);
// jest.mock('axios');

const request = require('supertest')
const app = require('../index')


//  describe('live api endpoints', () => {  

    // test('Get', async done => {
    //     axios.get('/blogs')
    //     done()
    // })

    // test('POST', async done => {
    //     axios.post('/', {
    //         "id": 4,
    //         "content": "test"
    //     })
    //     done()
    // })

//     test('GET route', async done => {
//         const { body } = await request(app).get('/blogs')
//         expect(body.length).toEqual(3)
//         expect(body[0].id).toEqual(1)
//         done()
//     })

//     test('POST route', async done => {
//         app.post('/')
//     })
//  })

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
})