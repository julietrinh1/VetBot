class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {
      const lowercaseMessage = message.toLowerCase();
  
      if (lowercaseMessage.includes("dog") && lowercaseMessage.includes("symptoms")) {
        this.actionProvider.showDogSymptoms();
        this.state.symptomCount = 0;
      } else if (lowercaseMessage.includes("yes") && this.state.symptomCount === 1) {
        this.actionProvider.showVetNearby();
        this.state.symptomCount = 0;
      } else if (lowercaseMessage.includes("no") && this.state.symptomCount === 1) {
        this.actionProvider.showPreventiveTips();
        this.state.symptomCount = 0;
      } else {
        this.actionProvider.handleDefault();
      }
      
    }
  }
  
  export default MessageParser;
  