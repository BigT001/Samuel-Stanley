import { useEffect, useState, RefObject } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = <T extends Element>(
  ref: RefObject<T>,
  options: UseIntersectionObserverProps = {}
): boolean => {
  const [isIntersecting, setIntersecting] = useState(false);
  const { threshold = 0.1, rootMargin = '0px' } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, threshold, rootMargin]);

  return isIntersecting;
};

interface UseAnimationDelayProps {
  baseDelay?: number;
  increment?: number;
}

export const useAnimationDelay = (index: number, options: UseAnimationDelayProps = {}) => {
  const { baseDelay = 0.1, increment = 0.1 } = options;
  return `${baseDelay + index * increment}s`;
};

export const useColorTransition = (initialColor: string, targetColor: string) => {
  const [color, setColor] = useState(initialColor);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setColor(targetColor);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [targetColor]);
  
  return color;
};
