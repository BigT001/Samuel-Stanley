import React, { useRef, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';
import { useIntersectionObserver } from '../hooks/use-animations';

interface AnimatedElementProps {
  children: ReactNode;
  animation?: 'fadeIn' | 'slideUp' | 'slideIn' | 'scale';
  delay?: number;
  duration?: number;
  threshold?: number;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const scale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const animations = {
  fadeIn,
  slideUp,
  slideIn,
  scale,
};

const AnimatedContainer = styled.div<{
  isVisible: boolean;
  animation: keyof typeof animations;
  delay: number;
  duration: number;
}>`
  opacity: 0;
  animation: ${({ isVisible, animation }) =>
    isVisible ? animations[animation] : 'none'}
    ${({ duration }) => duration}s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  animation-delay: ${({ delay }) => delay}s;
`;

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animation = 'fadeIn',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(ref, { threshold });

  return (
    <AnimatedContainer
      ref={ref}
      isVisible={isVisible}
      animation={animation}
      delay={delay}
      duration={duration}
    >
      {children}
    </AnimatedContainer>
  );
};
