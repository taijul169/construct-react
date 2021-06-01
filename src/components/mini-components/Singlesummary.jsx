import React from 'react'

const Singlesummary = (props) => {
    return (
        <div>
            <div className="single-summay-wrapper mb-5 ">
                 <div className={`row ${props.flexRowReverse}`}>
                       <div className={`col-md-4 col-lg-4 col-12 position-relative ${props.righttransform}`}>
                           <div className="summay-img w-75 ">
                               <img src={props.summaryImg} alt="img"className="img-fluid" />
                           </div>
                       </div>
                       <div className="col-md-8 col-lg-8 col-12">
                           <div className="summay-content p-5">
                               <h6 className="font-weight-bold">{props.date}</h6>
                               <h5 className="font-weight-bold">{props.title}</h5>
                               <p>{props.details}</p>
                           </div>
                      </div>
                </div>
             </div>
        </div>
    )
}

export default Singlesummary;
