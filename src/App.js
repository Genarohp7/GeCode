import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <footer>
        <p>&copy; 2024 Mi Portafolio</p>
      </footer>
    </div>
  );
}

export default App;
