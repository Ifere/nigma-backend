import mongoose from "mongoose";

const url = "";

export const connectDB = () => {
    mongoose.connect(
        url,
        {
            useFindAndModify:  true,
            useNewUrlParser:   true,
            useFindAndModify:  false
        })
    .then(() => console.log("db connected").catch(console.log))
},