import React from "react";
import "./All.css"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img2 from "../Assets/testi.jpg"
import logo from "../Assets/logo.png"
import s1 from "../Assets/s-1.jpg"
import s2 from "../Assets/s-2.jpg"
import s3 from "../Assets/s-3.jpg"
import s4 from "../Assets/s-4.jpg"
import s5 from "../Assets/s-5.jpg"
import s6 from "../Assets/s-6.jpg"
import u1 from "../Assets/u-1.png"
import u2 from "../Assets/u-2.png"
import u3 from "../Assets/u-3.png"
import u4 from "../Assets/u-4.png"



function AllHomeSections() {
  return (
    <>

      {/* Top section */}

      <div className="img-back">
        {/* <div > */}
        <div className='overlay'>
          <h2 className="head-2" style={{ fontFamily: "cursive" }}>
            Get Your Body
          </h2>
          <h1 className="head-1">
            Fitness Here
          </h1>
          <p className="one-sec-text" style={{ fontFamily: "cursive" }}>
            Welcome to FitBoost, your ultimate fitness destination! We are here to energize and empower you on your journey towards a healthier and stronger you.
          </p>
        </div>
        {/* </div> */}
      </div>

      {/* End Top section */}







      {/* about section */}

      <section className="about-section">
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
              <p className="one-sec-text" style={{ fontFamily: "cursive" }}>
                Welcome to FitBoost!. At FitBoost, we believe in empowering individuals to achieve their fitness goals and live a healthy lifestyle. We understand that the journey to better health and wellness can be challenging, but we're here to support and guide you every step of the way.
              </p>
              <a href="/about">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* end about section */}




      {/* service section */}

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

      {/* end service section */}


      {/* Choose us section */}

      <section className="us_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h1 className="sections-head">
              Why Choose Us
            </h1>
          </div>
          <div className="us_container">
            <div className="box">
              <div className="img-box">
                <img src={u1} alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  QUALITY EQUIPMENT
                </h5>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={u2} alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  HEALTHY NUTRITION
                </h5>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={u3} alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  SHOWER SERVICE
                </h5>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
            </div>
            <div className="box">
              <div className="img-box">
                <img src={u4} alt="" />
              </div>
              <div className="detail-box">
                <h5>
                  UNIQUE TO YOUR NEEDS
                </h5>
                <p>
                  ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* end Choose us section */}


      {/*   Testimonials section */}

      <section className="Testimonial-section">
      <div style={{ margin: "60px 40px 60px 40px" }}>
            <h1 className="sections-head" >Testimonials</h1>
            <CardGroup style={{marginTop:"70px"}}>
                <Card className="card-1 all-cards" style={{ margin: "40px 20px", borderRadius: "30px",height:"240px",background:"#f8bc1a" }}>
                    <Card.Img style={{width:"90px",height:"90px",borderRadius: "50px",margin:"0px auto",marginTop:"-50px" }} variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title style={{textAlign:"center",marginTop:"10px",color:"white",fontFamily:"cursive"}}>Emily T.</Card.Title>
                        <Card.Text style={{textAlign:"center",color:"white",fontFamily:"cursive"}}>
                        FitBoost is a game-changer! The trainers are amazing, and the workouts are intense. I've never felt stronger and more confident in my fitness journey.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card-2 all-cards" style={{ margin: "0px 20px", borderRadius: "30px",height:"240px",background:"#f8bc1a" }}>
                    <Card.Img style={{width:"90px",height:"90px",borderRadius: "50px",margin:"0px auto",marginTop:"-50px" }} variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title style={{textAlign:"center",marginTop:"10px",color:"white",fontFamily:"cursive"}}>Alex G.</Card.Title>
                        <Card.Text style={{textAlign:"center",color:"white",fontFamily:"cursive"}}>
                        FitBoost exceeded my expectations! The personalized attention and support I received helped me achieve my weight loss goals.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card-3 all-cards" style={{ margin: "40px 20px", borderRadius: "30px",height:"240px",background:"#f8bc1a" }}>
                    <Card.Img style={{width:"90px",height:"90px",borderRadius: "50px",margin:"0px auto",marginTop:"-50px" }} variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title style={{textAlign:"center",marginTop:"10px",color:"white",fontFamily:"cursive"}}>Lily M.</Card.Title>
                        <Card.Text style={{textAlign:"center",color:"white",fontFamily:"cursive"}}>
                        FitBoost is my fitness sanctuary! The energetic atmosphere, diverse classes, and passionate instructors make every workout a thrilling and rewarding experience.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
      </section>

    {/* end  Testimonials section */}

    </>
  );
}

export default AllHomeSections;