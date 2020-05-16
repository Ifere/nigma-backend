import express from "express";
import QuestionUsecase from "../questions/usecase";

const usecase = new QuestionUsecase();


export default class QuestionHandler {

    CreateQuestion = (req, res) => {
        try {
            const user = req.body;
            return res.json({
                success: true,
                data: usecase.CreateQuestion(user),
                message: "question created",
            });


        } catch (error) {
            return res.json({
                success: false,
                data: null,
                message: error,
            })
        }

    }

    FetchQuestions = (req, res) => {
        try {
            const filter = req.query;
            return res.json({
                success: true,
                data: usecase.FetchQuestions(filter),
                message: "questions fetched",
            })

        } catch (error) {
            return res.json({
                success: false,
                data: null,
                message: error,
            });

        }
    }

    GetQuestion = (req, res) => {
        try {
            const userId = req.body.params.userId;
            return res.json({
                success: true,
                data: usecase.GetQuestion(userId),
                message: "question returned",
            });

        } catch (error) {
            return res.json({
                success: false,
                data: null,
                message: error,
            });

        }
    }

    UpdateQuestion = (req, res) => {
        try {
            const userId = req.body.params.userId;
            const update = req.body
            return res.json({
                success: true,
                data: usecase.UpdateQuestion(userId, update),
                message: "question updated"
            })
        } catch (error) {
            return res.json({
                success: false,
                data: null,
                message: error,
            })
        }
    }

    DeleteQuestion = (req, res) => {
        try {
            const userId = req.body.params.userId;
            return res.json({
                success: true,
                data: usecase.DeleteQuestion(userId),
                message: "question deleted"
            });
        } catch (error) {
            return res.json({
                success: false,
                data: null,
                message: error,
            })
        }
    }
}