import { Link } from 'react-router-dom';
import "../css/NavbarStyles.css"
function Navbar() {
    return(
        <nav className='navbar'>
            <h1 className='nav-title'>SEA SHORE</h1>
            <ul className='nav-menu'>
            <li><Link to='/' className='nav-link'>HOME</Link></li>
            <li><Link to='/' className='nav-link'>SERVICES</Link></li>
            <li><Link to='/' className='nav-link'>ABOUT</Link></li>
            <li><Link to='/' className='nav-link'>CONTACT</Link></li>
            </ul>
        </nav>
    );
}
export default Navbar;