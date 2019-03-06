import { all, takeEvery, put, call } from 'redux-saga/effects';
import { push } from 'connected-react-router';

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
        const { choiceUrl } = action.payload;
        const res = yield call(api.voteOnChoice, choiceUrl);
        // we can fetch data from server, without optimistic updates
        yield put(actions.voteOnChoiceSuccess({ choiceUrl, votes: res.votes }));
    } catch (error) {
        yield put(actions.voteOnChoiceError(error));
    }
}

function* createQuestion(action) {
    try {
        const { question } = action.payload;
        yield call(api.createQuestion, question);
        yield put(actions.createQuestionSuccess());
        yield put(push('/'));
    } catch (error) {
        yield put(actions.createQuestionError(error));
    }
}


export default function* questionsSaga() {
    yield all([
        takeEvery(QUESTIONS.GET_QUESTIONS_REQUEST, getQuestions),
        takeEvery(QUESTIONS.GET_QUESTION_REQUEST, getQuestion),
        takeEvery(QUESTIONS.VOTE_ON_CHOICE_REQUEST, voteOnChoice),
        takeEvery(QUESTIONS.CREATE_QUESTION_REQUEST, createQuestion),
    ]);
}
