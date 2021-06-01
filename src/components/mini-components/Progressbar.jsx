import React from "react";

// import ProgressBar from 'react-customizable-progressbar'

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
  
    const containerStyles = {
      height: 4,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 0,
      margin: 5
    }
  
    const fillerStyles = {
      height: '100%',
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      fontWeight: 'bold',
      fontSize:'12px'
    }
  
    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    );
  };
  
  export default ProgressBar;
