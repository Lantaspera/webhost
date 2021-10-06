import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './ImageFront.css'
import { Row, Col, } from 'react-bootstrap'
import React from 'react'
import Navbar from './navbar'
import FlottingWindow from './FlottingWindow'

const fadeImages = [
  'https://drive.google.com/file/d/1EMb4I8kqbFBJa8Q_n5UDl6DqBp-hrLra/view?usp=sharing',
  'https://drive.google.com/file/d/1A-D-PQsDbEjWVhSzS5xFGBE6LAkZn28L/view?usp=sharing',
  'https://drive.google.com/file/d/1vza0bvCdqsDbpAl5wJ7wa9bE62GiTZIl/view?usp=sharing',
  'https://drive.google.com/file/d/1vza0bvCdqsDbpAl5wJ7wa9bE62GiTZIl/view?usp=sharing'

];




function ImageFront() {

  return (
    <Row>
      <Col>
        <Col style={{
          height: '100vh',
          width: '100vw',

          backgroundSize: 'cover',
          zIndex: '-1'

        }}>
          <Navbar />


          

          <Fade duration={1200}
            transitionDuration={2500}
            infinite={true}
            arrows={false} >


 
            <div className="each-fade">
            <FlottingWindow/>
              <img style={{
                height: '100vh',
                width: '100vw',

                backgroundSize: 'cover'
              }} src={fadeImages[0]} />
            </div>
            <div className="each-fade">
            <FlottingWindow/>
              <img style={{
                height: '100vh',
                width: '100vw',

                backgroundSize: 'cover'
              }} src={fadeImages[1]} />
            </div>
            <div className="each-fade">
            <FlottingWindow/>
              <img style={{
                height: '100vh',
                width: '100vw',

                backgroundSize: 'cover'
              }} src={fadeImages[2]} />
            </div>
            <div className="each-fade">
            <FlottingWindow/>
              <img style={{
                height: '100vh',
                width: '100vw',

                backgroundSize: 'cover'
              }} src={fadeImages[3]} />
            </div>


          </Fade>




        </Col>



      </Col>
      <div className="navbar-contact" id="services-section"></div>
    </Row>


  );
}
export default ImageFront

















