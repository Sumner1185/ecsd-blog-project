const { Router } = require('express')
const router = new Router()
const blog = require ('../blogs/teaching_code.doc')

router.get('/', (req, res) => {
    res.json(blog)
})


module.exports = router