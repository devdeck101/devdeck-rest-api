const express = require('express')
const parser = require('body-parser')
const mongoose = require('mongoose')

const config = require('./config')
const app = express()

mongoose.Promise = global.Promise
mongoose.connect(config.dbUrl, {
    userNewUrlParser: true
}).then(() => {
    console.log(`Connected to MongoDB at ${config.dbUrl}`)
})

//parse of requests with content-tupe using application/json
app.use(parser.json())


const usersRoute = require('./routes/users')
//http://localhost:3001/users/....
app.use('/users', usersRoute)

app.get('/', (req, res) => {
    res.json({
        message: 'Deixa seu like e vá para a rota de usuários'
    })
})
const PORT = 3001
app.listen(PORT, () => {
    console.log(`API Server running on Port: ${PORT}`)
})