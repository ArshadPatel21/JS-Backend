require('dotenv').config()
const express = require('express')
// or => import express from 'express'

const app = express()

const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/h1',(req,res) => {
    res.send('<h1>This is heading1 on /h1</h1>')
})

app.get('/chaicode',(req,res) => {
    res.send("<h2>Wlecome to Chai Aur Code</h2>")
})

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})