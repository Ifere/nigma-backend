import Question from "../../models/question_model";


export default class QuestionRepo{

    async CreateQuestion(user) {
        try{
        const data = await Question.create(user);
        return data
        }
        catch(err) {
            return Error("found an error");
        } 
    }

    async FetchQuestions(filter) {
        try{
        const data = await Question.find(filter);
        return data
        }
        catch(err) {
            return Error("found an error");
        } 
    }
    async GetQuestion(userId) {
        try{
        const data = await Question.findById(userId);
        return data
        }
        catch(err) {
            return Error("found an error");
        } 
    }
    async UpdateQuestion(userId, update) {
        try{
        const data = await Question.findByIdAndUpdate(userId, update);
        return data
        }
        catch(err) {
            return Error("found an error");
        } 
    }
    async DeleteQuestion(userId) {
        try{
        const data = await Question.findByIdAndUpdate(userId);
        return data
        }
        catch(err) {
            return Error("found an error");
        } 
    }
}