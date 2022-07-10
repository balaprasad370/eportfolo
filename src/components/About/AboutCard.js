import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Butra Balaprasad </span>  Reg no - <span className="purple"> 11914653 </span>
            from <span className="purple"> Lovely Professional University Jalandhar, India.</span>
            <br />
            <br />
            I’m a professional and talented Software Engineer with front and back end development skills. I am passionate about leveraging my diverse backgrounds to decipher challenging problems and create delightful experiences. I honed my skills at web development.
I develop websites with HTML, CSS, JavaScript and React. Being a diligent, hardworking and result oriented, I always work towards achieving best result on each project I lay my hands on.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
