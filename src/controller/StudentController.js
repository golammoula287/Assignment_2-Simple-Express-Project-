// Multer File Upload

/*
  1. Storage Setting 
  2. File Path And Name Settings 
  3. Move the file 
  4. ...
*/

// Settings
const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination: function(req, file, cbk) {
        cbk(null, path.resolve(__dirname, '..', 'files'));
    },
    filename: function(req, file, cbk) {
        cbk(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Upload File
exports.UploadFile = async (req, res) => {
    const moveFile = upload.single('myImage');
    await new Promise((resolve, reject) => {
        moveFile(req, {}, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
    return res.end("File Uploaded");
}

exports.CreateStudent = (req, res) => {
    res.end("I'm Creating Function");
}

exports.DeleteStudent = (req, res) => {
    res.end("I'm Delete Function");
}

exports.UpdateStudent = (req, res) => {
    res.end("I'm Updating Function");
}

exports.ReadStudent = (req, res) => {
    res.end("I'm Reading Function");
}
