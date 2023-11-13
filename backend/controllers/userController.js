import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc    Auth user/set token
//  route   POST /api/users/auth
//  @access Public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth User'})
})


// @desc   Register user
// route   POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Register user'})
})


// @desc   Logout user
// route   POST api/users/logout
// @access Public
const logoutUser = asyncHandler( async (req, res) => {
    res.status(200).json({ message: 'Logout user'})
})


// @desc   User Profile
// route   GET api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'User Profile'})
})

// @desc   Update User Profile
// route   PUT api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Update user profile'})
})



export {
    authUser, 
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile

}