const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fitoniaAdmin:uRBVOMAAcDZFu84w@the-main-base-idurz.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true
});
