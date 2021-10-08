import React from 'react'
import './Services.css'
import { Row ,Col} from 'react-bootstrap';

function Services() {
     return (
        <Row className="row">
            <Col xs={12} className="about-title justify-content-center">Services</Col>
               <Col xs={12} > <p className="about-port justify-content-center">What we provide for our customers</p></Col>
               <Col xs={12} > <p className="about-port2 justify-content-center">-----------------------------</p></Col>
        
         <div className="service-section">
             
            

            <Row className="webdesign-section">
                <Col xs={12} lg={3}><img className="webdevelop-image" src="https://res.cloudinary.com/lanta/image/upload/v1633711239/4859197_fevchv.jpg"/></Col>
                <Col xs={12} lg={9}> <p className="webdevelop-title">Web Development </p> <p className="webdevelop-content">Web development is the work involved in developing a website for the internet. It includes aspects such as web design, web publishing, web programming, and database management. </p> </Col> 
            </Row>

            <Row className="webdesign-section">
                <Col xs={12} lg={9}> <p className="webdevelop-title">Web Design</p> <p className="webdevelop-content">Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. Web design used to be focused on designing websites for desktop browsers. Web design also includes web apps, mobile apps, and user interface design. </p> </Col> 
                <Col xs={12} lg={3}><img className="webdevelop-image" src="https://res.cloudinary.com/lanta/image/upload/v1633711841/Wavy_Edu-02_Single-05_prrjlv.jpg"/></Col>
            </Row>
            
            <Row className="webdesign-section">
                <Col xs={12} lg={3}><img className="webdevelop-image" src="https://res.cloudinary.com/lanta/image/upload/v1633712388/2809413_hd8gq9.jpg"/></Col>
                <Col xs={12} lg={9}> <p className="webdevelop-title">App Development</p> <p className="webdevelop-content">App development is the process by which software applications are designed to run on mobile devices, such as a smartphone or tablet computer. These applications can be pre-installed on phones during manufacturing platforms, or delivered as web applications using server-side or client-side processing to provide an "application-like" experience within a Web browser.</p> </Col> 
            </Row>

            <Row className="webdesign-section">
                <Col xs={12} lg={9}> <p className="webdevelop-title">Graphic Design</p> <p className="webdevelop-content">Graphic Design is the process of creating visual content to communicate information/ messages to the masses. Considered to be a sub-set of Communication Design, Graphic Design is used to create visual content using elements such as photographs, colours, typography, illustrations, and icons.</p> </Col> 
                <Col xs={12} lg={3}><img className="webdevelop-image" src="https://res.cloudinary.com/lanta/image/upload/v1633712628/5089060_kzlyqw.jpg"/></Col>
            </Row>
             
            <Row className="webdesign-section">
                <Col xs={12} lg={3}><img className="webdevelop-image" src="https://res.cloudinary.com/lanta/image/upload/v1633713713/3456379_q3hwof.jpg"/></Col>
                <Col xs={12} lg={9}> <p className="webdevelop-title">Digital Market</p> <p className="webdevelop-content">Digital marketing is the component of marketing that utilizes internet and online based digital technologies such as desktop computers, mobile phones and other digital media and platforms to promote products and services.</p> </Col> 
            </Row>

            <Row className="webdesign-section">
                <Col xs={12} lg={9}> <p className="webdevelop-title">Social Media Campaign</p> <p className="webdevelop-content">A Social Media Campaign is a coordinated marketing effort that is reinforced for the attainment of the business goal using one or more social media platforms.It is an organized marketing effort to increase consumer awareness, interest, and loyalty to an organization, brand, product, or service, through social media channels.</p> </Col> 
                <Col xs={12} lg={3}><img className="webdevelop-image" src="https://res.cloudinary.com/lanta/image/upload/v1633714687/3545757_avvkd8.jpg"/></Col>
            </Row>
             
         </div>
         <div className="navbar-contact" id="portfolio-section"></div>
         
        </Row>
    )
}
export default Services
