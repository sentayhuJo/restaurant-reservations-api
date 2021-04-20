const Reservation = require('../models/reservations.model');


exports.reservationAll = (req, res, next) => {
    Reservation.find((err, reservation) => {
        if (err) return next(err);
        res.send(reservation);
    })
};

exports.reservationCreate = (req, res, next) => {
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

exports.reservationFindOne = (req, res, next) => {
    Reservation.findById(req.params.id, (err, reservation) => {
        if (err) return next(err);
        res.send(reservation);
    })
};
