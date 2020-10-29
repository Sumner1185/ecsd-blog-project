const { Router } = require('express')
const router = new Router()

const blogs = require('../blogs/data/data.json')

router.get('/blogs', (req, res) => res.json(blogs))

router.post('/blogs', (req, res) => {
    const blogPost = { id: (blogs.length + 1).toString(), ...req.body }
    if (blogPost.id && blogPost.content) {
        blogs.push(blogPost)
        res.json(blogPost)
    } else {
        res.status(400).json({ error: 'Missing information' })
    }
})

router.delete('/blogs/:id', (req, res) => {
    const { id } = req.params
    if (id) {
        blogs.forEach((blog, index) => {
            if (blog.id === id) {
                blogs.splice(index, 1)
            }
        })
        res.json(blogs)
    } else {
        res.status(400).json({ error: 'Blog post not found' })
    }
})

module.exports = router
