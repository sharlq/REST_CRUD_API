import express from 'express';

import { v4 as uuidv4 } from 'uuid';
const users =[
   
]

const getUsers=(req,res)=>{ 
    res.send(users);
}

const addUser=(req,res)=>{
    
    
    const user = req.body;
    
    users.push({...user,id:uuidv4()})
    res.send(`the user name is ${user.firstName}`); 
}


const getUser = (req,res)=>{
    const {id} = req.params;
   const foundUser = users.find((user)=>user.id===id)
   res.send(foundUser)
}


const deleteUser = (req,res)=>{
    const {id} = req.params
    users = users.filter((user)=>user.id !== id)
    res.send(`user with id : ${id} has been removed`)

}

const updateUser  = (req,res)=>{
    const {id} = req.params;
    const {firstName,lastName,age}=req.body
    const user = users.find((user)=>user.id===id) 
    if(firstName){
        user.firstName=firstName;
    }
    if(lastName){
        user.lastName=lastName;
    }
    if(age){
        user.age=age;
    }

    res.send(`user with the id ${id} has been updated`)
}

export {getUser,getUsers,addUser,deleteUser,updateUser}