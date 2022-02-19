class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      console.log(message);
      const lowercase = message.toLowerCase();
  
      if (lowercase.includes("bonjour")) {
        this.actionProvider.greet();
      }
  
      if (lowercase.includes("Education") || lowercase.includes("ed")) {
        this.actionProvider.handleJavascriptQuiz();
      }
  
  
      if (lowercase.includes("experience") || lowercase.includes("ex")) {
        this.actionProvider.handleExperienceQuiz();
      }
      if (lowercase.includes("skills") || lowercase.includes("sk")) {
        this.actionProvider.handleSkillsQuiz();
      }
      if (lowercase.includes("contact") || lowercase.includes("co")) {
        this.actionProvider.handleContactQuiz();
      }
  
    }
  }
  
  export default MessageParser;
  