const express = require('express');
const router = express.Router();

const controller = require('../controllers/reservations.controller');

router
    .route('/reservations')
    .get(controller.reservationAll)
    .post(controller.reservationCreate);

router
    .route('/reservations/:id')
    .get(controller.reservationFindOne);

module.exports = router;    
