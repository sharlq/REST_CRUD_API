import express from 'express';
import userModel from '../models/user.js';
import { v4 as uuidv4 } from 'uuid';
const users =[
   
]

const getUsers=async(req,res)=>{ 
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
  
}


const getUser = async(req,res)=>{
    try{
    const user = await userModel.findById(req.params.id);
    if (!user) res.status(404).send("user dosent exist");
   res.send(user)}catch(error){
    res.status(500).send(error);
   }
}


const deleteUser = async(req,res)=>{
    try {
        const user = await userModel.findByIdAndDelete(req.params.id);
        if (!user) res.status(404).send("user dosent exist");
        res.status(200).send();
      } catch (error) {
        res.status(500).send(error);
      }
}

const updateUser  = async(req,res)=>{
    try {
     const user = await userModel.findByIdAndUpdate(req.params.id, req.body);
        await user.save();
        res.send(user);
      } catch (error) {
        res.status(500).send(error);
      }
}

export {getUser,getUsers,addUser,deleteUser,updateUser}