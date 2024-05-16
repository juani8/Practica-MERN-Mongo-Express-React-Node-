const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const authRoutes = require('../routes/authRoutes.js');
const apiRoutes = require('../routes/apiRoutes.js');
const listRoutes = require('../routes/listRoutes.js'); 



const app = express();
// use json parser
app.use(express.json());
// use cookie parser for reading cookies
app.use(cookieParser());
// for communication with front
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));



app.use('/',authRoutes);
app.use('/api',apiRoutes);
app.use('/list',listRoutes);

module.exports = app;