import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import aboutImg from '../images/about/pic1.jpg';
import aboutImg2 from '../images/about/pic2.jpg';

const About = () => {
    return (
        <div>
            <section className="aboutSection section-padding">
                <div className="container">
                    <div className="row">
                        <div className="section-title-top text-center w-100 mb-5">
                            <h2 className="title-text">About <b>Company</b></h2>
                        </div>
                        <div className="col-md-8 col-md-12 col-sm-12 col-lg-8">
                           <div className="about-slider">
                           <OwlCarousel className='owl-theme'lazyLoad={true} info={true} autoplay={true} loop margin={10} items={1}  dots={true} animateIn={true} animateOut={true}>
                                <div className='item'>
                                    <img src={aboutImg} alt="img" />
                                </div>
                                <div className='item'>
                                   <img src={aboutImg2}  alt="img1"/>
                                </div>
                            </OwlCarousel>
                            <div className="about-content-box">
                                <h2 className="mb-5">Committed <strong>to superior quality and results.</strong></h2>
                                <p className="font-weight-bold">Contrary to popular belief, lorem Ipsum is not simply text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                                <p>There are many variations of passages of lorem available, but the majority have suffered alteration in some form, by inject humour, or randomised words which don't look even slightly believable.</p>
                            </div>
                            <div className="watermark">
                                <h2>About</h2>
                            </div>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
