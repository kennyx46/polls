export const getCurrentQuestionChoicesWithPercentage = (state) => {
    const { choices } = state.questions.current || {};

    if (!choices) return [];
    
    const allVotes = choices.reduce((acc, choice) => acc + choice.votes, 0);

    console.log(allVotes)

    const choicesWithPercentage = choices.map((choice) => ({
        ...choice, 
        percentage: (100 * choice.votes / allVotes).toFixed(2),
    }))

     return choicesWithPercentage
}