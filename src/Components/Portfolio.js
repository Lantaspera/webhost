import React from 'react'
import { Row, Col, } from 'react-bootstrap'
import './Portfolio.css'


function Portfolio() {
    return (
     
            <Row className="portfolio-section" >
                <Row xs={12}>
                <Col xs={3}><img src="https://res.cloudinary.com/lanta/image/upload/v1633623606/qmark_gd3ukn.png" className="qmark-img" /></Col>
               <Col xs={9}></Col>
                <Col xs={12} ><h2 className="title-port  ">Real expirience with the <br></br> Real stories of our customers</h2></Col>
                <Col><p className="title-sub">we are gland to share the expirience of our succesfull condributions</p></Col>
                </Row>
                <Row className="total-port" xs={12} lg={12}>
                    <Col xs={10} lg={3} className="revw-port">
                        <Col className="port-image"><img src="https://res.cloudinary.com/lanta/image/upload/v1633623605/rdionz_otpa0j.jpg" className="logo-image" /></Col>
                        <Col><img src="https://res.cloudinary.com/lanta/image/upload/v1633623605/qutaion_mark2_w7op1h.jpg" className="mark-img" /></Col>
                        <Col><p className="content-paragf">To start my startup landing page design quickly, I was searching for a  developer comunity . Lantaspera is one of the best webpage developers I have come across. Its so flexible, well organised and creative.</p></Col>
                        <Col ><h1 className="name-founder">Dr.Nabeel M Naasar</h1></Col>
                        <Col> <p className="cmpny-dis">Co-Founder -Rdionz Biomobility</p></Col>
                    </Col>


                    <Col xs={10} lg={3}  className="revw-port">
                    <Col className="port-image"><img src="https://res.cloudinary.com/lanta/image/upload/v1633623606/tortis_pp7fkv.png" className="logo-image" /></Col>
                        <Col><img src="https://res.cloudinary.com/lanta/image/upload/v1633623605/qutaion_mark2_w7op1h.jpg" className="mark-img" /></Col>
                        <Col><p className="content-paragf">Doing buisness with Lantaspera is very convenient,their quality of work and time management is excellent.More over the ui they created was very nice.We would like to do more buisness with Lantaspera</p></Col>
                        <Col ><h1 className="name-founder">Dr.Agney Sadanand</h1></Col>
                        <Col> <p className="cmpny-dis">Founder - Tortis</p></Col>
                    </Col>

                    <Col xs={10} lg={3}  className="revw-port">
                    <Col className="port-image"><img src="https://res.cloudinary.com/lanta/image/upload/v1633623606/voyiget_bb5afl.png" className="logo-image" /></Col>
                        <Col><img src="https://res.cloudinary.com/lanta/image/upload/v1633623605/qutaion_mark2_w7op1h.jpg" className="mark-img" /></Col>
                        <Col><p className="content-paragf">voyiget is a home automation startup in calicut.Some of my students own this venture.At its budding stage it was very difficult to make a good mobile app at low budget.But they did it with the help of lantaspera</p></Col>
                        <Col ><h1 className="name-founder">Asst.Pro Paul Mathew</h1></Col>
                        <Col> <p className="cmpny-dis">Director -Voyiget</p></Col>
                    </Col>
                    
                </Row>
                <div className="navbar-contact" id="about-section"></div>
            </Row>
           



           
    )
}

export default Portfolio
