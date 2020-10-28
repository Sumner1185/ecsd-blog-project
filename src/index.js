const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = 3000; 

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use('/blogs', require('./routes/blog-routes'))

app.listen(PORT,() =>  {
    console.log(`API is running on port ${PORT}`)
})
