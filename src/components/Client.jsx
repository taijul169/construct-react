import React from 'react';
import Img1 from '../images/client/client1.jpg';
import Img2 from '../images/client/client2.jpg';
import Img3 from '../images/client/client3.jpg';
import Img4 from '../images/client/client4.jpg';
import Img5 from '../images/client/client5.jpg';
import { ImQuotesRight } from "react-icons/im";
import OwlCarousel from 'react-owl-carousel';
import { BiPaperPlane } from "react-icons/bi";
import Singleclient from './mini-components/Singleclient';




const Client = () => {
    const options={
        loop: true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    }
    return (
        <div>
            <section className="clientSection section-padding">
                <div className="container">
                    <div className="section-title-top text-center w-100 mb-5">
                        <h2 className="title-text mb-5">Client <b className="text-dark">Testimonials</b></h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                          <div className="client-slider-wrap w-100 ">
                          <OwlCarousel className='owl-theme'  responsive={options.responsive} lazyLoad={true} info={true} autoplay={true} loop margin={10} items={2} dots={true} animateIn={true} animateOut={true}>
                                
                                <Singleclient img={Img1} name={'Younus Khan'} title={'Contractor'} speech={'Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.you delivered us the most beautiful house great looks.'}/>
                                <Singleclient img={Img2} name={'Wakar Younus'} title={'Enterprenour'} speech={'Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.you delivered us the most beautiful house great looks.'}/>
                                <Singleclient img={Img3} name={'Salam Ahmmed'} title={'Businessman'} speech={'Today we can tell you, thanks to your passion, hard work creativity, and expertise, you delivered us the most beautiful house great looks.you delivered us the most beautiful house great looks.'}/> 
                            </OwlCarousel>
                             
                          </div>
                        </div>
                    </div>
                  
                </div>
                <div className="section-title-one float-left ml-5">
                  <strong className="text-pop-up-top">Clients</strong>
                </div>
            </section>
            <div className="container">
                <div className="row newletter w-100">
                    <div className="col-md-8 col-lg-8 col-md-12">
                        <h4>SUBSCRIBE TO OUR NEWSLETTER!</h4>
                        <p>Never Miss Anything From Construx By Signing Up To Our Newsletter.</p>
                    </div>
                    <div className="col-md-4 col-lg-4 col-12 text-right">
                        <div className="newsletter-form mt-3">
                            <form action="">
                                <input type="email" placeholder="Enter your email" />
                                <button><BiPaperPlane/></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Client;
