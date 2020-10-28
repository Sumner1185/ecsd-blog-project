const { Router } = require('express')
const router = new Router()

const blogs = require('../blogs/data/data.json')

router.get('/', (req, res) => res.json(blogs))

router.post('/', (req, res) => {
    const blogPost = { id: (blogs.length + 1).toString(), ...req.body }
    if (blogPost.id && blogPost.content) {
        blogs.push(blogPost)
        res.json(blogPost)
    } else {
        res.status(400).json({ error: 'Missing information' })
    }
})

module.exports = router
