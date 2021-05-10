import express from 'express';
const router = express.Router();
const users =[
    {
        "firstName":"mohammed",
        "lastName":"fadel",
        "age":"25"
    }
]
router.get('/',(req,res)=>{ //it was /users befor we changed it to only /
    res.send(users);
});

export default router