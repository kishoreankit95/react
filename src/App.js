import './App.scss';
import React, {useReducer} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PhoneBookForm from './phonebook/PhoneBookForm';
import Converter from './currencyConverter/Converter';
import Navbar from './home/Navbar';
import Home from './home/index';
import Box from './tictactoe/Box';
import Chat from './chatSupport/Chat';
import Display from './quizGame/Display';
import StoreList from "./storeFront/StoreList";
import {reducer} from "./reducers/Reducer";

export const ContextDispatch = React.createContext();

function App() {

  const initialState = {
    selItem: null,
    actPrice: null,
    cName: null,
    cAddress: null,
    cEmail: null,
    cNumber: null,
    ccNumber: null
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      
      <div>
        <Navbar />
        <ContextDispatch.Provider value={{state: state, stateChanger: dispatch}}>
          <Routes>
            <Route path="/react" element={<Home />} />
            <Route exact path="/phonebook" element={<PhoneBookForm/>} />
            <Route exact path="/currconv" element={<Converter/>} />
            <Route exact path="/tictactoe" element={<Box/>} />
            <Route exact path="/chatsupport" element={<Chat/>} />
            <Route exact path="/quizgame" element={<Display/>} />
            <Route exact path="/storefront" element={<StoreList/>} />
          </Routes>
        </ContextDispatch.Provider>
      </div>
    </div>
  )
}

export default App;
