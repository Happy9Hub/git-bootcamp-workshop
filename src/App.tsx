import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
// Notice we import 'Link' here as well
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import CoursePage from "./pages/Course";

// --- 1. EXTRACT THE ORIGINAL DESIGN INTO A "HOME" COMPONENT ---
const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started (Bootcamp) เวอร์ชัน 2.0.0</h1>
          <p>
            แก้ไข <code>src/App.tsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a
                href="https://vite.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a
                href="https://react.dev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            {/* Social links omitted for brevity, keep your existing ones here */}
            <li>
              <a
                href="https://github.com/vitejs/vite"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
};

// --- 2. THE MAIN APP SHELL CONTROLS THE ROUTING ---
function App() {
  return (
    <BrowserRouter>
      {/* The Header is outside the Routes, so it is always visible */}
      <header className="header">
        <div className="container">
          <nav>
            {/* CRITICAL: Use <Link> instead of <a> for internal routing */}
            <Link to="/">Home</Link>
            <Link to="/course">Courses</Link>
          </nav>
        </div>
      </header>

      {/* The Routes dynamically swap the page content based on the URL */}
      <main>
        <Routes>
          {/* URL "/" loads the Vite design we extracted above */}
          <Route path="/" element={<Home />} />

          {/* URL "/course" loads your new page */}
          <Route path="/course" element={<CoursePage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
