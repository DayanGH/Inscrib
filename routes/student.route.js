const express = require('express');
const studentRouter = express.Router();

// Student model
let Student = require('../models/Students');

// Add Student
studentRouter.route('/create').post((req, res, next) => {
    Student.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

// Get Students
studentRouter.route('/').get((req, res) => {
    Student.find(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Get single Student
studentRouter.route('/read/:id').get((req, res) => {
    Student.findById({ _id: req.params.id }, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update Student
studentRouter.route('/update/:id').put((req, res, next) => {
    Student.findByIdAndUpdate({ _id: req.params.id }, {
        $set: req.body
    }, { new: true }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})

// Delete Student
studentRouter.route('/delete/:id').delete((req, res, next) => {
    Student.findOneAndRemove({ _id: req.params.id }, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})

module.exports = studentRouter;