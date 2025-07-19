import mongoose from "mongoose"; 

export const connectDB=async () =>{
    await mongoose.connect('mongodb+srv://insane:Mrittick%40123@cluster0.y4o8me4.mongodb.net/forkfindr').then(()=>{
        console.log("DB CONNECTED")
    })
} 