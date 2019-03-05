import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import questions from './questions/reducer';

const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    questions
})

export default createRootReducer;
