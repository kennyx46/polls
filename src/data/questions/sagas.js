import { all, takeEvery, put, call, delay } from 'redux-saga/effects';

import { QUESTIONS } from '../actionTypes';
import actions from './actions';
import api from '../../services/api';

function* getQuestions() {
    try {
        const questions = yield call(api.getQuestions);
        yield put(actions.getQuestionsSuccess(questions));
    } catch (error) {
        yield put(actions.getQuestionsError(error));
    }
}

function* getQuestion(action) {
    try {
        const question = yield call(api.getQuestion, action.payload.questionId);
        yield put(actions.getQuestionSuccess(question));
    } catch (error) {
        yield put(actions.getQuestionError(error));
    }
}

function* voteOnChoice(action) {
    try {
        const { choiceUrl, questionId } = action.payload;
        const res = yield call(api.voteOnChoice, choiceUrl);
        yield put(actions.voteOnChoiceSuccess());
        yield delay(2000);
        yield put(actions.getQuestion({ questionId }));
    } catch (error) {
        yield put(actions.voteOnChoiceError(error));
    }
}


export default function* questionsSaga() {
    yield all([
        takeEvery(QUESTIONS.GET_QUESTIONS_REQUEST, getQuestions),
        takeEvery(QUESTIONS.GET_QUESTION_REQUEST, getQuestion),
        takeEvery(QUESTIONS.VOTE_ON_CHOICE_REQUEST, voteOnChoice),
    ]);
}
