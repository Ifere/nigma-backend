import mongoose from "mongoose";

const url = "mongodb://localhost:27017/nigma";

export const connectDB = () => {
    mongoose.connect(
        url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
        
    }).then(() => console.log("db connected")).catch(console.log);
    
};