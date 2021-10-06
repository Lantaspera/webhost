import React from 'react'
import './ImageFront.css'
import { Row, Col, } from 'react-bootstrap'


var ReactRotatingText = require('react-rotating-text');

function FlottingWindow() {
    return (
        <Row xs={12} lg={12} className="home-welcome">
           
            <Col xs={10} lg={12} className="bg-welcome" >
            <Col  xs={2} lg={2} ></Col>
              <Col className="home-welcome1"><ReactRotatingText color={"white"}
                items={['Welcome to Lantaspera', 'The iconic symbol of tech', 'Join with us']} /></Col>
              <Col><p className="caption-welcome"  >We are dedicated to provide the latest cutting edge technology solutions to our Clients and Organizations Across varied Industry domains.</p>
              </Col>
              <Col><button className="btn-image" id="#contact-section" onClick="reply_click(this.id)" >Lets get started</button></Col>
            </Col>
          </Row>
    )
}

export default FlottingWindow
