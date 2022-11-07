import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import React from "react";  
import './css/Banner.css';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

const Banner = () =>{
    return(<div className="banner" id="banner">
      <div className="banner-info"> 
        <h1>Welcome To My Portfolio</h1>
        <p className="sub-heading">Tinashe Sibanda</p>
        <a href="#skills">Explore</a>
        <br></br>
        
        <div className="prompt">
          <IconButton href="https://www.linkedin.com/in/tinashe-sibanda-b38b8b195/">
            <LinkedInIcon />
          </IconButton>

        

          <IconButton href="https://github.com/tinashe-x">
            <GithubIcon />
          </IconButton>          
        </div>       
      </div>
    </div>
    )
    
}

export default Banner;