const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const fetch = require('cross-fetch');

app.set('view engine', 'hbs')
app.engine('hbs', handlebars({
    layoutsDir: `${__dirname}/views/layouts`, 
    extname: 'hbs'
}))

 fetch('http://localhost:8080/blogs')
.then(res => {
  if (res.status >= 400) {
    throw new Error("Bad response from server");
  }
  return res.json();
})
.then(blogs => {
    app.get('/', (req, res) =>  res.render('main.hbs', {layout : 'index', data: blogs, listExists: true}));
})
.catch(err => {
  console.error(err);
})

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', require('./src/routes/blog-routes'))

module.exports = app
