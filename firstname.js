// const express=require("express");
// const linkdin=linkdin.express();
// const shukla=8001;
// linkdin.listen(shukla,`shukla is running on`:${shukla})
const express=require("express");
const {shuklaiSlInking}=require("./shukla");
const bodyParser = require('body-parser');
//mongoose.connect("mongodb://localhost:27017/ved-shuk")//2707 ->port short-url is database at last
//HERE WE WILL NOT IMPLEMENT MONGOOSE.CONNECT BECAUSE MVC IS FOLLOWED WHERE WE HAVE TO
//MAKE IT UNDERSTAND THE LOGIC TO LINK THE FILE FROM DIFFERENT MODULE THEREBY
// WE MADE AN ASYNC FUNCTION AT EXTERNAL FILE TO JOIN THE URL 
// AS WE DID BASIC SET UP OF MONGO DB  ALNON WITH  CONNECTING IT TO DIFFERENT
//FILE SO NEVER USE MONGOOSE.CONNECT AT THIS PLACE RATHER THAN USING HE REQUIRIG FUNCTION OF URL FILE 
// MIGHT BE OF CONTROLLERS NOT SURE SEE IT AGAIN
shuklaiSlInking("mongodb://localhost:27017/ved-shuk").then(()=>console.log("vedant is connected"));
//.then(console.log("vedant is a new connection"));//mongodb connected listeners
//linkdin.use(express.json());//middlewares
//nst vedGit=require("./Vedant/git");
//const vedGit=require("./VEDANT/git");//routes/url(url route)
const vedGit=require("./VEDANT/Vedant");//IT DEPICTS THE URL FILE OF A ROUTES FILE THUS DON T GIVE ROUTER NAME
// INSTEAD
const linkdin=express();
//linkdin.use(express.json())
linkdin.use(express.json());
linkdin.use(express.urlencoded({ extended: true }));

const shukla=8001;
linkdin.listen(shukla,()=>console.log(`shukla available on :${shukla}`));//follow mvc architecture
linkdin.use("/Vedant",vedGit);//url/urlRoute USE BACKSLASH PROPERLY THEN WRIYE ROUTEs