const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


exports.register = async (req,res,next) => {
    try {
         const user = await User.create(req.body);
         const token = jwt.sign({userId: user._id},process.env.APP_SECRET);
        
         res.status(200).json({
            status: 'success',
            data:{token, userName: user.name},
         })
    } catch (error) {
        res.json(error);
    }
}

exports.login = async (req,res,next) => {
    try {
        const user = await User.findOne({email: req.body.email});
        if(!user){
            //Error: Email not found
        }
        if(bcrypt.compareSync(req.body.password, user.password)){
            const token = jwt.sign({userId: user._id},process.env.APP_SECRET);
            res.status(200).json({
                status: 'success',
                data:{token, userName: user.name},
                })
        }
        else {
                //Error password is not correct
            }
    } catch (error) {
        res.json(error);
    }
}