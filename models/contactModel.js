const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Pls add contact name"],
    },
    email: {
        type: String,
        require: [true, "Pls add contact email address"],
    },
    phone: {
        type: String,
        require: [true, "Pls add contact phone number"],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Contact", contactSchema);