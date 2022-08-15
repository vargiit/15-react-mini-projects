import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "./Question.scss";

const Question = ({ title, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };
  return (
    <div className="container question --card">
      <div className="question-title --flex-between">
        <h4 className="--text-p --fw-bold">{title}</h4>
        <button className="question-icon " onClick={handleClick}>
          {showAnswer ? (
            <AiOutlineMinus color="red"></AiOutlineMinus>
          ) : (
            <AiOutlinePlus color="#1f93ff"></AiOutlinePlus>
          )}
        </button>
      </div>
      <div className="question-answer">
        {showAnswer && <p className="--text--sm --py">{answer}</p>}
      </div>
    </div>
  );
};

export default Question;
