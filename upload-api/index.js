const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer({
    dest: './uploads/'
})

app.post('/upload', upload.single('file'), (req, res) => {
    res.json({ file: req.file });
})

app.listen(8085, () => console.log("backend is running on localhost:8085"));
