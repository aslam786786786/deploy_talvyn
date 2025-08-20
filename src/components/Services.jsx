import { motion } from 'framer-motion';
import { Shield, Globe, Cpu, ArrowRight, CheckCircle } from 'lucide-react';
import '../styles/services.css';

export default function Services() {
    const services = [
        {
            icon: Shield,
            title: 'Cybersecurity',
            description: 'Comprehensive security solutions to protect your digital assets and ensure business continuity.',
            highlights: [
                'Advanced Threat Detection',
                'Security Compliance',
                '24/7 Monitoring',
                'Incident Response'
            ],
            features: [
                'Vulnerability Assessment',
                'Penetration Testing',
                'Security Audits',
                'Risk Management',
                'Compliance Consulting',
                'Employee Training'
            ]
        },
        {
            icon: Globe,
            title: 'Website Development',
            description: 'Modern, responsive websites that drive business growth and deliver exceptional user experiences.',
            highlights: [
                'Responsive Design',
                'E-commerce Solutions',
                'CMS Integration',
                'Performance Optimization'
            ],
            features: [
                'Custom Web Development',
                'Mobile-First Design',
                'SEO Optimization',
                'API Integration',
                'Database Design',
                'Hosting & Maintenance'
            ]
        },
        {
            icon: Cpu,
            title: 'Custom Software Development',
            description: 'Tailored software solutions designed to meet your unique business requirements and goals.',
            highlights: [
                'Enterprise Applications',
                'Mobile Development',
                'API Integration',
                'Cloud Solutions'
            ],
            features: [
                'Requirements Analysis',
                'System Architecture',
                'Agile Development',
                'Quality Assurance',
                'DevOps Integration',
                'Technical Support'
            ]
        }
    ];

    return (
        <div className="services-section">
            <div className="services-container">
                <motion.div
                    className="services-header"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="services-title">Our Services</h2>
                    <p className="services-subtitle">
                        We deliver innovative technology solutions that transform businesses 
                        and secure digital futures. Each service is designed to meet the evolving 
                        needs of modern enterprises.
                    </p>
                </motion.div>

                <div className="services-grid">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                className="service-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                viewport={{ once: true }}
                            >
                                <div className="service-card-header">
                                    <div className="service-icon">
                                        <Icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="service-card-title">{service.title}</h3>
                                </div>
                                
                                <p className="service-card-description">
                                    {service.description}
                                </p>
                                
                                <div className="service-highlights">
                                    <h4>Key Highlights:</h4>
                                    <div className="highlights-list">
                                        {service.highlights.map((highlight, idx) => (
                                            <div key={idx} className="highlight-item">
                                                <CheckCircle className="w-4 h-4" />
                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="service-features">
                                    <h4>What We Offer:</h4>
                                    <div className="features-grid">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="feature-item">
                                                • {feature}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button className="service-cta-btn">
                                    Learn More
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    className="services-bottom-cta"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div className="cta-content">
                        <h3>Ready to Transform Your Business?</h3>
                        <p>
                            Our experienced team is ready to help you leverage technology to achieve your business goals. 
                            Contact us today to discuss your project requirements.
                        </p>
                        <button className="get-started-btn">
                            Get Started Today
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>

                <div className="scroll-indicator">
                    <div className="scroll-arrows">
                        <div className="arrow-down"></div>
                        <div className="arrow-down"></div>
                        <div className="arrow-down"></div>
                    </div>
                    <p className="scroll-text">Scroll down to explore more</p>
                </div>
            </div>
        </div>
    );
}