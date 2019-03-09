import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

const formatDate = (date) => {
    // simple quick date formatting, we can use `moment.js` if we need later.
    const dateEntry = date.split('T')[0].split('-').reverse().join('.');
    return dateEntry;
}

export default class QuestionsList extends Component {

    componentDidMount() {
        this.props.getQuestions();
    }

    renderQuestion = (question) => {
        return (
            <Col xs={12} md={4} key={question.url}>
                <Card className="mb-4" onClick={() => this.props.push(question.url)}>
                    <Card.Header>{question.question}</Card.Header>
                    <Card.Body>
                        <Card.Title className="mb-2 text-muted">{formatDate(question.published_at)}</Card.Title>
                        <Card.Subtitle>Choices: {question.choices.length}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </Col>
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
                <div className="my-2">
                    <Link to='/questions/new'>New question</Link>
                </div>
                <Row>
                    {questions.map((this.renderQuestion))}
                </Row>               
            </Container>
        );
    }
}
