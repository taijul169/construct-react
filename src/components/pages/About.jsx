import React from 'react';
import {NavLink} from'react-router-dom';
import { AiOutlineDoubleRight } from "react-icons/ai";
import bgImg from './../../images/about/pic1.jpg'
import Header from '../Header';
import Breadcrumb from '../mini-components/Breadcrumb';
import OwlCarousel from 'react-owl-carousel';
import slideImg1 from '../../images/about-slider/pic1.jpg'
import slideImg2 from '../../images/about-slider/pic2.jpg'
import slideImg3 from '../../images/about-slider/pic3.jpg'
import slideImg4 from '../../images/about-slider/pic4.jpg';
import Signature from '../../images/signature.png';
import SingleService from'../mini-components/Singleservice'
import Singleteam from'../mini-components/Singleteam';
import Singlesummary from'../mini-components/Singlesummary';
import Footer from'../Footer';
import Cta from'../Cta';
import Crane from '../../images/icon-service/crane-1.png';
import Compass from '../../images/icon-service/compass.png';
import Download from '../../images/icon-service/download.png';
import Toolbox from '../../images/icon-service/toolbox.png';
import TeamImg1 from '../../images/team/pic1.png';
import TeamImg2 from '../../images/team/pic2.png';
import TeamImg3 from '../../images/team/pic3.png';




const serviceData = [
    { heading: "Building Construction", icon: Crane ,para:"lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."},
{ heading: "Building  Renovation", icon: Download ,para:"lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."},
{ heading: "Building   Maintenance", icon: Compass ,para:"lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."},
{ heading: "Architecture Design", icon: Toolbox ,para:"lorem Ipsum available, but the majority have suffered alterati on in some form, by ious by accident."},
]

const About = () => {
    return (
        <div >
            <Header/>
            <Breadcrumb heading={'CREATING QUALITY URBAN LIFESTYLES, BUILDING STRONGER COMMUNITIES.'} bgimg={bgImg} currentpage={'About'}/>
            <div className="about-page-slider-wrap section-padding">
                 <div className="container">
                     <div className="row">
                         <div className="col-md-4 col-lg-4 col-12 position-relative">
                            <div className="slider-bg-shape"></div>
                            <OwlCarousel className='owl-theme'lazyLoad={true} info={true} autoplay={false} loop margin={10} items={1} dots={true} animateIn={true} animateOut={true}>
                                <div class='item '>
                                <div className="slider-item-content-inner">
                                    <img src={slideImg1} alt="slideimg" className="img-fluid"/>
                                </div>
                                </div> 
                                <div class='item'>
                                <div className="slider-item-content-inner">
                                    <img src={slideImg2} alt="slideimg" className="img-fluid"/>
                                </div>
                                </div>
                                <div class='item '>
                                <div className="slider-item-content-inner">
                                    <img src={slideImg3} alt="slideimg" className="img-fluid"/>
                                </div>
                                </div>
                                <div class='item'>
                                <div className="slider-item-content-inner">
                                    <img src={slideImg4} alt="slideimg" className="img-fluid"/>
                                </div>
                                </div> 
                            </OwlCarousel>
                         </div>
                         <div className="col-md-8 col-lg-8 col-12">
                             <div className="slider-right-about ml-lg-2 ml-md-2">
                                 <div className="exp-wrap">
                                     <h2>25</h2>
                                     <h6>Years Of Experience</h6>
                                 </div>
                                 <h2 className="font-weight-bold mb-3">Improving quality of life with an integrated unified approach.</h2>
                                 <p>Dummy text is also used to demonstrate the appearance of different typefaces and layouts, and in general the content of dummy text is nonsensical. Due to its widespread use texts. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
                             </div>
                             <div className="exp-bottom d-flex justify-content-lg-around">
                                 <img src={Signature} alt="img" />
                                 <div className="name">
                                     <strong>Shams Ahmmed</strong>
                                     <small>Architect & Founder</small>
                                 </div>
                                 <div className="link-wrap">
                                 <NavLink to="" className="primary-button">Get In Touch</NavLink>
                                 </div>
                                 
                                 
                             </div>
                         </div>
                     </div>
                 </div>
            </div>
            <div className="specialization-wrapper section-padding">
                <div className="container">
                    <div className="section-title-top text-center w-100 mb-5">
                        <h2 className="title-text mb-2">Our <b className="text-dark">Specialization</b></h2>
                    </div>
                    <div className="row">
                        {
                            serviceData.map((data,index)=>(
                                <SingleService icon={data.icon} heading={data.heading}para={data.para} key={index} serial={index +1}/>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="team-section-wrapper section-padding">
                <div className="container">
                    <div className="section-title-top text-center w-100 mb-5">
                        <h2 className="title-text mb-4">Our <b className="text-dark">team</b></h2>
                    </div>
                    <div className="row">
                       <Singleteam teamimg={TeamImg1} title="CEO & Architect" name={'Taijul Islam'}/>
                       <Singleteam teamimg={TeamImg2} title="Co-Founder & Architect" name={'Nayeem Hassan'}/>
                       <Singleteam teamimg={TeamImg3} title="GM & Architect" name={'Shimul Ahmmed'}/>
                    </div>
                </div>
            </div>
            <div className="about-summary section-padding">
               <div className="container">
                  <div className="section-title-top text-center w-100 mb-5">
                    <h2 className="title-text mb-4">About <b>Summary</b>
                    </h2>
                 </div>
                 <Singlesummary summaryImg={slideImg1 } title={'Eisenhower Memoria'} details={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged.'}  date={'2011-12'}/>
                 <Singlesummary summaryImg={slideImg2} title={'Columbia Sport Center'} details={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged.'} flexRowReverse={'flex-row-reverse'} date={'2013-14'} righttransform={'right-transform'}/>
                 <Singlesummary summaryImg={slideImg3 } title={'Museum Expansion'} details={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. remaining essentially unchanged.'}  date={'2015-18'}/>
                 
                
               </div>
            </div>
            <Cta/>
            <Footer/>
        </div>
    )
}

export default About
