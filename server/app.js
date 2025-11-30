import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import morgan from 'morgan'
import {config} from 'dotenv'
config()

const app = express();

app.use(express.json());

app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    credential: true
}));

app.use(cookieParser())

app.use(morgan('dev'))

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

export default app;