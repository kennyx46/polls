import { QUESTIONS } from '../actionTypes';

export const initialState = {
    list: [],
    isLoading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case QUESTIONS.GET_QUESTIONS_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case QUESTIONS.GET_QUESTIONS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                list: action.payload.questions,
            }
        case QUESTIONS.GET_QUESTIONS_ERROR:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state;
    }
};
