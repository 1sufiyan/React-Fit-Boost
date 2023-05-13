import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img2 from "../Assets/testi.jpg"


function Testimonial(){
  return(
    <>
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
                        <Card.Title style={{textAlign:"center",marginTop:"10px",color:"white",fontFamily:"cursive"}}>Lily M. </Card.Title>
                        <Card.Text style={{textAlign:"center",color:"white",fontFamily:"cursive"}}>
                        FitBoost is my fitness sanctuary! The energetic atmosphere, diverse classes, and passionate instructors make every workout a thrilling and rewarding experience.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>

            <CardGroup style={{marginTop:"30px"}}>
                <Card className="card-1 all-cards" style={{ margin: "0px 20px", borderRadius: "30px",height:"240px",background:"#f8bc1a" }}>
                    <Card.Img style={{width:"90px",height:"90px",borderRadius: "50px",margin:"0px auto",marginTop:"-50px" }} variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title style={{textAlign:"center",marginTop:"10px",color:"white",fontFamily:"cursive"}}>John Doe</Card.Title>
                        <Card.Text style={{textAlign:"center",color:"white",fontFamily:"cursive"}}>
                        FitBoost is a game-changer! The trainers are amazing, and the workouts are intense. I've never felt stronger and more confident in my fitness journey.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card-2-2 all-cards" style={{ margin: "40px 20px", borderRadius: "30px",height:"240px",background:"#f8bc1a" }}>
                    <Card.Img style={{width:"90px",height:"90px",borderRadius: "50px",margin:"0px auto",marginTop:"-50px" }} variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title style={{textAlign:"center",marginTop:"10px",color:"white",fontFamily:"cursive"}}>Ryan S.</Card.Title>
                        <Card.Text style={{textAlign:"center",color:"white",fontFamily:"cursive"}}>
                        FitBoost exceeded my expectations! The personalized attention and support I received helped me achieve my weight loss goals.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className="card-3 all-cards" style={{ margin: "0px 20px", borderRadius: "30px",height:"240px",background:"#f8bc1a" }}>
                    <Card.Img style={{width:"90px",height:"90px",borderRadius: "50px",margin:"0px auto",marginTop:"-50px" }} variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title style={{textAlign:"center",marginTop:"10px",color:"white",fontFamily:"cursive"}}>Jessica L. </Card.Title>
                        <Card.Text style={{textAlign:"center",color:"white",fontFamily:"cursive"}}>
                        FitBoost is my fitness sanctuary! The energetic atmosphere, diverse classes, and passionate instructors make every workout a thrilling and rewarding experience.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
      </section>
    </>
  );
}

export default Testimonial