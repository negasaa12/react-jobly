import React from "react";

import { Route, Routes, NavLink , useNavigate} from "react-router-dom";
import JobDetails from "./JobDetails";
import HomePage from "./Home";
import Companies from "./CompanyDetails";
import CompanyList from "./CompanyList";
import CompanyDetails from "./CompanyDetails";
const RoutePaths = ()=>{




    return(
        <>
        <nav className="nav-container">
     <ul className="nav-ul">
       <li className="nav-li">
         <NavLink  className="nav-NavLink"exact to="/" >Home</NavLink>
       </li>
       <li className="nav-li">
         <NavLink className="nav-NavLink" to="/jobs" >
           Jobs
         </NavLink>
       </li>
       <li className="nav-li">
         <NavLink  className="nav-NavLink" to="/companies" activeClassName="active">
          Companies
         </NavLink>
       </li>
       <li className="nav-li">
         <NavLink  className="nav-NavLink" to="/profile" activeClassName="active">
          Profie
         </NavLink>
       </li>
       <li className="nav-li">
         <NavLink  className="nav-NavLink" to="/signup" activeClassName="active">
          Sign Up
         </NavLink>
       </li>
       <li className="nav-li">
         <NavLink  className="nav-NavLink" to="/login" activeClassName="active">
          Login
         </NavLink>
       </li>

     </ul>
   </nav>
       <Routes>
            <Route exact path="/" element={<HomePage/>}> </Route>
            <Route exact path="/jobs" element={<JobDetails/>}> </Route>
            <Route exact path="/companies" element={<CompanyList/>}> </Route>
            <Route exact path="/companies/:handle" element={<CompanyDetails/>}> </Route>
            <Route exact path="/login" > </Route>
            <Route exact path="/signup" > </Route>
       </Routes>

        </>

    )
}
export default RoutePaths;