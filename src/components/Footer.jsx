import React from 'react'
import { NavLink } from 'react-router-dom';
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineComment } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footerSection section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-12 col-sm-6">
                            <div className="footer-single-widget">
                                <h2 className="mb-3">Construction</h2>
                                <p>Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.</p>
                                <ul className="social-link">
                                    <li><NavLink to="#"><AiOutlineGoogle/></NavLink></li>
                                    <li><NavLink to="#"><FaFacebookF/></NavLink></li>
                                    <li><NavLink to="#"><AiOutlineTwitter/></NavLink></li>
                                    <li><NavLink to="#"><FaLinkedinIn/></NavLink></li>
                                    <li><NavLink to="#"><FaPinterestP/></NavLink></li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-12 col-sm-6">
                            <div className="footer-single-widget">
                                <h2 className="mb-3">Contact Us</h2>
                                
                                
                                <ul className="contactus">
                                    <li>34/7 Liverpool Street, Suite 636, London, United Kingdom</li>
                                    <li>7xthemedemo@gmail.com</li>
                                    <li>(+298) 012-3456-789</li>
                                    <li>(+298) 146-6543-480</li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-12 col-sm-6">
                            <div className="footer-single-widget">
                                <h2 className="mb-3">Useful Links</h2>
                                <ul className="useful-link">
                                    <li><NavLink to="#">About</NavLink></li>
                                    <li><NavLink to="#">Projects</NavLink></li>
                                    <li><NavLink to="#">Blog</NavLink></li>
                                    <li><NavLink to="#">Contact Us</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-lg-3 col-12 col-sm-6">
                            <div className="footer-single-widget">
                                <h2 className="mb-3">Recent Post</h2>
                                <div className="recentpost-wrap">
                                    <div className="recentpost-left mr-3">
                                         <p className="text-uppercase mb-2"><span>24</span>mar <br />2021</p>
                                    </div>
                                    <div className="recentpost-right">
                                         <NavLink to=""> On these beams, we’re building dreams.</NavLink>
                                         <p><FaUser/>By Admin - <AiOutlineComment/>28</p>
                                    </div>
                                </div>
                                <div className="recentpost-wrap">
                                    <div className="recentpost-left mr-3">
                                         <p className="text-uppercase mb-2"><span>24</span>mar <br />2021</p>
                                    </div>
                                    <div className="recentpost-right">
                                         <NavLink to=""> On these beams, we’re building dreams.</NavLink>
                                         <p><FaUser/>By Admin - <AiOutlineComment/>28</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
