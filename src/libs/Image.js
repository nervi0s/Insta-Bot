const utils = require("./utils/utils.js");

class Image {

    constructor(fileName, path) {
        this.fileName = fileName;
        this.path = path;
        this.caption;
        this.defaultMessage = "🧑‍💻More in @techackers🧑‍💻\n👉👉Follow @techackers🧠🧠";
        this.tags = [
            "hack",
            "tech",
            "j4f",
            "hacking",
            "technology",
            "raspberry",
            "new"
        ];
    }
    setCaption(caption) {
        this.caption = caption;
    }
    getFileName() {
        return this.fileName;
    }
    getPath() {
        return this.path;
    }
    getCaption() {
        return this.caption;
    }
    getDefaultMessage() {
        return this.defaultMessage;
    }
    getTags() {
        return this.tags;
    }

    async upload(ig) {
        await uploadPicture(ig, this.getCaption(), this.getPath());
    }
}

module.exports = Image;