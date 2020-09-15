const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageData = new Schema({
    "filename": String,
    "createdAt": Date
});

module.exports = mongoose.model("images", ImageData);