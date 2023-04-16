import "./App.css";
import axiosInstance from "../src/api/index";
import { useEffect, useState } from "react";

function App() {
  const [about, setAbout] = useState([]);
  const [skill, setSkill] = useState([]);
  const [service, setService] = useState([]);
  const [contact, setContact] = useState([]);

  const fetchAbout = async () => {
    try {
      const response = await axiosInstance.get("/data/about");

      console.log(response);
      setAbout(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderAbout = () => {
    return about.map((val, id) => {
      return (
        <div className="about-grid">
          <div className="about-icon">{val.icon}</div>
          <div className="about-title">{val.title}</div>
          <div className="about-sub">{val.sub}</div>
        </div>
      );
    });
  };

  const fetchSkills = async () => {
    try {
      const response = await axiosInstance.get("/data/skills");

      console.log(response);
      setSkill(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchService = async () => {
    try {
      const response = await axiosInstance.get("/data/services");

      console.log(response);
      setService(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderService = () => {
    return service.map((val, id) => {
      return (
        <div className="service-item">
          <div className="service-icon">{val.icon}</div>
          <div className="service-title">{val.title}</div>
          <div className="service-sub">
            {val.sub}
            <i class="uil uil-arrow-right"></i>
          </div>
        </div>
      );
    });
  };

  const fetchContact = async () => {
    try {
      const response = await axiosInstance.get("/data/contacts");

      console.log(response);
      setContact(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderContact = () => {
    return contact.map((val, id) => {
      return (
        <div className="talk-item">
          <div className="talk-icon">{val.icon}</div>
          <div className="talk-title">{val.title}</div>
          <div className="talk-sub">{val.sub}</div>
          <div className="talk-desc">
            {val.desc}
            <i class="uil uil-arrow-right"></i>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    fetchAbout();
    fetchSkills();
    fetchService();
    fetchContact();
  }, []);

  return (
    <div className="App">
      {/* ================ Header ================ */}
      <div className="header-container">
        <div className="header-name">
          krish<span className="span">4alex</span>
        </div>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#service">Service</a>
        <a href="#skills">Skills</a>
        <a href="#blog">Blog</a>
        <a href="#contact">Contact</a>
      </div>

      {/* ================ Home ================ */}
      <div className="home-container" id="home">
        <div className="home-data">
          <div className="home-title">
            krish<span className="span">4alex</span>
          </div>
          <br />
          <div className="home-subtitle"> User Interface Designer</div>
          <br />
          <div className="home-desc">
            I’m UI/UX designer in lucknow , and I’m very passionate <br />
            and dedicated to my work.
          </div>
          <br />
          <button className="hello-button">
            say Hello
            <i class="uil uil-telegram-alt" style={{ marginLeft: "15px" }}></i>
          </button>
        </div>
        <div className="home-pict">pict</div>
      </div>
      <div className="scroll">
        scroll down <i class="uil uil-arrow-down"></i>
      </div>

      {/* ================ About me ================ */}
      <div className="title" id="about">
        About me
      </div>
      <div className="sub-title">My introducatio</div>
      <div className="about-container ">
        <div className="about-pict">pict</div>
        <div className="about-content">
          <div className="about-data">
            {renderAbout()}
            <div className="about-desc">
              UI/UX designer , I create web pages UI /UX userinterface , Ihave
              years of experience and many clients are happy with the projects
              carried out.
            </div>
            <button className="about-button">
              Download cv
              <i
                class="uil uil-file-download-alt"
                style={{ marginLeft: "10px" }}
              ></i>
            </button>
          </div>
        </div>
      </div>

      {/* ================ Skills ================ */}
      <div className="title" id="skills">
        Skills
      </div>
      <div className="sub-title">My technical level</div>
      <div className="skills-container1">
        {skill.slice(0, 4).map((val) => {
          return (
            <div className="skill-grid">
              <div className="skill-item-icon">{val.icon}</div>
              <div className="skill-item-title">{val.title}</div>
              <div className="skill-item-sub">{val.sub}</div>
            </div>
          );
        })}
      </div>
      <div className="skills-container2">
        {skill.slice(4, 9).map((val) => {
          return (
            <div className="skill-grid">
              <div className="skill-item-icon">{val.icon}</div>
              <div className="skill-item-title">{val.title}</div>
              <div className="skill-item-sub">{val.sub}</div>
            </div>
          );
        })}
      </div>

      {/* ================ Service ================ */}
      <div className="title" id="service">
        Services
      </div>
      <div className="sub-title">What i offer</div>
      <div className="service-container">{renderService()}</div>

      {/* ================ Qualification ================ */}
      <div className="title" id="qualification">
        Qualification
      </div>
      <div className="sub-title">My Personal journey</div>
      <div className="qualification-grid">
        <div className="qualification-item">
          <i class="uil uil-graduation-cap"></i>
          Education
        </div>
        <div className="qualification-item">
          <i class="uil uil-briefcase"></i>
          Experience
        </div>
      </div>
      <div className="qualification-section">
        <div className="qualification-content">
          <div className="qualification-data">
            <div>
              <h3 className="qualification-title">Web Design</h3>
              <span className="qualification-sub">India - Indtitute</span>
              <div className="qualification-calendar">2023 - Present</div>
            </div>

            <div>
              <span className="qualification-rounder"></span>
              <span className="qualification-line"></span>
            </div>
          </div>

          <div className="qualification-data">
            <div></div>
            <div>
              <span className="qualification-rounder"></span>
              <span className="qualification-line"></span>
            </div>
            <div>
              <h3 className="qualification-title">Art Design</h3>
              <span className="qualification-sub">India - Indtitute</span>
              <div className="qualification-calendar">2023 - Present</div>
            </div>
          </div>
        </div>
        <div className="qualification-content">
          <div className="qualification-data">
            <div>
              <h3 className="qualification-title">Web Development</h3>
              <span className="qualification-sub">India - Indtitute</span>
              <div className="qualification-calendar">2017 - 2023</div>
            </div>
            <div>
              <span className="qualification-rounder"></span>
              <span className="qualification-line"></span>
            </div>
          </div>

          <div className="qualification-data">
            <div></div>
            <div>
              <span className="qualification-rounder"></span>
            </div>

            <div>
              <h3 className="qualification-title">UI Expert</h3>
              <span className="qualification-sub">India - Indtitute</span>
              <div className="qualification-calendar">2019 - 2022</div>
            </div>
          </div>
        </div>
      </div>
      {/* ================ Contact ================ */}
      <div className="title" id="contact">
        Contact Me
      </div>
      <div className="sub-title">Get in touch</div>
      <div className="contact">
        <div>
          Talk to me
          {renderContact()}
        </div>
        <div>
          Write me your project
          <div className="project-grid">
            <div className="project-item">Insert your name</div>
            <div className="project-item">Insert your email</div>
            <div className="project-item3">Write your project</div>
          </div>
          <button className="message-button">
            Send Message
            <i class="uil uil-telegram-alt" style={{ marginLeft: "15px" }}></i>
          </button>
        </div>
      </div>

      {/* ================ Footer ================ */}
      <div className="footer">
        <div className="footer-name">
          Krish<span className="span">4alex</span>
        </div>
        <div className="footer-links">
          <div>
            <a href="#about" className="footer-link">
              About
            </a>
          </div>
          <div>
            <a href="#contact" className="footer-link">
              projects
            </a>
          </div>
          <div>
            <a href="#service" className="footer-link">
              Services
            </a>
          </div>
        </div>

        <div className="footer-socials">
          <div className="socials-facebook">1</div>
          <div className="socials-twitter">2</div>
          <div className="socials-linkedin">3</div>
          <div className="socials-instagram">4 </div>
        </div>

        <p className="footer-copy">@krish4alex. All rights reserved</p>
      </div>
    </div>
  );
}

export default App;
