const { Router } = require('express')
const Restaurant = require('../models/Restaurant')

const router = Router()

router.post('/addrestaurant', async (req, res) => {
    // console.log(req.body)
    const newRestaurant = new Restaurant({
            name: req.body.restaurant.name,
        about: req.body.restaurant.about,
        location: req.body.restaurant.location,
        distance: req.body.restaurant.distance,
    })

    try {
        const savedRestaurant = await newRestaurant.save()
        res.status(201).json(savedRestaurant)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/:id', async (req, res) => {
    try {
    const restaurants = await Restaurant.findById(req.params.id)
    res.status(200).json(restaurants)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router