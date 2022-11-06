import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import React from "react";  
import './css/Banner.css';

const Banner = () =>{
    return(<div className="banner" id="banner">
      <div className="banner-info"> 
        <h1>Welcome To My Portfolio</h1>
        <p className="sub-heading">Creating The Future</p>
        <a href="#skills">Explore</a>
        <br></br>
        
        <div className="prompt">
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
        
      </div>
    </div>
    )
    
}

export default Banner;