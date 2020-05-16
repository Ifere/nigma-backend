import express from "express";
import QuestionHandler from "../questions/handler";
const api = express.Router({mergeParams: true});

export default  QuestionRouter = function () {
    const handler = new QuestionHandler();

    api.route("/questions")
        .post((req, res) => handler.CreateQuestion(req, res))
        .get((req, res) => handler.FetchQuestions(req, res))

    api.route("/questions/:userId")
        .get((req, res) => handler.GetQuestion(req, res))
        .put((req, res) => handler.UpdateQuestion(req, res))
        .delete((req, res) => handler.DeleteQuestion(req, res))

    return api;

}