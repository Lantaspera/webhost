import React from 'react'
import './team.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};



function TeamMembers() {





  return (

    <div className="team-section">

      <h1 className="heading-team">Our Team</h1>

      <Carousel draggable={false} responsive={responsive} infinite={true} autoPlay={true} arrows={false} >


        <div className="profiles">
          <div className="pro-pic">
            <img src="https://avatars.githubusercontent.com/u/85632108?v=4" className="profile-img" />


            <div className="profile-details">
              <h3 className="profile-details1" >Adrid Sadanand p </h3>
              <h5 className="profile-details2">COO-[Founder]</h5>

            </div>
          </div>
        </div>

        <div className="profiles">
          <div className="pro-pic">
            <img src="https://avatars.githubusercontent.com/u/84629891?v=4" className="profile-img" />

            <div className="profile-details">
              <h3 className="profile-details1" >Akshay Nambiar PV </h3>
              <h5 className="profile-details2">CEO-[Co-Founder]</h5>


            </div>
          </div>

        </div>

        <div className="profiles">
          <div className="pro-pic">
            <img src="https://avatars.githubusercontent.com/u/48583694?v=4" className="profile-img" />


            <div className="profile-details">
              <h3 className="profile-details1" >Azhar Kalarickal</h3>
              <h5 className="profile-details2">CTO-[Co-Founder]</h5>

            </div>
          </div>
        </div>

        <div className="profiles">
          <div className="pro-pic">
            <img src="https://ca.slack-edge.com/T0246ARE8UT-U024DHJ8KRC-26b8dc94c171-72" className="profile-img" />


            <div className="profile-details">
              <h3 className="profile-details1" >Abdul Basith C </h3>
              <h5 className="profile-details2">CAO-[Co-Founder]</h5>

            </div>
          </div>
        </div>


        <div className="profiles">
          <div className="pro-pic">
            <img src="https://ca.slack-edge.com/T0246ARE8UT-U0255ERTF0V-a40de1056f78-512" className="profile-img" />


            <div className="profile-details">
              <h3 className="profile-details1" >Donna Susan Samuel  </h3>
              <h5 className="profile-details2">CIO-[Co-Founder]</h5>

            </div>
          </div>
        </div>

        <div className="profiles">
          <div className="pro-pic">
            <img src="https://res.cloudinary.com/lanta/image/upload/v1633623597/gagananpic_ubhixq.jpg" className="profile-img" />

            <div className="profile-details">
              <h3 className="profile-details1" >Gagana Karpurachalil </h3>
              <h5 className="profile-details2">CDO-[Co-Founder]</h5>

            </div>
          </div>
        </div>



        <div className="profiles">
          <div className="pro-pic">
            <img src="https://avatars.githubusercontent.com/u/88938045?v=4" className="profile-img" />


            <div className="profile-details">
              <h3 className="profile-details1" >Anusha Surendran </h3>
              <h5 className="profile-details2">CFO-[Co-Founder]</h5>

            </div>
          </div>
        </div>






      </Carousel>;
      <div className="navbar-contact" id="contact-section"></div>
    </div>


  )
}

export default TeamMembers

