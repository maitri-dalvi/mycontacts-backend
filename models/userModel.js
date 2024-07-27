const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, "Pls add username"],
    },
    email: {
        type: String,
        require: [true, "Pls add user email address"],
        unique: [true, "Email address already exists"],
    },
    password: {
        type: String,
        require: [true, "Pls add user password"],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("User", userSchema);