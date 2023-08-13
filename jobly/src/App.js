import logo from './logo.svg';
import './App.css';
import HomePage from './Home';
import JoblyApi from './api';
import RoutePaths from './Routes';
import { useState } from 'react';
import UserContext from './UserContext';
import jwt from "jsonwebtoken";



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
    async function getCurrentUser (){


    }

  console.log( " the token", token);
  console.log("currentUser", currentUser);
  function logout(){
    setCurrentUser(null);
    setToken(null);
  }





  return (
    <div className="App">


        
      <UserContext.Provider>
      <RoutePaths signup={signup} login={login}/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
