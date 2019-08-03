const jwt = require('jsonwebtoken');
const User = require('./models/user');

const auth = async (token) => {
    try {
        const decoded = jwt.verify(token, 'tothinkistoexist');
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
        if (!user) {
            throw new Error("Please authenticate")
        }
        let timeNow = new Date();
        let fDate = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDate());
        let dateData;
        try{
            dateData = user.entries.filter((entry) => entry.date.getTime() === fDate.getTime());
            if(dateData.length === 0){
                dateData  = {
                    date: fDate,
                    tr: {
                        completed: false
                    },
                    nt: {
                        message: ''
                    },
                    nutr: {
                        cal: 0,
                        prot: 0,
                        fat: 0,
                        carb: 0
                    },
                    sl: {
                        dur: 0,
                        quality: 0,
                        note: ''
                    },
                    water: {
                        amount: 0
                    }
                };
                user.entries = user.entries.concat(dateData);
                await user.save();
            }else{
                dateData = dateData[0];
            }
        }catch (e) {
            console.log(e);
        }
        const userInfo = {
            name: user.name,
            lname: user.surname,
            email: user.email,
            dateData
        }
        return userInfo
    } catch (e) {
        throw new Error("Please authenticate")
    }
};

const verifyAuth = async (token) => {
    try {
        const decoded = jwt.verify(token, 'tothinkistoexist');
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token});
        if (!user) {
            throw new Error("Please authenticate")
        }else{
            return user;
        }
    }catch(e){
        return {};
    }

};

module.exports = {auth, verifyAuth};
