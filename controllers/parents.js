const Parent = require('../models/Parent')
const express = require('express')
const router = express.Router()

// create
router.post('/', async (req, res) => {
    try {
        const createdParent = await Parent.create(req.body)
        res.status(201).json(createdParent)
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})

// index
router.get('/', async (req, res) => {
    try {
        const foundParents = await Parent.find();
        res.status(200).json(foundParents)
    } catch (err) {
        res.status(500).json({err: err.message})
    }
})

// show
router.get('/:parentId', async (req, res) => {
    try {
        const foundParent = await Parent.findById(req.params.parentId)
        if(!foundParent) {
            res.status(404)
            throw new Error('Parent not found')
        }
        res.status(200).json(foundParent)
    } catch (err) {
        if (res.statusCode === 404) {
            res.json({ err: err.message })
        } else {
            res.status(500).json({err: err.message})
        }
    }
})

// delete
router.delete('/:parentId', async (req, res) => {
    try {
        const deletedParent = await Parent.findByIdAndDelete(req.params.parentId)
        if(!deletedParent) {
            res.status(404)
            throw new Error("Parent Not Found")
        }
        res.status(200).json(deletedParent)
    } catch (err) {
        if(res.statusCode === 404){
            res.json({err: err.message})
        } else {
            res.status(500).json({err: err.message})
        }
    }
})

// update
router.put('/:parentId', async (req, res) => {
    try {
        const updatedParent = await Parent.findByIdAndUpdate(req.params.parentId, req.body, {new: true})
        if(!updatedParent) {
            res.status(404)
            throw new Error('Parent not found')
        }
        res.status(200).json(updatedParent)
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({error: error.message})
        } else {
            res.status(500).json({error: error.message})
        }
    }
})

module.exports = router;
