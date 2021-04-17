const Reservation = require('../models/reservations.model');


exports.reservation_all = (req, res, next) => {
    Reservation.find((err, reservation) => {
        if (err) return next(err);
        res.send(reservation);
    })
};

exports.reservation_create = (req, res, next) => {
    let reservation = new Reservation(
        {
            name: req.body.name,
            phone_no: req.body.phone_no,
            email: req.body.email
        }
    );

    reservation.save((err) => {
        if (err) {
            return next(err);
        }
        res.send('Reservation created successfully');
    });
};

exports.reservation_findOne = (req, res, next) => {
    Reservation.findById(req.params.id, (err, reservation) => {
        if (err) return next(err);
        res.send(reservation);
    })
};
