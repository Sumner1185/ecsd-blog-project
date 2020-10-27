const { Router } = require('express')
const router = new Router()
const fs = require('fs');
const path = require('path')





router.get('/', (req, res) => {
    res.send(blog)
})

console.log(dataObj)

module.exports = router