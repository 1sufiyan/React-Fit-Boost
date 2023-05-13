import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import s1 from "../Assets/s-1.jpg"
import s2 from "../Assets/s-2.jpg"
import s3 from "../Assets/s-3.jpg"
import s4 from "../Assets/s-4.jpg"
import s5 from "../Assets/s-5.jpg"
import s6 from "../Assets/s-6.jpg"


function Services(){
  return(
    <>
      <section class="service_section layout_padding">
        <div class="container">
          <div class="heading_container">
            <h1 className="sections-head">
              Our Services
            </h1>
          </div>
          <div class="service_container">
            <div class="box">
              <img src={s1} />
              <h6 class="visible_heading">
                CROSSFIT TRAINING
              </h6>
              <div class="link_box">
                <h6>
                  CROSSFIT TRAINING
                </h6>
              </div>
            </div>
            <div class="box">
              <img src={s2} />
              <h6 class="visible_heading">
                FITNESS
              </h6>
              <div class="link_box">
                <h6>
                  FITNESS
                </h6>
              </div>
            </div>
            <div class="box">
              <img src={s3} />
              <h6 class="visible_heading">
                DYNAMIC STRENGTH TRAINING
              </h6>
              <div class="link_box">
                <h6>
                  DYNAMIC STRENGTH TRAINING
                </h6>
              </div>
            </div>
            <div class="box">
              <img src={s4} />
              <h6 class="visible_heading">
                HEALTH
              </h6>
              <div class="link_box">
                <h6>
                  HEALTH
                </h6>
              </div>
            </div>
            <div class="box">
              <img src={s5} />
              <h6 class="visible_heading">
                WORKOUT
              </h6>
              <div class="link_box">
                <h6>
                  WORKOUT
                </h6>
              </div>
            </div>
            <div class="box">
              <img src={s6} />
              <h6 class="visible_heading">
                STRATEGIES
              </h6>
              <div class="link_box">
                <h6>
                  STRATEGIES
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services