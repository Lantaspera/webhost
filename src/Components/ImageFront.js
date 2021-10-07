import { Fade } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './ImageFront.css'
import { Row, Col, } from 'react-bootstrap'
import React from 'react'
import Navbar from './navbar'
import FlottingWindow from './FlottingWindow'

const fadeImages = [
  'https://lh3.googleusercontent.com/VGc7PatFS29lTRuJ2QdMx4Nj3AUHSVBCH7Bl0K5Y7gplAVk7lP7BloLHWz8x-dLSHM_QbH2bfvQizhvkBuFtcUhIFUWf45ldzM_TNpyascISlhwdzTzAy2c-mdV3GUn6JJRRbfEic13L_KNXoL2lUmKsDRRRyC-KrZpHujWB01b-2DRz9dXdJ3AjRA0BDv__awZ29RGlcivaelRr7BkpvdBkQ5OsGkGuXNKtpdLUy0kP4y6kZq3rLHyPD-BFmBog6d0ps01yX0_ymxWD2JO6wy3I-UkXYvNGEi-ZMaOPfgpb64aKtfkuaaBp23C_sJazVDNdcKL9aYBe0asInzbkowp0kJkKOmpW4rKwseb5TgbqLEH9Jt90_pG6fmy9wmB5Fm6djVGBH6czk4EK7sV4xrNYFGa7ed49PKMsW0ANuE4JNpf-53UVcFxgyvM9AkFjSLGrbi_sZQolg8X9EypuAg7A9F_1Mmb5v_uzOcIUjqGSmEH11p3KalB92EcBqW1jkHb07C2AXxgh2CWHvffVvGlDckQTtLyENedEgqxYFPuG3nyjmkBacznV9efrZntcNK92iiUz__79W5cDbeMCPXq4IVGJWJEIMdbDu1cRYdUo0kbfQoRQb2OSGcO1zhOlYjk8l3jPHaDMgW9uxf6UM6hMPH5bGQ4wCrapM3_MKLghcgC1CgQj9rvevOcjsmpeV6PdVSEq3pj96XXxDipQkE4=w1280-h720-no?authuser=2',
  'https://lh3.googleusercontent.com/TzEhIrN7v-smwvZCY1TG9t3yJGS8pnsiSB1DWjAaYtmzLu5UEgdzD7DNDYZiZZpfP02k6MFJqnXFnYJ6NYlKAXXJ9TCb69iSGVnjGeb5rAjUn4E98aHTNI6fCeJBgry1q8E6sQWWgu_1akL52PAlCqsdJt1rKzdg7EjQt1Ih8tJeGRTtv4bVTMKIDfliZYvdlyfZ3O6ZWe-okVq0n-c3pVB-Dw6rX9LdBoODs0el08R9ZkrdIQze3mdxoszzT8QTtS-laO5PvlL5MJyiWIOWs070UVBD_g9Szt_clD0r59csjoUKg6wahE1hnOs_AhC9h4ZTO820vX9g3p6IttxBvw1f6gBItQN0m168VDbjjN36S5V83ckuU7PpvjfgPH1SQJhodM8G3sC9RQW0Z7L1ipvCjvrWF0wDxXTjYMnuiThuqV2vM-r4YHLtm5l2E7WHLO8wXdNZWi4jGdli3pO9eYP3ZcoWorzs2rYt1lHjv2jIJxRyNd6ufC4_cHXgtBn_20BOllCVWDLpQBbe-1xeWQqzbHQr6fSgIWtGKOJkzdZ9qrKnu51M5KZqhAAbYYyrRbq_atORKxGrDGtTeBvuDUezGqALFryefhLbeICoP6XUOf_h3FqKLgdw7BIOEUMlRiN59M6DZ1obSYn9oI_YpxWCUkGLpZp3ueyrimpyRRHnhIej-m7pS-qDc8n9raln0qKda3M8HIm3opPuavOreMY=w1280-h720-no?authuser=2',
  'https://lh3.googleusercontent.com/Dqci_k4WUGD5Ymp2YIS9PFL2Hcd5MQFG-fM5q31dzUv0je5Dp_Vvj3lv8vRSg8WEbrEx2LeZqs-506_8gf9c45cNlZihDeQg5m0oDMpGS8hPqi--OP45AD7dShvzGwMbbALO0WFgzMpVSTj4FaPfg7FvTash1zvWy27qULQJ5jYu4H5gcn4zJZ9ZhpzYvufb9SGUWDZEx8zC64GJXLQcc0b8Y7ERx4TEuL67nXShdzDSMu9HRVl7gM4zD5rR9B-92RNAbidH0o6pTIvWs1OWSvgctlEB96eYm_QclVudjoXIqlrKpe08YqmZiPQvVP7kBIdfPKseolZEoo7e7Bf8AyV9VOtaBihkzTYkSt5s8hiD2up7mLU18vo1ijAlpPtGnl9g38kiM9WUGvQyhzLaxoY2Gnoh15Bb2-ryHbrnojHYkgtmQHrJlgL3V5Y2vV4VyoS6kbfwETmL_hWtE7Ih0ZTn68asbt2ddozKkNZd8ltoh7CCHFOb4kji0Q-324IfiawNUsGVsUUtNiquX4PC5kHaQprJNiJjbOHTdwhcpdi5gdkzPvsIWrMQpdcubqvRf55MSfX0qTUUmWsWWPqJWjvVlZpXuW7PpAInDxEIPuzaJ8xOHiKNRXLNNP8VlaECvN2EDtjsmFM7BqPjxVPzketYWqwRuVMOXtukaFIzcWMsuDBImJwM2sCoVSQnrjP62KrxQPbSk1cu_ZrmgpJAgD0=w1280-h720-no?authuser=2',
  'https://lh3.googleusercontent.com/-DiY9t5eqezODuQxnNI8u8vNL7xR-dQRKjc3puaTRh4_LoowhvTIvWjkD8T82n5yjSMwo2k9cPJHbx41WsOTTjqbTiR-Yw0u59M15O3MwAhTpBb-pD9Cp5kbvPUR5EOwrB6A30kOjDoKYocjPQAfSFJOS-AFbrD61f9QngvlZo__ByN9fG-7-PHi5eLkMcCiE2FPHC7bhNFdAxAuqAGDcsAGjLa4mm0NOZxn4Ns9UovKEUE7wkJ57ihg8NvVZlZE1of542qAQUYHNSRnRunDn1Kf5-214TKfshDNTMw7xaJgd232a1ZNkVNAlS_PXLaAWRixIRSA0PKfQCBQEdqrqLjB-kmtLjmfvXrr5_sxQ3UxXvuyNIgODyXMc22n6KOLlLpgVEMebj4fKbWncgWqayzvAzY58yfxpWSxGaBoQOk54QUy8pIq7Cyr8TEG8BrGc4mzGcCt_ZZAjcunY5VyI0_LTqyXLagGp3M04LghmFiRrHjJPDXS-hhz2WHW4SiNC8_JpV_VajLLIOxWugBJsNOADIuo69YGNpicygOksxLvJT5B99KH4n1e84KypmcR2ROB01NkMfNpcLkW7JFGm-OTnILbu7bG8myx9i0E9u_vMdf9hMm1KEhYIcgT_zy1FusY3N9kuxB31tzaxYbwID3eRKEQ9jJkOuTmmOFDqCIFqb62IAfYZpjLGVMOR9jg32hiPbPEnkDUmS-utYtiOlE=w1280-h693-no?authuser=2'

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

















