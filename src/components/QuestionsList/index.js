import { connect } from 'react-redux';
import { getQuestions } from '../../data/questions/actions';
import QuestionsList from './QuestionsList';

const mapStateToProps = (state) => ({
    questions: state.questions.list,
    isLoading: state.questions.isLoading,
});

const mapDispatchToProps = {
    getQuestions,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionsList);
