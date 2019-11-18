const express = require('express');
const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    db('car-dealer')
    .then(cars => {
        res.json(cars);
    })
    .catch(err => {
        res.status(500).json({
            message: 'Error retrieving cars from database',
            err
        })
    })
});

router.get('/:id', (req, res) => {

});

router.post('/', (req, res) => {

});

router.put('/:id', (req, res) => {

});

router.delete('/:id', (req, res) => {

});

module.exports = router;