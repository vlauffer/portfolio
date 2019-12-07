import React, { Component } from 'react'
import {Navbar, Nav, NavItem, Button, Alert} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './CustomNavbar.css'
const complements=["You smell great!", "I am really proud of you", "I love your smile", "You look great today",
"You’re like sunshine on a rainy day", "Where is the nearest Chipotle?"];

export default class CustomNavbar extends Component {


    makeComplement(){

        alert(complements[Math.floor(Math.random()*(complements.length-0)+0)]);
    }

    render() {
        return ( 
            <Navbar bg="dark" expand="sm">
                
                <Navbar.Brand href="/">
                    <div className="brandName">Vincent Lauffer</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
            
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        
                        <Button onClick={()=>this.makeComplement()}>Complement Button</Button>
                        <Button variant= "warning" href="https://drive.google.com/file/d/1FQYBwglDmdV8H1-STwnoHVKAfP70VikO/view">View Full Resume</Button>
                        <Button variant= "primary" href="https://www.linkedin.com/in/vincent-lauffer-391317119/">Connect on LinkedIn</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
        )
    }
}
