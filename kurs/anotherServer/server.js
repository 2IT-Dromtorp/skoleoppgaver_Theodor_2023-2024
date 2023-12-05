require('dotenv').config()
const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')

app.use(express.json())

const posts = [
    {
        username: 'theo',
        title: 'mega'
    },
    {
        username: 'no',
        title: 'nel'
    }
]

app.get('/posts', (req, res) => {
    res.json(posts)

})

app.post('/login', (req, res) => {
    //authenticate user
const username = req.body.username
const user = {name: username}

const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
res.json({accessToken: accessToken})
})


app.listen(3000)

// tutorials https://www.youtube.com/watch?v=mbsmsi7l3r4&t=304s https://www.youtube.com/watch?v=Ud5xKCYQTjM