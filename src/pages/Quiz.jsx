import { useState } from "react";
import "../pages/Quiz.css";
import correctImage from "../assets/Quiz/Good Job.gif";
import wrongImage from "../assets/Quiz/wrong.jpg";

function Quiz() {

  const questions = [
    {
      question: "Where did we first meet?",
      answers: [
        "Coffee Shop",
        "School",
        "Online",
        "Work"
      ],
      correct: "Work",
      message: "Of course you remember where our story started ❤️"
    },

    {
      question: "What is my favorite thing about you?",
      answers: [
        "Your smile",
        "Your kindness",
        "Your laugh",
        "Everything"
      ],
      correct: "Everything",
      message: "The correct answer was obviously everything 💖"
    },

    {
      question: "Who loves who more?",
      answers: [
        "Me",
        "You",
        "Equal",
        "Impossible to know"
      ],
      correct: "Impossible to know",
      message: "Because our love keeps growing every day ❤️"
    },

    // Add 7 more questions here
  ];


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const [wrongAnswers, setWrongAnswers] = useState([]);

  const [result, setResult] = useState(null);


  const question = questions[currentQuestion];


  function handleAnswer(answer) {

    if (answer === question.correct) {

      setScore(score + 1);

      setResult({
        correct: true,
        message: question.message
      });


      setTimeout(() => {

        setResult(null);

        setWrongAnswers([]);

        if(currentQuestion + 1 < questions.length){
          setCurrentQuestion(currentQuestion + 1);
        }

      }, 5000);


    } else {

      setResult({
        correct: false,
        message: "Oops! Try again 💕"
      });


      setWrongAnswers([
        ...wrongAnswers,
        answer
      ]);

    }

  }


  if(currentQuestion === questions.length) {

    return (
      <div className="quiz-container">

        <h1>
          Quiz Complete 💖
        </h1>

        <h2>
          Your Score:
        </h2>

        <h1>
          {score} / {questions.length}
        </h1>

      </div>
    );
  }



  return (

    <div className="quiz-container">

      <h1>
        Question {currentQuestion + 1}/10
      </h1>


      <h2>
        {question.question}
      </h2>


      <div className="answers">

      {
        question.answers.map((answer)=>(
          
          <button
            key={answer}
            disabled={wrongAnswers.includes(answer)}
            className={
              wrongAnswers.includes(answer)
              ? "wrong-answer"
              : ""
            }
            onClick={()=>handleAnswer(answer)}
          >
            {answer}
          </button>

        ))
      }

      </div>



      {
        result && (

          <div className="result">

            {
              result.correct
              ?
              
                <img
                src={correctImage}
                alt="Correct" /> 
              :
                <img
                src={wrongImage}
                alt="Incorrect" /> 
              
            }


            <p>
              {result.message}
            </p>

          </div>

        )
      }


    </div>

  );
}


export default Quiz;