import { useContext } from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'


const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext); // ✅ Now safe!
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false); // ✅ Uses context setter
    navigate('/login');
  };

  return (
    <>
      <nav className='navbar container pt-3 pb-3 align-items-start'>
        <Link className='navbar-brand text-light' to="/">Stock Prediction Table</Link>

        <div>
          {isLoggedIn ? (
           <>
            <Button text="Dashboard" class ="btn-info" url ="/dashboard" />
            <button className='btn btn-danger ms-2' onClick={handleLogout}>Log out</button>
           </> 
          ) : (
            <>
              <Button text="Login" class="btn-outline-info" url="/login" />
              <Button text="Register" class="btn-info ms-2" url="/register" />
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;