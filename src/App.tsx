import React, { useState, useEffect } from 'react';
import './App.css';
import { 
  Instagram, 
  Facebook, 
  MessageCircle,
  Check,
  Star,
  Quote,
  User,
  Building2,
  MapPin,
  Phone,
  Mail,
  Clock,
  CalendarCheck,
  ArrowRight,
  Award,
  Heart,
  Target,
  Sparkles,
  Camera,
  Settings,
  Image,
  BadgeCheck,
  ShieldPlus,
  Stethoscope,
  Hand,
  Bone,
  Activity,
  Footprints,
  PersonStanding,
  Dumbbell,
  HeartPulse
} from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  const services = [
    {
      icon: <Bone strokeWidth={1.5} />,
      title: 'Spinal Adjustment',
      description: 'Precise spinal alignment techniques to restore proper vertebral positioning, reduce nerve interference, and promote optimal body function.'
    },
    {
      icon: <ShieldPlus strokeWidth={1.5} />,
      title: 'Pain Management',
      description: 'Drug-free solutions for chronic back pain, neck pain, and headaches through targeted manual therapy and rehabilitation exercises.'
    },
    {
      icon: <Footprints strokeWidth={1.5} />,
      title: 'Sports Injury Care',
      description: 'Specialized treatment for athletic injuries, helping athletes recover faster and prevent future injuries through proper alignment.'
    },
    {
      icon: <PersonStanding strokeWidth={1.5} />,
      title: 'Posture Correction',
      description: 'Comprehensive posture analysis and correction programs to alleviate strain, improve balance, and enhance overall body mechanics.'
    },
    {
      icon: <Activity strokeWidth={1.5} />,
      title: 'Mobility Restoration',
      description: 'Targeted treatments to restore joint mobility, reduce stiffness, and increase range of motion for improved daily function.'
    },
    {
      icon: <HeartPulse strokeWidth={1.5} />,
      title: 'Wellness Programs',
      description: 'Holistic wellness plans combining chiropractic care with lifestyle advice for long-term health and preventive care.'
    }
  ];

  const whyChoose = [
    {
      icon: <Award strokeWidth={1.5} />,
      title: 'Expert Practitioner',
      description: 'Years of specialized training in chiropractic and physiotherapy techniques.'
    },
    {
      icon: <Heart strokeWidth={1.5} />,
      title: 'Natural Healing',
      description: 'Drug-free, non-invasive treatments that work with your body\'s natural healing process.'
    },
    {
      icon: <Target strokeWidth={1.5} />,
      title: 'Personalized Care',
      description: 'Customized treatment plans tailored to your specific needs and health goals.'
    },
    {
      icon: <Sparkles strokeWidth={1.5} />,
      title: 'Proven Results',
      description: 'Hundreds of satisfied patients with lasting relief and improved quality of life.'
    }
  ];

  const testimonials = [
    {
      name: 'Ahmed Khan',
      role: 'Business Professional',
      text: 'After years of chronic back pain, Dr. Naveed helped me find relief without surgery. His approach is thorough and his expertise is evident in every session.',
      initials: 'AK'
    },
    {
      name: 'Sarah Malik',
      role: 'Fitness Enthusiast',
      text: 'Dr. Jaffry\'s treatment not only fixed my sports injury but also improved my overall posture. I feel stronger and more aligned than ever before.',
      initials: 'SM'
    },
    {
      name: 'Imran Abbas',
      role: 'Software Engineer',
      text: 'Long hours at the desk gave me terrible neck pain. Dr. Naveed\'s adjustments and advice have been life-changing. Highly recommend his services!',
      initials: 'IA'
    }
  ];

  const galleryImages = [
    { id: 1, caption: 'Treatment Session', icon: <Stethoscope strokeWidth={1.5} /> },
    { id: 2, caption: 'Spinal Assessment', icon: <Bone strokeWidth={1.5} /> },
    { id: 3, caption: 'Patient Care', icon: <Hand strokeWidth={1.5} /> },
    { id: 4, caption: 'Modern Equipment', icon: <Settings strokeWidth={1.5} /> },
    { id: 5, caption: 'Clinic Interior', icon: <Building2 strokeWidth={1.5} /> },
    { id: 6, caption: 'Adjustment Technique', icon: <Image strokeWidth={1.5} /> },
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <a href="#home" className="logo">
            <div className="logo-icon">DNJ</div>
            <span>Dr. Naveed Jaffry</span>
          </a>
          
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact" className="btn btn-primary nav-cta">Book Consultation</a>
          </div>

          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <div className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={handleNavClick}>Home</a>
          <a href="#about" onClick={handleNavClick}>About</a>
          <a href="#services" onClick={handleNavClick}>Services</a>
          <a href="#gallery" onClick={handleNavClick}>Gallery</a>
          <a href="#testimonials" onClick={handleNavClick}>Testimonials</a>
          <a href="#contact" onClick={handleNavClick}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Available for Appointments
            </div>
            <h1>Expert <span>Chiropractic</span> Care in Lahore</h1>
            <p className="hero-text">
              Experience natural pain relief and improved mobility through professional 
              chiropractic treatments. Dr. Naveed Jaffry provides personalized, drug-free 
              musculoskeletal therapy to help you live your best life.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">
                <CalendarCheck size={18} /> Book Appointment
              </a>
              <a href="#services" className="btn btn-secondary">
                Our Services <ArrowRight size={18} />
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-number">500+</div>
                <div className="hero-stat-label">Patients Treated</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">10+</div>
                <div className="hero-stat-label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-number">98%</div>
                <div className="hero-stat-label">Satisfaction Rate</div>
              </div>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-image-wrapper">
              <div className="hero-image-placeholder">
                <User className="hero-placeholder-icon" strokeWidth={1} />
                <span>Dr. Naveed Jaffry</span>
              </div>
            </div>
            <div className="hero-floating-card top">
              <div className="floating-icon green"><BadgeCheck size={24} /></div>
              <div className="floating-text">
                <strong>Certified Professional</strong>
                <span>Licensed Practitioner</span>
              </div>
            </div>
            <div className="hero-floating-card bottom">
              <div className="floating-icon gold"><Star size={24} /></div>
              <div className="floating-text">
                <strong>5.0 Rating</strong>
                <span>200+ Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="about-image">
            <div className="about-image-main">
              <Building2 className="about-placeholder-icon" strokeWidth={1} />
            </div>
            <div className="about-experience-badge">
              <strong>10+</strong>
              <span>Years of Excellence</span>
            </div>
          </div>
          
          <div className="about-content">
            <span className="section-subtitle">About Dr. Naveed</span>
            <h2 className="section-title">Dedicated to Your Spinal Health & Wellness</h2>
            <p className="about-text">
              Dr. Naveed Jaffry is a skilled chiropractic and physiotherapy practitioner based 
              in Lahore, Pakistan. With over a decade of experience, he specializes in spinal 
              alignment, pain management, and musculoskeletal rehabilitation using drug-free, 
              hands-on techniques.
            </p>
            <p className="about-text">
              His patient-centered approach focuses on understanding the root cause of your 
              pain and developing personalized treatment plans that promote natural healing 
              and long-term wellness.
            </p>
            <div className="about-features">
              <div className="about-feature">
                <div className="about-feature-icon"><Check size={14} /></div>
                <span>Spinal Adjustment Expert</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon"><Check size={14} /></div>
                <span>Drug-Free Treatment</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon"><Check size={14} /></div>
                <span>Personalized Care Plans</span>
              </div>
              <div className="about-feature">
                <div className="about-feature-icon"><Check size={14} /></div>
                <span>Modern Techniques</span>
              </div>
            </div>
            <a href="#contact" className="btn btn-primary">
              <CalendarCheck size={18} /> Schedule a Visit
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Services</span>
            <h2 className="section-title">Comprehensive Chiropractic Care</h2>
            <p className="section-description">
              From pain relief to preventive care, discover our range of specialized 
              treatments designed to restore your body's natural balance.
            </p>
          </div>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title">Your Health, Our Priority</h2>
            <p className="section-description">
              Experience the difference of personalized chiropractic care that puts 
              your wellbeing first.
            </p>
          </div>
          
          <div className="why-choose-grid">
            {whyChoose.map((item, index) => (
              <div key={index} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Gallery</span>
            <h2 className="section-title">Our Clinic & Practice</h2>
            <p className="section-description">
              Take a look at our modern facility and see Dr. Naveed in action, 
              providing expert care to patients.
            </p>
          </div>
          
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <div className="gallery-image-placeholder">
                  <span className="gallery-icon">{image.icon}</span>
                  <div className="gallery-overlay">
                    <span className="gallery-caption">{image.caption}</span>
                    <span className="gallery-add"><Camera size={14} /> Add Photo</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Testimonials</span>
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-description">
              Real stories from real patients who have experienced the transformative 
              power of proper chiropractic care.
            </p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <Quote className="testimonial-quote-icon" strokeWidth={1} />
                <div className="testimonial-content">
                  <div className="testimonial-stars">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{testimonial.initials}</div>
                  <div className="testimonial-info">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact section">
        <div className="container">
          <div className="contact-info">
            <span className="section-subtitle">Contact</span>
            <h2 className="section-title">Get in Touch</h2>
            <p className="contact-text">
              Ready to start your journey to better health? Reach out to schedule 
              a consultation or learn more about our services.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-method-icon"><MapPin size={24} /></div>
                <div className="contact-method-content">
                  <strong>Location</strong>
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon"><Phone size={24} /></div>
                <div className="contact-method-content">
                  <strong>Phone</strong>
                  <a href="tel:+923001234567">+92 300 123 4567</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon"><Mail size={24} /></div>
                <div className="contact-method-content">
                  <strong>Email</strong>
                  <a href="mailto:dr.naveed@example.com">dr.naveed@example.com</a>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-method-icon"><Clock size={24} /></div>
                <div className="contact-method-content">
                  <strong>Working Hours</strong>
                  <span>Mon - Sat: 9:00 AM - 7:00 PM</span>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
              <a href="https://instagram.com/dnj_chiro" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={22} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <Facebook size={22} />
              </a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <MessageCircle size={22} />
              </a>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" placeholder="Your name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" placeholder="Your phone" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="Your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Interested In</label>
                <select id="service" required>
                  <option value="">Select a service</option>
                  <option value="spinal">Spinal Adjustment</option>
                  <option value="pain">Pain Management</option>
                  <option value="sports">Sports Injury Care</option>
                  <option value="posture">Posture Correction</option>
                  <option value="mobility">Mobility Restoration</option>
                  <option value="wellness">Wellness Programs</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  placeholder="Describe your condition or questions..."
                  rows={4}
                ></textarea>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn btn-primary">
                  Send Message <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <a href="#home" className="logo">
                <div className="logo-icon">DNJ</div>
                <span>Dr. Naveed Jaffry</span>
              </a>
              <p>
                Professional chiropractic care for a healthier, pain-free life. 
                Experience natural healing through expert manual therapy.
              </p>
              <div className="footer-social">
                <a href="https://instagram.com/dnj_chiro" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="WhatsApp">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-title">Quick Links</h4>
              <div className="footer-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#gallery">Gallery</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-title">Working Hours</h4>
              <div className="footer-links">
                <span>Monday - Friday</span>
                <span className="footer-hours">9:00 AM - 7:00 PM</span>
                <span>Saturday</span>
                <span className="footer-hours">10:00 AM - 5:00 PM</span>
                <span>Sunday</span>
                <span className="footer-hours">Closed</span>
              </div>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-title">Contact Info</h4>
              <div className="footer-links footer-contact">
                <span><MapPin size={14} /> Lahore, Pakistan</span>
                <a href="tel:+923001234567"><Phone size={14} /> +92 300 123 4567</a>
                <a href="mailto:dr.naveed@example.com"><Mail size={14} /> dr.naveed@example.com</a>
                <a href="https://instagram.com/dnj_chiro" target="_blank" rel="noopener noreferrer"><Instagram size={14} /> @dnj_chiro</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Dr. Naveed Jaffry. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
