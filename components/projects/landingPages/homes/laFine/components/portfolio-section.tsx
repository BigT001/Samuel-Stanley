import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useColors } from '../context/color-context';
import { projects } from '../data/portfolio-data';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PortfolioContainer = styled.section<{ bg: string }>`
  padding: 6rem 2rem;
  background: ${props => props.bg};
  position: relative;
  overflow: hidden;
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
  animation: ${fadeIn} 0.6s ease-out;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ isActive: boolean; primary: string }>`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 25px;
  background: ${props => props.isActive ? props.primary : 'transparent'};
  color: ${props => props.isActive ? 'white' : props.primary};
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid ${props => props.primary};
  font-size: 0.9rem;
  font-weight: 500;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${props => props.primary}30;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  opacity: 0;
  transform: translateY(20px);
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: 0.3s;
`;

const ProjectCard = styled.div<{ accent: string; delay: number }>`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  background: white;
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${props => props.delay * 0.1}s;
  opacity: 0;
  
  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0,0,0,0.2);
    
    .project-image {
      transform: scale(1.1);
    }
    
    .color-palette {
      transform: translateY(0);
      opacity: 1;
    }
    
    .project-overlay {
      opacity: 1;
    }
    
    .project-features {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.div<{ image: string }>`
  width: 100%;
  height: 300px;
  background: url(${props => props.image}) center/cover;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
`;

const ProjectOverlay = styled.div<{ bg: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => `${props.bg}f0`};
  opacity: 0;
  transition: all 0.3s ease;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    font-size: 1rem;
    opacity: 0.9;
    line-height: 1.6;
    margin-bottom: 1.5rem;
  }
`;

const ColorPalette = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.3s ease;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(5px);
`;

const ColorSwatch = styled.div<{ color: string }>`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${props => props.color};
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const ProjectFeatures = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: auto;
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease;
`;

const FeatureTag = styled.span<{ primary: string }>`
  padding: 0.25rem 0.75rem;
  background: ${props => `${props.primary}20`};
  color: white;
  border-radius: 15px;
  font-size: 0.875rem;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  
  &:hover {
    background: white;
    color: ${props => props.primary};
  }
`;

const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Office", "Bathroom"];

const PortfolioSection: React.FC = () => {
  const { currentScheme } = useColors();
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#portfolio');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <PortfolioContainer bg={currentScheme.background} id="portfolio">
      <ContentWrapper>
        <SectionTitle color={currentScheme.text}>
          Transformative Spaces
        </SectionTitle>
        
        <FilterContainer>
          {categories.map((category) => (
            <FilterButton
              key={category}
              type="button"
              isActive={category === activeCategory}
              primary={currentScheme.primary}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterContainer>

        <ProjectsGrid>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              accent={currentScheme.accent}
              delay={index}
              style={{ 
                animationPlayState: isVisible ? 'running' : 'paused'
              }}
            >
              <ProjectImage 
                className="project-image"
                image={project.imagePath}
              />
              <ProjectOverlay className="project-overlay" bg={currentScheme.primary}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ProjectFeatures className="project-features">
                  {project.features.map((feature, i) => (
                    <FeatureTag
                      key={i}
                      primary={currentScheme.primary}
                    >
                      {feature}
                    </FeatureTag>
                  ))}
                </ProjectFeatures>
              </ProjectOverlay>
              <ColorPalette className="color-palette">
                {project.moodColors.map((color, i) => (
                  <ColorSwatch
                    key={i}
                    color={color}
                    title={`Color ${i + 1}`}
                  />
                ))}
              </ColorPalette>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ContentWrapper>
    </PortfolioContainer>
  );
};

export default PortfolioSection;
