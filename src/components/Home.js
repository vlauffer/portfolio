import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Container, Row, Col, Image, Button, Card} from 'react-bootstrap'
import './Home.css'
import Typing from 'react-typing-animation';

const webList=[{name: "WH3N", url:"https://wh3nfrontend.herokuapp.com", img: "assets/wh3npic.jpg", desc: ", a mobile-friendly way to organize meetings"},
{name: "Nobee", url:"https://www.rentnobee.com/", img: "assets/house.png", desc: ", an easier way to find apartments in Waltham"},
{name: "Slippery Melon", url:"https://imapopanyway.itch.io/slippery-melon", img: "assets/Melon2.png", desc: ", a short game, if you can beat it :)"}
]
const busList=[{name: "NRG Marketing Strategy", url:"https://drive.google.com/file/d/1WhOo_pWgJ7RCqARoTyJTbz9JvIs7Z1Yx/view", img: "assets/nrg.png", desc: ""},
{name: "Boeing Case Competition", url:"https://drive.google.com/file/d/151Bm_cB6hmy8T3HbvG5_sKMYzNALncpZ/view",  img: "assets/boeing.png", desc: ""},
{name: "Xiaomi's Feature Phone in India", url:"https://drive.google.com/file/d/1v9Z-ykPJeEeWVkC4rcZUM-BzM0cRsUsG/view",img: "assets/xmi.png", desc: ""}
]

export default class Home extends Component {

    

    constructor(props){
        super(props)
    }

    makeList(list){

        return (
            <>
                {list.map((value, index) => {

                    return <Col key = {index} xs={6} sm={4}>
                        <a className = "imageText" href={value.url}>

                            <Image src= {value.img} />
                            <h1><span>{value.name}{value.desc}</span></h1>
                        </a>
                    </Col>
                     
                    
                    
                    
                    // <li key={index}><a href={value.url}>{value.name}</a>{value.desc}</li>
                })}
            </>
        );

    }

  

    render() {
        return (
            <Container fluid={true}>
                <Row className= "splitter">
                    <Col className="firstCol" xs = {12} md={6}>

                        <div className= "col-md-12 align-self-center">  
                            <Typing>
                                <h3>Hello! <Typing.Delay ms={800} />I'm <Typing.Delay ms={500} /></h3>
                                <strong>Vincent     <Typing.Delay ms={200} /> Lauffer</strong>
                                <h4>Product Strategy Advisor  </h4>
                                <h4>Web App Developer </h4>
                            </Typing>  
                            
                        </div>
                    </Col>
                    <Col className="secondCol" xs={2} md={1}>
                        
                    </Col>
                    <Col className="secondCol" xs={8} md={4}>

                        
                            
                        <Image src="assets/vincent.jpg" roundedCircle={true} />  
                            
                        
                        
                    </Col>
                </Row>
                <Row className="aboutRow">
                    <Container className = "aboutContainer"fluid ={true}>
                        <Col xs= {12} sm = {12}>
                            <Typing>
                                <Typing.Delay ms={9000} />
                                <h2>Here's what I love:</h2>
                            </Typing>
                            
                            <br></br>
                            <br></br>
                            <br></br>
                            <Row className="aboutRow2">
                                <Col xs= {12} sm= {4}>
                                
                                <Image src="assets/webdev.png" fluid  />
                                <h5> Web App Developement</h5>
                                <p>Knowledge of React.js, Node.js, PostgreSQL, GitHub and more! </p>
                                </Col>
                                <Col xs= {12} sm= {4}>
                                
                                <Image src="assets/pm.png" fluid />
                                <h5> Product Management</h5>
                                <p>I make sure that the right product is made for the right customer </p>
                                </Col>

                                <Col xs= {12} sm= {4}>
                                
                                <Image src="assets/marketing.png" fluid />
                                <h5>Marketing Analytics</h5>
                                <p>Customer, discovery, segmentation and analysis   </p>
                                </Col>             
                            </Row>
                        </Col>
                    </Container>

                </Row>
                
                <Row>
                    <Container className="portfolio">
                        
                        <h2>Web Apps</h2>
                        <Row>
                            {this.makeList(webList)}
                        </Row>
                        
                        
                        <h2>Product Strategy and Marketing Analysis</h2>
                        <Row>
                            {this.makeList(busList)}
                        </Row>
                        

                    </Container>
                </Row>

            </Container>
        )
    }
}
