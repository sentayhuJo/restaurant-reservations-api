const express = require('express');
const router = express.Router();

const reservation_controller = require('../controllers/reservations.controller');

router
    .route('/reservations')
    .get(reservation_controller.reservation_all)
    .post(reservation_controller.reservation_create);

router
    .route('/reservations/:id')
    .get(reservation_controller.reservation_findOne);

module.exports = router;    
