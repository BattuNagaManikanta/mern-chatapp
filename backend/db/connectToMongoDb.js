import mongoose from "mongoose";

const connectToMongoDb = async ()=>{
  try{
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MONGO DB"); 
  }
  catch(e){
    console.log("Error connecting to MongoDB: "+e.message);
    
  }
}

export default connectToMongoDb;