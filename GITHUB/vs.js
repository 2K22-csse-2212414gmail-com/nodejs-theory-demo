//models=>folders
// //url=>file
// const mongoose=require("mongoose");
// //urlSchema
// const vedant=new mongoose.Schema({
//     VeShortId:{//shortid
//         type:String,
//         required:true,
//         unique:true,

//     },
//     VeRedirectURL:{//redirect url
//         type:String,
//         required:true,
//     },
//     // VeVisitHistory:{
//     //     type:String,
//     //     required:true
//     // },
//     VeVisitHistory:[{
//         //timestamps:true,
//         // timestamps:{//CLICKIN ENTRY
//         timestamp:{
//         type:Number}

//     }],//timestamps:true],
//     //{timestamps:true}
    

// },
// {timestamps:true}

// // const VEDS=mongoose.model('veds',vedant);
// // module.exports=VEDS;
// );
// const VEDS=mongoose.model('veds',vedant);//URL//url//urlSchema//collections
// module.exports=VEDS;
// SHUKLA/Vedant.js
const mongoose = require("mongoose");

const VedantSchema = new mongoose.Schema({
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectURL: {
    type: String,
    required: true,
  },
  visitHistory: [
    {
      timestamp: { type: Date, default: Date.now },
    },
  ],
}, { timestamps: true });

// ✅ Correct export: this makes .create(), .find(), etc. available
module.exports = mongoose.model("Vedant", VedantSchema);
