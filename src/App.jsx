import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="services-container">
      <h1 className="services-heading">Our services <br />and capabilities</h1>
      <p className="services-subheading">
        Your brand should tell a story of who you are and what you believe in. <br />It should also invite your customer to join and share the journey.
      </p>
      
      <div className="brand-section">
        <div className="brand-section-left">
          <h2 className="brand-section-heading">Brand Strategy</h2>
        </div>
        <div className="brand-section-right">
          <h3 className="section-subheading">Transform & Thrive</h3>
          <p className="section-description">
            Unlock your brand’s potential with our comprehensive strategy services, <br />including company audits, customer profiling and messaging.
          </p>
          <div className="services-lists">
            <ul className="services-list">
              <li>Company Auditing</li>
              <li>Brand Positioning</li>
              <li>Brand Consulting</li>
            </ul>
            <ul className="services-list">
              <li>Brand Naming</li>
              <li>Brand Messaging</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="brand-section">
        <div className="brand-section-left">
          <h2 className="brand-section-heading">Brand Creation</h2>
        </div>
        <div className="brand-section-right">
          <h3 className="section-subheading">Craft & Distinguish</h3>
          <p className="section-description">
            From naming to digital animation, our creative solutions ensure your brand stands <br />out with a compelling identity and resonates across all platforms.
          </p>
          <div className="services-lists">
            <ul className="services-list">
              <li>Logo Creation</li>
              <li>Brand Identity</li>
              <li>Digital Animation</li>
            </ul>
            <ul className="services-list">
              <li>Publications & Packaging</li>
              <li>Exhibitions</li>
              <li>Social media Guides</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="brand-section">
        <div className="brand-section-left">
          <h2 className="brand-section-heading">Brand Internalization</h2>
        </div>
        <div className="brand-section-right">
          <h3 className="section-subheading">Embed & Excel</h3>
          <p className="section-description">
            Strengthen your brand from within through targeted training, audits, and <br />consulting designed to align your team and processes with your brand’s core <br />values.
          </p>
          <div className="services-lists">
            <ul className="services-list">
              <li>Training</li>
              <li>Consulting</li>
            </ul>
            <ul className="services-list">
              <li>Auditing</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="brand-section">
        <div className="brand-section-left">
          <h2 className="brand-section-heading">Brand Communication</h2>
        </div>
        <div className="brand-section-right">
          <h3 className="section-subheading">Connect & Engage</h3>
          <p className="section-description">
            Expand your brand’s reach with our dynamic communication strategies, <br />including digital marketing, co-branding, and strategic endorsements.
          </p>
          <div className="services-lists">
            <ul className="services-list">
              <li>Communication Strategy</li>
              <li>Advertising Strategy</li>
              <li>Brand Collaboration</li>
            </ul>
            <ul className="services-list">
              <li>Digital Marketing</li>
              <li>Endorsements & Sponsorships</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="brand-section">
        <div className="brand-section-left">
          <h2 className="brand-section-heading">Green Branding</h2>
          <p><a href="#">Learn More</a></p>
        </div>
        <div className="brand-section-right">
          <h3 className="section-subheading">Sustain & Lead</h3>
          <p className="section-description">
            Elevate your brand with our green branding expertise, focused on sustainability, <br />eco-friendly initiatives, and responsible marketing for a greener future.
          </p>
          <div className="services-lists">
            <ul className="services-list">
              <li>Sustainability Positioning</li>
              <li>Digital Transition Strategy</li>
              <li>Certification Assistance</li>
              <li>Eco-design and Packaging</li>
            </ul>
            <ul className="services-list">
              <li>Eco-friendly Digital Marketing Solutions</li>
              <li>Eco-friendly Content Creation</li>
              <li>Carbon Footprint Analysis & Reduction Strategies</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="brand-section">
        <div className="brand-section-left">
          <h2 className="brand-section-heading">Start-up Incubation</h2>
        </div>
        <div className="brand-section-right">
          <h3 className="section-subheading">Ignite & Ascend</h3>
          <p className="section-description">
            Empower your startup’s journey with our specialized incubation services that <br />provide the tools for ideation, growth acceleration, and a standout market entry.
          </p>
          <div className="services-lists">
            <ul className="services-list">
              <li>Consulting</li>
              <li>Ideation</li>
              <li>Brand Launch</li>
            </ul>
            <ul className="services-list">
              <li>Project Incubation</li>
              <li>Business Acceleration</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
