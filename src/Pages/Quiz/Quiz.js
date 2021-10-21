import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";
import "./Quiz.css";
import Question from "../../components/Question/Question";
const Quiz = ({ name, score, setQuestions, questions, setScore }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);
  useEffect(() => {
    console.log(questions);
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions, currQues]);

  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };
  return (
    <div className="quiz">
      <div>
        <h1 style={{ padding: "10px" }}>
          Hi, <span style={{ color: "red" }}>{name}</span>
        </h1>
      </div>
      {questions ? (
        <>
          <div className="quizInfo">
            <span style={{ marginLeft: "15px" }}>
              Category : {questions[currQues].category}
            </span>
            <span style={{ textAlign: "center" }}>
              Difficulty : {questions[currQues].difficulty}
            </span>
            <span style={{ marginRight: "15px" }}>Score : {score}</span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
