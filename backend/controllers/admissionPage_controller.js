import Addmission from "../models/Addmession.js"
import nodeMailer from "nodemailer"
const sendMail=async(name,email,phone,course,message)=>{
    try {
      let transportmail = nodeMailer.createTransport({
          service:"gmail",
          auth:{
            user:"kumawatsubhash388@gmail.com",
            pass:"joejkzhhckdphelr"
          }
        })
        let emailContent ={
          from:email,
          to:"kumawatsubhash388@gmail.com",
          subject:"for query mail",
          // text:"this is my first application"
          html:'<p> hiii'+name+',I Want to enroll '+course+' and my query related this course '+message+' : please reply me </p>'
        }
        
        transportmail.sendMail(emailContent ,function(err, val){
          if(err){
            console.log(err);
        
          }else{
            console.log(val.response ,"sent mail .....");
          }
        })
  
  
   } catch (error) {
      console.log(error);
   }
  }

export const insertUser =async (req,res)=>{
    const formData=req.body;
    const {name,email,phone,course,message}=formData;
    console.log(course);
console.log(name);    
       Addmission.create({name:name,email:email,phone:phone,course:course,message:message})
         .then(result=>{
              console.log("mongoose db create");
             res.json("accout create");
             sendMail(name,email,phone,course,message);
      }).catch(err=> res.json(err));
     }
 