import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { push } from 'connected-react-router';
import './QuestionsList.css';
import { Link } from 'react-router-dom';

const formatDate = (date) => {
    // simple hacky date formatting, replace for smth better.
    const dateEntry = date.split('T')[0].split('-').reverse().join('.');
    return dateEntry;
}

export default class QuestionsList extends Component {

    componentDidMount() {
        this.props.getQuestions();
    }

    renderQuestion = (question) => {

        return (
            <Link to={question.url}>
                <Card key={question.url} className="questionCard">
                    <Card.Header>{question.question}</Card.Header>
                    <Card.Body>
                        <Card.Title className="mb-2 text-muted">{formatDate(question.published_at)}</Card.Title>
                        <Card.Subtitle>Choices: {question.choices.length}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Link>
        );
    }

    render() {
        const { isLoading, questions } = this.props;

        if (isLoading) {
            return (
                <Container>
                    <p>Loading</p>
                </Container>
            );
        }

        return (
            <Container>
                <h1>Questions</h1>
                <Row>
                    {questions.map((this.renderQuestion))}
                </Row>               
            </Container>
        );
    }
}
