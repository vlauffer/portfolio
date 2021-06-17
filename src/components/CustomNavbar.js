import React, { Component } from 'react'
import {Navbar, Nav,  Button,Image} from 'react-bootstrap'

import './CustomNavbar.css'
const complements=["You smell great!", "I am really proud of you", "I love your smile", "You look great today",
"You’re like sunshine on a rainy day", "You're wonderful", "You're like sunshine on a rainy day","You always know how to find that silver lining",
"You're inspiring","You're a smart cookie","The people you love are lucky to have you in their lives",
"Your hair looks stunning","On a scale from 1 to 10, you're an 11","You're really something special","Where is the nearest Chipotle?"];
const resumeLink = "https://drive.google.com/file/d/1V0Cai9b6fIcCUtfBNZeKdIuAnAGjG9Z-/view?usp=sharing";

export default class CustomNavbar extends Component {


    makeComplement(){

        alert(complements[Math.floor(Math.random()*(complements.length-0)+0)]);
    }

    render() {
        return ( 
            <Navbar bg="dark" expand="sm">
                
                <Navbar.Brand href="/">
                    <Image src = "assets/navbaricon.png" width = {30} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        
                        <Button onClick={()=>this.makeComplement()}>Receive a Compliment</Button>
                        <Button variant= "warning" href={resumeLink}>View Full Resume</Button>
                        <Button variant= "primary" href="https://www.linkedin.com/in/vincent-lauffer-391317119/">Connect on LinkedIn</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        )
    }
}
