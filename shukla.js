const mongoose=require("mongoose");
mongoose.set("strictQuery",true);
async function shuklaiSlInking(Vedant){//connect to mongoDb url
    return mongoose.connect(Vedant);

}
    //connect->file
   // Vedant=url
module.exports={
    shuklaiSlInking,
}