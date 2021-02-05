import React from 'react'
import pizza from './img/pizza.jpg'
const About = () => {
    return (
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-6 p-45">
              <h3>About us</h3>
              <h1>Welcome to Mestro Food and Pizza point</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                blanditiis consectetur obcaecati.
              </p>
              <div className="about_btn">
                <a href="" className="btn btn_smart">
                  Read More
                </a>
              </div>
            </div>

            <div className="col-6">
              <div className="about_img">
                <img src={pizza} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About
