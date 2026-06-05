import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="container contact-container">
        
        <div className="contact-info-block">
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
            Ready to <span className="text-gold">Scale?</span>
          </h2>
          <p className="contact-subtitle">
            Let's build a personal brand that works for you 24/7. Drop us a line and we'll get back to you within 24 hours.
          </p>
          
          <div className="faq-mini">
            <h4>What happens next?</h4>
            <p>1. We review your application.</p>
            <p>2. We schedule a 30-minute discovery call.</p>
            <p>3. We build your custom strategy.</p>
          </div>

          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-icon">✉️</span>
              <div>
                <p className="detail-label">Email Us</p>
                <p className="detail-value">hello@butterscotchmedia.xyz</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📱</span>
              <div>
                <p className="detail-label">Call Us</p>
                <p className="detail-value">+1 (555) 019-8372</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <div>
                <p className="detail-label">HQ</p>
                <p className="detail-value">Los Angeles, CA (Remote Global)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-block">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="John" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Doe" required />
              </div>
            </div>
            
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label>Current Monthly Revenue (Optional)</label>
              <select>
                <option>Select a range</option>
                <option>$0 - $10k</option>
                <option>$10k - $50k</option>
                <option>$50k+</option>
              </select>
            </div>

            <div className="form-group">
              <label>Tell us about your brand</label>
              <textarea placeholder="What are your goals for the next 6 months?" rows="4" required></textarea>
            </div>
            
            <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
              Submit Application
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
