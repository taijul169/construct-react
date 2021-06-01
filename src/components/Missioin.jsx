import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronRight } from "react-icons/fi";

const Missioin = () => {
    return (
        <div>
             <section className="ourMissionSection section-padding">
                 <div className="container">
                      <div className="section-title-top text-center w-100 mb-5">
                        <h2 className="title-text">Our <b className="text-dark">Mission</b></h2>
                        </div>      
                        <div className="row">
                            <div className="col-md-4 col-lg-4 col-12">
                                <div className="single-mission-widget">
                                    <h2><span>Site Areas</span><b>what we serve</b></h2>
                                    <p>lorem Ipsum available, but the majority have suffered alteration in some form, by ious versi ons have evolved over the years, sometimes by accident</p>
                                    <ul className="custom-link-primary">
                                        <li><FiChevronRight className="mr-2"/><NavLink to="#"><i></i>Construction Management</NavLink></li>
                                        <li><FiChevronRight className="mr-2"/><NavLink to="#"><i></i>Pre Construction </NavLink></li>
                                        <li><FiChevronRight className="mr-2"/><NavLink to="#"><i></i>Contract Administration</NavLink></li>
                                        <li><FiChevronRight className="mr-2"/><NavLink to="#"><i></i>ServicesLeed consultation</NavLink></li>
                                        <li><FiChevronRight className="mr-2"/><NavLink to="#"><i></i>Implementation</NavLink></li>
                                    </ul>
                                    <NavLink to="#" style={{backgroundColor:"transparent",fontSize:"13px", color:'#171717',padding:'2px 5px',marginLeft:'70%',marginTop:'20px'}} className="primary-button">More<FiChevronRight className="ml-2"/></NavLink>
                                </div>
                                
                            </div>
                            <div className="col-md-4 col-lg-4 col-12">
                                <div className="single-mission-widget-midle w-100 h-100">
                                   
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4 col-12">
                                <div className="single-mission-widget-right w-100 h-100">
                                  <div className="form-wrapper">
                                      <form action="">
                                          <h2 className="mb-4">Get In <b>Touch</b></h2>
                                          <div className="form-group">
                                            <label htmlFor="">Name</label>
                                            <input type="text" placeholder />
                                          </div>
                                          <div className="form-group">
                                            <label htmlFor="">Email</label>
                                            <input type="email" placeholder />
                                          </div>
                                          <div className="form-group">
                                            <label htmlFor="">Phone</label>
                                            <input type="text" placeholder />
                                          </div>
                                          <div className="form-group">
                                            <label htmlFor="">Message</label>
                                            <textarea name="" id="" ></textarea>
                                          </div>
                                          <div className="form-group text-right">
                                            <button type="submit" className="primary-button yellow" style={{border:"none",backgroundColor:"#F5BF23"}}>Submit Now</button>
                                          </div>
                                      </form>
                                  </div> 
                                </div>
                            </div>

                            </div>
                       
                 </div>
                 <div className="section-title-one">
                  <strong className="text-pop-up-top float-left ml-5">Mission</strong>
               </div>
             </section>
        </div>
    )
}

export default Missioin
