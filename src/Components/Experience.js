import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import './css/Experience.css'

const Experience = () =>{
    return(
        <div className="experience" id="experience">
            <h1 className="heading">Experience</h1>
            <p className="sub-heading">A Timeline Of All my Relevant IT Experience</p>
            <VerticalTimeline lineColor="white">
                <VerticalTimelineElement className="vertical-timeline-element--education" 
                date="2022 - Present" 
                iconStyle={{background: "Black", color: "white"}}
                icon={<SchoolIcon />}
                > 
                <h3 className="vertical-timeline-element-title">University Of Cape Town, Western Cape, South Africa</h3>
                <p>Honours Degree: Information Systems</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education" 
                date="2019 - 2021" 
                iconStyle={{background: "Black", color: "white"}}
                icon={<SchoolIcon />}
                > 
                <h3 className="vertical-timeline-element-title">University Of Johannesburg, Gauteng, South Africa</h3>
                <p>Bachelors Degree: Information Systems</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education" 
                date="2014 - 2018" 
                iconStyle={{background: "Black", color: "white"}}
                icon={<SchoolIcon />}
                > 
                <h3 className="vertical-timeline-element-title">Bishop Bavin High School, Gauteng, South Africa</h3>
                <p>Degree Pass</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-element--education" 
                date="2018 - Present" 
                iconStyle={{background: "Black", color: "white"}}
                icon={<SchoolIcon />}
                > 
                <h3 className="vertical-timeline-element-title">Udemy</h3>
                <p>Wordpress, ASP.NET Core MVC</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience;