import React from "react";
import { useEffect, useState } from "react";
import Companies from "./CompanyDetails";
import JoblyApi from "./api";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";


const CompanyList= ()=>{

    const [companies, setCompanies]= useState(null);


    
    async function search(name) {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
      }
    useEffect(()=>{

      

        search();
    },[])
    

    


    return(


        <>
        
            <SearchForm search={search} />
            {companies? companies.map(c=> (
                <CompanyCard
                key={c.handle}
                handle={c.handle}
                name={c.name}
                description={c.description}
                logoURL={c.logoURL}

                />
            )) : <p> Loading Data</p>}
        </>
    )
}
export  default CompanyList;