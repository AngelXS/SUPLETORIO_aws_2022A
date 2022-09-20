const mongoose = require('mongoose');
const UserScheme = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    alias: {
        type: String,
        required: [true, "Alias is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val), 
            message: "Invalid email"
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 chars"]
    }
});
UserScheme.virtual('confirmPassword')
    .get(() => this.confirmPassword)
    .set( value => this.confirmPassword = value)
UserScheme.pre('validate',function(next){
    if(this.password != this.confirmPassword){
        this.invalidate('confirmPassword','Password must match!');
    }
    next();
});
const User = mongoose.model('User', UserScheme);
module.exports = User;

