import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Assets/logo.png"
import { MdLocationOn, MdAddCall } from "react-icons/md"
import { HiMail } from "react-icons/hi"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"



import "./All.css"
import "./Responsive.css"


function Foot(){


  return(
    <>
        <Navbar  style={{background:"#eee",borderTop:"1px solid #bbb"}} bg="Light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <div style={{ padding: "0px 20px 0px 80px" }}>
                            <img src={logo} style={{ width: "45px", height: "45px",  verticalAlign: "middle" }} alt="" />
                            <h1 style={{ display: "inline", verticalAlign: "middle", paddingLeft: "8px",paddingRight:"80px",fontFamily:"cursive"}}>FitBoost</h1>    
                        </div>

                    </Navbar.Brand>
                </Container>
            </Navbar>
    </>
  );
}

export default Foot