import React from 'react';
import ChatList from './components/ChatList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Messenger</h1>
      </header>
      <main>
        <ChatList />
      </main>
    </div>
  );
}

export default App;
