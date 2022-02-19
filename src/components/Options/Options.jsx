import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    {
      text: "Education",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 1,
    },
    { text: "Experience professionnel", 
    handler: props.actionProvider.handleExperienceQuiz,
     id: 2,
    },
    { text: "Skills", handler: props.actionProvider.handleSkillsQuiz, id: 3 },
    { text: "Contact", handler: props.actionProvider.handleContactQuiz, id: 4 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
