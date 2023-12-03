import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ChatList = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      const response = await axios.get('http://localhost:8000/api/chats/');
      setChats(response.data);
    };

    fetchChats();
  }, []);

  return (
    <div>
      <h2>Chats</h2>
      <ul>
        {chats.map(chat => (
          <li key={chat.id}>{chat.participants.map(user => user.username).join(', ')}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
