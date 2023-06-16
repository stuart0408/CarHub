import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section__description">
              Welcome to CarHub car rental
We are CarHub car rental, the car rental company best in Gwalior. We offer you the best personal service with all inclusive rates. With us, you don't have to queue for a long time because of our fast airport service, so you are on your way with your rental car quickly. You don't have to think about anything, because everything you need is included with your rental car!
              </p>
              <ul >
                <li >
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Fast airport service
                    .   
                  </p> 
                </li>
                <li>
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> No prepayment when booking
                    .
                  </p>
                </li>
                <li>
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Free cancellation up to the moment of arrival
                    .
                  </p>
                </li>
                <li>
                  <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> No billing of unused days when shorten the rental period
                    .
                  </p>
                </li>
              </ul>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100"/>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;