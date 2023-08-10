import React from "react";
import { useEffect, useState } from "react";
import JoblyApi from "./api";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";





const JobList = ()=>{


    const [jobs,setJobs] = useState(null);
  

    useEffect(()=>{

       search();   
    },[])
    
    async function search(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
      }


      
    return(

      <>
      <h1> Jobs</h1>
      <div>
        <SearchForm search={search}/>
        {jobs.length? <JobCardList jobs={jobs}/>
        : <p> sorry, no results were found!</p>}

      </div>
      
      
      </>
    );

}

export default JobList;