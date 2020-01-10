const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Student = new Schema({
    _id: { type: String },
    name: { type: String },
    address: { type: String },
    birthDate: { type: String },
    majorIn: { type: String },
    signInDate: { type: String },
    sex: { type: String },
    yearIn: { type: String },
}, {
        collection: 'students',
        versionKey: false
    });
module.exports = mongoose.model('Student', Student);    