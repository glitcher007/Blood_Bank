const mongose =require('mongoose')
const colors= require('colors')

const connectDB = async ()=>{
    try {

         await mongose.connect(process.env.MONGO_URL);
         console.log(`Connected To MongoDB Databes ${mongose.connection.host}`.bgCyan.white);
         
    }
    catch (error){
       console.log(`Mongodb Database error ${error}`.bgRed.white)
    }
}
module.exports=connectDB