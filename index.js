const express = require('express');
const cors = require('cors');
const reservations = require('./routes/reservations.routes.js');
const app = express();

const mongoose = require('mongoose');
const db_url = process.env.MONGODB_URL || 'mongodb://admin:1234@localhost:27017/admin';
const mongoDB = db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/api', reservations);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started at PORT:${PORT}`)
});

