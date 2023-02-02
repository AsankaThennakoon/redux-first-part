import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../store/auth';
import classes from './Header.module.css';

const Header = () => {
  const dispatch=useDispatch();
  const isAuthenticate=useSelector(state=>state.auth.isAuthenticate)
  const onLogoutHander=()=>{
    dispatch(authAction.logOut())

  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuthenticate && <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={onLogoutHander}>Logout</button>
          </li>
        </ul>}
      </nav>
    </header>
  );
};

export default Header;
