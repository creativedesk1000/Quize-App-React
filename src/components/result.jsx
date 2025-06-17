function Results({ userAnswers, questionlist , restartQuize}) {
    function getScore() {
        let finalScore = 0;
        userAnswers.forEach((answer, index) => {
            if (answer === questionlist[index].answer) {
                finalScore++;
            }
        });
        return finalScore;
    }

    const score = getScore();

    return (
        <div>
            <h2>Quiz Completed</h2>
            <p>Your Score: {score} / {questionlist.length}</p>
            <button className="restart-button" onClick={restartQuize}>Restart Quiz</button>
        </div>
    );
}

export default Results;
