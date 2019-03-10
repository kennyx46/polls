import React from 'react';
import { shallow } from 'enzyme';
import Card from 'react-bootstrap/Card';

import QuestionsList from './QuestionsList';

describe('QuestionsList', () => {
    const defaultProps = Object.freeze({
        push: () => null,
        questions: [],
        isLoading: false,
        getQuestions: jest.fn(),
        t: jest.fn((key) => {
            return key;
        }),
    });

    it('renders component', async () => {
        const wrapper = shallow(
            <QuestionsList {...defaultProps }/>
        ).dive();
        expect(wrapper).toMatchSnapshot();
    });

    it('shows loading if loading in progress', async () => {
        const props = { ...defaultProps, isLoading: true };
        const questionsList = shallow(<QuestionsList {...props} />);
        expect(questionsList.text()).toContain('Loading');
    });

    it('renders card for every question', async () => {
        const publishedAtDate = '2015-05-27T21:22:26.601000+00:00';
        const sampleQuestion = { published_at: publishedAtDate, choices: [], url: '1' }
        const props = { ...defaultProps, questions: [ sampleQuestion, { ...sampleQuestion, url: '2' }, { ...sampleQuestion, url: '3' } ] };
        const questionsList = shallow(<QuestionsList {...props} />);
        expect(questionsList.find(Card)).toHaveLength(3);
    });

});