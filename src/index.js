import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import dotenv from "dotenv"
import connectDb from "./db/dbConnect.js";



dotenv.config({
    path: './env'
})







connectDb()




//  const app = express()
//  ;( async () => {


//     try {

//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

//         app.on("error", (error) => {
//             console.log("errror", error )
//             throw error
//         })

//         app.listen(process.env.PORT , () => {
//             console.log(`app is listening on port ${process.env.PORT}`)
//         })
        

        
//     } catch (error) {
//         console.error(" Error --", error )
//         throw error
//     }

//  }  )()






