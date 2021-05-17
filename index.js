import express from 'express';
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'

import mongoose from 'mongoose'
import dotenv from "dotenv";

dotenv.config()

const uri = process.env.URI;


mongoose.connect(uri, {useNewUrlParser:true, useUnifiedTopology: true,useFindAndModify: false})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

const app = express();
const PORT = process.env.PORT || 5000;
app.use(bodyParser.json()); 
app.get('', (req, res) => {

    console.log('test')
    res.send('hello from Homepage.')
}) 

app.use('users', usersRoutes);
app.listen(PORT, () => console.log("server up and running"))