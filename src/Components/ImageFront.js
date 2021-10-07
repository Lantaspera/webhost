import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './ImageFront.css'
import { Row, Col, } from 'react-bootstrap'
import React from 'react'
import Navbar from './navbar'
import FlottingWindow from './FlottingWindow'

const fadeImages = [
  'https://res.cloudinary.com/lanta/image/upload/v1633623606/image-5_m31hur.jpg',
  'https://res.cloudinary.com/lanta/image/upload/v1633623597/image-3_fzdbnd.jpg',
  'https://res.cloudinary.com/lanta/image/upload/v1633623597/image-1_luineq.jpg',
  'https://res.cloudinary.com/lanta/image/upload/v1633623598/image-4_ssxebm.jpg'

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


          

          <Fade duration={800}
            transitionDuration={1000}
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

















