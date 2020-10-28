const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')

app.set('view engine', 'handlebars')
app.engine('handlebars', handlebars({
    layoutsDir: `${__dirname}/views/layouts`
}))

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use('/blogs', require('./src/routes/blog-routes'))

app.get('/', (req, res) =>  res.render('main.handlebars', {layout : 'index'}));

module.exports = app
