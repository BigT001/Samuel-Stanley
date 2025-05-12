import { Project } from '../types';

const generatePlaceholderImage = (category: string, index: number): string => {
  const width = 800;
  const height = 600;
  const keywords = encodeURIComponent(`${category} interior design`);
  return `https://source.unsplash.com/random/${width}x${height}/?${keywords}`;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Serene Living Space",
    category: "Living Room",
    description: "A harmonious blend of blues and neutrals creates a calming atmosphere that promotes relaxation and deep connections.",
    imagePath: "/laFine/portfolio/living-room-1.jpg",
    moodColors: ['#1B4965', '#62B6CB', '#BEE9E8'],
    features: ['Color Psychology', 'Natural Light', 'Ergonomic Design']
  },
  {
    id: 2,
    title: "Productive Home Office",
    category: "Office",
    description: "Strategic use of greens and blues enhances focus and creativity while maintaining a professional atmosphere.",
    imagePath: "/laFine/portfolio/office-1.jpg",
    moodColors: ['#2D3A3A', '#4A5859', '#8E9B97'],
    features: ['Focus-enhancing', 'Ergonomic', 'Natural Elements']
  },
  {
    id: 3,
    title: "Energetic Kitchen Design",
    category: "Kitchen",
    description: "Warm colors stimulate appetite and social interaction, while maintaining elegance and functionality.",
    imagePath: "/laFine/portfolio/kitchen-1.jpg",
    moodColors: ['#A27B5C', '#DCD7C9', '#E2D4BA'],
    features: ['Social Space', 'Functionality', 'Energy Flow']
  },
  {    id: 4,
    title: "Luxurious Master Suite",
    category: "Bedroom",
    description: "Deep purples and soft neutrals create a sophisticated sanctuary for ultimate relaxation.",
    imagePath: generatePlaceholderImage("luxury bedroom", 1),
    moodColors: ['#2C3639', '#3F4E4F', '#A27B5C'],
    features: ['Relaxation', 'Luxury', 'Comfort']
  },
  {
    id: 5,
    title: "Zen Bathroom Retreat",
    category: "Bathroom",
    description: "A spa-like atmosphere with a carefully curated color palette to promote relaxation and rejuvenation.",
    imagePath: generatePlaceholderImage("luxury bathroom spa", 1),
    moodColors: ['#A5C9CA', '#E7F6F2', '#395B64'],
    features: ['Spa Experience', 'Natural Materials', 'Ambient Lighting']
  },
  {
    id: 6,
    title: "Contemporary Living",
    category: "Living Room",
    description: "Modern aesthetics with a focus on social interaction and visual harmony through strategic color placement.",
    imagePath: generatePlaceholderImage("contemporary living room", 2),
    moodColors: ['#395B64', '#A5C9CA', '#E7F6F2'],
    features: ['Modern Design', 'Social Space', 'Color Flow']
  },
  {
    id: 7,
    title: "Executive Home Office",
    category: "Office",
    description: "Sophisticated workspace design with colors that enhance concentration and creativity.",
    imagePath: generatePlaceholderImage("luxury home office", 2),
    moodColors: ['#2C3639', '#3F4E4F', '#DCD7C9'],
    features: ['Professional', 'Ergonomic', 'Productivity-focused']
  },
  {
    id: 8,
    title: "Gourmet Kitchen",
    category: "Kitchen",
    description: "A chef's paradise with color psychology applied to enhance culinary creativity and social dining.",
    imagePath: generatePlaceholderImage("gourmet kitchen", 2),
    moodColors: ['#A27B5C', '#E2D4BA', '#2C3639'],
    features: ['Professional Grade', 'Entertainment', 'Workflow Optimized']
  }
];
