//Load env variables

const mongoose= require("mongoose");

async function connectToDb(){
    try{
        console.log("Connected to database");
        await mongoose.connect(process.env.DB_URL);
    }catch(err){
        console.log(err);
    }
}


module.exports = connectToDb;