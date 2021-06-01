import React from 'react'
import { NavLink } from 'react-router-dom'

const Cta = () => {
    return (
        <div className="ctaSection section-padding d-flex justify-content-center align-items-center">
            <div className="content-inner-wrapper text-center">
                <h4>Lets's work together</h4>
                <h2>(+291)-456-789-1234</h2>
                <h6 className="font-weight-bold my-3">Street 4 ,45 New york City</h6>
                <NavLink to="" className="primary-button">Contact Us</NavLink>
            </div>
            
        </div>
    )
}

export default Cta
