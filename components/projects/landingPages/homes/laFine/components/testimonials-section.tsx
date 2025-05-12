import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useColors } from '../context/color-context';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
  image: string;
  rating: number;
}

const TestimonialsContainer = styled.section<{ bg: string }>`
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
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p<{ color: string }>`
  color: ${props => props.color};
  text-align: center;
  max-width: 600px;
  margin: 0 auto 4rem;
  opacity: 0.8;
`;

const TestimonialSlider = styled.div`
  position: relative;
  overflow: hidden;
  padding: 2rem 0;
`;

const SliderTrack = styled.div<{ offset: number }>`
  display: flex;
  transition: transform 0.5s ease;
  transform: translateX(${props => props.offset}px);
`;

const TestimonialCard = styled.div<{ primary: string }>`
  flex: 0 0 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  text-align: center;
  
  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const ClientImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  object-fit: cover;
  border: 3px solid white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
`;

const Quote = styled.p<{ color: string }>`
  font-size: 1.25rem;
  color: ${props => props.color};
  line-height: 1.8;
  margin-bottom: 2rem;
  font-style: italic;
`;

const ClientInfo = styled.div<{ color: string }>`
  color: ${props => props.color};
  
  h4 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    opacity: 0.8;
  }
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Dot = styled.button<{ isActive: boolean; primary: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${props => props.isActive ? props.primary : props.primary + '40'};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Anderson",
    role: "CEO",
    company: "Modern Living Co.",
    quote: "LaFine transformed our office space into a productivity powerhouse. The use of color psychology in their design has measurably improved our team's creativity and focus.",
    image: "/laFine/testimonials/sarah.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Restaurant Owner",
    company: "Fusion Kitchen",
    quote: "The attention to detail and understanding of how colors affect dining experience was remarkable. Our customer satisfaction scores have increased by 40% since the redesign.",
    image: "/laFine/testimonials/michael.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Emma Roberts",
    role: "Homeowner",
    company: "Luxury Residence",
    quote: "Working with LaFine was a revelation. They didn't just design our home; they created an atmosphere that positively impacts our daily lives through thoughtful color choices.",
    image: "/laFine/testimonials/emma.jpg",
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const { currentScheme } = useColors();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const sliderWidth = document.querySelector('.testimonial-card')?.clientWidth || 0;
    setOffset(-currentIndex * sliderWidth);
  }, [currentIndex]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <TestimonialsContainer bg={currentScheme.background}>
      <ContentWrapper>
        <SectionTitle color={currentScheme.text}>Client Success Stories</SectionTitle>
        <SectionSubtitle color={currentScheme.text}>
          See how our color psychology-based design approach has transformed spaces and lives
        </SectionSubtitle>
        
        <TestimonialSlider>
          <SliderTrack offset={offset}>
            {testimonials.map((testimonial) => (
              <TestimonialCard 
                key={testimonial.id} 
                primary={currentScheme.primary}
                className="testimonial-card"
              >
                <ClientImage src={testimonial.image} alt={testimonial.name} />
                <Quote color={currentScheme.text}>{testimonial.quote}</Quote>
                <ClientInfo color={currentScheme.text}>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}, {testimonial.company}</p>
                </ClientInfo>
              </TestimonialCard>
            ))}
          </SliderTrack>
        </TestimonialSlider>
        
        <SliderDots>
          {testimonials.map((_, index) => (
            <Dot
              key={index}
              isActive={currentIndex === index}
              primary={currentScheme.primary}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </SliderDots>
      </ContentWrapper>
    </TestimonialsContainer>
  );
};

export default TestimonialsSection;
