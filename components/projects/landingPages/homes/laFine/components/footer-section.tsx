import React from 'react';
import styled from 'styled-components';
import { useColors } from '../context/color-context';

const FooterContainer = styled.footer<{ bg: string }>`
  background: ${props => props.bg};
  padding: 4rem 2rem 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const FooterColumn = styled.div<{ color: string }>`
  color: ${props => props.color};
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    margin-bottom: 0.75rem;
  }
  
  a {
    color: inherit;
    text-decoration: none;
    opacity: 0.8;
    transition: opacity 0.3s ease;
    
    &:hover {
      opacity: 1;
    }
  }
`;

const BottomSection = styled.div<{ color: string }>`
  padding-top: 2rem;
  border-top: 1px solid ${props => props.color}20;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  color: ${props => props.color};
  opacity: 0.8;
  font-size: 0.9rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      opacity: 0.8;
    }
  }
`;

const Footer: React.FC = () => {
  const { currentScheme } = useColors();
  
  return (
    <FooterContainer bg={currentScheme.background}>
      <ContentWrapper>
        <TopSection>
          <FooterColumn color={currentScheme.text}>
            <h3>LaFine Design</h3>
            <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
              Transforming spaces through the power of color psychology and innovative design.
            </p>
            <SocialLinks>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="Pinterest">📌</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="Facebook">👥</a>
            </SocialLinks>
          </FooterColumn>
          
          <FooterColumn color={currentScheme.text}>
            <h3>Services</h3>
            <ul>
              <li><a href="#services">Color Psychology Consultation</a></li>
              <li><a href="#services">Interior Space Planning</a></li>
              <li><a href="#services">Custom Furniture Design</a></li>
              <li><a href="#services">Lighting Design</a></li>
            </ul>
          </FooterColumn>
          
          <FooterColumn color={currentScheme.text}>
            <h3>Company</h3>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </FooterColumn>
          
          <FooterColumn color={currentScheme.text}>
            <h3>Contact</h3>
            <ul>
              <li>📍 123 Design District, Creative City</li>
              <li>📞 (555) 123-4567</li>
              <li>✉️ hello@lafine.design</li>
              <li>⏰ Mon-Fri: 9am - 6pm</li>
            </ul>
          </FooterColumn>
        </TopSection>
        
        <BottomSection color={currentScheme.text}>
          <div>© {new Date().getFullYear()} LaFine Design. All rights reserved.</div>
          <div>
            <a href="#privacy" style={{ marginRight: '1rem' }}>Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </BottomSection>
      </ContentWrapper>
    </FooterContainer>
  );
};

export default Footer;
