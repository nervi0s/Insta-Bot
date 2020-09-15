require("../../../connection.js");

const Image = require("../../models/Images.js");

async function addNewDataToDB(filename, date) {
    let newImage = new Image({
        "filename": filename,
        "createdAt": date
    });

    try {
        await newImage.save();
        console.log(`Nueva imagen: ${newImage.filename} añadida a la DB.`);
    } catch (err) {
        console.log(err);
    }
}

module.exports = { addNewDataToDB };