import { motion } from 'framer-motion';
import { Linkedin, Mail, Users, Award, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import "../styles/ourteam.css";

const OurTeam = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -350,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 350,
        behavior: 'smooth'
      });
    }
  };

  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      position: 'Chief Executive Officer',
      experience: '15+ years',
      expertise: 'Strategic Leadership, Business Development',
      email: 'rajesh@talvyntech.com',
      linkedin: '#',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face'
    },
    {
      name: 'Priya Sharma',
      position: 'Chief Technology Officer',
      experience: '12+ years',
      expertise: 'Software Architecture, Cloud Technologies',
      email: 'priya@talvyntech.com',
      linkedin: '#',
      image: 'https://images.unsplash.com/photo-1494790108755-2616c3dc7bb3?w=400&h=500&fit=crop&crop=face'
    },
    {
      name: 'Amit Patel',
      position: 'Head of Cybersecurity',
      experience: '10+ years',
      expertise: 'Information Security, Risk Management',
      email: 'amit@talvyntech.com',
      linkedin: '#',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face'
    },
    {
      name: 'Sneha Reddy',
      position: 'Head of Development',
      experience: '8+ years',
      expertise: 'Full-Stack Development, Team Leadership',
      email: 'sneha@talvyntech.com',
      linkedin: '#',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face'
    },
    {
      name: 'Vikram Singh',
      position: 'Head of Operations',
      experience: '11+ years',
      expertise: 'Project Management, Business Operations',
      email: 'vikram@talvyntech.com',
      linkedin: '#',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face'
    },
    {
      name: 'Ananya Gupta',
      position: 'Head of Design',
      experience: '7+ years',
      expertise: 'UI/UX Design, Product Strategy',
      email: 'ananya@talvyntech.com',
      linkedin: '#',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face'
    }
  ];

  const teamStats = [
    {
      icon: Users,
      number: '25+',
      label: 'Team Members'
    },
    {
      icon: Award,
      number: '50+',
      label: 'Projects Completed'
    },
    {
      icon: TrendingUp,
      number: '5+',
      label: 'Years Experience'
    }
  ];

  return (
    <div className="team-section">
      <div className="team-container">
        {/* Header */}
        <motion.div 
          className="team-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="team-title">Our Leadership Team</h2>
          <p className="team-subtitle">
            Meet the experienced professionals driving innovation and excellence at Talvyn Technologies. 
            Our diverse team brings together decades of expertise in technology, business, and design.
          </p>
        </motion.div>

        {/* Team Stats */}
        <motion.div 
          className="team-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {teamStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                viewport={{ once: true }}
              >
                <div className="stat-icon">
                  <Icon className="icon" />
                </div>
                <div className="stat-content">
                  <h3 className="stat-number">{stat.number}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Team Members Scrollable Section */}
        <div className="team-section-container">
          {/* Scroll Buttons */}
          <button className="scroll-btn scroll-btn-left" onClick={scrollLeft}>
            <ChevronLeft className="scroll-icon" />
          </button>
          <button className="scroll-btn scroll-btn-right" onClick={scrollRight}>
            <ChevronRight className="scroll-icon" />
          </button>
          
          {/* Team Members Grid */}
          <div className="team-grid" ref={scrollRef}>
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-member-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Background Image */}
              <div 
                className="member-image" 
                style={{
                  backgroundImage: `url(${member.image})`
                }}
              >
                {/* Overlay Content */}
                <div className="member-overlay">
                  <div className="member-info">
                    <h3 className="member-name">{member.name}</h3>
                    <p className="member-position">{member.position}</p>
                    <p className="member-experience">{member.experience} experience</p>
                    <p className="member-expertise">{member.expertise}</p>
                  </div>

                  <div className="member-contact">
                    <button className="contact-btn" title="Send Email">
                      <Mail className="contact-icon" />
                    </button>
                    <button className="contact-btn" title="LinkedIn Profile">
                      <Linkedin className="contact-icon" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default OurTeam;
