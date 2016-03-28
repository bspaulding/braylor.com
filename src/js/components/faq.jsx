import React, {
  Component
} from "react";

const questions = [{
  question: "I've got little kids, can they come with me?",
  answer: "Absolutely! Kids are welcome! However, if you'd like to arrange child care for the reception, give Temecula Creek Inn a call and they can help take care of that."
}, {
  question: "What's the dress code?",
  answer: "Not too fancy! The wedding is outdoors, and there is grass. You will probably want to have some light outerwear and leave your higher heeled shoes behind."
}, {
  question: "Can I play golf while I'm staying there?",
  answer: "Yep! TCI has a course on site, but if you'd like to play, make sure you call and reserve a tee time ASAP!"
}];

class FAQ extends Component {
  static displayName = "FAQ";

  render() {
    return (
      <div className="row">
        <div className="center-block col-sm-6" style={{ float: "none", maxWidth: 520 }}>
          {questions.map((q) => {
            const { question, answer } = q;

            return (
              <div style={{ marginBottom: 20 }}>
                <h4>{question}</h4>
                <p>{answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default FAQ;
