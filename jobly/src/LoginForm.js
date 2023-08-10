import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const LoginForm =({login})=>{


    
    const [formData, setFormData]= useState({
        username: "",
        password: ""
    })
    const navigate = useNavigate();
   
    const [errors,setErrors]= useState([]);

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(l => ({ ...l, [name]: value }));
      }

    
  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await login(formData);
    if (result.success) {
      navigate("/profile")
    } else {
      setErrors(result.errors);
    }
  }
      
      
    
        console.log(formData);
    return(
        <>
        <form onSubmit={handleSubmit}>
            <labe>Username</labe>
            <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            
            
            />
               <labe>Password</labe>
            <input
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            
            
            />

            <button onSubmit={handleSubmit}>login</button>
        </form>
        
        </>
    )
}

export default LoginForm;