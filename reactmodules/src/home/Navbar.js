import './home.scss';
import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className='link'><Link to="./">Home</Link></div>
            <div className='link'><Link to="./currconv">Currency Converter</Link></div>
            <div className='link'><Link to="./phonebook">Phonebook</Link></div>
        </div>
    )
}

export default Navbar;