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
const PORT = 5000;
app.use(bodyParser.json()); // ***the problem is here and whn i remove it it start sendin strang things
// when i remove itit tells me it cant read the property of undefined
//nvm i was sending text and expecting JSON this was teh proplem
// the sentance above spicify the type of the the file iam going to recivenpm
app.get('/', (req, res) => { // we can create routees with different types wiht app if its app.get we are using the get method  

    console.log('test')
    res.send('hellow from Homepage.')
}) // this is why it was giving me error -cant get / - that didnt got any thing from '/'

app.use('/users', usersRoutes);
// so when the user visit the /users he get the route we vreated in the users file
// now if i search for the /users in the url it will give me error thats becaue it chain users we have /users from app.use and another /users from the router we have created
// to solve this remove the /users from the file we have created
app.listen(PORT, () => console.log("server up and running"))