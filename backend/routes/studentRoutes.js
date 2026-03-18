 const express=require('express');
 const router=express.Router();
 const Student=require('../models/students');


 router.post('/', async (req, res) => {
    try {
      const data = req.body
      const newStudent = new Student(data);
      const response = await newStudent.save();
      console.log('data saved');
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  //Get method to get the Menu Items
  router.get('/', async (req, res) => {
    try {
      const data = await Student.find();
      console.log('data fetched');
      res.status(200).json(data);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  })
console.log(req.body);
  module.exports=router;