import React from 'react'
import { Row ,Col} from 'react-bootstrap';
import './About.css'




function About() {
   

    return (
        <Row className="row">
            <Col xs={12} className="about-title justify-content-center">About Us</Col>
               <Col xs={12} > <p className="about-port justify-content-center">Few words about our venture</p></Col>
               <Col xs={12} > <p className="about-port2 justify-content-center">-----------------------------</p></Col>
                <Col className="para-about">Lantaspera Technologies is an advanced IT solutions company providing customized software development, web application developent, mobile application development and IT consulting services. We offers a full range of IT services to support your buisness infrastructure providing latest cutting edge technology solutions. We provide services to clients from various industries like hospitality, healthcare, services, tourism, IT companies, infrastructure, retailers& online media houses. Our vision is to earn trust and to deliver leading edge secure technologies ,intelligent technical solutions, secure access to any services, data and information anytime, anywhere to the customers.</Col>     
            
        </Row>
        
    

);
}

export default About
