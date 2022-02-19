class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    greet = () => {
      const message = this.createChatBotMessage("Bonjour , Merci Pour Votre Visit.");
      this.addMessageToState(message);
    };
  
    handleJavascriptQuiz = () => {
      const message = this.createChatBotMessage(
        "maintenant vous pouvez voir mon porteur d’étude ",
        {
          widget: "javascriptQuiz",
        }
      );
  
      this.addMessageToState(message);
    };
  
  
    handleExperienceQuiz = () => {
      const message = this.createChatBotMessage(
        "maintenant vous pouvez voir mon experince professionnel ",
        {
          widget: "experienceQuiz",
        }
      );
      this.addMessageToState(message);
    };
  
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  
    handleSkillsQuiz = () => {
      const message = this.createChatBotMessage(
        "maintenant vous pouvez voir mon Skills ",
        {
          widget: "SkillsQuiz",
        }
      );
      this.addMessageToState(message);
    };
  
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  
  
    handleContactQuiz = () => {
      const message = this.createChatBotMessage(
        "Sélectionnez le moyen de communication",
        {
          widget: "contactQuiz",
        }
      );
      this.addMessageToState(message);
    };
  
  
    addMessageToState = (message) => {
      this.setState((prevState) => ({
        ...prevState,
        messages: [...prevState.messages, message],
      }));
    };
  
  
  
  
  
  }
  
  export default ActionProvider;
  