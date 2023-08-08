const express = require('express');
const router = express.Router();
const path = require('path');

// Import express validator
const { body, validationResult } = require('express-validator');

// Import database
const connection = require('../config/database');

// Import multer
const multer = require('multer');

// Set up multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

// Modify the '/store' route to include file upload
router.post(
    '/store',
    upload.single('file'),
    [
        // Validation
        body('fullname').notEmpty(),
        body('institution').notEmpty(),
        body('faculty').notEmpty(),
        body('other_faculty').notEmpty(),
        body('major').notEmpty(),
        body('events').notEmpty(),
    ],
    (req, res) => {
        // Handle file upload
        if (!req.file) {
            console.log('No file uploaded');
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Other form field validation
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log('Form validation errors:', errors.array());
            return res.status(422).json({
                errors: errors.array(),
            });
        }

        // Define formData
        const formData = {
            fullname: req.body.fullname,
            institution: req.body.institution,
            faculty: req.body.faculty,
            other_faculty: req.body.other_faculty,
            major: req.body.major,
            events: req.body.events,
            file: req.file.originalname,
        };

        // Insert query
        connection.query('INSERT INTO posts SET ?', formData, (err, rows) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({
                    status: false,
                    message: 'Internal Server Error',
                });
            } else {
                return res.status(201).json({
                    status: true,
                    message: 'Insert Data Successfully',
                    data: formData, // Send back the formData which contains the original file name
                });
            }
        });
    }
);

module.exports = router;