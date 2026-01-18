require('dotenv').config()
const express = require('express')
// or => import express from 'express'

const app = express()

const port = 4000

let arshadgithub = {
  "login": "mojombo",
    "id": 1,
    "node_id": "MDQ6VXNlcjE=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mojombo",
    "html_url": "https://github.com/mojombo",
    "followers_url": "https://api.github.com/users/mojombo/followers",
    "following_url": "https://api.github.com/users/mojombo/following{/other_user}",
    "gists_url": "https://api.github.com/users/mojombo/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mojombo/subscriptions",
    "organizations_url": "https://api.github.com/users/mojombo/orgs",
    "repos_url": "https://api.github.com/users/mojombo/repos",
    "events_url": "https://api.github.com/users/mojombo/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mojombo/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/h1',(req,res) => {
    res.send('<h1>This is heading1 on /h1</h1>')
})

app.get('/chaicode',(req,res) => {
    res.send("<h2>Wlecome to Chai Aur Code</h2>")
})

app.get('/github',(req,res) =>{
  res.json(arshadgithub)
})
app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})