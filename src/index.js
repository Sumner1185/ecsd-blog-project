const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('port', process.env.PORT || 4000)

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', require('./routes/blog-routes'))

app.listen(app.get('port'), () => console.log(`Server on port ${app.get('port')}`))