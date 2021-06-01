import React from 'react';
import { AiOutlineGoogle } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";

const Singleteam = (props) => {
    return (
            <div className="col-md-4 col-lg-4 col-12">
                <div className="single-team-wrap text-center box-shadow px-2">
                        <div className="team-photo">
                            <img src={props.teamimg} alt="img" className="img-fluid" />
                        </div>
                        <strong>{props.name}</strong>
                        <small>{props.title}</small>
                        <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
                        <ul className="teamsociallink">
                            <li><a href="#"><AiOutlineGoogle/></a></li>
                            <li><a href="#"><FaFacebookF/></a></li>
                            <li><a href="#"><FaLinkedinIn/></a></li>
                            <li><a href="#"><FaPinterestP/></a></li>
                            <li><a href="#"><AiOutlineTwitter/></a></li>
                        </ul>
                 </div>
            </div> 
           )
}

export default Singleteam;
