import React, { useEffect, useState } from 'react';
import { useColors } from '../context/color-context';
import styled from 'styled-components';

const HeroContainer = styled.section<{ bg: string }>`
  min-height: 100vh;
  background: ${props => props.bg};
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 30% 40%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%);
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 2;
`;

const Tagline = styled.h1<{ color: string }>`
  font-size: 4rem;
  color: ${props => props.color};
  margin-bottom: 1.5rem;
  line-height: 1.2;
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SubTagline = styled.p<{ color: string }>`
  font-size: 1.5rem;
  color: ${props => props.color};
  margin-bottom: 2rem;
  max-width: 600px;
  opacity: 0.9;
`;

const CTAButton = styled.button<{ primary: string }>`
  background: ${props => props.primary};
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  }
  
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 120%;
    height: 120%;
    background: rgba(255,255,255,0.2);
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    transition: transform 0.5s ease;
  }
  
  &:hover:after {
    transform: translate(-50%, -50%) scale(1);
  }
`;

const ScrollIndicator = styled.div<{ color: string }>`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.color};
  opacity: 0.7;
  transition: opacity 0.3s ease;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
  }
`;

const BackgroundPattern = styled.div<{ accent: string }>`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(135deg, transparent 0%, ${props => props.accent} 100%);
  opacity: 0.1;
  z-index: 1;
`;

const FloatingShape = styled.div<{ delay: number; color: string }>`
  position: absolute;
  width: 60px;
  height: 60px;
  background: ${props => props.color};
  opacity: 0.1;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  animation: float ${props => 15 + props.delay}s ease-in-out infinite;
  
  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(100px, 50px) rotate(90deg);
    }
    50% {
      transform: translate(50px, 100px) rotate(180deg);
    }
    75% {
      transform: translate(-50px, 50px) rotate(270deg);
    }
  }
`;

const AnimatedText = styled.span`
  display: inline-block;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
  
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ColorPalette = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const ColorSwatch = styled.button<{ swatchColor: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid white;
  background: ${props => props.swatchColor};
  cursor: pointer;
  transition: transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  
  &:hover {
    transform: scale(1.1);
  }
`;

const BackgroundAnimation = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  background: linear-gradient(45deg, transparent 0%, rgba(255,255,255,0.1) 100%);
  animation: shimmer 8s ease-in-out infinite;
  
  @keyframes shimmer {
    0% {
      opacity: 0.5;
      transform: translateX(100%) skewX(-15deg);
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 0.5;
      transform: translateX(-100%) skewX(-15deg);
    }
  }
`;

const HeroSection: React.FC = () => {
  const { currentScheme, setScheme } = useColors();
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [animatedTitle, setAnimatedTitle] = useState(false);
  
  useEffect(() => {
    setAnimatedTitle(true);
    const handleScroll = () => {
      const opacity = 1 - (window.scrollY / 500);
      setScrollOpacity(Math.max(0, Math.min(1, opacity)));
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToPortfolio = () => {
    document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const colorSchemes = [
    { name: 'trust', color: '#1B4965' },
    { name: 'luxury', color: '#2C3639' },
    { name: 'creative', color: '#FF6B6B' },
    { name: 'natural', color: '#4A5859' }
  ];
  
  return (
    <HeroContainer bg={currentScheme.background}>
      <BackgroundAnimation />
      <BackgroundPattern accent={currentScheme.accent} />
      
      {[...Array(5)].map((_, i) => (
        <FloatingShape
          key={i}
          delay={i * 2}
          color={currentScheme.primary}
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
            scale: `${0.8 + i * 0.2}`
          }}
        />
      ))}
      
      <ContentWrapper>
        {animatedTitle && (
          <>
            <Tagline color={currentScheme.text}>
              {['Transform', 'Your', 'Space,', 'Elevate', 'Your', 'Life'].map((word, i) => (
                <AnimatedText
                  key={i}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {word}{' '}
                </AnimatedText>
              ))}
            </Tagline>
            <SubTagline color={currentScheme.text}>
              <AnimatedText style={{ animationDelay: '0.6s' }}>
                Award-winning interior design that turns your vision into reality.
              </AnimatedText>
            </SubTagline>
            <CTAButton primary={currentScheme.primary}>
              Start Your Journey
            </CTAButton>
            
            <ColorPalette>
              {colorSchemes.map(scheme => (
                <ColorSwatch
                  key={scheme.name}
                  swatchColor={scheme.color}
                  onClick={() => setScheme(scheme.name as any)}
                  title={`Switch to ${scheme.name} theme`}
                />
              ))}
            </ColorPalette>
          </>
        )}
      </ContentWrapper>
      
      <ScrollIndicator 
        color={currentScheme.text} 
        onClick={scrollToPortfolio}
        style={{ 
          opacity: scrollOpacity,
          transform: `translateX(-50%) translateY(${scrollOpacity * 20}px)`
        }}
      >
        <span>Discover Our Work</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default HeroSection;
