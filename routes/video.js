const { Router } = require('express')
const Video = require('../models/Video')

const router = Router()

router.post('/addvideo', async (req, res) => {
    // console.log(req.body)
    const newVideo = new Video({
        caption: req.body.caption,
        restaurant: {
            name: req.body.restaurant.name,
        about: req.body.restaurant.about,
        location: req.body.restaurant.location,
        distance: req.body.restaurant.distance
        },
        tags: req.body.tags,
        videoLink: req.body.videoLink,
    })

    try {
        const savedVideo = await newVideo.save()
        res.status(201).json(savedVideo)
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get('/', async (req, res) => {
    try {
    const videos = await Video.find()
    res.status(200).json(videos)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router