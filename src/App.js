import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile"
import { useSelector } from "react-redux";

function App() {
  const isAuthenticate=useSelector(state=>state.auth.isAuthenticate);
  return (
    <Fragment>
      <Header />
     {

     !isAuthenticate&& <Auth />
     } 
     {

     isAuthenticate&& <UserProfile />
     } 

      <Counter />
    </Fragment>
  );
}

export default App;
