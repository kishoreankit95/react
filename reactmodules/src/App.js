import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PhoneBookForm from './phonebook/PhoneBookForm';
import Converter from './currencyConverter/Converter';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PhoneBookForm/>} />
        <Route exact path="/currconv" element={<Converter/>} />
      </Routes>
      {/* <PhoneBookForm /> */}
    </div>
  )
}

export default App;
