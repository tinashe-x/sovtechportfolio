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
                     {/* <h2 className="heading">C# Web Development</h2>  */}
                    <p className="sub-heading" >
                    •	I am a focused and self-driven worker; I enjoy problem solving and constantly pushing myself to learn more and improve. IT is the perfect industry for me to continually find and learn new topics that continuously encourage me to learn and grow. 
                    </p>
                    <p className="sub-heading">
                    •   I chose SovTech because of the fact that is driven by mentorship and on the job experience. I feel as if I have a lot of theory from my time spent in Academia that I have not had the chance to put to use. I believe Sovtech is the best place for me to learn how to put my skills to use and make a difference in the world while doing it.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default WhoAmI;