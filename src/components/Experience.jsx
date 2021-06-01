import React from 'react';
import Signature from '../images/signature.png'
import { BsPlay } from "react-icons/bs";
import ProgressBar from './mini-components/Progressbar';
const testData = [
    { bgcolor: "#F5BF23", completed: 85 ,title:"Architecture"},
    { bgcolor: "#F5BF23", completed: 75, title:"Construction" },
    { bgcolor: "#F5BF23", completed: 65, title:"Building" },
    { bgcolor: "#F5BF23", completed: 50, title:"Interior" },
    { bgcolor: "#F5BF23", completed: 45, title:"Commercial" },
  ];

const Experience = () => {
    return (
        <div>
            <section className="experienceSection section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-lg-4 col-12">
                            <div className="section-title-top text-center w-100 mb-5">
                                <h2 className="title-text">Our <b className="text-dark">Value</b></h2>
                            </div>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.there are many variations of passages of Ipsum available,</p>
                            <div className="sign-wrap d-flex justify-content-between mt-5">
                                <div className="sign-img">
                                  <img className="img-fluid" src={Signature} alt="img" />
                                </div>
                                <div className="name-wrap ">
                                    <h4>Taijul Islam</h4>
                                    <small>Architect & Founder</small>
                                </div>
                            </div>
                            <div className="video-presentation">
                                <div className="img-overlay"></div>
                                <div className="video-text d-flex justify-content-between">
                                    <i><BsPlay/></i>
                                    <h4>Video Prsentation</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8 col-lg-8 col-12">
                            <div className="counter-progress-area d-flex">
                               <div className="counter-wrapper mr-5">
                                
                                <div className="sigle-counter-box">
                                    <h2>450</h2>
                                    <h4>Active Experts</h4>
                                </div>
                                <div className="sigle-counter-box">
                                    <h2>250</h2>
                                    <h4>Satisfied Clients</h4>
                                </div>
                                <div className="sigle-counter-box">
                                    <h2>450</h2>
                                    <h4>Project Complete</h4>
                                </div>
                               </div>
                               <div className="progress-wrapper">
                                <h2 className="mb-3">We have <b><strong>15 years</strong> experience in construction</b></h2>
                                {testData.map((item, idx) => ( 
                                      <>
                                        <div className="single-progress mb-4">
                                           <label for="file">{item.title}</label>
                                            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />  
                                        </div>
                                      </>
                                            
                                            ))
                                    
                                        }
                                 
                                 
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experience
