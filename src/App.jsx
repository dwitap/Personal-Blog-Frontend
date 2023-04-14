import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="upperNav">
        <div class="item-name">
          krish<span className="span">4alex</span>
        </div>
        <div class="item">Home</div>
        <div class="item">About</div>
        <div class="item">Service</div>
        <div class="item">Skills</div>
        <div class="item">Blog</div>
        <div class="item">Contact</div>
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
          <button className="hello-button">Hello</button>
        </div>
        <div className="i2">pict</div>
      </div>
      <div className="scroll">scroll down</div>
      <div className="about-me">About me</div>
      <div className="intro">My introducatio</div>
      <div className="container3">
        <div className="ab1">pict</div>
        <div className="ab2">
          <div className="ab2-1">
            <div className="ab-item">1</div>
            <div className="ab-item">2</div>
            <div className="ab-item">3</div>
            <div className="ab-item2">
              UI/UX designer , I create web pages UI /UX userinterface , Ihave
              years of experience and many clients are happy with the projects
              carried out.
            </div>
            <button className="ab-button">Download cv</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
