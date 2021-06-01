import React,{useState,useEffect} from 'react';
import { FaEnvelope } from "react-icons/fa";
import { FaSistrix, } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { HiPhone } from "react-icons/hi";
import { HiOutlineClock } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { NavLink } from 'react-router-dom';




const Navbar = () => {

  
     let [height, setHeight] = useState(0)
        //first load when this page is loaded
        window.addEventListener('scroll',()=>{
            setHeight (window.pageYOffset);
            console.log("height is:"+ height)
            
            if(height>450){
                console.log(height);
                
                return height;

            }else{
                return false;
            }
            

        })
          
      
           
       
    
      
       
    const [boxDisplay, setDisplay] = useState(false);
    const searchBoxDisplay =()=>{
        setDisplay(true);
    }
    const searchBoxClose =()=>{
        setDisplay(false);
    }
    return (
        <div>
            {/* search-box */}
            <div className={boxDisplay ? 'searchBox' :'d-none'}>
            <form className="w-75">
                <input type="text" name="" placeholder="Enter Your keywords" />
                <button type="submit"><FaSistrix/></button>
                
            </form>
            <div className="closeBtn">
                 <GrClose onClick={searchBoxClose}/>
                </div>
            </div>
            
           <header>
           <div className="navbar-top">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 col-lg-6 col-12">
                          <div className="nav-top-left">
                              <ul className="d-flex justify-content-between">
                                  <li><i><FaEnvelope/></i> taijul.islam169@gmail.com</li>
                                  <li><i><HiPhone/></i> (075) 123-7654</li>
                                  <li><i><HiOutlineClock/></i> Sun-Sat 9.45 am</li>
                              </ul>
                          </div>
                      </div>
                      <div className="col-md-6 col-lg-6 col-12">
                          <div className="nav-top-right d-flex justify-content-end align-items-lg-center">
                             <NavLink to="" className="secondaryButton">Make an appointment</NavLink>
                          </div>
                      </div>
                  </div>
              </div>
            </div> 
            <div className={`navbar-bottom ${ height ? 'position-fixed' :'position-relative'}`}>
                <div className="container">
                    <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-light w-100">
                        <NavLink className="navbar-brand logo" to="#">Construct</NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto customNav">

                                <li className="nav-item">

                                    <NavLink className="nav-link" to="/"> HOME</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">ABOUT US</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/service">SERVICES</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">PAGES</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/">POST DETAIL</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/project">PROJECTS</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink onClick={searchBoxDisplay} className="nav-link" to="/"><i><FaSistrix style={{fontWeight:"700",fontSize:"16px"}} /></i></NavLink>
                                    
                                </li>
                            </ul>
                          
                        </div>
                        </nav>
                    </div>
                </div>
            </div>
           </header>
        </div>
    )
}

export default Navbar
