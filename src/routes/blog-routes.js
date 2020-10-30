const { Router } = require('express')
const router = new Router()
const path = require('path')

const blogs = require('../blogs/data/data.json')

router.get('/blogs', (req, res) => {
    res.json(blogs)
})

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '../../../about.html'));
})

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
                return res.json(blogs)
            }
        })
        res.status(404).json({ error: "Blog ID not found"} )
    } else {
        res.status(418).json()
    }
})

module.exports = router
