const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')
const {config} = require('dotenv')
config()

const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    credential: true
}));

app.use(cookieParser())

app.use('/ping', (req, res)=>{
    res.send('Pong');
});

//routes of 3 modules

// app.all('/*', (req, res) => {
//     res.status(404).send('OOPS!! 404 page is not found')
// });

app.use((req, res) => {
  res.status(404).send('OOPS!! 404 page is not found');
});

module.exports = app;