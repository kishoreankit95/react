import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PhoneBookForm from './phonebook/PhoneBookForm';
import Converter from './currencyConverter/Converter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/phonebook" element={<PhoneBookForm/>} />
        <Route exact path="/currconv" element={<Converter/>} />
      </Routes>
      {/* <PhoneBookForm /> */}
      <div>
        <p>Home page</p>
        <p>
          <Link to="./currconv">Currency Converter</Link>
        </p>
        <p>
          <Link to="./phonebook">Phonebook</Link>
        </p>        
      </div>
    </div>
  )
}

export default App;
