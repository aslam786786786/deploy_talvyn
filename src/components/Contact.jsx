import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, AlertCircle } from 'lucide-react';
import '../styles/contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
    setFormData({ 
      name: '', 
      email: '', 
      phone: '', 
      company: '', 
      service: '', 
      message: '' 
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      details: ['123 Tech Park Avenue', 'Bangalore, Karnataka 560001', 'India']
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+91 80 1234 5678', '+91 80 8765 4321', 'Toll Free: 1800 123 456']
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['info@talvyntech.com', 'careers@talvyntech.com', 'support@talvyntech.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed']
    }
  ];

  const services = [
    'Cybersecurity Solutions',
    'Website Development',
    'Custom Software Development',
    'IT Consulting',
    'Cloud Solutions',
    'Other'
  ];

  const officeLocations = [
    {
      city: 'Bangalore (HQ)',
      address: '123 Tech Park Avenue, Whitefield',
      phone: '+91 80 1234 5678'
    },
    {
      city: 'Mumbai',
      address: '456 Business Center, Bandra Kurla Complex',
      phone: '+91 22 9876 5432'
    },
    {
      city: 'Hyderabad',
      address: '789 IT Hub, HITEC City',
      phone: '+91 40 5555 6666'
    }
  ];

  return (
    <div className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to start your next project? We'd love to hear from you. Contact us today 
            and let's discuss how we can help transform your business with innovative technology solutions.
          </p>
        </motion.div>

        <div className="contact-main-content">
          {/* Contact Form */}
          <motion.div 
            className="contact-form-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="contact-form-card">
              <div className="form-header">
                <div className="form-header-content">
                  <MessageCircle className="form-icon" />
                  <h3>Send us a Message</h3>
                </div>
                <p className="form-description">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+91 12345 67890"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="company">Company Name</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your company name"
                    />
                  </div>
                </div>
                
                <div className="form-field">
                  <label htmlFor="service">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="form-field">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    required
                  />
                </div>
                
                <button type="submit" className="submit-button">
                  <Send className="submit-icon" />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="contact-info-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div 
                  key={index} 
                  className="contact-info-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="info-icon">
                    <Icon className="icon" />
                  </div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    <div className="info-details">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex}>{detail}</p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Office Locations */}
        <motion.div 
          className="office-locations-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="section-header">
            <h3>Our Offices</h3>
            <p>
              We have multiple offices across India to serve you better. 
              Visit us at any of our locations or schedule a virtual meeting.
            </p>
          </div>
          
          <div className="offices-grid">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                className="office-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="office-icon">
                  <MapPin className="icon" />
                </div>
                <h4 className="office-city">{office.city}</h4>
                <p className="office-address">{office.address}</p>
                <p className="office-phone">{office.phone}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          className="emergency-contact-section"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="emergency-card">
            <div className="emergency-header">
              <AlertCircle className="emergency-icon" />
              <h3>Need Immediate Assistance?</h3>
            </div>
            <p className="emergency-description">
              For urgent support or security incidents, contact our 24/7 emergency hotline. 
              Our expert team is always ready to help you with critical issues.
            </p>
            <div className="emergency-buttons">
              <button className="emergency-phone-btn">
                <Phone className="btn-icon" />
                Emergency: +91 80 911 911
              </button>
              <button className="emergency-email-btn">
                <Mail className="btn-icon" />
                emergency@talvyntech.com
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}