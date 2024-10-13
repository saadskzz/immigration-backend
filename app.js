const express = require('express');
const userRoutes = require('./Routes/userRoutes');
const cors = require('cors');
const path = require('path');
require("dotenv").config({ path: `${process.cwd()}/.env` });

const app = express();

// CORS configuration
app.use(cors());
// console.log(__dirname)
// // JSON body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));


// User routes
app.use('/api/v1/user', userRoutes);

app.listen(3002, () => {
    console.log('App running on port 3002');
});
