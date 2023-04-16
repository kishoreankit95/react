import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PhoneBookForm from './phonebook/PhoneBookForm';
import Converter from './currencyConverter/Converter';
import Navbar from './home/Navbar';
import Home from './home/index';
import Box from './tictactoe/Box';
import Chat from './chatSupport/Chat';
import Display from './quizGame/Display';

function App() {
  return (
    <div className="App">
      
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/phonebook" element={<PhoneBookForm/>} />
          <Route exact path="/currconv" element={<Converter/>} />
          <Route exact path="/tictactoe" element={<Box/>} />
          <Route exact path="/chatsupport" element={<Chat/>} />
          <Route exact path="/quizgame" element={<Display/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;
