const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
}],
    entries: [{
        date: {
            type: Date,
            unique: true,
            required: true
        },
        tr: {
            completed: {
                type: Boolean
            }
        },
        nt: {
            message: {
                type: String
            }
        },
        nutr: {
            cal: {
                type: Number
            },
            prot: {
                type: Number
            },
            fat: {
                type: Number
            },
            carb: {
                type: Number
            }
        },
        sl: {
            dur: {
                type: Number
            },
            quality: {
                type: Number
            },
            note: {
                type: String
            }
        },
        water: {
            amount: {
                type: Number
            }
        }
    }]
});

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'tothinkistoexist', { expiresIn: '1 day' });

    user.tokens = user.tokens.concat({ token });
    await user.save();

    return token
};

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        console.log("user not found");
        throw new Error('Unable to login')
    }
    const isMatch = await bcrypt.compare(password, user.pass);
    if (!isMatch) {
        console.log("Wrong password or username!");
        throw new Error('Wrong password or username!')
    }

    return user
};
userSchema.statics.createUser = async (info) => {
    if(!validator.isEmail(info.email)){
        throw new Error('Email is incorrect!')
    }
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
            console.log('User created!');
            return "User created!"
        }).catch((e) => {

        });
    }else{
        console.log('User exists!');
        throw new Error('User already exists!')
    }


};

userSchema.statics.loadCurrentDate = async () => {
    const user = this;
    console.log(user);


}
userSchema.methods.updateInfo = async function (values) {
    let user = this;
    if(values.water){
        user.entries[user.entries.length - 1].water.amount = values.water;
    }else if(values.cal){
        user.entries[user.entries.length - 1].nutr.cal = values.cal;
    }else if(values.fat){
        user.entries[user.entries.length - 1].nutr.fat = values.fat;
    }else if(values.prot){
        user.entries[user.entries.length - 1].nutr.prot = values.prot;
    }else if(values.carb){
        user.entries[user.entries.length - 1].nutr.carb = values.carb;
    }
    await user.save();

}
userSchema.methods.updateProfile = async function (info) {
    let user = this;
    user.name = info.name;
    user.surname = info.surname;
    user.email = info.email;
    if(info.passNew.length >= 8){
        const hashedPass = await bcrypt.hash(info.passNew, 8);
        user.pass = hashedPass;
    }
    await user.save();
}
userSchema.methods.getNutrData = async function () {
    let user = this;
    return user.entries[user.entries.length - 1].nutr;
}
userSchema.methods.addFoodEntry = async function (values) {
    let user = this;
    let nutr = user.entries[user.entries.length - 1].nutr;
    nutr.cal += values.cal;
    nutr.fat += values.fat;
    nutr.prot += values.prot;
    nutr.carb += values.carb;
    await user.save();
}

userSchema.methods.getTodaySleepData = async function () {
    let user = this;
    return user.entries[user.entries.length - 1].sl;
}
userSchema.methods.addSleepEntry = async function (sleepObj) {
    let user = this;
    let sleep = user.entries[user.entries.length - 1].sl;
    sleep.dur = sleepObj.dur;
    sleep.quality = sleepObj.quality;
    sleep.note = sleepObj.note;
    await user.save();
}

const User = mongoose.model('User', userSchema);

module.exports = User;