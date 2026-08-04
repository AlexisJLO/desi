import { useState } from "react";
import "../pages/Quiz.css";
import correctImage from "../assets/Quiz/Good Job.gif";
import wrongImage from "../assets/Quiz/wrong.jpg";
import MusicPlayer from "../pages/Music.jsx";

function Quiz() {
const [clicked, setClicked] = useState(false);
  const questions = [
    {
        question: "Who initiated first?",
        answers: [
            "You",
            "Me",
            "Both",
            "Neither"
        ],
        correct: "You",
        message: "You were the one who took the first step ❤️"
    },

    {
      question: "What was our first conversation?",
      answers: [
        "Cats and Cars",
        "Games",
        "Anime",
        "Music"
      ],
      correct: "Cats and Cars",
      message: "Of course you remember where our story started ❤️"
    },

    {
      question: "What is my favorite thing about you?",
      answers: [
        "Your smile",
        "Your eyes",
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

    {
        question: "Where did we share our first kiss?",
        answers: [
            "In the parking lot",
            "In the room of the Airbnb",
            "In the Hot Tub",
            "In the car"
        ],
        correct: "In the Hot Tub",
        message: "That was such a special moment ❤️"
    },

    {
      question: "Where was our first date?",
      answers: [
        "Movies",
        "Mall",
        "Escape Room",
        "Dinner"
    ],
    correct: "Mall",
    message: "That was such a fun day ❤️"
    },

    {
        question: "What is our anime?",
        answers: [
            "My Dress Up Darling",
            "Sailor Moon",
            "A Sign of Affection",
            "Your Name"
        ],
        correct: "A Sign of Affection",
        message: "That's our anime ❤️"
    },

    {
        question: "What is our song?",
        answers: [
            "Love Story",
            "Risk It All",
            "Valentines",
            "I Cant Help Falling in Love"
        ],
        correct: "Risk It All",
        message: "That's the song when I think of you ❤️"
    },
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
        else {
        setCurrentQuestion(questions.length);
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
          Quiz Complete
        </h1>

        <h2>
          Your Score:
        </h2>

        <h1>
          {score} / {questions.length}
        </h1>
        <button
            className={`button ${clicked ? "" : "pop-animation"}`}
            onClick={() => {
              setClicked(true);
              window.location.href = "/memories";
            }}
          >
            Memories Time!
          </button>

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

<MusicPlayer/>
    </div>

  );
}


export default Quiz;