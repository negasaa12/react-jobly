import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const LoginForm =()=>{


    
    const [formData, setFormData]= useState({
        username: "",
        password: ""
    })
    const navigate = useNavigate();
   

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(l => ({ ...l, [name]: value }));
      }

    
      function handleSubmit(evt){
            evt.preventDefault();
            
      }

    return(
        <>
        <form>
            <placeholder> Username</placeholder>
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            
            
            />


        </form>
        
        </>
    )
}

export default LoginForm;