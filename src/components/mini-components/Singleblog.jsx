import React from 'react';
import {NavLink} from 'react-router-dom';
import { FiChevronRight } from "react-icons/fi";

const Singleblog = (props) => {
    return (
        
              <div className="col-md-4 col-lg-4 col-12">
                    <div className="single-blog-wrap w-100 h-100">
                        <div className="blog-img">
                            <img className="img-fluid" src={props.BlogImg} alt="blog" />
                        </div>
                        <div className="blog-content">
                            <div className="blog-num-date d-flex">
                                <h2>{props.day}</h2>
                                <ul className="d-flex mt-4">
                                    <li>April 2021 </li>
                                    <li>- By <NavLink to="">{props.author}</NavLink></li>
                                    <li>- <NavLink to="">{props.comment} Comments</NavLink></li>
                                </ul>
                            </div>
                            <h5 className="my-3">{props.title}</h5>
                            <p>{props.details}</p>
                            <NavLink className="custom-link" to="">Read More <FiChevronRight className="ml-1"/></NavLink>
                        </div>
                    </div>
                </div>

    )
}

export default Singleblog
