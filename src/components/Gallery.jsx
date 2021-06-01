import React from 'react';
import Masonry from 'react-masonry-css';
import { NavLink } from 'react-router-dom';
import Project from './mini-components/Project';
import bgImg1 from '../images/projects/project.jpg';
import bgImg2 from '../images/projects/project2.jpg';
import bgImg3 from '../images/projects/project3.jpg';
import bgImg4 from '../images/projects/project4.jpg';
import bgImg5 from '../images/projects/project5.jpg';
import bgImg6 from '../images/projects/project6.jpg';
import bgImg7 from '../images/projects/project7.jpg';


const Gallery = () => {
    return (
        <div>
            <section className="gallerySection section-padding">
                <div className="container">
                    <div className="section-title-top text-center w-100 mb-5">
                        <h2 className="title-text mb-5">Our <b className="text-dark">Projects</b></h2>
    
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-lg-3 col-12 custom-tab bg-light">
                            <ul className="nav-tabs py-5" id="nav-tab" role="tablist">
                                <li><a className="nav-item" data-toggle="tab" role="tab" href="#All">All<span>All</span></a></li>
                                <li><a className="nav-item" data-toggle="tab" role="tab" href="#Commercial">Commercial<span>Commercial</span></a></li>
                                <li><a className="nav-item" data-toggle="tab" role="tab" href="#Education">Educational<span>Educational</span></a></li>
                                <li><a className="nav-item" data-toggle="tab" role="tab" href="#Hospital">Hospital<span>Hospital</span></a></li>
                                <li><a className="nav-item" data-toggle="tab" role="tab" href="#Office">Office<span>Office</span></a></li>
                                <li><a className="nav-item" data-toggle="tab" role="tab" href="#Reconstruction">Reconstruction<span>Reconstruction</span></a></li>
                            </ul>
                            
                         
                            <div class="tab-content" id="nav-tabContent">
                                <div class="tab-pane fade show active" id="All" role="tabpanel" aria-labelledby="nav-home-tab">1</div>
                                <div class="tab-pane fade" id="Commercial" role="tabpanel" aria-labelledby="nav-profile-tab">2</div>
                                <div class="tab-pane fade" id="Education" role="tabpanel" aria-labelledby="nav-contact-tab">3</div>
                            </div>


                           

                        </div>
                        <div className="col-md-9 col-lg-9">
                            <div className="tab-conent-wrapper">
                                <div className="row">
                                    <div className="col-md-4 col-lg-4 col-sm-6 col-12">
                                       <Project bgImg={bgImg1} heading={'Chair Furniture'} para={'Muscat Sultane of Oman'}/>
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-sm-6 col-12">
                                      <Project bgImg={bgImg3} heading={'Living Room'} para={'Aquaba Jordan'}/>
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-sm-6 col-12">
                                      <Project bgImg={bgImg2} heading={'Furniture'} para={'North house'}/>
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-sm-6 col-12">
                                      <Project bgImg={bgImg4} heading={'Dream Work Space'} para={'Merth,Australia'}/> 
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-sm-6 col-12">
                                       <Project bgImg={bgImg5} heading={'Cake Rio'} para={'Jikatola,Bangladesh'}/>
                                    </div>
                                    <div className="col-md-4 col-lg-4 col-sm-6 col-12">
                                       <Project bgImg={bgImg6} heading={'Chair Furniture'} para={'Muscat Sultane of Oman'}/>   
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div> 
                <div className="section-title-one float-left ml-5">
                  <strong className="text-pop-up-top">Projects</strong>
                </div>
            </section>
        </div>
    )
}

export default Gallery
