import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import logo from "../Assets/logo.png"


function About(){
  return(
    <>
      <section style={{margin:"40px 0px"}}>
        <div className="container">
          <div>
            <h1 className="sections-head">
              About FitBoost
              {/* <hr style={{borderTop: "10px solid black ",borderRadius:"25px",width:"20%",color:"blue"}} /> */}
            </h1>
          </div>
          <div class="box">
            <div class="img-box">
              <img src={logo} className="about-logo" />
            </div>
            <div class="detail-box">
              <p className="all-para">
              Welcome to FitBoost!. At FitBoost, we believe in empowering individuals to achieve their fitness goals and live a healthy lifestyle. We understand that the journey to better health and wellness can be challenging, but we're here to support and guide you every step of the way.
              </p>
              <br />
              <p className="all-para">
              Our mission is to provide you with the tools, resources, and inspiration to optimize your fitness journey. Whether you're a beginner looking to kickstart your fitness routine or a seasoned athlete aiming to reach new heights, FitBoost is your go-to destination.
              </p>
              <br />
              <p className="all-para">
              What sets FitBoost apart is our commitment to delivering personalized fitness solutions tailored to your unique needs. We offer a wide range of services and programs designed to cater to different fitness levels, interests, and preferences. From customized workout plans and nutrition guidance to expert advice and motivational content, we have you covered.
              </p>
              <br />
              <p className="all-para">
              At FitBoost, we foster a supportive and inclusive community where everyone is welcome. We believe that fitness is for everyone, regardless of age, gender, or fitness background. We strive to create an environment that promotes camaraderie, motivation, and accountability, enabling you to stay focused and motivated on your fitness journey.
              </p>
              <br />
              <p className="all-para">
              Thank you for choosing FitBoost. We're excited to be a part of your fitness journey! Stay Fit. Stay Boosted.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About