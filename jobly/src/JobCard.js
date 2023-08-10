import React from "react";






const JobCard = ({id,title,salary,equity,companyName})=>{





    return(

        <div className="jobCard">
                <div className="card-container">
                <h6> {title}</h6>
                <p> { companyName}</p>
                <p> {salary}</p>
                <p>{equity}</p>
                </div>
        
        </div>
    )
}

export default JobCard;