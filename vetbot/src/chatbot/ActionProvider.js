import { createChatBotMessage } from 'react-chatbot-kit';
import axios from 'axios';

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async showDogSymptoms() {
    const message = createChatBotMessage("Which of the following symptoms is your dog experiencing? (fever, cough, diarrhea, vomiting, none)");
    await this.delay(1000);
    this.setBotMessage(message);
    this.setState((prevState) => ({ ...prevState, symptomCount: 1 }));
  }

  async showVetNearby() {
    const message = createChatBotMessage("Here are the nearby vets:");
    await this.delay(1000);
    this.setBotMessage(message);
    // make an API call to get nearby vet clinics
    const clinics = await axios.get('https://example.com/api/vet-clinics');
    clinics.data.forEach((clinic) => {
      const clinicMessage = createChatBotMessage(`${clinic.name}, ${clinic.address}`);
      this.setBotMessage(clinicMessage);
    });
  }

  async showPreventiveTips() {
    const message = createChatBotMessage("Here are some tips to keep your dog healthy:");
    await this.delay(1000);
    this.setBotMessage(message);
    const tips = ["Make sure your dog is up to date on all vaccinations", "Keep your dog on a healthy diet", "Exercise your dog regularly"];
    tips.forEach((tip) => {
      const tipMessage = createChatBotMessage(tip);
      this.setBotMessage(tipMessage);
    });
  }

  handleDefault() {
    const message = createChatBotMessage("I'm sorry, I didn't understand. Could you please repeat that?");
    this.setBotMessage(message);
  }

  setBotMessage(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }

  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export default ActionProvider;
