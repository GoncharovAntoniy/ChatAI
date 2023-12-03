import React from "react";
import ChatList from "./components/ChatList";
import { Routes, Route } from "react-router-dom";
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Messenger</h1>
      </header>
      <main>
        <ChatList />
      </main>
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> */}
    </div>
  );
}

export default App;
