import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import bodyParser from "body-parser"
// import Addmission from "./models/Addmession.js"
import addmissionRoute from "./routes/Addmission_route.js" // addmisson route import for define api route
import LoginRoute from "./routes/User_route.js"    // login route import for define api route
import SignUpRoute from "./routes/User_route.js"   // signup route import for define api route
const app = express();

dotenv.config(); 
// cors options

const  corsOption={
    origin:" http://localhost:5173",
    methods:"POST,PUT,DELETE,HEAD,,GET",
    credential:true
}
app.use(bodyParser.json());
 const URL =  process.env.MONGODB_URL;
const PORT =  process.env.PORT|| 4000;
app.use(cors(corsOption));
app.use(express.json());
  // connect mongoose db
  
mongoose.connect("mongodb+srv://kumawatsubhash388:ijAyysf4ImzQLajq@cluster0.lmc6kaa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("db connect");
}).catch((error)=>{
    console.log(error);
})
  
 // define route of backend api
app.use("/api" , addmissionRoute);
app.use("/api/v1",LoginRoute);
app.use("/api/v2",SignUpRoute)


app.listen(PORT ,()=>{
    console.log(`hiii e very one s : ${PORT}`);
})