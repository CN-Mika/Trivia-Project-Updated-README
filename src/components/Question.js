import AnswerChoices from "./AnswerChoices";

function Question(props) {
  return (
    <div>
      <div className="question">{props.question}</div>
      <div className="answers">
        {props.choices.map((choice, index) => (
          <AnswerChoices
            key={index}
            answer={choice}
            onClick={() => props.setAnswerState(choice)}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;
