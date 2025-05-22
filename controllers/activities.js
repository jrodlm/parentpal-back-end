const Activity = require('../models/Activity')
const express = require('express')
const router = express.Router()

// create
router.post('/', async (req, res) => {
    try {
        const createdActivity = await Activity.create(req.body)
        res.status(201).json(createdActivity)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})

// index
router.get('/', async (req, res) => {
    try {
        const foundActivities = await Activity.find();
        res.status(200).json(foundActvities)
    } catch (err) {
        res.status(500).json({err: err.message})
    }
})

// show
router.get('/:activityId', async (req, res) => {
    try {
        const foundActivity = await Activity.findById(req.params.activityId)
        if(!foundActivity) {
            res.status(404)
            throw new Error('Activity not found')
        }
        res.status(200).json(foundActivity)
    } catch (err) {
        if (res.statusCode === 404) {
            res.json({ err: err.message })
        } else {
            res.status(500).json({err: err.message})
        }
    }
})

 delete
router.delete('/:activityId', async (req, res) => {
    try {
        const deletedActivity = await Activity.findByIdAndDelete(req.params.activityId)
        if(!deletedActivity) {
            res.status(404)
            throw new Error("Activity Not Found")
        }
        res.status(200).json(deletedActivity)
    } catch (err) {
        if(res.statusCode === 404){
            res.json({err: err.message})
        } else {
            res.status(500).json({err: err.message})
        }
    }
})

// update
router.put('/:activityId', async (req, res) => {
    try {
        const updatedActivity = await Activity.findByIdAndUpdate(req.params.activityId, req.body, {new: true})
        if(!updatedActivity) {
            res.status(404)
            throw new Error('Activity not found')
        }
        res.status(200).json(updatedActivity)
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({error: error.message})
        } else {
            res.status(500).json({error: error.message})
        }
    }
})

module.exports = router;
