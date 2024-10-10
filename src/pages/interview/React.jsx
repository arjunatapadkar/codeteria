import React from 'react';
import './InterviewPreparation.css'; // External CSS for styling

const InterviewPreparation = () => {
  return (
    <div className="interview-container">
      <header className="header">
        <h1 className="title">Interview Preparation Hub</h1>
        <p className="subtitle">Your one-stop platform for mastering coding interviews!</p>
      </header>

      <section className="resources-section">
        <h2>Coding Resources</h2>
        <div className="resources-cards">
          <div className="card">
            <h3>Data Structures</h3>
            <p>Master the most important data structures for coding interviews.</p>
            <button className="learn-more">Learn More</button>
          </div>
          <div className="card">
            <h3>Algorithms</h3>
            <p>Get in-depth knowledge of algorithms used in top company interviews.</p>
            <button className="learn-more">Explore</button>
          </div>
          <div className="card">
            <h3>Problem Solving</h3>
            <p>Practice solving problems from beginner to advanced levels.</p>
            <button className="learn-more">Practice Now</button>
          </div>
        </div>
      </section>

      <section className="tools-section">
        <h2>Useful Software Tools & Products</h2>
        <div className="tools-cards">
          <div className="card">
            <h3>Code Editor</h3>
            <p>Download powerful, free code editors like VSCode and Sublime Text.</p>
            <button className="learn-more">Download</button>
          </div>
          <div className="card">
            <h3>Version Control</h3>
            <p>Learn Git & GitHub to manage your code repositories efficiently.</p>
            <button className="learn-more">Get Started</button>
          </div>
          <div className="card">
            <h3>Online IDE</h3>
            <p>Access online coding environments without installing any software.</p>
            <button className="learn-more">Try Now</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 Interview Preparation Hub | Powered by EdTech</p>
        <div className="social-icons">
          <a href="#facebook" className="icon">Facebook</a>
          <a href="#twitter" className="icon">Twitter</a>
          <a href="#linkedin" className="icon">LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

export default InterviewPreparation;
