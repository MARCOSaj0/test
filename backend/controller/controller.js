const User = require('../model/model');
const HttpError = require('../utils/error');


const cre_user = async(req, res) => {
    try{
        const {name, email, mob_no, desc} = req.body;
        const f_user = await User.findOne({email});
        if (f_user) {
            throw new HttpError('Email is already exist');
        }
        const c_user = new User({name, email, mob_no, desc});
        if (!c_user) {
            throw new HttpError('Failed in user creation');
        }
        await c_user.save();
        res.status(200).json('User created.');
    } catch (err) {
        console.log(err);
        res.status(500).json({success: false, message:'Internal Error.'});
    }
};

const get_list = async(req, res) => {
    try {
        const user_list = await User.find();
        if (!user_list) {
            throw new HttpError('Failed in getting list');
        }
        res.json(user_list);
    } catch (err) {
        console.log(err);
        res.status(500).json({success: false, message:'Internal Error.'});
    }
};

module.exports = {cre_user, get_list};