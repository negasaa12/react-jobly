import React from "react";
import { Link } from "react-router-dom";



const CompanyCard = ({handle, name,logoURL, description})=>{

    return (
        
            <Link className="company-card" to={`/companies/${handle}`}>
            <div>
                <h6>
                    {name}
                    {logoURL} && <img src={logoURL} alt={name}/>
                </h6>
                <p> <small> {description}</small></p>
            </div>
            </Link>
        
    )

}

export default CompanyCard;