require("../../../connection.js");

const Image = require("../../models/Images.js");

async function findImageByFileName(filename) {
    let image = await Image.findOne({ "filename": filename });
    if (image) {
        return true;
    }
    else {
        return false;
    }
}

module.exports = { findImageByFileName };