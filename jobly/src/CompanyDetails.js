import React from "react";
import JoblyApi from "./api";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";



const CompanyDetails = ()=>{

    const {handle} = useParams();
    const [company, setCompany]= useState(null);
    

    useEffect(()=>{

        async function getCompanyAndJobs() {

            try{
            let data = await JoblyApi.getCompany(handle);
            setCompany(data);
            }
            catch(e){
                console.error("No DATA", e);
            }
        }

        getCompanyAndJobs();
    },[handle])
      
    if (!company) return <h2> no</h2>;
    
    return(
        <>
        <div>
           <h3> {company.name}</h3>
            <p>{company.description}</p>
        </div>
        <div>
            <h4>Jobs</h4>
            {company.jobs.map(j=>(
                <ul>
                    <li> {j.title}</li>
                    <li> ${j.salary}</li>
                    <li> {j.equity}</li>
                </ul>
            ))}
        </div>
        </>
    )
}

export default CompanyDetails;