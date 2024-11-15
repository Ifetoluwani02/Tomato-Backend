import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://SiReTrX:Experiencedx2@cluster0.56tnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/food-del').then(()=>console.log("DB Connected"));
   
}

