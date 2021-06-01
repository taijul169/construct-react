import React from 'react';
import { NavLink } from 'react-router-dom';


const Project = (props) => {
    return (
       
            
                <div className="single-project-wrap mb-5" style={{backgroundImage:`url(${props.bgImg} )`}}>
                    <NavLink to="">
                    <div className="project-content-inner">
                        <h4>{props.heading}</h4>
                        <p>{props.para}</p>
                    </div>
                    </NavLink>
                </div>
            
    )
}

export default Project
