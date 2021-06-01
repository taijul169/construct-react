import React from 'react';
import { NavLink } from 'react-router-dom';
import BlogImg1 from '../images/blog/blog1.jpg';
import BlogImg2 from '../images/blog/blog2.jpg';
import BlogImg3 from '../images/blog/blog3.jpg';
import { FiChevronRight } from "react-icons/fi";
import Singleblog from './mini-components/Singleblog';
const Blog = () => {
    return (
        <div>
            <section className="blogSection section-padding">
                <div className="container">
                    <div className="section-title-top w-100 mb-5">
                        <h2 className="title-text mb-5">Latest <b>Blog</b></h2>
                    </div>
                    <div className="row">
                      <Singleblog 
                            BlogImg={BlogImg1} 
                            day={'05'} 
                            author={'Admin'} 
                            title={'Commercial design for project'} 
                            details={'Which is the same as saying through shrinking from toil and pain.'}
                            comment={'1'}
                        />
                        <Singleblog 
                            BlogImg={BlogImg2} 
                            day={'12'} 
                            author={'Admin'} 
                            title={'Low cost interior designing ideas'} 
                            details={'Which is the same as saying through shrinking from toil and pain.'}
                            comment={'1'}
                        />
                        <Singleblog 
                            BlogImg={BlogImg3} 
                            day={'14'} 
                            author={'Admin'} 
                            title={'Our interior design prediction'} 
                            details={'Which is the same as saying through shrinking from toil and pain.'}
                            comment={'1'}
                        />
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default Blog;
