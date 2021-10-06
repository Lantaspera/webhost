import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './Contact.css'
function Contact() {
    return (
        <Row>


            <Col xs={12} lg={8} className="form">
                <p className="title-contact ">Contact form</p>
                <p className="para-contact">Drop a message !</p>
                <p className="para1-contact">Fields marked with an asterisk (*) are required.</p>
                <Row className="form-contact">
                    <Col xs={12} lg={6}>
                        <Col xs={12} ><p className="text-contact">First name</p></Col>
                        <Col xs={12} > <input className="box-contact"></input></Col>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Col xs={12} ><p className="text-contact">Last name</p></Col>
                        <Col xs={12} > <input className="box-contact"></input></Col>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Col xs={12} ><p className="text-contact">Email</p></Col>
                        <Col xs={12} > <input className="box-contact"></input></Col>
                    </Col>
                    <Col xs={12} lg={6}>
                        <Col xs={12}><p className="text-contact">Phone</p></Col>
                        <Col xs={12} > <input className="box-contact"></input></Col>
                    </Col>
                    <Col xs={12} lg={12}>
                        <Col xs={12}><p className="text-contact">Message</p></Col>
                        <Col xs={12} > <textarea className="message-box"></textarea></Col>
                    </Col>
                </Row>
            </Col>
            <Col xs={12} lg={4} className="adress">
                <p className="getin">Get In Touch</p>
                <p className="con-adress">www.lantespera.com </p><br />
                <p className="getin2">Follow Us In</p>
                <p className="con-adress2">facebook<br />instagram<br />youtube </p>
            </Col>


        </Row>
    )
}
export default Contact
