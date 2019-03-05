import { all, takeEvery, put, call } from 'redux-saga/effects';

import { QUESTIONS } from '../actionTypes';
import { getQuestionsSuccess, getQuestionsError } from './actions';
import api from '../../services/api';

function* getQuestions() {
    try {
    	const questions = yield call(api.getQuestions);
    	yield put(getQuestionsSuccess(questions));
    } catch (err) {
    	yield put(getQuestionsError());
    }
}


export default function* questionsSaga() {
    yield all([takeEvery(QUESTIONS.GET_QUESTIONS_REQUEST, getQuestions)]);
}
