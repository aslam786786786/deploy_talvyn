import { motion } from 'framer-motion';
import { Linkedin, Mail, Users, Award, TrendingUp } from 'lucide-react';
import "../styles/ourteam.css";

const OurTeam = () => {
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      position: 'Chief Executive Officer',
      experience: '15+ years',
      expertise: 'Strategic Leadership, Business Development',
      bio: 'Rajesh brings over 15 years of experience in technology leadership and business strategy. He has successfully led multiple digital transformation initiatives and built high-performing teams.',
      email: 'rajesh@talvyntech.com',
      linkedin: '#',
      initials: 'RK'
    },
    {
      name: 'Priya Sharma',
      position: 'Chief Technology Officer',
      experience: '12+ years',
      expertise: 'Software Architecture, Cloud Technologies',
      bio: 'Priya is a technology visionary with extensive experience in building scalable software solutions and leading engineering teams. She specializes in cloud architecture and modern development practices.',
      email: 'priya@talvyntech.com',
      linkedin: '#',
      initials: 'PS'
    },
    {
      name: 'Amit Patel',
      position: 'Head of Cybersecurity',
      experience: '10+ years',
      expertise: 'Information Security, Risk Management',
      bio: 'Amit specializes in cybersecurity strategy and has helped numerous organizations strengthen their security posture. He holds multiple security certifications and leads our security initiatives.',
      email: 'amit@talvyntech.com',
      linkedin: '#',
      initials: 'AP'
    },
    {
      name: 'Sneha Reddy',
      position: 'Head of Development',
      experience: '8+ years',
      expertise: 'Full-Stack Development, Team Leadership',
      bio: 'Sneha leads our development team and has expertise in modern web technologies and agile development methodologies. She ensures quality delivery of all our software projects.',
      email: 'sneha@talvyntech.com',
      linkedin: '#',
      initials: 'SR'
    },
    {
      name: 'Vikram Singh',
      position: 'Head of Operations',
      experience: '11+ years',
      expertise: 'Project Management, Business Operations',
      bio: 'Vikram ensures smooth operations and successful project delivery with his extensive experience in project management and business operations across multiple industries.',
      email: 'vikram@talvyntech.com',
      linkedin: '#',
      initials: 'VS'
    },
    {
      name: 'Ananya Gupta',
      position: 'Head of Design',
      experience: '7+ years',
      expertise: 'UI/UX Design, Product Strategy',
      bio: 'Ananya creates exceptional user experiences and leads our design strategy to ensure products are both beautiful and functional. She has a keen eye for modern design trends.',
      email: 'ananya@talvyntech.com',
      linkedin: '#',
      initials: 'AG'
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
      number: '8+',
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

        {/* Team Members Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="team-member-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="member-avatar">
                <span className="avatar-initials">
                  {member.initials}
                </span>
              </div>
              
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-experience">{member.experience} experience</p>
              </div>

              <div className="member-details">
                <div className="expertise-section">
                  <h4>Expertise</h4>
                  <p className="expertise-text">{member.expertise}</p>
                </div>

                <div className="bio-section">
                  <h4>About</h4>
                  <p className="bio-text">{member.bio}</p>
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
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="team-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="cta-content">
            <h3>Want to Join Our Team?</h3>
            <p>
              We're always looking for exceptional talent to join our growing team. 
              If you're passionate about technology and innovation, we'd love to hear from you.
            </p>
            <button className="join-team-btn">
              <Users className="btn-icon" />
              View Career Opportunities
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurTeam;
