const express = require('express');
const router = express.Router();

const reservationData = [
    {
        _id: 1,
        name: 'David',
        phone_no: '072592210',
        email: 'david@gmail.com'
    },
    {
        _id: 2,
        name: 'Silivia',
        phone_no: '079592946',
        email: 'silivia@gmail.com'
    },
    {
        _id: 3,
        name: 'Barko',
        phone_no: '078597930',
        email: 'barko@gmail.com'
    },
    {
        _id: 4,
        name: 'Abebe',
        phone_no: '0755829323',
        email: 'abebe@gmail.com'
    },
    {
        _id: 5,
        name: 'Marta',
        phone_no: '079592909',
        email: 'marta@gmail.com'
    }   
]

router
    .route('/reservations')
    .get((req,res)=> {
        res.send(reservationData);
    })
    .post((req,res) => {
        const userRequest = req.body;
        console.log(req.body)
        const newReservation = {
            _id: reservationData.length + 1,
            ...userRequest
        }
        reservationData.push(newReservation)
        res.send(reservationData);
    });

router
    .route('/reservations/:id')
    .get((req, res) => {
        const { id } = req.params;
        const reservedData = reservationData.find(data => data._id === parseInt(id));
        res.send(reservedData);
    });

module.exports = router;    
