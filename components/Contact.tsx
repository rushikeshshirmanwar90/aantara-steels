'use client';

import { useState } from 'react';
import IonIcon from './IonIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `Hello! I'm interested in your services.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Message: ${formData.message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Send to secondary WhatsApp number
    const whatsappUrl = `https://wa.me/917028693829?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form after sending
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="title-wrapper">
          <div>
            <p className="section-subtitle">Contact us</p>
            <h2 className="h2 section-title">Get in touch with us now</h2>
          </div>
        </div>

        <div className="map-body">
          {/* Address Section */}
          <div className="address-container">
            <div className="address-card">
              <h3 className="address-title">Our Location</h3>
              
              <div className="address-content">
                <div className="address-item">
                  <div className="address-icon">
                    <IonIcon name="business-outline" />
                  </div>
                  <div className="address-text">
                    <strong>Gut No. 374, Plot Number 1</strong>
                  </div>
                </div>
                
                <div className="address-item">
                  <div className="address-icon">
                    <IonIcon name="location-outline" />
                  </div>
                  <div className="address-text">
                    Near MSEB, Jalgaon Road
                  </div>
                </div>
                
                <div className="address-item">
                  <div className="address-icon">
                    <IonIcon name="location-outline" />
                  </div>
                  <div className="address-text">
                    Sillod Tq. Sillod
                  </div>
                </div>
                
                <div className="address-item">
                  <div className="address-icon">
                    <IonIcon name="location-outline" />
                  </div>
                  <div className="address-text">
                    Dist: Ch. Sambhajinagar (Maharashtra)
                  </div>
                </div>
                
                <div className="address-item country-item">
                  <div className="address-icon">
                    <IonIcon name="flag-outline" />
                  </div>
                  <div className="address-text country-text">
                    <strong>INDIA</strong>
                  </div>
                </div>
                
                <div className="address-item">
                  <div className="address-icon">
                    <IonIcon name="call-outline" />
                  </div>
                  <div className="address-text">
                    <a href="tel:+919834401574" style={{ color: '#fff', textDecoration: 'none' }}>
                      <strong>+91 9834401574</strong>
                    </a>
                  </div>
                </div>
                
                <div className="address-item">
                  <div className="address-icon">
                    <IonIcon name="call-outline" />
                  </div>
                  <div className="address-text">
                    <a href="tel:+917028693829" style={{ color: '#fff', textDecoration: 'none' }}>
                      <strong>+91 7028693829</strong>
                    </a>
                  </div>
                </div>
                
                <div className="address-item">
                  <div className="address-icon">
                    <IonIcon name="mail-outline" />
                  </div>
                  <div className="address-text">
                    <a href="mailto:Aantarasteel@gmail.com" style={{ color: '#fff', textDecoration: 'none' }}>
                      <strong>aantarasteel@gmail.com</strong>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="form-container">
            <h1>Get In Touch</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="form-actions">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}