import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';

function Chatroom() {
  const [messages, setMessages] = useState([
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages([...messages, { text: newMessage, sender: 'You', time: currentTime }]);
      setNewMessage('');
    }
  };

  return (
    <>
    <Navbar />

    <div className="chatroom">
      <div className="message-container">
        {messages.map((message, index) => (
          message.sender === 'You' && (
            <Message key={index} text={message.text} sender={message.sender} time={message.time} />
          )
        ))}
      </div>
      <MessageInput
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onSend={handleSendMessage}
      />
    </div>
    </>
  );
}

function Message({ text, sender, time }) {
  const isUserMessage = sender === 'You';
  return (
    <div className={`message ${isUserMessage ? 'your-message' : 'other-message'}`}>
      <div className={`avatar ${isUserMessage ? 'your-avatar' : 'other-avatar'}`}>{isUserMessage ? 'You' : 'John'}</div>
      <div className="message-bubble">
        <div className="message-text">{text}</div>
        <div className="message-time">{time}</div>
      </div>
    </div>
  );
}

function MessageInput({ value, onChange, onSend }) {
  return (
    <div className="message-input-container">
      <input
        className="message-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Type a message..."
      />
      <button className="send-button" onClick={onSend}>Send</button>
    </div>
  );
}

export default Chatroom;
