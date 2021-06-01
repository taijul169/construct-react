import React from 'react'
import Header from './Header';
import Herosection from'./Herosection';
import Welcome from'./Welcome';
import About from'./About';
import Experience from './Experience';
import Mission from './Missioin';
import Service from './Service';
import Cta from './Cta';
import Gallery from './Gallery';
import Blog from './Blog';
import Client from './Client';
import Footer from './Footer';
const Home = () => {
    return (
        <>
           <Header/>
           <Herosection/>
           <Welcome/>
           <About/>
           <Experience/>
           <Mission/>
           <Service/>
           <Cta/>
           <Gallery/>
           <Blog/>
           <Client/>
           <Footer/>
        </>
    )
}

export default Home
