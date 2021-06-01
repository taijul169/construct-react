import React from 'react';
import { NavLink } from 'react-router-dom';
import Widget from './mini-components/widget';
import widgetImg1 from '../images/welcome/pic1.jpg';
import widgetImg2 from '../images/welcome/pic2.jpg';
import widgetImg3 from '../images/welcome/pic3.jpg';

const Welcome = () => {
    return (
        <div>
            <section className="welcomeSection py-5">
              <div className="container py-5">
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
              <div className="section-title-one">
                  <strong className="text-pop-up-top">WELCOME</strong>
              </div>
            </section>
        </div>
    )
}

export default Welcome
