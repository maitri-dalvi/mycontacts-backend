const asyncHandler = require('express-async-handler');
const Contact = require('../models/contactModel');
const contactModel = require('../models/contactModel');

//description: Get all contacts
//route: GET/api/contacts
//access: public

const getContacts = asyncHandler (async (req,res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

//description: GET contact
//route: GET/api/contacts/:id
//access: public

const getContact = asyncHandler (async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
});

//description: Create new contact
//route: POST/api/contacts
//access: public

const createContact = asyncHandler (async (req,res) => {
    console.log("the request body is ", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email || !phone) {
        res.status(400);
        throw new Error(`All fields are mandatory`);
    }
    const contact = await Contact.create({
        name, email, phone,
    });
    res.status(201).json(contact);
});

//description: UPDATE contact
//route: PUT/api/contacts/:id
//access: public

const updateContact = asyncHandler (async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    const updateContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}

    );

    res.status(200).json(updateContact);
});

//description: DELETE contact
//route: DELETE/api/contacts/:id
//access: public

// const deleteContact = asyncHandler (async (req,res) => {
//     const contact = await Contact.findById(req.params.id);
//     if (!contact) {
//         res.status(404);
//         throw new Error("Contact not found");
//     }
//     await Contact.remove()
//     res.status(200).json(contact);
// });

const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    };
    await contact.remove();
    res.status(200).json(contact);
});



module.exports = {getContacts, getContact, createContact, updateContact, deleteContact};