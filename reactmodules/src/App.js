import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PhoneBookForm from './phonebook/PhoneBookForm';
import Converter from './currencyConverter/Converter';
import Navbar from './home/Navbar';
import Home from './home/index';

function App() {
  return (
    <div className="App">
      
      {/* <PhoneBookForm /> */}
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/phonebook" element={<PhoneBookForm/>} />
          <Route exact path="/currconv" element={<Converter/>} />
        </Routes>
        {/* <p>
          <Link to="./currconv">Currency Converter</Link>
        </p>
        <p>
          <Link to="./phonebook">Phonebook</Link>
        </p>         */}
      </div>
    </div>
  )
}

export default App;
