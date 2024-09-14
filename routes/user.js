const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/usercontroller')

router.get('/users',(req,res)=>{
  usercontroller.getAllUsers(req,res); /* res.json(users)*/
})
router.get('/user/:id',(req,res)=>{
  usercontroller.getUsers(req,res); /* res.json(users)*/
})



module.exports = router;