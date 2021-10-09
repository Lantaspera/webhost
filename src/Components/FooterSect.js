import React from 'react'
import './footer.css'
import { Row,Col } from 'react-bootstrap'

function FooterSect() {
    return (
        <Row className="main-row">
            <Col xs={12} lg={12}>
                
            <Row xs={12} lg={6}  ><img className="main-pictr" src="https://res.cloudinary.com/lanta/image/upload/v1633713424/NEWW_nrupma.png" /></Row>
           
          <Col className="main-clm"  lg={6}>
          
                <Row className="main-title" xs={3} lg={3}>
               
                    <Col><p>Servicers</p></Col>
                    <Col><p>About</p></Col>
                    <Col><p>Help</p></Col>
                    
                </Row>
                <Row className="subs-title" xs={3} lg={3}>
                    <Col><p>Campaigns</p></Col>
                    <Col><p>Benefits</p></Col>
                    <Col><p>FAQs</p></Col>
                   
                </Row>
                <Row className="subs-title" xs={3} lg={3}>
                    <Col><p>Web developments</p></Col>
                    <Col><p>Team</p></Col>
                    <Col><p>Contact Us</p></Col>
                   
                </Row>
                <Row className="subs-title" xs={3} lg={3}>
                    <Col><p>Branding</p></Col>
                    <Col><p>careers</p></Col>
                    
                </Row>
           </Col>    
            </Col>
            <Col className="copyryt" xs={12} lg={12}><p>Copyright © 2021 Lantaspera technologies. All rights reserved.</p></Col>
        </Row>
  )}
export default FooterSect
