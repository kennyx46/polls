import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { Link } from 'react-router-dom';

import './QuestionDetail.css';

export default class QuestionDetail extends Component {

    state = {
        selectedChoiceIndex: -1,
    }

    componentDidMount() {
        const { questionId } = this.props.match.params;
         const { question } = this.props;
        if (!question) {
             this.props.getQuestion({ questionId });
        }
    }

    renderChoice = (choice, index) => {
        const { selectedChoiceIndex } = this.state;

        return (
            <tr key={choice.url} 
                className={index === selectedChoiceIndex ? 'activeRow' : ''} 
                onClick={() => this.setState({selectedChoiceIndex: index})}>
                <td>{choice.choice}</td>
                <td>{choice.votes}</td>
                <td>{choice.percentage}</td>
                <td className="progressBarItem">
                    <ProgressBar now={choice.percentage}/>
                </td>
            </tr>
        )
    }

    saveVote = () => {
        const { choices } = this.props;
        const { selectedChoiceIndex } = this.state;
        if (selectedChoiceIndex > -1) {
            this.props.voteOnChoice({ choiceUrl: choices[selectedChoiceIndex].url });
        }
    }

    render() {
        const { isLoading, question, choices, isVotingInProgress, error } = this.props;

        if (isLoading || !question) {
            return (
                <Container>
                    <p>Loading</p>
                </Container>
            );
        }

        return (
            <Container>
                <h1>Questions Detail</h1>
                <div className="my-2">
                    <Link to='/'>Questions</Link>
                </div>
                { error && <Alert variant='danger'>Someting went wrong. Please try again later</Alert> }
                <h2>Question: {question.question}</h2>
                <Table bordered hover>
                    <tbody>
                        {choices.map(this.renderChoice)}
                    </tbody>
                </Table>
                <Button disabled={isVotingInProgress} className="float-right" onClick={this.saveVote}>Save vote</Button>
            </Container>
        );
    }
}
