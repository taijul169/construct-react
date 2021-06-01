import React from 'react';
import SingleService from './mini-components/Singleservice';
import Crane from '../images/icon-service/crane-1.png';
import Compass from '../images/icon-service/compass.png';
import Download from '../images/icon-service/download.png';
import Toolbox from '../images/icon-service/toolbox.png';
const serviceData = [
    { heading: "Building Construction", icon: Crane ,para:"lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."},
{ heading: "Building  Renovation", icon: Download ,para:"lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."},
{ heading: "Building   Maintenance", icon: Compass ,para:"lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."},
{ heading: "Architecture Design", icon: Toolbox ,para:"lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."},
]

const Service = () => {
    return (
        <div>
            <section className="serviceSection section-padding">
                <div className="container">
                    <div className="section-title-top text-center w-100 mb-5">
                        <h2 className="title-text mb-5">Our <b>Services</b></h2>
                        <h3 className="mb-5 d-block">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</h3>
                    </div> 
                    <div className="row mt-5">
                        {
                            serviceData.map((data,index)=>(
                                <SingleService key ={index} icon={data.icon} heading={data.heading}para={data.para} key={index} serial={index +1}/>
                            ))
                        }
                       
                      
                    </div>
                </div>
                <div className="watermark service">
                    <h2>Services</h2>
                </div>
            </section>
        </div>
    )
}

export default Service
