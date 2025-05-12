import React, { useState, useEffect } from 'react';
import { useColors } from '../context/color-context';
import styled from 'styled-components';

interface NavItem {
  label: string;
  href: string;
  highlight?: boolean;
}

const NavContainer = styled.nav<{ bg: string; isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${props => props.isScrolled ? props.bg : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  z-index: 1000;
  padding: ${props => props.isScrolled ? '1rem 2rem' : '1.5rem 2rem'};
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled.a<{ highlight?: boolean; color: string }>`
  text-decoration: none;
  color: inherit;
  position: relative;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.color};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover:after {
    transform: scaleX(1);
  }
  
  ${props => props.highlight && `
    background: ${props.color};
    color: white;
    border-radius: 4px;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    
    &:after {
      display: none;
    }
  `}
`;

const Navigation: React.FC = () => {
  const { currentScheme } = useColors();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navItems: NavItem[] = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Transform Your Space', href: '#contact', highlight: true }
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <NavContainer bg={currentScheme.background} isScrolled={isScrolled}>
      <NavContent>
        <Logo href="/" style={{ color: currentScheme.text }}>LaFine</Logo>
        <NavItems>
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              href={item.href}
              highlight={item.highlight}
              color={item.highlight ? currentScheme.primary : currentScheme.text}
            >
              {item.label}
            </NavLink>
          ))}
        </NavItems>
      </NavContent>
    </NavContainer>
  );
};

export default Navigation;
