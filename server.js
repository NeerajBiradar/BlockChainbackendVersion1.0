require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/UserModel')
const bcrypt = require('bcrypt')
//const jwt = require('jsonwebtoken')
//const secretKey = 'someCode123';

const port = 2000;

app.use(cors())
app.use(express.json())

//connnect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        //listen for request
        app.listen(process.env.PORT,()=>{
            console.log('hii Connected to db Listing to PORT')
        })
    })
    .catch((error) => {
        console.log(error)
    })

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try {

        // const salt = await bcrypt.genSalt()
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        })

        res.json({
            status: 'user created'
        })

    } catch (err) {
        // console.log(err)
        res.json({
            status: 'Error', error: 'duplicate-email'
        })
    }
})

app.post('/api/login', async (req, res) => {
    console.log(User);
    const user = await User.findOne({
        email: req.body.email,
    })

    console.log(user);

    if (!user) {
        return res.status(401).json({ status: 'error', message: 'Invalid login' });
    }

    const isPasswordValid = await bcrypt.compare(
        req.body.password,
        user.password
    )

    if(!isPasswordValid) {
        return res.status(401).json({ status: 'error', message: 'Invalid login' });
    }
    else{
        return res.json({status : true, userType : user.userRole});
    }
})
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
    