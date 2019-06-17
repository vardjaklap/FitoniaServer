const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    pass: {
        type: String,
        required: true
    }
});

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        console.log("user not found")
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.pass)
    if (!isMatch) {
        console.log("password is wrong")
        throw new Error('Unable to login')
    }

    return user
};
userSchema.statics.createUser = async (info) => {
    const user = await User.findOne({ email: info.email });
    if(!user){
        const hashedPass = await bcrypt.hash(info.pass, 8);
        const testUser = new User({
            name: info.name,
            surname: info.surname,
            email: info.email,
            pass: hashedPass
        });
        testUser.save().then(() => {
            console.log('User created!')
            return "User created!"
        }).catch((e) => {

        });
    }else{
        console.log('User exists!')
        throw new Error('User exists!')
    }


};

const User = mongoose.model('User', userSchema);

module.exports = User;