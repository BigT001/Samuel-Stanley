import React from 'react';
import styled from 'styled-components';
import { useColors } from '../context/color-context';

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
}

const ServicesContainer = styled.section<{ bg: string }>`
  padding: 6rem 2rem;
  background: ${props => props.bg};
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2<{ color: string }>`
  font-size: 2.5rem;
  color: ${props => props.color};
  margin-bottom: 1rem;
  text-align: center;
`;

const SectionDescription = styled.p<{ color: string }>`
  color: ${props => props.color};
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
  font-size: 1.1rem;
  opacity: 0.9;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div<{ accent: string; primary: string }>`
  padding: 2rem;
  border-radius: 8px;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${props => props.accent};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
    
    &:before {
      transform: scaleX(1);
    }
    
    .service-icon {
      background: ${props => props.primary};
      color: white;
    }
  }
`;

const IconWrapper = styled.div<{ color: string }>`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.color}10;
  color: ${props => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  transition: all 0.3s ease;
`;

const ServiceTitle = styled.h3<{ color: string }>`
  color: ${props => props.color};
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p<{ color: string }>`
  color: ${props => props.color};
  opacity: 0.9;
  line-height: 1.6;
`;

const services: Service[] = [
  {
    id: 1,
    title: "Color Psychology Consultation",
    description: "Transform your space with scientifically-backed color schemes that influence mood, productivity, and well-being.",
    icon: "🎨",
    color: "#4A90E2"
  },
  {
    id: 2,
    title: "Interior Space Planning",
    description: "Optimize your space for flow, functionality, and harmony using proven design principles and ergonomic considerations.",
    icon: "📐",
    color: "#50C878"
  },
  {
    id: 3,
    title: "Custom Furniture Design",
    description: "Create unique, personalized pieces that perfectly complement your space and lifestyle.",
    icon: "🛋️",
    color: "#E6A817"
  },
  {
    id: 4,
    title: "Lighting Design",
    description: "Enhance ambiance and functionality with strategic lighting solutions that complement your color scheme.",
    icon: "💡",
    color: "#FF6B6B"
  }
];

const ServicesSection: React.FC = () => {
  const { currentScheme } = useColors();
  
  return (
    <ServicesContainer bg={currentScheme.background} id="services">
      <ContentWrapper>
        <SectionTitle color={currentScheme.text}>Our Services</SectionTitle>
        <SectionDescription color={currentScheme.text}>
          Experience transformative design solutions that blend color psychology 
          with contemporary aesthetics to create spaces that inspire and uplift.
        </SectionDescription>
        <ServicesGrid>
          {services.map(service => (
            <ServiceCard 
              key={service.id}
              accent={service.color}
              primary={currentScheme.primary}
            >
              <IconWrapper 
                color={service.color}
                className="service-icon"
              >
                {service.icon}
              </IconWrapper>
              <ServiceTitle color={currentScheme.text}>
                {service.title}
              </ServiceTitle>
              <ServiceDescription color={currentScheme.text}>
                {service.description}
              </ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ContentWrapper>
    </ServicesContainer>
  );
};

export default ServicesSection;
