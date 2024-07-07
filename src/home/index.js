import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import PhoneBookForm from "../phonebook/PhoneBookForm"
import Converter from '../currencyConverter/Converter';
import './home.scss';

function Home() {
  return (
    <div className='container'>
      <div className='welcome mt-50'>
        Welcome to the React Projects Repository  
      </div>
      <div className='ta-left'>
        <p>A brief about different projects</p>
        <ul className='list'>
          <li>
            <span className='mrg-0 head'>Currency Converter</span>
            <span className='d-block'> It is about converting currency from Japanese Yen to USD</span>
          </li>
          <li>
            <span className='mrg-0 head'>Phonebook</span>
            <span className='d-block'>A Phonebook where we can add contacts into it and it gets added to the directory in alphabetical ascending fashion</span>
          </li>
          <li>
            <span className='mrg-0 head'>Tic Tac Toe</span>
            <span className='d-block'> It is about the game of Tic Tac Toe</span>
          </li>
          <li>
            <span className='mrg-0 head'>Chat Support UI</span>
            <span className='d-block'> It is about a Chat Support of an E-commerce company - Flipkart which fetches data from REST API's. It includes a filter for filtering on base of title of chat</span>
          </li>
          <li>
            <span className='mrg-0 head'>Quiz Game</span>
            <span className='d-block'> It is about a Quiz game where you can try your luck and get a score at last</span>
          </li>
          <li>
            <span className='mrg-0 head'>Store Front</span>
            <span className='d-block'> A small mini store where you can pick an item and move towards order placement</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home