const ROOT_URL = 'https://polls.apiblueprint.org'

export const getQuestions = async () => {
	const res = await fetch(`${ROOT_URL}/questions`);
	const data = await res.json();
	return data;
}



export default {
    getQuestions
}
