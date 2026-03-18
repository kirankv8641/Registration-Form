 require('dotenv').config(); 
 const mongoose=require('mongoose');


 const mongoURI=process.env.MONGO_URI ;

 mongoose.connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));
  
    const db=mongoose.connection;
console.log("Connected DB:", mongoose.connection.name);
   // Event listeners for connection state
db.on('connected', () => {
   console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
   console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
   console.log('MongoDB disconnected');
});

module.exports = db;