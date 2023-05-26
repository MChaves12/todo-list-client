import './styles.css'
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

function Navbar() {
  const { isLoggedIn, user, logoutUser } = useContext(AuthContext);

  return(
    <nav>
        <NavLink to="/">
        Todo's
        </NavLink>

        {isLoggedIn ? (
        <>
            <button onClick={logoutUser}>Logout</button>
            <span>{user && user.username}</span>
        </>
        ) : (
        <>
            <NavLink to="/signup">
            <button>Signup</button>
            </NavLink>
            <NavLink to="/login">
            <button>Login</button>
            </NavLink>
        </>
        )}
    </nav>
  );
};

export default Navbar;