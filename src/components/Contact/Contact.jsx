import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container">
        <div className="contact-box">
          <h2 className="section-title" style={{ marginBottom: '20px' }}>
            Ready to <span className="text-gold">Scale?</span>
          </h2>
          <p className="contact-subtitle">
            Let's build a brand that works for you. Drop us a line and we'll get back to you within 24 hours.
          </p>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Tell us about your brand..." rows="4" required></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
          </form>

          <div className="contact-info">
            <p>Email: <span>hello@butterscotchmedia.xyz</span></p>
            <p>Phone: <span>+1 (555) 019-8372</span></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
