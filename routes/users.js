import express from 'express';
const router = express.Router();
import {getUser,getUsers,addUser,deleteUser,updateUser} from '../controllers/users.js'


router.get('/',getUsers);

router.post('/',addUser)

router.get('/:id',getUser)

router.delete('/:id',deleteUser)
router.patch('/:id',updateUser)

export default router