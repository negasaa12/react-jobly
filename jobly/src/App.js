import logo from './logo.svg';
import './App.css';
import HomePage from './Home';
import JoblyApi from './api';
import RoutePaths from './Routes';
import { useState } from 'react';

export const TOKEN_STORAGE_ID = "jobly-token";

function App() {


const [token,setToken] = useState(TOKEN_STORAGE_ID);



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
  return (
    <div className="App">


        
      
      <RoutePaths signup={signup}/>
      
    </div>
  );
}

export default App;
