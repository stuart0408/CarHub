import React from "react";
import "../../styles/our-member.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/linkedin.png";
import me from "../../assets/all-images/me.jpeg";
import shivansh from "../../assets/all-images/shivansh.jpeg";

const OUR__MEMBERS = [
  {
    name: "Rakhi Sehrawat",
    experience: "5 years of experience",
    fbUrl: "https://www.facebook.com",
    instUrl: "https://www.instagram.com/_rakhi_sehrawat_/",
    twitUrl: "https://www.twitter.com",
    linkedinUrl: "https://www.linkedin.com/in/rakhi-sehrawat-6112b6212",
    imgUrl: ava01,
  },

  {
    name: "Shivansh Nigam",
    experience: "7 years of experience",
    fbUrl: "https://www.facebook.com",
    instUrl: "https://www.instagram.com/shivansh___711/",
    twitUrl: "https://www.twitter.com",
    linkedinUrl: "https://www.linkedin.com/in/shivansh-nigam-193287205",
    imgUrl: shivansh,
  },

  {
    name: "Nigam Shivansh",
    experience: "11 years of experience",
    fbUrl: "https://www.facebook.com",
    instUrl: "https://www.instagram.com/shivansh___711/",
    twitUrl: "https://www.twitter.com",
    linkedinUrl: "https://www.linkedin.com/in/shivansh-nigam-193287205",
    imgUrl: shivansh,
  },

  {
    name: "Sehrawat Rakhi",
    experience: "7 years of experience",
    fbUrl: "https://www.facebook.com",
    instUrl: "https://www.instagram.com/_rakhi_sehrawat_/",
    twitUrl: "https://www.twitter.com",
    linkedinUrl: "https://www.linkedin.com/in/rakhi-sehrawat-6112b6212",
    imgUrl:me,
  },
];

const OurMembers = () => {
  return (
    <>
      {OUR__MEMBERS.map((item, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={item.imgUrl} alt="" className="w-100" height={450} width={150}/>

              <div className="single__member-social">
                <Link to={item.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={item.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={item.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="section__description text-center">
              {item.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;