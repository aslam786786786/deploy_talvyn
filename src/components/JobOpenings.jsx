import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Clock, DollarSign, Send, FileText, ArrowLeft, X, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import "../styles/careers.css";

const JobOpenings = () => {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplication, setShowApplication] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const [applicationData, setApplicationData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    currentCompany: '',
    coverLetter: '',
    resume: null
  });

  const jobOpenings = [
    {
      title: 'Senior Cybersecurity Analyst',
      department: 'Cybersecurity',
      location: 'Remote/Hybrid',
      type: 'Full-time',
      salary: '₹8-12 LPA',
      description: 'Lead security assessments, implement security protocols, and develop incident response strategies.',
      detailedDescription: 'As a Senior Cybersecurity Analyst, you will be responsible for protecting our organization and clients from cyber threats. You will conduct comprehensive security assessments, develop and implement security protocols, and lead incident response efforts.',
      responsibilities: [
        'Conduct regular security assessments and vulnerability testing',
        'Develop and maintain security policies and procedures',
        'Lead incident response and forensic analysis',
        'Monitor security systems and analyze threat intelligence',
        'Collaborate with cross-functional teams on security initiatives',
        'Stay updated on latest cybersecurity trends and threats'
      ],
      requirements: [
        '5+ years in cybersecurity',
        'CISSP or CEH certification preferred',
        'Experience with security tools and frameworks',
        'Strong analytical and problem-solving skills'
      ]
    },
    {
      title: 'Full Stack Developer',
      department: 'Web Development',
      location: 'On-site',
      type: 'Full-time',
      salary: '₹6-10 LPA',
      description: 'Develop and maintain modern web applications using React, Node.js, and cloud technologies.',
      detailedDescription: 'Join our development team to build cutting-edge web applications that serve thousands of users. You will work with modern technologies including React, Node.js, and cloud platforms to create scalable, responsive applications.',
      responsibilities: [
        'Develop responsive web applications using React and TypeScript',
        'Build robust backend APIs using Node.js and Express',
        'Implement database solutions and optimize queries',
        'Deploy applications on cloud platforms (AWS/Azure)',
        'Collaborate with designers to implement UI/UX requirements',
        'Write clean, maintainable, and well-documented code'
      ],
      requirements: [
        '3+ years in full-stack development',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with cloud platforms (AWS/Azure)',
        'Knowledge of database systems'
      ]
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Hybrid',
      type: 'Full-time',
      salary: '₹4-7 LPA',
      description: 'Create intuitive and engaging user experiences for web and mobile applications.',
      detailedDescription: 'Shape the user experience of our digital products by creating intuitive, engaging, and accessible designs. You will work closely with product managers and developers to translate user needs into beautiful, functional interfaces.',
      responsibilities: [
        'Conduct user research and create user personas',
        'Design wireframes, mockups, and interactive prototypes',
        'Develop and maintain design systems and style guides',
        'Collaborate with developers to ensure design implementation',
        'Conduct usability testing and iterate on designs',
        'Stay updated on design trends and best practices'
      ],
      requirements: [
        '2+ years in UI/UX design',
        'Proficiency in Figma, Adobe Creative Suite',
        'Strong portfolio demonstrating design skills',
        'Understanding of user-centered design principles'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      salary: '₹7-11 LPA',
      description: 'Manage CI/CD pipelines, cloud infrastructure, and deployment automation.',
      detailedDescription: 'Join our infrastructure team to build and maintain robust, scalable systems that support our applications and services. You will work with cutting-edge DevOps tools and practices to ensure smooth deployments.',
      responsibilities: [
        'Design and maintain CI/CD pipelines',
        'Manage cloud infrastructure on AWS/Azure/GCP',
        'Implement monitoring and alerting systems',
        'Automate deployment processes and infrastructure provisioning',
        'Collaborate with development teams on deployment strategies',
        'Ensure security and compliance in infrastructure'
      ],
      requirements: [
        '3+ years in DevOps/Infrastructure',
        'Experience with Docker, Kubernetes',
        'Knowledge of AWS/Azure cloud services',
        'Scripting skills in Python or Bash'
      ]
    }
  ];

  const handleApplicationSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted for ${selectedJob.title}! We'll be in touch soon.`);
    setApplicationData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      experience: '',
      currentCompany: '',
      coverLetter: '',
      resume: null
    });
    setShowApplication(false);
    setSelectedJob(null);
  };

  const handleJobApplication = (job) => {
    setSelectedJob(job);
    setShowApplication(true);
  };

  // Filter jobs based on search term
  const filteredJobs = jobOpenings.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="careers-jobs-section">
      <div className="careers-container">
        <motion.div
          className="careers-back-btn"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => navigate('/')}
            className="back-button"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
        </motion.div>

        <motion.div
          className="careers-jobs-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Current Job Openings</h1>
          <p>Discover exciting career opportunities at Talvyn Technologies. Join our team and help shape the future of technology.</p>
        </motion.div>

        <motion.div
          className="search-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search jobs by title, department, location, or type..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="clear-search"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="search-results-count">
            {filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'} found
          </div>
        </motion.div>

        <div className="jobs-grid">
          {filteredJobs.length > 0 ? filteredJobs.map((job, index) => (
            <motion.div
              key={index}
              className="job-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="job-header">
                <div className="job-info">
                  <h3 className="job-title">{job.title}</h3>
                  <div className="job-meta">
                    <div className="meta-item">
                      <Users className="w-4 h-4" />
                      {job.department}
                    </div>
                    <div className="meta-item">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="meta-item">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="meta-item">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </div>
                  </div>
                </div>
                <button
                  className="apply-button"
                  onClick={() => handleJobApplication(job)}
                >
                  View Details & Apply
                </button>
              </div>
              <div className="job-content">
                <p className="job-description">{job.description}</p>
                <div className="job-requirements">
                  <h4>Key Requirements:</h4>
                  <ul>
                    {job.requirements.slice(0, 3).map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                    {job.requirements.length > 3 && (
                      <li className="more-requirements">+ {job.requirements.length - 3} more requirements</li>
                    )}
                  </ul>
                </div>
              </div>
            </motion.div>
          )) : (
            <motion.div
              className="no-results"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Search className="no-results-icon" />
              <h3>No positions found</h3>
              <p>We couldn't find any positions matching "{searchTerm}". Try adjusting your search terms or browse all available positions.</p>
              <button
                onClick={() => setSearchTerm('')}
                className="clear-search-btn"
              >
                View All Positions
              </button>
            </motion.div>
          )}
        </div>

        <motion.div
          className="jobs-footer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p>Don't see a position that fits? We're always looking for talented individuals.</p>
          <button className="send-resume-button">Send Us Your Resume</button>
        </motion.div>
      </div>

      {/* Application Modal */}
      {showApplication && selectedJob && (
        <div className="application-modal-overlay">
          <div className="application-modal">
            <div className="modal-header">
              <h2>Apply for {selectedJob.title}</h2>
              <button 
                className="close-modal"
                onClick={() => setShowApplication(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="modal-content">
              <div className="job-details">
                <h3>About This Role</h3>
                <p>{selectedJob.detailedDescription}</p>
                
                <div className="responsibilities">
                  <h4>Key Responsibilities</h4>
                  <ul>
                    {selectedJob.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>

                <div className="requirements">
                  <h4>Requirements</h4>
                  <ul>
                    {selectedJob.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="compensation">
                  <h4>Compensation & Benefits</h4>
                  <p><strong>Salary:</strong> {selectedJob.salary}</p>
                  <ul>
                    <li>• Health insurance coverage</li>
                    <li>• Flexible working arrangements</li>
                    <li>• Professional development opportunities</li>
                    <li>• Performance-based bonuses</li>
                  </ul>
                </div>
              </div>

              <div className="application-form">
                <h3>Apply for This Position</h3>
                <form onSubmit={handleApplicationSubmit}>
                  <div className="form-row">
                    <div className="form-field">
                      <label>First Name *</label>
                      <input
                        type="text"
                        value={applicationData.firstName}
                        onChange={(e) => setApplicationData({...applicationData, firstName: e.target.value})}
                        required
                      />
                    </div>
                    <div className="form-field">
                      <label>Last Name *</label>
                      <input
                        type="text"
                        value={applicationData.lastName}
                        onChange={(e) => setApplicationData({...applicationData, lastName: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      value={applicationData.email}
                      onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      value={applicationData.phone}
                      onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label>Years of Experience</label>
                    <input
                      type="text"
                      value={applicationData.experience}
                      onChange={(e) => setApplicationData({...applicationData, experience: e.target.value})}
                    />
                  </div>

                  <div className="form-field">
                    <label>Current Company</label>
                    <input
                      type="text"
                      value={applicationData.currentCompany}
                      onChange={(e) => setApplicationData({...applicationData, currentCompany: e.target.value})}
                    />
                  </div>

                  <div className="form-field">
                    <label>Cover Letter</label>
                    <textarea
                      value={applicationData.coverLetter}
                      onChange={(e) => setApplicationData({...applicationData, coverLetter: e.target.value})}
                      placeholder="Tell us why you're interested in this role and what makes you a great fit..."
                      rows="4"
                    />
                  </div>

                  <div className="form-field">
                    <label>Resume/CV *</label>
                    <div className="file-upload">
                      <FileText className="w-8 h-8" />
                      <p>Click to upload or drag and drop</p>
                      <span>PDF, DOC, DOCX (max 5MB)</span>
                    </div>
                  </div>

                  <button type="submit" className="submit-application">
                    <Send className="w-4 h-4 mr-2" />
                    Submit Application
                  </button>

                  <p className="privacy-notice">
                    By submitting this application, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default JobOpenings;