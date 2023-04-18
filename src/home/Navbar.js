import './home.scss';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className='link'><Link to="./react">Home</Link></div>
            <div className='link'><Link to="./currconv">Currency Converter</Link></div>
            <div className='link'><Link to="./phonebook">Phonebook</Link></div>
            <div className='link'><Link to="./tictactoe">Tictactoe</Link></div>
            <div className='link'><Link to="./chatsupport">Chat Support</Link></div>
            <div className='link'><Link to="./quizgame">Quiz Game</Link></div>
        </div>
    )
}

export default Navbar;