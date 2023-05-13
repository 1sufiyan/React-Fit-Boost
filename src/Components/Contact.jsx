import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { useFormik } from "formik";


function Contact(){

  const initialValues ={
    name:"",
    email:"",
    phone:"",
    message:""
  }

  const Registration = ()=>{
    useFormik({
      initialValues: initialValues,
      onSubmit:(values)=>{
        console.log(values)
      }
    })
  }
  return(
    <>
      <section className="contact_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          <span>
            Get In Touch
          </span>
        </h2>
      </div>
      <div className="layout_padding2-top">
        <div className="row">
          <div className="col-md-6 ">
            <form action="">
              <div className="contact_form-container">
                <div>
                  <div>
                    <input type="name" autoComplete="off" name="name" id="name" placeholder="Name" />
                  </div>
                  <div>
                    <input type="email" autoComplete="off" name="email" id="email" placeholder="Email" />
                  </div>
                  <div>
                    <input type="text" autoComplete="off" name="phone" id="phone" placeholder="Phone Number" />
                  </div>
                  <div className="mt-5">
                    <input type="text" autoComplete="off" name="message" id="message" placeholder="Message" />
                  </div>
                  <div className="mt-5">
                    <button type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="map_container">
              <div className="map-responsive">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France"
                  width="600" height="300" frameBorder="0" style={{border:"0", with:"100%",height:"100%"}}
                  allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}

export default Contact