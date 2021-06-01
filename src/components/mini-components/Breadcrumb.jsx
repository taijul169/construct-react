import React from 'react';
import {NavLink} from'react-router-dom';
import { AiOutlineDoubleRight } from "react-icons/ai";
const Breadcrumb = (props) => {
    return (
        <div className="breadcrumb-content-wrap" style={{backgroundImage:`url(${props.bgimg})`}}>
        <div className="bg-overlay"></div>
        <div className="breadcrumb-content-inner text-center">
            <h2>{props.heading}</h2>
            <ul className="mt-5 bc-common">
                <li>
                    <NavLink to="/">Home <AiOutlineDoubleRight className="ml-1"/></NavLink>
                </li>
                <li>{props.currentpage}</li>
            </ul>
      </div>
    </div>
    )
}

export default Breadcrumb;
