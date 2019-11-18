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
    const {id} = req.params;

    db('car-dealer').where({id}).first()
    .then(car => {
        if(car){
            res.status(200).json(car)
        } else {
            res.status(404).json({
                message: 'Invalid ID'
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: 'Error fetching car from database',
            err
        })
    })
});

router.post('/', (req, res) => {
    const carInfo = req.body;

    if(!carInfo.VIN || !carInfo.make || !carInfo.model || !carInfo.mileage){
        res.status(400).json({
            message: 'Must include VIN, make, model, and mileage to submit'
        })
    } else {
        db('car-dealer').insert(carInfo)
        .then(car => {
            res.status(201).json(car)
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error adding car to database',
                err
            })
        })
    }
});

router.put('/:id', (req, res) => {
    const {id} = req.params;
    const changes = req.body;

    if(!changes.VIN && !changes.make && !changes.model && !changes.mileage && !changes.transmissionType && !changes.titleStatus){
        res.status(400).json({
            message: 'Please add a VIN, make, model, mileage, transmissionType, or titleStatus to update'
        })
    } else {
        db('car-dealer').where({id}).update(changes)
        .then(count => {
            if(count){
                res.status(200).json({
                    updated: count
                })
            } else {
                res.status(404).json({
                    message: 'Invalid ID'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                message: 'Error editing database',
                err
            })
        })        
    }
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;

    db('car-dealer').where({id}).del()
    .then(count => {
        if(count){
            res.status(200).json({
                deleted: count
            })
        } else {
            res.status(404).json({
                message: 'Invalid ID'
            })
        }
    })
    .catch(err => {
        res.status(500).json({
            message: 'Error deleted from database',
            err
        })
    })
});

module.exports = router;