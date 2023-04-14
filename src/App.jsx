import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="upperNav">
        <div class="item-name">
          krish<span className="span">4alex</span>
        </div>
        <div className="item">Home</div>
        <div className="item">About</div>
        <div className="item">Service</div>
        <div className="item">Skills</div>
        <div className="item">Blog</div>
        <div className="item">Contact</div>
      </div>
      <div className="container2">
        <div className="i1">
          <div className="i1-1">
            krish<span className="span">4alex</span>
          </div>
          <br />
          <div className="i1-2"> User Interface Designer</div>
          <br />
          <div className="i1-3">
            I’m UI/UX designer in lucknow , and I’m very passionate <br />
            and dedicated to my work.
          </div>
          <br />
          <button className="hello-button">say Hello</button>
        </div>
        <div className="i2">pict</div>
      </div>
      <div className="scroll">scroll down</div>
      <div className="title">About me</div>
      <div className="sub-title">My introducatio</div>
      <div className="container3">
        <div className="about-left">pict</div>
        <div className="about-right">
          <div className="aboutR">
            <div className="aboutR-item">1</div>
            <div className="aboutR-item">2</div>
            <div className="aboutR-item">3</div>
            <div className="aboutR-item2">
              UI/UX designer , I create web pages UI /UX userinterface , Ihave
              years of experience and many clients are happy with the projects
              carried out.
            </div>
            <button className="aboutR-button">Download cv</button>
          </div>
        </div>
      </div>
      <div className="title">Skills</div>
      <div className="sub-title">My technical level</div>
      <div class="skills-container1">
        <div class="skill-item"> 1</div>
        <div class="skill-item"> 2</div>
        <div class="skill-item"> 3</div>
        <div class="skill-item"> 4</div>
      </div>
      <div className="skills-container2">
        <div class="skill-item2"> 5</div>
        <div class="skill-item2"> 6</div>
        <div class="skill-item2"> 7</div>
        <div class="skill-item2"> 8</div>
        <div class="skill-item2"> 9</div>
      </div>
      <div className="title">Services</div>
      <div className="sub-title">What i offer</div>
      <div className="service-container">
        <div className="service-item">1</div>
        <div className="service-item">2</div>
        <div className="service-item">3</div>
      </div>
      <div className="title">Qualification</div>
      <div className="sub-title">My Personal journey</div>
      <div className="qualification-section">
        <div className="qualification-content">
          <div className="qualification-data">
            <div>
              <h3 className="qualification-title">Web Design</h3>
              <span className="qualification-sub">India - Indtitute</span>
              <div className="qualification-calendar">
                <i class="uil uil-calendar-alt"></i>
                2023 - Present
              </div>
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
              <h3 className="qualification-title">Web Development</h3>
              <span className="qualification-sub">India - Indtitute</span>
              <div className="qualification-calendar">
                <i class="uil uil-calendar-alt"></i>
                2017 - 2023
              </div>
            </div>
          </div>
        </div>
        <div className="qualification-content">
          <div className="qualification-data">
            <div>
              <h3 className="qualification-title">Art Design</h3>
              <span className="qualification-sub">India - Indtitute</span>
              <div className="qualification-calendar">
                <i class="uil uil-calendar-alt"></i>
                2023 - Present
              </div>
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
              <div className="qualification-calendar">
                <i class="uil uil-calendar-alt"></i>
                2019 - 2022
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="title">Contact Me</div>
      <div className="sub-title">Get in touch</div>
      <div className="contact">
        <div>
          Talk to me
          <div className="talk-item">1</div>
          <div className="talk-item">2</div>
          <div className="talk-item">3</div>
        </div>
        <div>
          Write me your project
          <div className="project-item">1</div>
          <div className="project-item">2</div>
          <div className="project-item3">3</div>
          <button className="message-button">Send Message</button>
        </div>
      </div>
      <div className="footer">
        Krish<span className="span">4alex</span>
      </div>
    </div>
  );
}

export default App;
