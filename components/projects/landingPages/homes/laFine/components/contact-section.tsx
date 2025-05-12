import React, { useState } from 'react';
import styled from 'styled-components';
import { useColors } from '../context/color-context';

const ContactContainer = styled.section<{ bg: string }>`
  padding: 6rem 2rem;
  background: ${props => props.bg};
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  
  @media (min-width: 968px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div``;

const SectionTitle = styled.h2<{ color: string }>`
  font-size: 2.5rem;
  color: ${props => props.color};
  margin-bottom: 1.5rem;
`;

const SectionDescription = styled.p<{ color: string }>`
  color: ${props => props.color};
  opacity: 0.9;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ContactFeatures = styled.div`
  display: grid;
  gap: 1.5rem;
`;

const ContactFeature = styled.div<{ primary: string }>`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  
  .icon {
    background: ${props => props.primary}20;
    color: ${props => props.primary};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
  }
`;

const FeatureText = styled.div<{ color: string }>`
  color: ${props => props.color};
  
  h4 {
    margin-bottom: 0.5rem;
  }
  
  p {
    opacity: 0.8;
  }
`;

const ContactForm = styled.form<{ accent: string }>`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  
  @media (min-width: 768px) {
    padding: 3rem;
  }
  
  .form-header {
    margin-bottom: 2rem;
  }
  
  .form-group {
    margin-bottom: 1.5rem;
    
    label {
      display: block;
      margin-bottom: 0.5rem;
      color: ${props => props.accent};
    }
  }
`;

const Input = styled.input<{ primary: string }>`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${props => props.primary}20;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.primary};
    box-shadow: 0 0 0 2px ${props => props.primary}20;
  }
`;

const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 150px;
  resize: vertical;
`;

const SubmitButton = styled.button<{ primary: string }>`
  width: 100%;
  padding: 1rem;
  background: ${props => props.primary};
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${props => props.primary}40;
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const Scarcity = styled.div<{ primary: string }>`
  margin-top: 1rem;
  padding: 1rem;
  background: ${props => props.primary}10;
  border-radius: 4px;
  color: ${props => props.primary};
  font-size: 0.9rem;
  text-align: center;
`;

const ContactSection: React.FC = () => {
  const { currentScheme } = useColors();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    // Show success message (you can implement a toast notification here)
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  
  return (
    <ContactContainer bg={currentScheme.background} id="contact">
      <ContentWrapper>
        <ContactInfo>
          <SectionTitle color={currentScheme.text}>
            Transform Your Space Today
          </SectionTitle>
          <SectionDescription color={currentScheme.text}>
            Ready to create a space that reflects your personality and enhances your well-being? 
            Let's start with a consultation to discover how color psychology can transform your environment.
          </SectionDescription>
          <ContactFeatures>
            <ContactFeature primary={currentScheme.primary}>
              <div className="icon">📍</div>
              <FeatureText color={currentScheme.text}>
                <h4>Visit Our Studio</h4>
                <p>123 Design District, Creative City, ST 12345</p>
              </FeatureText>
            </ContactFeature>
            <ContactFeature primary={currentScheme.primary}>
              <div className="icon">📞</div>
              <FeatureText color={currentScheme.text}>
                <h4>Call Us</h4>
                <p>(555) 123-4567</p>
              </FeatureText>
            </ContactFeature>
            <ContactFeature primary={currentScheme.primary}>
              <div className="icon">✉️</div>
              <FeatureText color={currentScheme.text}>
                <h4>Email Us</h4>
                <p>hello@lafine.design</p>
              </FeatureText>
            </ContactFeature>
          </ContactFeatures>
        </ContactInfo>
        
        <ContactForm accent={currentScheme.accent} onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              primary={currentScheme.primary}
              placeholder="Your name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              primary={currentScheme.primary}
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              primary={currentScheme.primary}
              placeholder="(optional)"
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <TextArea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              primary={currentScheme.primary}
              placeholder="Tell us about your project..."
            />
          </div>
          <SubmitButton 
            type="submit" 
            primary={currentScheme.primary}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Schedule a Consultation'}
          </SubmitButton>
          <Scarcity primary={currentScheme.primary}>
            🗓️ Limited spots available this month - Book your consultation now!
          </Scarcity>
        </ContactForm>
      </ContentWrapper>
    </ContactContainer>
  );
};

export default ContactSection;
