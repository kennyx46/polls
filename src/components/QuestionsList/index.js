import { connect } from 'react-redux';
import { getQuestions } from '../../data/questions/actions';
import QuestionsList from './QuestionsList';
import { push } from 'connected-react-router';

const mapStateToProps = (state) => ({
    questions: state.questions.list,
    isLoading: state.questions.isLoading,
    error: state.questions.error,
});

const mapDispatchToProps = {
    getQuestions,
    push
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionsList);
