import React, { Component } from 'react'
import {Navbar, Nav, NavItem, Button, Alert} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './CustomNavbar.css'
const complements=["You smell great!", "I am really proud of you", "I love your smile", "You look great today",
"You’re like sunshine on a rainy day", "You're wonderful", "You're like sunshine on a rainy day","You always know how to find that silver lining",
"You're inspiring","You're a smart cookie","The people you love are lucky to have you in their lives",
"Your hair looks stunning","On a scale from 1 to 10, you're an 11","You're really something special","Where is the nearest Chipotle?"];

export default class CustomNavbar extends Component {


    makeComplement(){

        alert(complements[Math.floor(Math.random()*(complements.length-0)+0)]);
    }

    render() {
        return ( 
            <Navbar bg="dark" expand="sm">
                
                <Navbar.Brand href="/">
                    <div className="brandName">VL</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        
                        <Button onClick={()=>this.makeComplement()}>Recieve a Complement</Button>
                        <Button variant= "warning" href="https://drive.google.com/file/d/1FQYBwglDmdV8H1-STwnoHVKAfP70VikO/view">View Full Resume</Button>
                        <Button variant= "primary" href="https://www.linkedin.com/in/vincent-lauffer-391317119/">Connect on LinkedIn</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        )
    }
}
