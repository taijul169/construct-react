import React from 'react';
import widgetImg1 from './../../images/welcome/pic1.jpg';
import { AiOutlinePlus } from "react-icons/ai";


const widget = (props) => {
    return (
        <div>
          <div className="widget-wrapper my-3">
              <div className="widget-img">
                  <img className="img-fluid" src={props.photo} alt="img.jpg" />
                  <div className="widget-info">
                      <div className="info-left">
                          <h4>{props.heading}</h4>
                          <p>{props.details}</p>
                      </div>
                      <div className="info-right">
                          <AiOutlinePlus className="plusIcon"/>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default widget
