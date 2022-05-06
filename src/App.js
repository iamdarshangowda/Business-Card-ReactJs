import profile from "./profile.jpg";
import "./App.css";
import {
  FaGithub,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="back">
        <header className="App-header">
          <img src={profile} alt="profile-photo" />
          <h1>Darshan Gowda</h1>
          <p>Frontend Developer</p>
          <a href="mailto:iamdarshangowda@outlook.com">
            iamdarshangowda@outlook.com
          </a>
          <div className="social">
            <button
              className="git button"
              onClick={() =>
                window.open("https://github.com/iamdarshangowda", "_blank")
              }
            >
              <FaGithub size="1.3em" className="giticon" />
              <span>GitHub</span>
            </button>
            <button
              className="linked button"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/darshan-gowda-8405b4153/",
                  "_blank"
                )
              }
            >
              <FaLinkedin size="1.3em" className="linkicon" />
              <span>LinkedIn</span>
            </button>
          </div>
        </header>
        {/* Main section*/}
        <main className="main">
          <div className="about">
            <h4>About</h4>
            <p className="para">
              I am a frontend developer with a particular interest in making
              things simple and automating daily tasks. I try to keep up with
              security and best practices, and am always looking for new things
              to learn.
            </p>
          </div>
          <div className="skills">
            <h4>Skills</h4>
            <p className="para">HTML, CSS, JavaScript</p>
            <p className="para">ReactJs, Bootstrap and Git</p>
          </div>
        </main>
        <footer>
          <a href="https://twitter.com/iamdarshangowda">
            <FaTwitterSquare size="2em" />
          </a>
          <a href="https://www.instagram.com/iamdarshangowda/?hl=en">
            <FaInstagramSquare size="2em" />
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
