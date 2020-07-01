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
    gender: {
        type: Number
    },
    age: {
        type: Number
    },
    height: {
        type: Number
    },
    weight: {
        type: Number
    },
    frequency: {
        type: Number
    },
    goal: {
        type: Number
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
userSchema.methods.setEvalToDefault = async function () {
    let user = this;
    user.gender = 0;
    user.age = 25;
    user.height = 175;
    user.weight = 75;
    user.frequency = 0;
    user.goal = 2;
    await user.save();
}
userSchema.methods.getNutrData = async function () {
    let user = this;
    //set parameters to a default if not set
    if(user.weight === null){
        await userSchema.methods.setEvalToDefault();
    }
    //calculating goals for the day
    // 0 - lose weight
    // 1 - gain muscle
    // 2 - stay fit
    let calGoal = 0;
    let protGoal = 0;
    let fatGoal = 0;
    let carbGoal = 230;
    if(user.goal == 0){
        calGoal = 1800;
        fatGoal = 40;
        protGoal = user.weight;
    }else if(user.goal == 1){
        calGoal = 2500;
        fatGoal = 70;
        protGoal = Math.round(user.weight * 1.5);
    }else if(user.goal == 2){
        calGoal = 2200;
        fatGoal = 60;
        protGoal = Math.round(user.weight * 0.8);
    }else{
        calGoal = 2100;
        fatGoal = 55;
        protGoal = Math.round(user.weight * 0.8);
    }


    let nutrGoal = {
        cal: calGoal,
        fat: fatGoal,
        carb: carbGoal,
        prot: protGoal
    }
    let nutrObj = {
        currentEntry: user.entries[user.entries.length - 1].nutr,
        goal: nutrGoal
    }
    return nutrObj;
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
userSchema.methods.updateEvaluation = async function (evalObj) {
    let user = this;
    user.gender = evalObj.gender;
    user.age = evalObj.age;
    user.height = evalObj.height;
    user.weight = evalObj.weight;
    user.frequency = evalObj.frequency;
    user.goal = evalObj.goal;
    await user.save();
}

const User = mongoose.model('User', userSchema);

module.exports = User;