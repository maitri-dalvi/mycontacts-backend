const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
//description: Register a user
//route: POST/api/users/register
//access: public

const registerUser = asyncHandler (async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("All fiels are necessary");
    }
    const userAvailable = await User.findOne({email});
    if (userAvailable) {
        res.status(400);
        throw new Error("user already registered");
    }

    
    res.json({message: `Register the user`});
});

//description: Login user
//route: POST/api/users/login
//access: public

const loginUser = asyncHandler (async (req, res) => {
    res.json({message: `Login user`});
});

//description: Current user info
//route: GET/api/users/current
//access: private

const currentUser = asyncHandler (async (req, res) => {
    res.json({message: `Current user info`});
});

module.exports = {registerUser, loginUser, currentUser};