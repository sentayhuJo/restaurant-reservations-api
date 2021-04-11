const express = require('express');
const reservations = require('./routes/reservations.js');
const app = express();

const PORT = 3000;

app.use(express.json());
app.use('/api', reservations);

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
});
