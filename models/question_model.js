import mongoose, { Schema, model } from "mongoose";

const QuestionSchema = new Schema({
    Question: {
        type: String,
        default: "",
    },
    Category: {
        type: String,
        default: ""
    },
    Options: {
        type: Array,
        default: []
    },
    Answer: {
        type: String,
        default: "",
    },
    Picture: {
        type: String,
        default: "",
    }
});

export default mongoose.model("Question", QuestionSchema);
