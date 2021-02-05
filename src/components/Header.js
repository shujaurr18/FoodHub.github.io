import React from 'react'
import Navbar from '../components/Navbar'
const Header = () => {
    return (
      <div className="banner">
        <Navbar />
        <div className="banner_content">
          <div className="container">
            <div className="banner_text">
              <h3>Pizza Deleivary</h3>
              <h1>Alnoor Pizza</h1>
              <p>
                olor sit amet consectetur adipi sicing elit. Corrupti atque
                autem tempora? ea quidem.
              </p>
              <div className="banner_btn">
                <a className="btn btn_smart" href="">
                  DELEVRY NOW
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header
// rafce