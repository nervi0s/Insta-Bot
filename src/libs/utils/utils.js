const fs = require("fs");
const util = require("util");

const readDirPromise = util.promisify(fs.readdir);

async function readDir(path) {
    try {
        let files = await readDirPromise(path, "utf8");
        return files;
    } catch (err) {
        console.log(err);
    }
}

function selectRandomItems(arr, number) {
    let selected = [];
    let random = getRandomInt(0, arr.length);
    let counter = 0;
    while (counter <= number) {
        for (let i = 0; i < arr.length; i++) {
            if (random == i) {
                if (!selected.includes(arr[i])) {
                    selected.push(arr[i]);
                }
            }
        }
    }
    return selected;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = { selectRandomItems, readDir, sleep };