const express = require("express"); 
const Routes = require("../src/routes/blog-routes"); 
const request = require("supertest"); 
const app = express(); 
app.use("/blogs", Routes);

 describe('live api endpoints', () => {  
    test('GET route', async done => {
        const { body } = await request(app).get('/blogs')
        expect(body.length).toEqual(3)
        expect(body[0].id).toEqual(1)
        done()
    })

    // test('POST route', async done => {
    //     const { body } = await request(app).post('/blogs')
    //     done()
    // })
 })