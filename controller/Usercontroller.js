// const User = require ('../models/UserModel')

// const mongoose = require('mongoose')

// const bcrypt = require('bcrypt')

// const createUser = async(req,res) => {
//     console.log(req.body)
//     try {

//         // const salt = await bcrypt.genSalt()
//         const hashedPassword = await bcrypt.hash(req.body.password, 10)

//         await User.create({
//             name: req.body.name,
//             email: req.body.email,
//             password: hashedPassword,
//         })

//         res.json({
//             status: 'user created'
//         })
//     }catch(error){
//         res.status(400).json({error : error.message})
//     }
// }

// // get a workout
// const getUsers = async(req,res)=>{
//     const users = await User.find({}).sort({createdAt: -1})

//     res.status(200).json(users)
// }

// // get single workout
// const getUser = async('/api/login',req,res) => {
//     const user = await users.findOne({
//         email : req.body.email,
//     })

//     if(!user){
//         return res.status(404).json({error : "No such User found"})
//     }

//     const isPasswordValid = await bcrypt.compare(
//         req.body.password,
//         user.password
//     )

//     if(isPasswordValid){
//         return res.status(200).json(user);
//     }
//     else{
//         return res.json({ status: false, user: 'error' })
//     }
    
// }

// //delete a workout
// const deleteUser = async(req,res)=> {
//     const {id} = req.params

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error : "No such User found"})
//     }

//     const user = await User.findOneAndDelete({_id : id})
//     if(!user){
//         return res.status(404).json({error : "No such User found"})
//     }

//     res.status(200).json(user)

// }


// //update a Workout 

// const updateUser = async(req,res) => {
//     const {id} = req.params

//     if(!mongoose.Types.ObjectId.isValid(id)){
//         return res.status(404).json({error : "No such User found"})
//     }

//     const user = await User.findOneAndUpdate({_id : id},{
//         ...req.body
//     })
//     if(!user){
//         return res.status(404).json({error : "No such User found"})
//     }
//     res.status(200).json(user)
// }


// module.exports = {
//     createUser,
//     getUser,
//     getUsers,
//     deleteUser,
//     updateUser
// }