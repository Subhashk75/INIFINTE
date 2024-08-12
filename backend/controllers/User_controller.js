import User from "../models/User.js";

export const LoginUser= async(req,res)=>{
    const {email,password}= req.body;
     console.log(email);
     console.log(password);
  await  User.findOne({email:email })
    .then(user=>{
     if(user){
         res.json("already accout exist ");
     }else{
       res.json("no records exist ");
     }
  
    }).catch(err=> res.json(err));
 }



export const SignUpUser=async(req,res)=>{

const {fullname,email,password}= req.body;
console.log(fullname);
await User.findOne({email:email})
 .then(user=>{
  if(user){
      res.json("already accout exist ");
      console.log("hiii");
  }else{
  User.create({fullname:fullname, email:email ,password:password})
      .then(result=>{
          res.json("accout create");
      }).catch(err=> res.json(err));
  }

 }).catch(err=> res.json(err));
 
}