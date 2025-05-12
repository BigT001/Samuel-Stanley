import React from 'react';
import styled from 'styled-components';
import { AnimatedElement } from './animated-element';
import { Project } from '../types';
import { useColors } from '../context/color-context';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div<{ bg: string }>`
  background: ${props => props.bg};
  max-width: 900px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div<{ primary: string }>`
  padding: 2rem;
  background: ${props => props.primary};
  color: white;
`;

const ModalBody = styled.div`
  padding: 2rem;
  overflow-y: auto;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const ProjectInfo = styled.div<{ color: string }>`
  color: ${props => props.color};
  
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  
  p {
    line-height: 1.6;
    margin-bottom: 2rem;
  }
`;

const ColorPaletteSection = styled.div`
  margin-bottom: 2rem;
`;

const ColorPalette = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ColorSwatch = styled.div<{ color: string }>`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background: ${props => props.color};
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    
    &:after {
      content: '${props => props.color}';
      position: absolute;
      bottom: -25px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0.75rem;
      white-space: nowrap;
    }
  }
`;

const FeaturesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
`;

const FeatureTag = styled.span<{ primary: string }>`
  padding: 0.5rem 1rem;
  background: ${props => `${props.primary}20`};
  color: ${props => props.primary};
  border-radius: 20px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.primary};
    color: white;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { currentScheme } = useColors();
  
  return (
    <ModalOverlay onClick={onClose}>
      <AnimatedElement animation="scale">
        <ModalContent 
          bg={currentScheme.background}
          onClick={e => e.stopPropagation()}
        >
          <ModalHeader primary={currentScheme.primary}>
            <h2>{project.title}</h2>
            <CloseButton onClick={onClose}>×</CloseButton>
          </ModalHeader>
          
          <ModalBody>
            <AnimatedElement animation="fadeIn" delay={0.2}>
              <ProjectImage src={project.imagePath} alt={project.title} />
            </AnimatedElement>
            
            <ProjectInfo color={currentScheme.text}>
              <AnimatedElement animation="slideUp" delay={0.3}>
                <h3>About this Project</h3>
                <p>{project.description}</p>
              </AnimatedElement>
              
              <AnimatedElement animation="slideUp" delay={0.4}>
                <ColorPaletteSection>
                  <h4>Color Psychology</h4>
                  <ColorPalette>
                    {project.moodColors.map((color, index) => (
                      <ColorSwatch 
                        key={index} 
                        color={color}
                      />
                    ))}
                  </ColorPalette>
                </ColorPaletteSection>
              </AnimatedElement>
              
              <AnimatedElement animation="slideUp" delay={0.5}>
                <h4>Key Features</h4>
                <FeaturesList>
                  {project.features.map((feature, index) => (
                    <FeatureTag 
                      key={index}
                      primary={currentScheme.primary}
                    >
                      {feature}
                    </FeatureTag>
                  ))}
                </FeaturesList>
              </AnimatedElement>
            </ProjectInfo>
          </ModalBody>
        </ModalContent>
      </AnimatedElement>
    </ModalOverlay>
  );
};
