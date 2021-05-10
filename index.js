import express from 'express';
import bodyParser from 'body-parser'
import usersRoutes from './routes/users.js'

const app = express();
const PORT = 5000;
app.use(bodyParser.json());
app.get('/', (req, res) => { // we can create routees with different types wiht app if its app.get we are using the get method  

    console.log('test')
    res.send('hellow from Homepage.')
}) // this is why it was giving me error -cant get / - that didnt got any thing from '/'

app.use('/users', usersRoutes);
// so when the user visit the /users he get the route we vreated in the users file
// now if i search for the /users in the url it will give me error thats becaue it chain users we have /users from app.use and another /users from the router we have created
// to solve this remove the /users from the file we have created
app.listen(PORT, () => console.log("server up and running"))