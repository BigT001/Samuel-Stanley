"use client";

import React from 'react';
import styled from 'styled-components';
import { Button } from '@/components/custom/button';
import { Card } from '@/components/custom/card';
import { Input } from '@/components/custom/input';
import { Textarea } from '@/components/custom/textarea';
import { NavigationMenu } from '@/components/custom/navigation-menu';
import { ColorProvider } from './context/color-context';
import Navigation from './components/navigation';
import HeroSection from './components/hero-section';
import PortfolioSection from './components/portfolio-section';
import ServicesSection from './components/services-section';
import TestimonialsSection from './components/testimonials-section';
import ContactSection from './components/contact-section';
import Footer from './components/footer-section';

const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  
  * {
    box-sizing: border-box;
  }
`;

const Main = styled.main`
  position: relative;
  
  section {
    scroll-margin-top: 80px;
  }
`;

export const LaFine = () => {
  return (
    <ColorProvider>
      <PageContainer>
        <Navigation />
        <Main>
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <TestimonialsSection />
          <ContactSection />
        </Main>
        <Footer />
      </PageContainer>
    </ColorProvider>
  );
};

export default LaFine;