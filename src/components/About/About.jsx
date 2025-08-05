import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

function About() {
  return (
    <div className="about-page">
      {/* Main Content */}
      <main className="about-container">
        {/* Hero Section */}
        <section className="hero-section">
          <h1 className="shiny-text">About Joke Generator 2.0</h1>
          <p>The upgraded, turbo-charged, joke-delivering machine that'll make you laugh... or at least groan politely.</p>
        </section>

        {/* Warning Banner */}
        <div className="warning-banner">
          <div className="warning-content">
            <i className="fas fa-exclamation-triangle"></i>
            <div>
              <p className="warning-title">Warning!</p>
              <p>Joke quality may vary from "hilarious" to "dad joke cringe". Use at your own risk.</p>
            </div>
          </div>
        </div>

        {/* Project Card */}
        <div className="about-grid">
          <div className="about-card card-3d">
            <h2>Project Introduction</h2>
            <p>Welcome to Joke Generator 2.0 - the upgraded, souped-up version of your favorite joke delivery system!</p>
            <p>This React-powered comedy machine taps into the mighty JokeAPI v2, serving you fresh jokes across multiple categories.</p>
            <div className="update-notice">
              <i className="fas fa-arrow-up"></i>
              <strong>What's new in 2.0:</strong> More jokes, better UI, and 100% more puns.
            </div>
          </div>

          <div className="about-card card-3d">
            <h2>Developer Notes</h2>
            <p>Built by a developer who believes the world needs more laughter (and more React components).</p>
            <div className="developer-info">
              <div className="dev-icon">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div>
                <p>Built with <i className="fas fa-heart"></i> and caffeine</p>
                <p>And possibly too much time reading r/ProgrammerHumor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="features-section">
          <h2 className="shiny-text">✨ Key Features ✨</h2>
          <div className="features-grid">
            {[
              { icon: 'mobile-alt', title: 'Responsive Design', desc: 'Laugh on any device!' },
              { icon: 'sync-alt', title: '3D Card Flip', desc: 'Watch jokes flip into view' },
              { icon: 'atom', title: 'Particle Background', desc: 'Floating visual effects' },
              { icon: 'globe', title: 'Multi-language', desc: 'Because "bad joke" translates universally' },
              { icon: 'bolt', title: 'Lightning Fast', desc: 'Jokes delivered instantly' }
            ].map((feature, index) => (
              <div key={index} className="feature-card card-3d">
                <i className={`fas fa-${feature.icon}`}></i>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Specs */}
        <section className="tech-specs">
          <h2>Technical Details</h2>
          <div className="specs-grid">
            <div className="spec-card">
              <h3><i className="fas fa-code"></i> Built With</h3>
              <ul>
                <li><i className="fab fa-react"></i> React</li>
                <li><i className="fas fa-route"></i> React Router</li>
                <li><i className="fas fa-paint-brush"></i> CSS3 Animations</li>
              </ul>
            </div>
            
            <div className="spec-card">
              <h3><i className="fas fa-plug"></i> Powered By</h3>
              <a href="https://sv443.net/jokeapi/v2/" target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i> JokeAPI v2
              </a>
              <p>Serving up jokes since before it was cool</p>
            </div>
            
            <div className="spec-card">
              <h3><i className="fas fa-star"></i> Version 2.0</h3>
              <ul>
                <li><i className="fas fa-check-circle"></i> More categories</li>
                <li><i className="fas fa-check-circle"></i> Better UI/UX</li>
                <li><i className="fas fa-check-circle"></i> Enhanced performance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <h2 className="shiny-text">Ready to Laugh?</h2>
          <p>What are you waiting for? The jokes aren't going to tell themselves!</p>
          <Link to="/" className="cta-button">
            Get Jokes <i className="fas fa-arrow-right"></i>
          </Link>
        </section>
      </main>
    </div>
  );
}

export default About;