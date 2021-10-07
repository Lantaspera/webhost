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
            <img src="https://avatars.githubusercontent.com/u/85632108?v=4" class="profile-img" />


            <div className="profile-details">
              <h3 className="profile-details1" >Adrid Sadanand p </h3>
              <h5 className="profile-details2">COO-[Founder]</h5>

            </div>
          </div>
        </div>

        <div className="profiles">
          <div className="pro-pic">
            <img src="https://avatars.githubusercontent.com/u/84629891?v=4" class="profile-img" />

            <div className="profile-details">
              <h3 className="profile-details1" >Akshay Nambiar PV </h3>
              <h5 className="profile-details2">CEO-[Co-Founder]</h5>


            </div>
          </div>

        </div>

        <div className="profiles">
          <div className="pro-pic">
            <img src="https://avatars.githubusercontent.com/u/48583694?v=4" class="profile-img" />


            <div className="profile-details">
              <h3 className="profile-details1" >Azhar Kalarickal</h3>
              <h5 className="profile-details2">CTO-[Co-Founder]</h5>

            </div>
          </div>
        </div>

        <div className="profiles">
          <div className="pro-pic">
            <img src="https://ca.slack-edge.com/T0246ARE8UT-U024DHJ8KRC-26b8dc94c171-72" class="profile-img" />


            <div className="profile-details">
              <h3 className="profile-details1" >Abdul Basith C </h3>
              <h5 className="profile-details2">CAO-[Co-Founder]</h5>

            </div>
          </div>
        </div>


        <div className="profiles">
          <div className="pro-pic">
            <img src="https://ca.slack-edge.com/T0246ARE8UT-U0255ERTF0V-a40de1056f78-512" class="profile-img" />


            <div className="profile-details">
              <h3 className="profile-details1" >Donna Susan Samuel  </h3>
              <h5 className="profile-details2">CIO-[Co-Founder]</h5>

            </div>
          </div>
        </div>

        <div className="profiles">
          <div className="pro-pic">
            <img src="https://lh3.googleusercontent.com/5RdjNR0AddkFHYGSlgt0hYO8ZvvLTXGP2ih4krfx-m4mxCsrWB-5pzofHoCUPBpRlbTn4L9u-S4rRbARX-GYFCVMawXeL5Xbx1v22rl8e_DUFIzUtF-WQNF9vofVyxtL0OkCzwGGBc84E3awFk1kaDuGXCADMU0f3LQLCbsY1ySycmWi64Jpjpn9Hsx7Oa_xLXIRA_TUMdMco6S2fno16eH3W3i1zzZhYeFjqtDJ36aBLcH3JlSbIIrN-0MiXIZoTWUbYEHn-RhI9rtIuqWLaG1Pp1O5-ntjt8ug53mqkGPEW94kopf6T2kgYa2LND2C_wbWl2AyD-j3xOlIjBJN0cOfXDqJuldyfDRWJuq0ptnpqhdQaoWEivfsE2ZL1IcmdxpPVPOl-JzuJ-qVDFs0MXl1Miql4pNvY7dhDd2hEXxJKWJTtMUviLPlOtGcWTCOSYefOhQJZ9-HxSsQwb4J8U-6_ONicuY4_V1RM7f54Dj8SLbXwXYLs6qwFH_SQcbeoUjZM8htBnmXHauMM-HF7V4Q6ZE7Ssorvzr9OPSe-ueDvoLYyBC6TbklCo6_i1nab4Dmz7Au8MVXFn4950ODjdW_KAMgi9fbPpXFJINdEd3LMe04lu1dMLaLs5zuwxIyEB7k1qYSdwqVBRV6ZNGFHFHF-1JEghVxz-MXQb6FSGJ1B6Geu2iA_eBc2aCFsWaChwYS5K1ioFY1NVQMCrdnCcU=w693-h923-no?authuser=2" class="profile-img" />

            <div className="profile-details">
              <h3 className="profile-details1" >Gagana Karpurachalil </h3>
              <h5 className="profile-details2">CDO-[Co-Founder]</h5>

            </div>
          </div>
        </div>



        <div className="profiles">
          <div className="pro-pic">
            <img src="https://avatars.githubusercontent.com/u/88938045?v=4" class="profile-img" />


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

