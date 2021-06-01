import React from 'react';
import {NavLink} from'react-router-dom';
import { AiOutlineDoubleRight } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import { HiDatabase } from "react-icons/hi";
import { BsPlus } from "react-icons/bs";
import { BiBrush } from "react-icons/bi";
import { GiCrane } from "react-icons/gi";
import { ImOffice } from "react-icons/im";


import { FaFileSignature } from "react-icons/fa";
import bgImg from './../../images/about/pic1.jpg'

// components
import Header from '../Header';
import Breadcrumb from '../mini-components/Breadcrumb';
import ServiceWidget from '../mini-components/ServiceWidget';
import Widget from '../mini-components/widget';
import serviceImg from '../../images/service.png';
import ProgressBar from '../mini-components/Progressbar';
import Project from '../mini-components/Project';
import Footer from'../Footer';
import Cta from'../Cta';
import Crane from '../../images/icon-service/crane-1.png';
import Compass from '../../images/icon-service/compass.png';
import Download from '../../images/icon-service/download.png';
import Toolbox from '../../images/icon-service/toolbox.png';
// project section-photos
import projectImg1 from'../../images/projects/project.jpg';
import projectImg2 from'../../images/projects/project2.jpg';
import projectImg3 from'../../images/projects/project3.jpg';
import projectImg4 from'../../images/projects/project4.jpg';
import projectImg5 from'../../images/projects/project5.jpg';
import projectImg6 from'../../images/projects/project6.jpg';
import projectImg7 from'../../images/projects/project7.jpg';
import projectImg8 from'../../images/projects/project8.jpg';
import projectImg9 from'../../images/projects/project9.jpg';
import projectImg10 from'../../images/projects/project10.jpg';


import widgetImg1 from '../../images/welcome/pic1.jpg';
import widgetImg2 from '../../images/welcome/pic2.jpg';
import widgetImg3 from '../../images/welcome/pic3.jpg';
import { BsBuilding } from "react-icons/bs";

const serviceData = [
    { heading: "Building Construction", icon: Crane ,para:"lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."},
{ heading: "Building  Renovation", icon: Download ,para:"lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."},
{ heading: "Building   Maintenance", icon: Compass ,para:"lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."},
{ heading: "Architecture Design", icon: Toolbox ,para:"lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."},
]

const testData = [
  { bgcolor: "#F5BF23", completed: 85 ,title:"Architecture"},
  { bgcolor: "#F5BF23", completed: 75, title:"Construction" },
  { bgcolor: "#F5BF23", completed: 65, title:"Building" },
  { bgcolor: "#F5BF23", completed: 50, title:"Interior" },
  { bgcolor: "#F5BF23", completed: 45, title:"Commercial" },
];

const Service = () => {
    return (
        <div >
            <Header/>
            <Breadcrumb heading={'DIVERSIFIED SERVICES. UNVARYING QUALITY.'} bgimg={bgImg} currentpage={'Service'}/>
            <div className="about-page-slider-wrap section-padding">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-4 col-lg-4 col-12 position-relative">
                            <img src={serviceImg} alt="img" className="img-fluid"/>
                            
                         </div>
                         <div className="col-md-8 col-lg-8 col-12">
                             <div className="slider-right-about ml-lg-2 ml-md-2">
                                 
                                 <h2 className="font-weight-bold mb-3">In our work we have pride, quality is what we provide.</h2>
                                 <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use texts. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputa cumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
                             </div>
                             <div className="exp-bottom d-flex justify-content-lg-around custom">
                                 
                                 <div className="call-quote p-4">
                                     <small>Call For a Quote</small>
                                     <h4>(321) 456 6789</h4>
                                 </div>
                                 <div className="link-wrap p-4">
                                 <NavLink to="" className="primary-button">Online Estimate Form</NavLink>
                                 </div>
                                 
                                 
                             </div>
                         </div>
                     </div>
                 </div>
            </div>
            <section className="welcomeSection py-5">
              <div className="container py-5">
                  <div className="row">
                      <div className="col-md-8 col-lg-8 offset-md-2 offset-lg-2">
                         <h2 className="text-center">We are all constructed out of our self dialogue.</h2>
                         <p className="text-center">Wisi enim ad minim veniam, quis nostrud exerci tation ullamcorperadipiscing elit, sed diam nonummy nibh suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-md-3 col-lg-3 col-12">
                        <Widget heading={'Construction'} details={'Engineering your dreams with us.'} photo={widgetImg1}/>
                      </div>
                      <div className="col-md-3 col-lg-3 col-12">
                        <Widget heading={'Architecture'} details={'Engineering your dreams with us.'} photo={widgetImg2}/>
                      </div>
                      <div className="col-md-3 col-lg-3 col-12">
                        <Widget heading={'Renovation'} details={'Engineering your dreams with us.'} photo={widgetImg3}/>
                      </div>
                      <div className="col-md-3 col-lg-3 col-12">
                      <div className="widget-wrapper my-3 our-speciallization-content">
                           <span>Building</span>
                           <h2>It better in concrete</h2>
                           <p>When it comes to your house, don’t mess with the rest, trust the best. Making your vision come true, that is what we do.</p>
                           <NavLink className="primary-button mt-5" to="">View More</NavLink>

                        </div>
                      </div>
                  </div>
              </div>
            </section>
            <div className="team-section-wrapper section-padding">
                <div className="container">
                    <div className="section-title-top text-center w-100 mb-5 ">
                        <h2 className="title-text mb-4">All <b className="text-dark">Services</b>
                        </h2>
                    </div>
                    <div className="row">
                     <div className="col-md-4 col-lg-4 col-sm-12 mb-4">
                       <ServiceWidget icon={<BsBuilding/>} title={'Halls & Room'} detail={'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.'}/>
                     </div>
                     <div className="col-md-4 col-lg-4 col-sm-12 mb-4">
                       <ServiceWidget icon={<BiBrush/>} title={'PROFESSIONAL OPINION'} detail={'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.'}/>
                     </div>
                     <div className="col-md-4 col-lg-4 col-sm-12 mb-4">
                       <ServiceWidget icon={<GiCrane/>} title={'ACCURATE ENGINEERING'} detail={'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.'}/>
                     </div>
                     <div className="col-md-4 col-lg-4 col-sm-12 mb-4">
                       <ServiceWidget icon={<ImOffice/>} title={'GENERAL BUILDER'} detail={'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.'}/>
                     </div>
                     <div className="col-md-4 col-lg-4 col-sm-12 mb-4">
                       <ServiceWidget icon={<BsBuilding/>} title={'ELECTRICITY'} detail={'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.'}/>
                     </div>
                     <div className="col-md-4 col-lg-4 col-sm-12 mb-4">
                       <ServiceWidget icon={<FaFileSignature/>} title={'REFURBISHMENT'} detail={'lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident.'}/>
                     </div>
                 </div>
                </div>
            </div>
            <div className="brochure-download-section section-padding">
              <div className="container">
              <div className="row">
                <div className="col-md-7 col-lg-7 col-12 p-3 custom-dark-bg">
                  <div className="bruchure-left w-50 mr-2 ">
                    <h5>Brochure</h5>
                    <p className="para-size">Typefaces and layouts, and in appearance of different general the content of dorem ipsum dolor sit amet.</p>
                    <NavLink to="#" className="secondary-button mt-3 d-inline-block">Download Brochure</NavLink>
                  </div>
                  <div className="bruchure-right w-50 text-light">
                    <h5 className="font-weight-bold">Let's help you!</h5>
                    <p className="para-size">There are many variations of passages of lorem available, but the majority have suffered alteration in some form, by inject humour, or randomised words which don't look even slightly believable.</p>
                    <NavLink to="#" className="primary-button">Contact Us</NavLink>
                  </div>
                </div>
                <div className="col-md-5 col-lg-5 col-12">
                  <div className="progress-wrapper ml-3">
                               <h2 className="mb-3">We have <b><strong>15 years</strong> experience in construction</b></h2>
                               {testData.map((item, idx) => ( <>
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
            <div className="project-Section section-padding">
              <div className="container">
                <div className="section-title-top text-center w-100 mb-5 ">
                    <h2 className="title-text mb-4">Our <b>Projects</b>
                    </h2>
                </div>
                <div className="row">
                
                  <div className="col-md-12 col-lg-12 col-sm-12 col-12">
                  <ul className="nav nav-tabs  mx-auto custom-tab mb-5" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">ALL </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="home-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="home" aria-selected="true">CONSTRUCTION </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="home-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="home" aria-selected="true">RENOVATION </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">OUTDOOR </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">INTERIORS </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">CONSULTING </a>
                    </li>
                   
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div className="row">
                        <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                          <Project className="w-100" bgImg={projectImg1} heading={'Banghobondhu Tower'} para={'lorem ipsome details custory and with some preferences'}/>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                          <Project className="w-100" bgImg={projectImg2} heading={'Banghobondhu Tower'} para={'lorem ipsome details custory and with some preferences'}/>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                          <Project className="w-100" bgImg={projectImg3} heading={'Banghobondhu Tower'} para={'lorem ipsome details custory and with some preferences'}/>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                          <Project className="w-100" bgImg={projectImg4} heading={'Banghobondhu Tower'} para={'lorem ipsome details custory and with some preferences'}/>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                          <Project className="w-100" bgImg={projectImg5} heading={'Banghobondhu Tower'} para={'lorem ipsome details custory and with some preferences'}/>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                          <Project className="w-100" bgImg={projectImg6} heading={'Banghobondhu Tower'} para={'lorem ipsome details custory and with some preferences'}/>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                          <Project className="w-100" bgImg={projectImg7} heading={'Banghobondhu Tower'} para={'lorem ipsome details custory and with some preferences'}/>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                          <Project className="w-100" bgImg={projectImg8} heading={'Banghobondhu Tower'} para={'lorem ipsome details custory and with some preferences'}/>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <div className="row">
                        <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                          <Project className="w-100" bgImg={projectImg1} heading={'Banghobondhu Tower'} para={'lorem ipsome details custory and with some preferences'}/>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                          <Project className="w-100" bgImg={projectImg2} heading={'Banghobondhu Tower'} para={'lorem ipsome details custory and with some preferences'}/>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                          <Project className="w-100" bgImg={projectImg3} heading={'Banghobondhu Tower'} para={'lorem ipsome details custory and with some preferences'}/>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                          <Project className="w-100" bgImg={projectImg4} heading={'Banghobondhu Tower'} para={'lorem ipsome details custory and with some preferences'}/>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                          <Project className="w-100" bgImg={projectImg5} heading={'Banghobondhu Tower'} para={'lorem ipsome details custory and with some preferences'}/>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                          <Project className="w-100" bgImg={projectImg6} heading={'Banghobondhu Tower'} para={'lorem ipsome details custory and with some preferences'}/>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                          <Project className="w-100" bgImg={projectImg7} heading={'Banghobondhu Tower'} para={'lorem ipsome details custory and with some preferences'}/>
                        </div>
                        <div className="col-md-3 col-lg-3 col-sm-6 col-12">
                          <Project className="w-100" bgImg={projectImg8} heading={'Banghobondhu Tower'} para={'lorem ipsome details custory and with some preferences'}/>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><h1>3</h1></div>
                  </div>
                  </div>
                </div>
              </div>

            </div>
            <section className="section-padding faq-section">
              <div className="container">
                <div className="row">
                <div className="col-md-6 col-lg-6 col-12">
                 <div className="faq-left">
                  <div className="section-title-top  w-100 mb-5 ">
                    <h2 className="title-text mb-4">Some <b className="text-dark">Faq</b>
                    </h2>
                  </div>
                  <div className="accordion-wrap">
                  <div id="accordion">
                        <button class="single-accordion-button w-100 mb-2" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <span className="float-left">Choose Between Rates or Instant Payment</span> <i className="float-right"><BsPlus/></i>
                        </button>
                        <div class="car">
                          <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body para-size">
                              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. 
                            </div>
                          </div>
                        </div>
                        <button class="single-accordion-button w-100 mb-2" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <span className="float-left">Come to see a live preview</span> <i className="float-right"><BsPlus/></i>
                        </button>
                    
                    <div class="car">
                      
                      <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div class="card-body para-size">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </div>
                    <button class="single-accordion-button w-100 mb-2" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <span className="float-left">Choose the correct service</span> <i className="float-right"><BsPlus/></i>
                          </button>
                    <div class="car">
                      <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body para-size">
                          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                 </div>
                </div>
                <div className="col-md-6 col-lg-6 col-12">
                <div className="section-title-top  w-100 mb-5 ">
                    <h2 className="title-text mb-4">Our <b className="text-dark">Solution</b>
                    </h2>
                    
                  </div>
                 <div className="faq-right d-flex">
                    <div className="servicewidget-wrap custom-height text-center w-50 p-5 " style={{backgroundColor:'#f4f4f4'}}>
                      <div className="servicewidget-icon" style={{backgroundColor:'#000000'}}>
                        <i><GiCrane style={{color:'#F5BF23'}}/></i>
                          
                      </div>
                      <h4>ASSISTANCE</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and setting as Planning.</p>
                      <NavLink to="#">Read More <FiChevronRight className="ml-1 custom-link-primary"/></NavLink>
                    </div>
                    <div className="servicewidget-wrap custom-height text-center w-50 ml-4  p-5" style={{backgroundColor:'#000000',color:'#FFF'}}>
                      <div className="servicewidget-icon bg-dark">
                        <i><HiDatabase style={{color:'#F5BF23'}}/></i>
                          
                      </div>
                      <h4>FINANCING</h4>
                      <p>Lorem Ipsum is simply dummy text of the printing and setting as Planning.</p>
                      <NavLink to="#">Read More <FiChevronRight className="ml-1 custom-link-primary"/></NavLink>
                    </div>
                 </div>
                </div>
              
                </div>
              </div>
            </section>
            
            <Footer/>
        </div>
    )
}

export default Service;
