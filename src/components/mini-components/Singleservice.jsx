import React from 'react';
import { FiChevronRight } from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const Singleservice = (props) => {
    return (
       
            <div className="col-md-3 col-lg-3 col-6">
                <div className="single-service-wrap">
                    <div className="icon-service">
                        <img className="img-fluid" src={props.icon} alt="icoin" />
                    </div>
                    <h2>{props.serial}</h2>
                    <h3>{props.heading}</h3>
                    <p>{props.para}</p>
                    <NavLink to="#">Read More <FiChevronRight className="ml-1"/></NavLink>
                </div>
            </div>
    )
}

export default Singleservice
