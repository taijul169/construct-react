import React from 'react'
import { NavLink } from 'react-router-dom';
import { FiChevronRight } from "react-icons/fi";


const ServiceWidget = (props) => {
    return (
        <div>
            <div className="servicewidget-wrap custom-height text-center w-100 p-5 miniBox-shadow">
                <div className="servicewidget-icon">
                    <i>{props.icon}</i>
                </div>
                <h4>{props.title}</h4>
                <p>{props.detail}</p>
                <NavLink to="#">Read More <FiChevronRight className="ml-1 custom-link-primary"/></NavLink>
            </div>
        </div>
    )
}

export default ServiceWidget
