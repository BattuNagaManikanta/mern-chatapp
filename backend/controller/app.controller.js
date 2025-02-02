import User from "../models/user.model.js";
import bcrypt from "bcryptjs"
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req,res) =>{

  try{
    const {fullname , username, password ,confirmPassword, gender} = req.body;

    if(password != confirmPassword){
      res.status(400).json({
        error : "Password don't match"
      })
      return;
    }

    const user = await User.findOne({username});
    
    if(user){
      res.status(400).json({error : "user already exists"})
      return;
    }
    //HASH PASSWORD HERE

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    //https://avatar.iran.liara.run/public/boy?username=[value]
    //https://avatar.iran.liara.run/public/girl?username=[value]

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${fullname}`;
    const girlProfilePic =  `https://avatar.iran.liara.run/public/girl?username=${fullname}`;

    const newUser = new User({
      fullname , username, password : hashedPassword , gender , profilePic : gender === "male" ? boyProfilePic :girlProfilePic
    });

    if(newUser){
      // Generate JWT Token here
      generateTokenAndSetCookie(newUser._id,res);
      await newUser.save();
      res.status(201).json({
        _id : newUser.id,
        fullname : newUser.fullname,
        username : newUser.username,
        profilePic : newUser.profilePic
      })
    }
    else{
      res.status(400).json({error : "Invalid user data"})
    }
  }

  catch(e){
    res.status(500).json({error : "Internal Server error"})
  }
}

export const login =async (req,res) =>{
  try{
    const {username , password} = req.body;
    const user = await User.findOne({username});
    const isPasswordCorrect = user && await bcrypt.compare(password,user.password);
    if(!user || !isPasswordCorrect){
      res.status(400).json({error : "Invalid username or password"})
      return;
    }
    generateTokenAndSetCookie(user._id,res);

    res.status(200).json({
      _id : user.id,
      fullname : user.fullname,
      username : user.username,
      profilePic : user.profilePic
    })
  }
  catch(e){
    res.status(500).json({error : "Internal Server error"})
  }
}

export const logout =async (req,res) =>{
  try{
    res.cookie("jwt","",{maxAge : 0});
    res.status(200).json({message : "Logged out successfully"})
  }
  catch(e){
    res.status(500).json({error : "Internal Server error"})
  }
}