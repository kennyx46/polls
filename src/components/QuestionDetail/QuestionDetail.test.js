import React from 'react';
import { shallow } from 'enzyme';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import QuestionDetail from './QuestionDetail';

describe('QuestionDetail', () => {
    const defaultProps = Object.freeze({
        question: {},
        choices: [],
        isLoading: false,
        isVotingInProgress: false,
        error: null,
        match: { params: {} },
        voteOnChoice: jest.fn(),
    });

    it('renders component', async () => {
        const wrapper = shallow(
            <QuestionDetail {...defaultProps }/>
        ).dive();
        expect(wrapper).toMatchSnapshot();
    });

    it('shows loading if loading in progress', async () => {
        const props = { ...defaultProps, isLoading: true };
        const questionDetail = shallow(<QuestionDetail {...props} />);
        expect(questionDetail.text()).toContain('Loading');
    });

    it('renders choices for a question', async () => {
        const sampleChoice = { url: '1' };
        const props = { ...defaultProps, choices: [sampleChoice, { ...sampleChoice, url: '2' }, { ...sampleChoice, url: '3' }] };
        const questionDetail = shallow(<QuestionDetail {...props} />);
        expect(questionDetail.find('tr')).toHaveLength(3);
    });

    it('saves vote', async () => {
        const sampleChoice = { url: '1' };
        const props = { ...defaultProps, choices: [sampleChoice, { ...sampleChoice, url: '2' }, { ...sampleChoice, url: '3' }] };
        const questionDetail = shallow(<QuestionDetail {...props} />);
        questionDetail.find('tr').at(1).simulate('click');
        questionDetail.find(Button).simulate('click');
        expect(defaultProps.voteOnChoice).toHaveBeenCalled();
    });

});