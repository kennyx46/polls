const ROOT_URL = 'https://polls.apiblueprint.org'

export const getQuestions = async () => {
    const res = await fetch(`${ROOT_URL}/questions`);
    const data = await res.json();
    return data;
}

export const getQuestion = async (questionId) => {
    const res = await fetch(`${ROOT_URL}/questions/${questionId}`);
    const data = await res.json();
    return data;
}

export const voteOnChoice = async (choicePath) => {
    const res = await fetch(`${ROOT_URL}${choicePath}`, { method: 'POST' });
    const data = await res.json();
    return data;
}



export default {
    getQuestions,
    getQuestion,
    voteOnChoice,
}
