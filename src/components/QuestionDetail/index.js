import { connect } from 'react-redux';
import { compose } from 'redux';
import { getQuestion, voteOnChoice, } from '../../data/questions/actions';
import QuestionDetail from './QuestionDetail';
import { getCurrentQuestionChoicesWithPercentage } from '../../data/questions/selectors';
import { withRouter } from "react-router";

const mapStateToProps = (state) => ({
    question: state.questions.current,
    choices: getCurrentQuestionChoicesWithPercentage(state),
    isLoading: state.questions.isLoading,
    isVotingInProgress: state.questions.isVotingInProgress,
});

const mapDispatchToProps = {
    getQuestion,
    voteOnChoice,
};

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter,
)(QuestionDetail);
