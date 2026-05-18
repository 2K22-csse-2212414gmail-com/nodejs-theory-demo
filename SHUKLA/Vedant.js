// //controllers=>folder
// //url->file
// //const {}=require(../vs/vedant) models->url
// // const {nanoid}=require("../SHUKLA/vs");destructuring of code required the module ofn nanoid
// // const VED=require("ved")
// const {nanoid}=require("nanoid");
// const VED=require("../SHUKLA/Vedant");//url
// async function vedantLinkdinPortfolioid(req,res){//handleGneneratenewShortUrl
//    // const v=req.body;//body
//    const body=req.body
//    //console.log("BODY", req);
//     // if(!v.Vedant) 
//     // {
//     //     return res.status(404).json({noId:"profile link not found"});//err:"url is required"
//     // }
//     // if(!body.Vedant) return res.status(404).json({noId:"profile link not found"});
//     const Vs=nanoid(8);//short id
// await VED.create({
//     shortId:Vs,
//     redirectURL:body.Vedant,
//     visitHistory:[],
// });

// //     VshortId:{
// //        Veshort id,
// //     },
//   //  VREDIRECTURL:{
// // []
// //     },
// //     VeviitHistory:{

// //     }
// //console.log("body:", req.body);
// // 
// // VS:Vs,//shortID:SHORTid
// // //linkdinId:v.VED,//REDIRECTurl:body.url,
// // //body.Vedant:
// // //linkdinID:v.Vedant,
// // linkdinID:body.Vedant,
// // resume:[],//visitHistory
// // })
// return res.json({ld:Vs})//id:short id
// }
// module.exports={
// vedantLinkdinPortfolioid,//handleGneneratenewShortUrl
// //object

// }
// controllers/url.js

// const { nanoid } = require("nanoid");
// const URL = require("../SHUKLA/Vedant"); // Mongoose model

// // Generate new short URL for Vedant's LinkedIn
// async function vedantLinkdinPortfolioid(req, res) {
//   try {
//     const body = req.body;

//     // 1. Validation: Check if Vedant link is provided
//     if (!body?.Vedant) {
//       return res.status(400).json({
//         success: false,
//         error: "Profile link (Vedant) is required"
//       });
//     }

//     // 2. Generate short ID
//     const Vs = nanoid(8);

//     // 3. Save to D)B
//     //console.log(VED)
//      const newUrl = await URL.create({
//      shortId: Vs,
//      redirectURL: body.Vedant, // original LinkedIn URL
//      visitHistory: []
//      });

//     // 4. Send response
//     return res.status(201).json({
//       success: true,
//       message: "Short URL created successfully",
//       shortId: newUrl.shortId
//     });

//   } catch (err) {
//     console.error("Error in vedantLinkdinPortfolioid:", err);
//     return res.status(500).json({
//       success: false,
//       error: "Internal server error"
//     });
//   }
// }

// module.exports = {
//   vedantLinkdinPortfolioid
// };
// //👉 So the exact error in your code was:

// //You used req.body.Vedant without enabling body-parser 
// // //middleware (express.json()) and without validating that req.body exists.
//[22-08-2025 11:10] Maya Shukla: https://youtu.be/QXEl6nN7bTo?si=OZdcOW78rjD8cWXn
//[22-08-2025 14:22] Maya Shukla: 
const { nanoid } = require("nanoid");
//const {nanoid}=require("nanoid");
const URL = require("../SHUKLA/Vedant"); // Mongoose model

// Generate new short URL for Vedant's LinkedIn
async function vedantLinkdinPortfolioid(req, res) {
  try {
    const body = req.body;

    // 1. Validation: Check if Vedant link is provided
    if (!body || !body.Vedant) {
      return res.status(400).json({
        success: false,
        error: "Profile link (Vedant) is required"
      });
    }

    // 2. Generate short ID
    const shortId = nanoid(8);

    // 3. Create and save to DB using the correct Mongoose syntax
    const newUrl = await URL({
      shortId: shortId,
      redirectURL: body.Vedant, // original LinkedIn URL
      visitHistory: []
    });
    
    await newUrl.save();

    // 4. Send response
    return res.status(201).json({
      success: true,
      message: "Short URL created successfully",
      shortId: newUrl.shortId
    });

  } catch (err) {
    console.error("Error in vedantLinkdinPortfolioid:", err);
    return res.status(500).json({
      success: false,
      error: "Internal server error"
    });
  }
}

// Add a function to handle redirects
async function handleRedirect(req, res) {
  try {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } }
    );
    
    if (!entry) {
      return res.status(404).json({
        success: false,
        error: "Short URL not found"
      });
    }
    
    res.redirect(entry.redirectURL);
  } catch (err) {
    console.error("Error in handleRedirect:", err);
    return res.status(500).json({
      success: false,
      error: "Internal server error"
    });
  }
}

module.exports = {
  vedantLinkdinPortfolioid,
  handleRedirect
};