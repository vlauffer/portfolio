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
                            <strong>Vincent Lauffer</strong>
                            <h4>Product Strategy Advisor / Web App Developer / Designer</h4>
                        </div>
                    </Col>
                    <Col className="secondCol" xs={3} md={1}>
                        
                    </Col>
                    <Col className="secondCol" xs={7} md={4}>
                        <Image src="assets/vincent.jpg" roundedCircle={true} fluid/>
                    </Col>
                </Row>
                <Row>
                    <Container fluid ={false}>
                        <Col xs= {12} sm = {12}>
                            <h2>About Me</h2>
                            <p>I want to build the next generation of great products​. I am recent graduate from Brandeis University, who majored in Business and minored in Computer Science. I love building web apps and games, and am actively looking to help out within the software development industry. I also love product strategy and want to make sure that customers get the respect they deserve within a development environment</p>
                            <a href = "https://drive.google.com/file/d/1FQYBwglDmdV8H1-STwnoHVKAfP70VikO/view">View Full Resume</a>
                        </Col>
                    </Container>

                </Row>
                <Row>
                    <Container className="spacer">
                        
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
