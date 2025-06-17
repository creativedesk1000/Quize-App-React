import { useState } from "react";
import Results from "./result";
function Quiz() {
    const questionlist = [
        {
            question: "What is the capital of Pakistan?",
            options: ["Islamabad", "Karachi", "Multan", "Lahore"],
            answer: "Islamabad"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Venus", "Mars", "Jupiter"],
            answer: "Mars"
        },
        {
            question: "What is the largest ocean in the world?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            answer: "Pacific Ocean"
        },
        {
            question: "Which language is primarily spoken in Brazil?",
            options: ["Spanish", "Portuguese", "French", "English"],
            answer: "Portuguese"
        },
        {
            question: "Who wrote the play 'Romeo and Juliet'?",
            options: ["William Shakespeare", "Charles Dickens", "Leo Tolstoy", "Mark Twain"],
            answer: "William Shakespeare"
        }
    ];

    // const initialAnswers = ["Islamabad", "Mars", "Pacific Ocean", "Portuguese", "William Shakespeare"];
    const initialAnswers =Array(questionlist.length).fill(null);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(initialAnswers);

    const SelectedAnswer = userAnswers[currentQuestion]; // ✅ Move this below state declarations
const [isQuizeFinished, setisQuizeFinished] = useState(false);
    function handleSelectoption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion] = option;
        setUserAnswers(newUserAnswers); // ✅ You were missing this line before
    }

    function gotoNext() {
        if(currentQuestion === questionlist.length -1){
            setisQuizeFinished(true);
        }else{
        setCurrentQuestion(currentQuestion + 1);}
    }

    function goToPrev() {
        if(currentQuestion > 0){
        setCurrentQuestion(currentQuestion - 1);
    }}
function restartQuize(){

    setUserAnswers(Array(questionlist.length).fill(null));
    setCurrentQuestion(0);
    setisQuizeFinished(false);

}
    if(isQuizeFinished){
        return <Results userAnswers={userAnswers} questionlist={questionlist} restartQuize={restartQuize}/>
    }
    return (
        <div>
            <h2>Question {currentQuestion + 1}</h2> {/* ✅ Make question number dynamic */}
            <p className="question">{questionlist[currentQuestion].question}</p> {/* ✅ Use dynamic question */}
            {questionlist[currentQuestion].options.map((option) => (
                <button  c className={`option ${SelectedAnswer === option ? "selected" : ""}`}
  onClick={() => handleSelectoption(option)}>
                    {option}
                </button>
            ))}

            <div className="nav-buttons">
                <button onClick={goToPrev} disabled={currentQuestion === 0}>Previous</button>
                <button onClick={gotoNext} disabled={SelectedAnswer === null}>
                    {currentQuestion === questionlist.length -1 ? "Finish Quize" : "Next"}
                    </button>
            </div>
        </div>
    );
}

export default Quiz;
