require("tools-for-instagram");

require("./connection.js");
const utils = require("./libs/utils/utils");
const Image = require("./libs/Image.js");
const { addNewDataToDB } = require("./libs/utils/crud/addNewImage.js");
const { findImageByFileName } = require("./libs/utils/crud/findImage.js");


(async () => {

    let ig = await login();
    await setAntiBanMode(ig);
    let info = await getUserInfo(ig, "techackers");

    setInterval(async () => {
        let files = await utils.readDir("../images");
        console.log(files);
        for (let i = 0; i < files.length; i++) {
            if (await findImageByFileName(files[i]) == false) {
                await addNewDataToDB(files[i], new Date());
                let img = new Image(files[i], `../images/${files[i]}`);
                img.setCaption("pop" + i);
                await utils.sleep(2000);
                await img.upload(ig)
            }
        }
    }, 10 * 1000);

    //await uploadPicture(ig, "My picture", '../images/img_1.jpg', namesToTag = ['blabla', 'bla']);
    console.log("User information, username: " + info.username);

})();