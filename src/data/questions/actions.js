import { QUESTIONS } from '../actionTypes';

export const getQuestions = () => ({
    type: QUESTIONS.GET_QUESTIONS_REQUEST,
});

export const getQuestionsSuccess = (questions) => ({
    type: QUESTIONS.GET_QUESTIONS_SUCCESS,
    payload: { questions },
});

export const getQuestionsError = (error) => ({
    type: QUESTIONS.GET_QUESTIONS_ERROR,
    payload: { error }
});

export const getQuestion = ({ questionId }) => ({
    type: QUESTIONS.GET_QUESTION_REQUEST,
    payload: { questionId }
});

export const getQuestionSuccess = (question) => ({
    type: QUESTIONS.GET_QUESTION_SUCCESS,
    payload: { question },
});

export const getQuestionError = (error) => ({
    type: QUESTIONS.GET_QUESTION_ERROR,
    payload: { error }
});

export const voteOnChoice = ({ choiceUrl, questionId }) => ({
    type: QUESTIONS.VOTE_ON_CHOICE_REQUEST,
    payload: { choiceUrl, questionId }
});

export const voteOnChoiceSuccess = () => ({
    type: QUESTIONS.VOTE_ON_CHOICE_SUCCESS,
});

export const voteOnChoiceError = (error) => ({
    type: QUESTIONS.VOTE_ON_CHOICE_ERROR,
    payload: { error }
});


export default {
    getQuestions,
    getQuestionsSuccess,
    getQuestionsError,
    getQuestion,
    getQuestionSuccess,
    getQuestionError,
    voteOnChoice,
    voteOnChoiceSuccess,
    voteOnChoiceError,
}