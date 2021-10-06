import React, {useState} from 'react'
import './navbar.css'


const Navbar = () => {
    const [show, setShow] = useState(false);
    return (
        <div className="img-bg">
         <div style={{position: 'fixed',
         padding : '5rem 0',
         
               width: '100%',
               height: '115px',opacity: '0.44',background:'black',zIndex:'10'}}
         ></div>

            <section style={{ 
               padding : '2rem 0',
               position: 'fixed',
               width: '100vw',
               
               height: '90px',
               margin: '0 ',
               
               display: 'initial',
               zIndex:'10'
               
              }}>

           <nav class="navbar navbar-expand-lg navbar-light bg-transperant  ">
  <div className="container">
      <div>
    <a className="navbar-brand"  href="#" 
     >LANTASPERA </a>

    <p className="tech">TECHNOLOGIES</p>
    </div>
    
    
    <button className="navbar-toggler"
    type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    onClick={() => setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className= {`collapse navbar-collapse ${show ? "show" : ""}`} >
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home-section">HOME</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services-section">SERVICES</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portfolio-section">PORTFOLIO</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about-section">ABOUT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact-section">CONTACT</a>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
</section> 

        </div>
    )
}

export default Navbar
