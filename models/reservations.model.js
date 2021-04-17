const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let ReservationSchema = new Schema({
    name: {type: String, required: true, max: 100},
    phone_no: {type: Number, required: true},
    email: {type: String, required: true}
});

// Export the model
module.exports = mongoose.model('Reservation', ReservationSchema);
