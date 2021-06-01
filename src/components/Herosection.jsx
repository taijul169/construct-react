import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import { NavLink } from 'react-router-dom';
import slideOne from '../images/slide1.jpg';
import slideTwo from '../images/slide2.jpg';
import slideThree from '../images/slide3.jpg';

const Herosection = () => {
    return (
        <div>
           <section className="sliderarea">
             {/* // className "owl-theme" is optional */}
             <OwlCarousel className='owl-theme'lazyLoad={true} info={true} autoplay={false} loop margin={10} items={1} nav dots={false} animateIn={true} animateOut={true}>
                <div class='item' style={{backgroundImage:`url(${slideOne})`}}>
                    <div className="container">
                      <div className="slide-caption-wrapper">
                          <div className="caption-inner">
                            <h1>We Build Your Dream</h1>
                            <p>It is a established fact that a reader will be destructed by the readble content.</p>
                            <NavLink to="#" className="primary-button">More About</NavLink>
                          </div>
                      </div>
                    </div>
                    
                </div>
                <div class='item'style={{backgroundImage:`url(${slideTwo})`}}>
                <div className="container">
                      <div className="slide-caption-wrapper">
                          <div className="caption-inner">
                            <h1>From Concept to Creation</h1>
                            <p>It is a established fact that a reader will be destructed by the readble content.</p>
                            <NavLink to="#" className="primary-button">More About</NavLink>
                          </div>
                      </div>
                    </div>
                </div>
                <div class='item'style={{backgroundImage:`url(${slideThree})`}}>
                <div className="container">
                      <div className="slide-caption-wrapper">
                          <div className="caption-inner">
                            <h1>Making Dreams Come to Life</h1>
                            <p>It is a established fact that a reader will be destructed by the readble content.</p>
                            <NavLink to="#" className="primary-button">More About</NavLink>
                          </div>
                      </div>
                    </div>
                </div>
                
            </OwlCarousel>
           </section>
        </div>
    )
}

export default Herosection
