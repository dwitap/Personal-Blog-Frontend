import "./App.css";
import axiosInstance from "../src/api/index";
import { useEffect, useState } from "react";
import homePict from "./assets/homePict.png";
import aboutPict from "./assets/aboutPict.png";
function App() {
  const [about, setAbout] = useState([]);
  const [skill, setSkill] = useState([]);
  const [service, setService] = useState([]);
  const [contact, setContact] = useState([]);
  const [testimonial, setTestimonial] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");

  const fetchAbout = async () => {
    try {
      const aboutResponse = await axiosInstance.get("/data/about");

      setAbout(aboutResponse.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderAbout = () => {
    return about.map((val) => {
      return (
        <div className="about-grid" key={val.id}>
          <img src={val?.icon} alt="icon" className="about-icon" />
          <div className="about-title">{val.title}</div>
          <div className="about-sub">{val.sub}</div>
        </div>
      );
    });
  };

  const fetchSkills = async () => {
    try {
      const skillResponse = await axiosInstance.get("/data/skills");

      setSkill(skillResponse.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchService = async () => {
    try {
      const serviceResponse = await axiosInstance.get("/data/services");

      setService(serviceResponse.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderService = () => {
    return service.map((val) => {
      return (
        <div className="service-item" key={val.id}>
          <img className="service-icon" src={val.icon} alt="icon" />
          <div className="service-title">{val.title}</div>
          <div className="service-sub">
            {val.sub}
            <i className="uil uil-arrow-right"></i>
          </div>
        </div>
      );
    });
  };

  const fetchTestimonial = async () => {
    try {
      const testimonialResponse = await axiosInstance.get("/data/testimonials");

      setTestimonial(testimonialResponse.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderTestimonial = () => {
    return testimonial.map((val) => {
      return (
        <div className="bubble" key={val.id}>
          <div className="grid1">
            <div className="vl"></div>
            <div className="testimoni">{val.testimonial}</div>
          </div>
          <div className="grid2">
            <div className="item1">
              <img src={val?.picture} alt="icon" className="testi-image" />
            </div>
            <div className="item2">
              <div className="testi-name">{val.title}</div>
              <div className="testi-desc">{val.sub}</div>
            </div>
          </div>
        </div>
      );
    });
  };

  const fetchContact = async () => {
    try {
      const contactResponse = await axiosInstance.get("/data/contacts");

      setContact(contactResponse.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const renderContact = () => {
    return contact.map((val) => {
      return (
        <div className="talk-item" key={val.id}>
          <img src={val?.icon} alt="icon" className="talk-icon" />
          <div className="talk-title">{val.title}</div>
          <div className="talk-sub">{val.sub}</div>
          <div className="talk-desc">
            {val.desc}
            <i className="uil uil-arrow-right"></i>
          </div>
        </div>
      );
    });
  };

  const saveProject = async (e) => {
    try {
      await axiosInstance.post("/project", {
        name,
        email,
        project,
      });
      alert("Your message was sent successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAbout();
    fetchSkills();
    fetchService();
    fetchContact();
    fetchTestimonial();
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
          <div className="home-subtitle">User Interface Designer</div>
          <br />
          <div className="home-desc">
            I’m UI/UX designer in lucknow , and I’m very passionate <br />
            and dedicated to my work.
          </div>
          <br />
          <button className="hello-button">
            say Hello
            <i
              className="uil uil-telegram-alt"
              style={{ marginLeft: "15px" }}
            ></i>
          </button>
        </div>
        <img src={homePict} alt="images" />
      </div>
      <a href="#contact">
        <div className="scroll">
          scroll down <i className="uil uil-arrow-down"></i>
        </div>
      </a>

      {/* ================ About me ================ */}
      <div className="title" id="about">
        About me
      </div>
      <div className="sub-title">My introducatio</div>
      <div className="about-container ">
        <img src={aboutPict} alt="images" />
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
                className="uil uil-file-download-alt"
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
            <div className="skill-grid" key={val.id}>
              <img className="skill-item-image" src={val?.icon} alt="icon" />
              <div className="skill-item-title">{val.title}</div>
              <div className="skill-item-sub">{val.sub}</div>
            </div>
          );
        })}
      </div>
      <div className="skills-container2">
        {skill.slice(4, 9).map((val) => {
          return (
            <div className="skill-grid" key={val.id}>
              <img className="skill-item-image" src={val?.icon} alt="icon" />
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
          <i className="uil uil-graduation-cap"></i>
          Education
        </div>
        <div className="qualification-item">
          <i className="uil uil-briefcase"></i>
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

      {/* ================ Testimonial ================ */}
      <div className="title" id="blog">
        Testimonial
      </div>
      <div className="sub-title">My client saying</div>
      <div className="testi-container">{renderTestimonial()}</div>

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
        <form onSubmit={saveProject}>
          <div>
            Write me your project
            <div className="project-grid">
              <input
                type="text"
                className="project-item"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Insert your name"
              />
              <input
                type="text"
                className="project-item"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Insert your email"
              />
              <input
                type="text"
                className="project-item3"
                value={project}
                onChange={(e) => setProject(e.target.value)}
                placeholder="Write your project"
              />
            </div>
            <button type="submit" className="message-button">
              Send Message
              <i
                className="uil uil-telegram-alt"
                style={{ marginLeft: "15px" }}
              ></i>
            </button>
          </div>
        </form>
      </div>

      {/* ================ Footer ================ */}
      <div className="footer" id="footer">
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
          <div className="socials-facebook">
            <i className="uil uil-facebook"></i>
          </div>
          <div className="socials-twitter">
            <i className="uil uil-twitter"></i>
          </div>
          <div className="socials-linkedin">
            <i className="uil uil-linkedin"></i>
          </div>
          <div className="socials-instagram">
            <i className="uil uil-instagram"></i>
          </div>
        </div>

        <p className="footer-copy">@krish4alex. All rights reserved</p>
      </div>
    </div>
  );
}

export default App;
