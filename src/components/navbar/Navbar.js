import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
import './navbar.css';

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className='navContainer'>
        <Link
          to='/'
          style={{ textDecoration: 'none', color: '#fff', fontWeight: 'bold' }}
        >
          <span className='logo'>The Grand Hotel</span>
        </Link>
      {user ? user.name : <div className='navItems'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <button className='navButton'>Register</button>
          </Link>
          <Link to='/login' style={{ textDecoration: 'none' }}>
            <button className='navButton'>Login</button>
          </Link>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
