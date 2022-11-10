'use strict'
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var imgModel = require('./models/image');
var cors = require('cors');
app.use(cors());
app.options('*', cors());


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/backend_isw', {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err));

var multer = require('multer');
 
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
 
var upload = multer({ storage: storage });

    

app.listen(4000, () => {
    console.log('> Service running on port 4000');
})

module.exports = app;