import React from 'react';
import bannerImage from '../../assets/images/easybuybanner.jpeg'
import './Banner.css';
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        
        <div className="banner">
          <img
            src={bannerImage}
            alt=""
            className='banner'
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
