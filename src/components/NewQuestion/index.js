import { connect } from 'react-redux';
import { compose } from 'redux';
import { createQuestion } from '../../data/questions/actions';
import NewQuestion from './NewQuestion';
import { getCurrentQuestionChoicesWithPercentage } from '../../data/questions/selectors';
import { withRouter } from "react-router";

const mapStateToProps = (state) => ({
    question: state.questions.current,
    choices: getCurrentQuestionChoicesWithPercentage(state),
    isLoading: state.questions.isLoading,
    isVotingInProgress: state.questions.isVotingInProgress,
});

const mapDispatchToProps = {
    createQuestion,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
)(NewQuestion);
