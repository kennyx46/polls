import { QUESTIONS } from '../actionTypes';

export const initialState = {
    list: [],
    current: null,
    isLoading: false,
    isVotingInProgress: false,
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
                current: null,
            }
        case QUESTIONS.GET_QUESTIONS_ERROR:
            return {
                ...state,
                isLoading: false,
            }
        case QUESTIONS.GET_QUESTION_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case QUESTIONS.GET_QUESTION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                current: action.payload.question,
            }
        case QUESTIONS.GET_QUESTION_ERROR:
            return {
                ...state,
                isLoading: false,
            }
        case QUESTIONS.VOTE_ON_CHOICE_REQUEST:
            return {
                ...state,
                isVotingInProgress: true,
            }
        case QUESTIONS.VOTE_ON_CHOICE_SUCCESS:
            const { choices } = state.current;
            const updatedChoiceIndex = choices.findIndex(choice => choice.url === action.payload.choiceUrl);
            return {
                ...state,
                current: {
                    ...state.current,
                    choices: [ 
                        ...choices.slice(0, updatedChoiceIndex), 
                        { 
                            ...choices[updatedChoiceIndex],
                            votes: action.payload.votes,
                        }, 
                        ...choices.slice(updatedChoiceIndex + 1) 
                    ]
                },
                isVotingInProgress: false,
            }
        case QUESTIONS.VOTE_ON_CHOICE_ERROR:
            return {
                ...state,
                isVotingInProgress: false,
            }
        default:
            return state;
    }
};
