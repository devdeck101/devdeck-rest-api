const express = require('express')
const User = require('../model/user.model')


var router = express.Router()
//http://localhost:3001/users/....
router.post('/', (req, res) => {
    console.log('POST METHOD')
    console.log(req.body)
    //validation
    if (!req.body.email) {
        return res.status(400).json({
            message: 'At least the E-mail must be set.'
        })
    }
    let user = new User(req.body)
    user.save()
        .then((user) => {
            res.status(200).json({
                user: user
            })
        }).catch(err => {
            res.status(500).json({
                message: err.message || 'Something is wrong'
            })
        })
})

//http://localhost:3001/users/listAllUsers
router.get('/listAllUsers', (req, res) => {
    User.find()
    .then(users => {
        res.status(200).json(users)
    }).catch(err => {
        res.status(500).json({
            message: err.message || 'Something is wrong'
        })
    })

})

//http://localhost:3001/users/user/mail@gmail.com
router.get('/user/:email', (req, res) => {

    let obj = {
        email: req.params.email
    }
    User.findOne(obj)
    .then(user => {
        if(!user){
            res.status(404).json({
                message: 'User not found'
            })
        }
        res.status(200).json(user)
    }).catch(err => {
        res.status(500).json({
            message: err.message || 'Something is wrong'
        })
    })
    
})
//http://localhost:3001/users
router.put('/', (req, res) => {

    let obj = {
        email: req.body.email
    }
    User.findOneAndUpdate(obj, req.body)
    .then(user => {
        if(!user){
            res.status(404).json({
                message: 'User not found'
            })
        }
        res.status(200).json(user)
    }).catch(err => {
        res.status(500).json({
            message: err.message || 'Something is wrong'
        })
    })

})
//http://localhost:3001/users
router.delete('/', (req, res) => {

    let obj = {
        email: req.body.email
    }
    User.findOneAndRemove(obj, req.body)
    .then(user => {
        if(!user){
            res.status(404).json({
                message: 'User not found'
            })
        }
        res.status(200).json(user)
    }).catch(err => {
        res.status(500).json({
            message: err.message || 'Something is wrong'
        })
    })

})















module.exports = router