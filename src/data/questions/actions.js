import { QUESTIONS } from '../actionTypes';

export const getQuestions = () => ({
	type: QUESTIONS.GET_QUESTIONS_REQUEST,
})

export const getQuestionsSuccess = (questions) => ({
	type: QUESTIONS.GET_QUESTIONS_SUCCESS,
	payload: { questions },
})

export const getQuestionsError = () => ({
	type: QUESTIONS.GET_QUESTIONS_ERROR
})
