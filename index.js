const express = require('express')
const app = express()


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