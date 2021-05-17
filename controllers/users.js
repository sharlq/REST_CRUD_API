import express from 'express';
import userModel from '../models/user.js';
import { v4 as uuidv4 } from 'uuid';
const users =[
   
]

const getUsers=async(req,res)=>{ //it was /users befor we changed it to only /
    //res.send(users);
    const users = await userModel.find({});

  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
}

const addUser=async(req,res)=>{
    
    const user = new userModel(req.body);

    try {
      await user.save();
      res.send(user);
    } catch (error) {
      res.status(500).send(error);
    }
   /* const user = req.body;
    
    users.push({...user,id:uuidv4()})
    res.send(`the user name is ${user.firstName}`);*/ // SEND something to the sender the poster of the information
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
    const user = users.find((user)=>user.id===id) // it pass by refferance
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