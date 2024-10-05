import mongoose from "mongoose"

export const connectDB= async ()=>{
    await mongoose.connect('mongodb+srv://saranraj1803164:saran@cluster0.pmyfm6m.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}