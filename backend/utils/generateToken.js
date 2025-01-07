import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId,res) => {
  const token = jwt.sign({userId},process.env.JWT_SECRET,{
    expiresIn : "15d"
  })
  res.cookie("jwt",token,{
    httpOnly : true, //cookie cannot be accessed by client side script and to prevent xss attacks cross site scripting attacks
    maxAge : 15*24*60*60*1000,
    sameSite : "strict", //cookie will only be sent in a first-party context and not be sent along with requests initiated by third party websites.
    secure : process.env.NODE_ENV === "production" ? true : false
  })
}

export  default generateTokenAndSetCookie;