// //routes=>folder
// //url->file
// const express=require("express");
// const {vedantLinkdinPortfolioid}=require("../SHUKLA/Vedant");//controllers/url
// const git=express.Router();//router
// //git.post('./')
// git.post("/",vedantLinkdinPortfolioid);
// //const router=exprees.router comst express =require('express)
// module.exports=git;//router
const express = require("express");
const { vedantLinkdinPortfolioid } = require("../SHUKLA/Vedant"); // ✅ FIXED

const git = express.Router();

git.post("/", vedantLinkdinPortfolioid);
//git.post("/", handleRedirect);

module.exports = git;
