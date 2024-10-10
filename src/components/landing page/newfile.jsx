import React from "react";
import './App.css'; // You can add your custom CSS here for styling

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1 className="logo">Tech Academy</h1>
          <nav className="nav">
            <a href="#about">About</a>
            <a href="#resources">Resources</a>
            <a href="#tools">Tools</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h2>Empowering Developers with Free Coding Resources & Tools</h2>
          <p>Get access to free coding tutorials, useful software development tools, and much more!</p>
          <a href="#resources" className="cta-btn">Explore Resources</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>Tech Academy is an Ed-tech platform offering free coding tutorials, courses, and software development tools to empower learners around the world. Whether you're just starting your coding journey or you're looking to hone your skills, we've got the resources you need.</p>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="resources">
        <div className="container">
          <h2>Coding Resources</h2>
          <div className="resource-list">
            <div className="resource-item">
              <h3>Beginner Tutorials</h3>
              <p>Learn the basics of coding with our beginner-friendly tutorials in HTML, CSS, JavaScript, and Python.</p>
              <a href="#" className="btn">Start Learning</a>
            </div>
            <div className="resource-item">
              <h3>Advanced Tutorials</h3>
              <p>Take your coding skills to the next level with our advanced topics including algorithms, data structures, and full-stack development.</p>
              <a href="#" className="btn">Level Up</a>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="tools">
        <div className="container">
          <h2>Software Tools & Products</h2>
          <div className="tool-list">
            <div className="tool-item">
              <h3>Code Editors</h3>
              <p>Find the best free code editors to enhance your development workflow.</p>
              <a href="#" className="btn">Explore Editors</a>
            </div>
            <div className="tool-item">
              <h3>Version Control Tools</h3>
              <p>Learn about the best version control tools like Git, GitHub, and Bitbucket to manage your projects.</p>
              <a href="#" className="btn">Explore Tools</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="container">
          <p>© 2024 Tech Academy. All Rights Reserved.</p>
          <a href="#contact" className="btn">Contact Us</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
