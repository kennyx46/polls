import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import './NewQuestion.css';

export default class NewQuestion extends Component {

    state = {
        question: '',
        choices: [''],
    }

    createQuestion = (event) => {
        event.preventDefault();
        event.stopPropagation();

        this.props.createQuestion({ ...this.state });
    }

    changeChoice = (index, value) => {
        const choices = this.state.choices.slice();
        choices[index] = value;
        this.setState({ choices });
    }

    addChoice = () => {
        const choices = this.state.choices.slice();
        if (choices[choices.length - 1].length === 0) {
            return;
        }
        this.setState({ choices: choices.concat('') });
    }

    render() {
        const { question, choices } = this.state;

        return (
            <Container>
                <h1>New Question</h1>
                <Form onSubmit={this.createQuestion}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Question</Form.Label>
                    <Form.Control placeholder="Enter question" value={question} 
                        onChange={(e) => this.setState({question: e.target.value})}/>
                  </Form.Group>


                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Choices</Form.Label>
                    <br/>
                    <Form.Label>
                        <Button variant="secondary" onClick={this.addChoice}>
                            Add new choice
                        </Button>
                    </Form.Label>
                    {choices.map((choice, index) => {
                        return (<Form.Control className='choiceRow' key={index} placeholder="Choice" value={choice} 
                            onChange={(e) => this.changeChoice(index, e.target.value)}/>);
                    })}
                  </Form.Group>
                  <Button disabled={!question || choices.length === 0} variant="primary" type="submit">Submit</Button>
                </Form>
            </Container>
        );
    }
}