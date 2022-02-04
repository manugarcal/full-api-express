import express, { Router } from 'express'; // import express and router from express library

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/users.js'

const router = express.Router(); // create a router variable that call express and router method


//all routes in here are starting with /users

//define a get method
router.get('/', getUsers);
// define a Post Method
router.post('/', createUser);
//define a get method whit id
router.get('/:id', getUser);
//define a delete method
router.delete('/:id', deleteUser);
//define a patch method to modify any data in the array object
router.patch('/:id', updateUser);

export default router;