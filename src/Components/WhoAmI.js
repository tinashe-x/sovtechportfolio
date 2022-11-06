import React from "react";
import './css/WhoAmI.css'
const WhoAmI = () =>{
    return(
        <div className="whoami" id="whoami">
            <h1 className="heading">Who Am I</h1>
            <p className="sub-heading">Why SovTech </p>
            <div className="whoami-card">
                <div className="card">
                    <i className="fa fa-"></i>
                    <h2 className="heading">C# Web Development</h2>
                    <p className="sub-heading" >
                    •	Coding: 2 years of experience coding in C# having learned how to develop multiple ASP.NET Core and Web Applications.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default WhoAmI;