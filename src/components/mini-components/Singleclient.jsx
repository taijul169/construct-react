import React from 'react';
import { ImQuotesRight } from "react-icons/im";

const Singleclient = (props) => {
    return (
        <div>
            <div className="single-slide-wrap m-5">
                <div className="quoteIcon">
                    <ImQuotesRight/>
                </div>
                <div className="client-photo-title d-flex">
                    <div className="client-img">
                        <img className="img-fluid" src={props.img} alt="client" />
                    </div>
                    <div className="client-title mt-2 ml-2">
                        <strong>{props.name}</strong>
                        <small>{props.title}</small>
                    </div>
                </div>
                <p>{props.speech}</p>
            </div> 
        </div>
    )
}

export default Singleclient
