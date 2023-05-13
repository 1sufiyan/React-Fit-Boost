import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import logo from "../Assets/logo.png"
import { MdLocationOn, MdAddCall } from "react-icons/md"
import { HiMail } from "react-icons/hi"
import "./All.css"
import "./Responsive.css"
function NavScrollExample() {
    return (
        <>
            <Navbar className="PC-Nav" style={{background:"#eee"}} bg="Light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <div style={{ padding: "0px 20px 0px 80px" }}>
                            <img src={logo} style={{ width: "45px", height: "45px", display: "inline", verticalAlign: "middle" }} alt="" />
                            <h1 style={{ display: "inline", verticalAlign: "middle", paddingLeft: "8px",fontFamily:"cursive" }}>FitBoost</h1>
                        </div>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" style={{ paddingLeft: "150px" }}>

                        <div className='top-nav-icons' style={{ paddingLeft: "100px" }}>
                            <MdLocationOn style={{ fontSize: "30px", color: "#f8bc1a" }} />
                            <p style={{ display: "inline", fontSize: "18px", paddingLeft: "12px", verticalAlign: "middle", fontFamily: "-moz-initial" }}>Location</p>
                        </div>
                        <div className='top-nav-icons' style={{ paddingLeft: "100px" }}>
                            <MdAddCall style={{ fontSize: "30px", color: "#f8bc1a" }} />
                            <p style={{ display: "inline", fontSize: "18px", paddingLeft: "12px", verticalAlign: "middle", fontFamily: "-moz-initial" }}>Call : +123 456 789</p>
                        </div>
                        <div className='top-nav-icons' style={{ paddingLeft: "100px" }}>
                            <HiMail style={{ fontSize: "30px", color: "#f8bc1a" }} />
                            <p style={{ display: "inline", fontSize: "18px", paddingLeft: "12px", verticalAlign: "middle", fontFamily: "-moz-initial" }}>mail@domain.com</p>
                        </div>



                    </Navbar.Collapse>
                </Container>
            </Navbar>


            {/* -------------------------Mobile Nav---------------------------- */}

            <Navbar className="mobile-nav" bg="Light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <div style={{ padding: "0px 20px 0px 50px" }}>
                            <img src={logo} style={{ width: "45px", height: "45px", display: "inline", verticalAlign: "middle" }} alt="" />
                            <h1 style={{ display: "inline", verticalAlign: "middle", paddingLeft: "8px" }}>FitBoost</h1>
                        </div>

                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" style={{ paddingLeft: "150px" }}>

                        <Nav
                            classNameName="me-auto mx-auto my-2 my-lg-0"
                            style={{ margin: "0px auto", maxHeight: '100px', justifyContent: "right" }}
                            navbarScroll
                        >
                            <Nav.Link href="/" className='yellow-Nav-link'>Home</Nav.Link>
                            <Nav.Link href="/about" className='yellow-Nav-link'>About</Nav.Link>
                            <Nav.Link href="/services" className='yellow-Nav-link'>Services</Nav.Link>
                            <Nav.Link href="/Testimonials" className='yellow-Nav-link'>Testimonials</Nav.Link>
                            <Nav.Link href="/contact" className='yellow-Nav-link'>Contact</Nav.Link>
                        </Nav>



                    </Navbar.Collapse>
                </Container>
            </Navbar>


            {/* -------------------------Yellow Nav---------------------------- */}

            <div className='menu'>
                <Navbar className='Yellow-Nav' style={{ background: "#f8bc1a", margin: "0px 150px 0px 150px" }} expand="lg">
                    <Container fluid>
                        {/* <Navbar.Brand href="#"></Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                classNameName="me-auto mx-auto my-2 my-lg-0"
                                style={{ margin: "0px auto", maxHeight: '100px', justifyContent: "right" }}
                                navbarScroll
                            >
                                <Nav.Link href="/" className='yellow-Nav-link'>Home</Nav.Link>
                                <Nav.Link href="/about" className='yellow-Nav-link'>About</Nav.Link>
                                <Nav.Link href="/services" className='yellow-Nav-link'>Services</Nav.Link>
                                <Nav.Link href="/testimonials" className='yellow-Nav-link'>Testimonials</Nav.Link>
                                <Nav.Link href="/contact" className='yellow-Nav-link'>Contact</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>



    );
}

export default NavScrollExample;
