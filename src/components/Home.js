import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Container, Row, Col, Image, Button, Card} from 'react-bootstrap'
import './Home.css'
const webList=[{name: "WH3N", url:"https://wh3nfrontend.herokuapp.com", desc: ", a mobile-friendly way to organize meetings"},
{name: "Nobee", url:"https://www.rentnobee.com/", desc: ", an easier way to find apartments in Waltham"},
{name: "Slippery Melon", url:"https://imapopanyway.itch.io/slippery-melon", desc: ", a short game, if you can beat it :)"}
]
const busList=[{name: "NRG Marketing Strategy", url:"https://drive.google.com/file/d/1WhOo_pWgJ7RCqARoTyJTbz9JvIs7Z1Yx/view", desc: ""},
{name: "Boeing Case Competition", url:"https://drive.google.com/file/d/151Bm_cB6hmy8T3HbvG5_sKMYzNALncpZ/view", desc: ""},
{name: "Xiaomi's Feature Phone in India", url:"https://drive.google.com/file/d/1v9Z-ykPJeEeWVkC4rcZUM-BzM0cRsUsG/view", desc: ""}
]

export default class Home extends Component {

    

    constructor(props){
        super(props)
    }

    makeList(list){

        return (
            <ul>
                {list.map((value, index) => {
                    return <li key={index}><a href={value.url}>{value.name}</a>{value.desc}</li>
                })}
            </ul>
        );

    }

  

    render() {
        return (
            <Container fluid={true}>
                <Row className= "splitter">
                    <Col className="firstCol" xs = {12} md={6}>

                        <div className= "col-md-12 align-self-center">    
                            <h3>Hello! I'm</h3>
                            <strong>Vincent      Lauffer</strong>
                            <h4>Product Strategy Advisor  </h4>
                            <h4>Web App Developer </h4>
                        </div>
                    </Col>
                    <Col className="secondCol" xs={2} md={1}>
                        
                    </Col>
                    <Col className="secondCol" xs={8} md={4}>

                        <div className="d-flex justify-content-center">
                            
                            <Image src="assets/vincent.jpg" roundedCircle={true} fluid/>  
                            
                        </div>
                        {/* <Image  src="assets/vincent.jpg" roundedCircle={true} fluid/> */}
                    </Col>
                </Row>
                <Row className="aboutRow">
                    <Container className = "aboutContainer"fluid ={true}>
                        <Col xs= {12} sm = {12}>
                            <h2>Here's what I love:</h2>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Row>
                                <Col xs= {12} sm= {4}>
                                
                                <Image src="assets/webdev.png" fluid  />
                                <h5> Full-Stack Web App Developement</h5>
                                </Col>
                                <Col xs= {12} sm= {4}>
                                
                                <Image src="assets/pm.png" fluid />
                                <h5> Product Management</h5>
                                </Col>

                                <Col xs= {12} sm= {4}>
                                
                                <Image src="assets/marketing.png" fluid />
                                <h5>Marketing Analytics</h5>
                                </Col>             
                            </Row>
                        </Col>
                    </Container>

                </Row>
                
                <Row>
                    <Container className="portfolio">
                        <h2> Portfolio </h2>
                        <h3>Web Apps</h3>
                        {this.makeList(webList)}

                        <h3>Product Strategy and Marketing Analysis</h3>
                        {this.makeList(busList)}

                    </Container>
                </Row>

            </Container>
        )
    }
}
