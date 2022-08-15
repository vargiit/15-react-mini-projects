import { AiFillYoutube } from "react-icons/ai";
import "./Faq.scss";
import Question from "./Question";
import { questions } from "./data";

function Faq() {
  return (
    <section className="faq-sec ">
      <div className="container faq">
        <div className="title --center-all">
          <AiFillYoutube size={50} color="red" />
          <h2 className="--mb2">How can we help you?</h2>
        </div>
        <div className="questions">
          {questions.map((question) => (
            <Question
              key={question.id}
              title={question.title}
              answer={question.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
