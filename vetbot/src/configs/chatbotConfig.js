import { createChatBotMessage } from 'react-chatbot-kit';
import ActionProvider from "../chatbot/ActionProvider";
import MessageParser from "../chatbot/MessageParser";


const config = {
  initialMessages: [createChatBotMessage("Hi, I'm VetBot. How can I help you today?")],
  botName: 'VetBot',
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#376B7E',
    },
  },
  state: {
    symptomCount: 0,
  },
  widgets: [],
  messageParser: new MessageParser(ActionProvider, { symptomCount: 0 }),
  actionProvider: new ActionProvider(createChatBotMessage, (state) => this.setState(state)),
};

export default config;
