const Activity = require('../models/Activity')
const express = require('express')
const router = express.Router()

// CREATE AN ACTIVITY
router.post('/', async (req, res) => {
    try {
        const createdActivity = await Activity.create(req.body)
        res.status(201).json(createdActivity)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})

// INDEX - SHOW ALL ACTIVITIES
router.get('/', async (req, res) => {
    try {
        const foundActivities = await Activity.find();
        res.status(200).json(foundActivities)
    } catch (err) {
        res.status(500).json({err: err.message})
    }
})

// SHOW A SPECIFIC CHILD'S ACTIVITIES
router.get('/child/:childId', async (req, res) => {
  try {
    const childActivities = await Activity.find({ childId: req.params.childId });
    res.status(200).json(childActivities);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});


//SHOW ACTIVITIES
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

 // DELETE AN ACTIVITY
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

// UPDATE AN ACTIVITY
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
