const { Router } = require('express')
const router = new Router()

const blog = require('../blogs/data/data.json')

router.get('/', (req, res) => {
    res.send(blog)
})

console.log(dataObj)

module.exports = router