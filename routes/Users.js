const express = require('express')
const {
    createUser,
    getUser,
    getUsers,
    deleteUser,
    updateUser
} = require('../controller/Usercontroller')

const router = express.Router()

const User = require ('../models/UserModel')

router.get('/', getUsers)

router.get('/api/login',getUser)

router.post('/',createUser)

router.delete('/:id',deleteUser)

router.patch('/:id',updateUser)


module.exports = router