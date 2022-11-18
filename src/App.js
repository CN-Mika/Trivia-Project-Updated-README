import React, { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import NextQuestion from "./components/NextQuestion";
import data from "./sample_data.json";

function App() {
  const [answerState, setAnswerState] = useState(false);
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);

  function questionAnswered() {
    if (answerState === false) {
      return <p className="prompt">Click an answer above</p>;
    } else if (
      answerState ===
      data[currentQuestionNum].question.choices[
        data[currentQuestionNum].question.correct_choice_index
      ]
    ) {
      return (
        <p className="prompt">You chose {answerState}. That is correct!</p>
      );
    } else {
      return (
        <p className="prompt">You chose {answerState}. That is incorrect.</p>
      );
    }
  }

  function nextQuestion() {
    setCurrentQuestionNum(currentQuestionNum + 1);
    setAnswerState(false);
  }

  return (
    <div className="app">
      <h1 className="title">Trivia!</h1>
      <Question
        question={data[currentQuestionNum].question.text}
        choices={data[currentQuestionNum].question.choices}
        setAnswerState={setAnswerState}
      />
      {questionAnswered()}
      <NextQuestion nextQuestion={nextQuestion} />
      {/*EXTENSION: {currentQuestionNum < data.length - 1 && answerState !== false ? (
        <NextQuestion nextQuestion={nextQuestion} />
      ) : (
        <p></p>
      )} */}
    </div>
  );
}

export default App;
