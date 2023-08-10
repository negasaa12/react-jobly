import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";




const SignupForm =({signup})=>{


    
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
      });

      const navigate = useNavigate();
      const [errors, setErrors]= useState([])
      
      function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value }));
      }


      
     async function handleSubmit(evt){
            evt.preventDefault();
            let results = await signup(formData);
            
            if( results.success){
               navigate("/companies")
            }
            else{
                setErrors(results.errors);
            }
            console.log(errors);
      }
      return(
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input 
            type="text"
            value={formData.username}
            onChange={handleChange}
            name="username"
            />

            <label>Password</label>
            <input 
            type="text"
            value={formData.password}
            onChange={handleChange}
            name="password"
            />

            <label>First Name</label>
            <input 
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            name="firstName"
            />

            <label>Last Name</label>
            <input 
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            name="lastName"
            />

            
            <label>Email</label>
            <input 
            type="text"
            value={formData.email}
            onChange={handleChange}
            name="email"
            />
            <button onSubmit={handleSubmit}>Submit</button>
        </form>
      )
}

export default SignupForm;