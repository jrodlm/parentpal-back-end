const Child = require('../models/Child')
const express = require('express')
const router = express.Router()

// create
router.post('/', async (req, res) => {
    try {
        const createdChild = await Child.create(req.body)
        res.status(201).json(createdChild)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})

// index
router.get('/', async (req, res) => {
    try {
        const foundChildren = await Child.find();
        res.status(200).json(foundChildren)
    } catch (err) {
        res.status(500).json({err: err.message})
    }
})

// show
router.get('/:childId', async (req, res) => {
    try {
        const foundChild = await Child.findById(req.params.childId)
        if(!foundChild) {
            res.status(404)
            throw new Error('Child not found')
        }
        res.status(200).json(foundChild)
    } catch (err) {
        if (res.statusCode === 404) {
            res.json({ err: err.message })
        } else {
            res.status(500).json({err: err.message})
        }
    }
})

// delete
router.delete('/:childId', async (req, res) => {
    try {
        const deletedChild = await Child.findByIdAndDelete(req.params.childId)
        if(!deletedChild) {
            res.status(404)
            throw new Error("Child Not Found")
        }
        res.status(200).json(deletedChild)
    } catch (err) {
        if(res.statusCode === 404){
            res.json({err: err.message})
        } else {
            res.status(500).json({err: err.message})
        }
    }
})

// update
router.put('/:childId', async (req, res) => {
    try {
        const updatedChild = await Child.findByIdAndUpdate(req.params.childId, req.body, {new: true})
        if(!updatedChild) {
            res.status(404)
            throw new Error('Child not found')
        }
        res.status(200).json(updatedChild)
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({error: error.message})
        } else {
            res.status(500).json({error: error.message})
        }
    }
})

module.exports = router;

