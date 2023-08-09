import React from "react";
import { useEffect, useState } from "react";
import JoblyApi from "./api";


const JobDetails = () =>{

    const [job, setJob] = useState(null);

    useEffect(() => {
      async function fetchJobData() {
        try {
          const id = 2; 
          const jobData = await JoblyApi.getJobDetails(id);
          setJob(jobData);
        } catch (error) {
          console.error('Error fetching company data:', error);
        }
      }
      
      fetchJobData();
    }, []);
        
    return (
      <div>
        {job ? (
          <div>
            <h2>{job.title}</h2>
            <p>{job.salary}</p>
          </div>
        ) : (
          <p>Loading company data...</p>
        )}
      </div>
    );

}

export default JobDetails;