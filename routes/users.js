const express = require('express')

var router = express.Router()
//http://localhost:3001/users/....
router.get('/', (req, res) => {
    res.json({
        id: 1,
        channel: 'DeveloperDeck101',
        message: 'Deixa seu Like'
    })
})
router.post('/', (req, res) => {
    res.json({
        id: 1,
        channel: 'DeveloperDeck101',
        message: 'Deixa seu Like'
    })
})
router.patch('/', (req, res) => {
    res.json({
        id: 1,
        channel: 'DeveloperDeck101',
        message: 'Deixa seu Like'
    })
})
router.delete('/', (req, res) => {
    res.json({
        id: 1,
        channel: 'DeveloperDeck101',
        message: 'Deixa seu Like'
    })
})

module.exports = router