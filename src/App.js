import profile from "./profile.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} alt="profile-photo" />
        <h1>Darshan Gowda</h1>
        <p>Frontend Developer</p>
        <a href="mailto:iamdarshangowda@outlook.com">
          iamdarshangowda@outlook.com
        </a>
        <div className="social">
          <buttons className="git">
            <i class="fa-brands fa-github"></i>
          </buttons>
          <button className="linked">
            <i class="fa-brands fa-linkedin"></i>
          </button>
        </div>
      </header>

      {/* Main section*/}
      <main className="main">
        <div className="about">
          <h4>About</h4>
          <p>
            I am a frontend developer with a particular interest in making
            things simple and automating daily tasks. I try to keep up with
            security and best practices, and am always looking for new things to
            learn.
          </p>
        </div>
        <div className="skills">
          <h4>Skills</h4>
          <p>HTML, CSS, JavaScript and ReactJs</p>
        </div>
      </main>
      <footer>
        <a href="https://twitter.com/iamdarshangowda">
          <i class="fa-brands fa-twitter-square"></i>
        </a>
        <a href="https://www.instagram.com/iamdarshangowda/?hl=en">
          <i class="fa-brands fa-instagram-square"></i>
        </a>
      </footer>
    </div>
  );
}

export default App;
