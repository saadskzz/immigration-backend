const consultant = require('../db/models/consultant')
require("dotenv").config({path: `${process.cwd()}/.env`});
const getConsultants = async (req, res, next) => {
    console.log("Hitting")
    try {
        const consultants = await consultant.findAll();; // Adjust this line based on your ORM/DB
        res.status(200).json({
            status: 'success',
            data: consultants
        });
    } catch (error) {
        next(error);
    }
};
const consultantinfo = async (req, res, next) => {
    const { 
        name, 
        practicename, 
        location, 
        phone, 
        email, 
        
        visaObtained 
    } = req.body;


    console.log(req.body, 'bodyyy');
    console.log(req.file, 'fileyy');

    // Check if req.file is defined
    if (!req.file) {
        return res.status(400).json({
            status: 'fail',
            message: 'File is required.'
        });
    }

    // Ensure all required fields are present
    if (!name || !practicename || !location || !phone || !email) {
        return res.status(400).json({
            status: 'fail',
            message: 'All fields are required.'
        });
    }

    try {
        const newConsultant = await consultant.create({
            name,
            practicename,
            location,
            phone,
            email,
            image: req.file.path, // Now req.file should be defined
            visaObtained
        });

        res.status(200).json({
            status: 'success',
            data: newConsultant
        });
    } catch (error) {
        res.status(400).json({
            error: error
        }) // Pass the error to the error handling middleware
    }
};

module.exports = {consultantinfo,getConsultants};