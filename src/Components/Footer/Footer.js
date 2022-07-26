import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>ABOUT US</p>
          </div>
          <div className="list">
            <ul>
              <li>About EasyBuy Group</li>
              <li>Contact Us</li>
              <li>EasyBuyPeople</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>EasyBuy</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>Other Countries Pakistan - South Africa - Indonesia</p>
        <p>© 2021-2022, EasyBuy, Inc. or its affiliates</p>
      </div>
    </div>
  );
}

export default Footer;
