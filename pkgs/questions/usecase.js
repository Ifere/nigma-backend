import QuestionRepo from "./repo";

const repo = new QuestionRepo();

export default class QuestionUsecase {

    CreateQuestion (user) {
        try {
        return repo.CreateQuestion(user);
        } catch (error) {
            return Error("error in creating user in usecase");
        }
    }

    FetchQuestion(filter) {
        try {
            return repo.FetchQuestions(filter);
        } catch (error) {
            return Error("error fetching questions in usecase");
        }
    }

    GetQuestion(userId) {
        try {
            return repo.GetQuestion(userId); 
        } catch(error) {
            return Error("error getting question from usecase");
        }
    }

    UpdateQuestion(userId, update) {
        try {
            return repo.UpdateQuestion(userId, update);
        } catch(error) {
            return Error("error updating question from usecase");
        }
    }
    
    DeleteQuestion(userId) {
        try {
            return repo.DeleteQuestion(userId);
        } catch(error) {
            return Error("error deleting question from usecase");
        }
    }

}