import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';


const users =[
    {
        "firstName":"mohammed",
        "lastName":"fadel",
        "age":"25"
    },
    {
        "firstName":"tareq",
        "lastName":"daowod",
        "age":"22"
    }
]
router.get('/',(req,res)=>{ //it was /users befor we changed it to only /
    res.send(users);
});
// brosers just do get request to test the post request we need to test postman 
router.post('/',(req,res)=>{
    console.log('POST ROUTE REACHED');
    console.log(req.body)
    const user = req.body;
    
    users.push({...user,id:uuidv4()})
    res.send(`the user name is ${user.firstName}`); // SEND something to the sender the poster of the information
})//it gives me an empty object why

router.get('/:id',(req,res)=>{
    const {id} = req.params;
   const foundUser = users.find((user)=>user.id===id)
   res.send(foundUser)
})

router.delete('/:id',(req,res)=>{
    const {id} = req.params
    users = users.filter((user)=>user.id !== id)
    res.send(users)

})

export default router