import React, { createContext, useContext, useState } from 'react';

interface ColorScheme {
  primary: string;
  secondary: string;
  accent: string;
  text: string;
  background: string;
}

const colorSchemes = {
  trust: {
    primary: '#1B4965', // Deep blue - represents trust and professionalism
    secondary: '#62B6CB', // Soft blue - calming and inviting
    accent: '#BEE9E8', // Light blue - fresh and clean
    text: '#050A30', // Dark blue - authoritative
    background: '#CAE9FF', // Very light blue - airy and spacious
  },
  luxury: {
    primary: '#2C3639', // Deep charcoal - sophistication
    secondary: '#3F4E4F', // Muted green - natural elegance
    accent: '#A27B5C', // Warm brown - luxury and comfort
    text: '#2C3639', // Dark charcoal - readability
    background: '#DCD7C9', // Warm beige - warmth and comfort
  },
};

interface ColorContextType {
  currentScheme: ColorScheme;
  setScheme: (scheme: keyof typeof colorSchemes) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentScheme, setCurrentScheme] = useState<ColorScheme>(colorSchemes.trust);

  const setScheme = (scheme: keyof typeof colorSchemes) => {
    setCurrentScheme(colorSchemes[scheme]);
  };

  return (
    <ColorContext.Provider value={{ currentScheme, setScheme }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColors = () => {
  const context = useContext(ColorContext);
  if (!context) {
    throw new Error('useColors must be used within a ColorProvider');
  }
  return context;
};
