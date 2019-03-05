import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import './QuestionsList.css';

const formatDate = (date) => {
    const dateEntry = date.split('T')[0].split('-').reverse().join('.');
    return dateEntry;
}

export default class QuestionsList extends Component {

    componentDidMount() {
        this.props.getQuestions();
    }

    renderQuestion = (question) => {

        formatDate(question.published_at)

        return (
            <Card key={question.url} className="questionCard">
                <Card.Header>{question.question}</Card.Header>
                <Card.Body>
                    <Card.Title className="mb-2 text-muted">{formatDate(question.published_at)}</Card.Title>
                    <Card.Subtitle>Choices: {question.choices.length}</Card.Subtitle>
                </Card.Body>
            </Card>
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
