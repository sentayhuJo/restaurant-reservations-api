const express = require('express');
const reservations = require('./routes/reservations.routes.js');
const app = express();

const PORT = 3000;

const mongoose = require('mongoose');
const db_url = 'mongodb://admin:1234@localhost:27017/admin';
const mongoDB = db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/api', reservations);

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
});
