import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { authAction } from '../store/auth';



const Auth = () => {
const dispatch=useDispatch();


const onSubmitHandler =(event)=>{
  event.preventDefault();
  dispatch(authAction.logIn());


}

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
