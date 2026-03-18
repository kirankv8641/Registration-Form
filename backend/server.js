 require('dotenv').config();
 const db = require('./db'); 

 const express=require('express');
 const cors = require('cors');

 const app=express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const studentRoutes=require('./routes/studentRoutes');
app.use('/students',studentRoutes);


app.listen(PORT, () => {
  console.log('Listening on port 3000');
})