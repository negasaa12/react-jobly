import logo from './logo.svg';
import './App.css';
import HomePage from './Home';
import JoblyApi from './api';
import RoutePaths from './Routes';
import { useState } from 'react';


export const TOKEN_STORAGE_ID = "jobly-token";

function App() {


const [token,setToken] = useState(TOKEN_STORAGE_ID);
const [currentUser, setCurrentUser]= useState(null);


  async function signup(signupData) {
    try {
      let token = await JoblyApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  async function login(loginData) {
    try {
      let token = await JoblyApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }



  function logout(){
    setCurrentUser(null);
    setToken(null);
  }
  return (
    <div className="App">


        
      
      <RoutePaths signup={signup} login={login}/>
      
    </div>
  );
}

export default App;
