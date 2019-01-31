// Server Setup
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./server/routes/api')

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/socialdealsDB', { useNewUrlParser: true })

const app = express()
app.use(express.static(path.join(__dirname, 'src')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
    next()
})

app.use('/', api)

app.listen(3005, function () {
    console.log(`Server is Running with port 3005!`)
})