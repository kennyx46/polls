import { all } from 'redux-saga/effects';

import questionsSaga from './questions/sagas';


export default function* rootSaga() {
    yield all([questionsSaga()]);
}
