# Samuel Stanley Portfolio Documentation

## Project Overview
A modern, responsive portfolio website built with Next.js 13+ (App Router), React, TypeScript, and Tailwind CSS. The project showcases personal information, projects, and skills with a modern design system using shadcn/ui components.

## Tech Stack
- **Framework**: Next.js 13+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Testing**: Playwright
- **State Management**: React Context (Theme)
- **Icons**: Custom SVG Icons System

## Project Structure

```
samuel-stanley/
├── app/                      # Next.js App Router directory
│   ├── docs/                # Documentation pages
│   ├── globals.css         # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
│
├── components/            # React components
│   ├── custom/           # Custom UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── tabs.tsx
│   │   └── ...
│   ├── icons/           # SVG icons components
│   ├── nav/            # Navigation components
│   ├── projects/       # Project section components
│   │   ├── apps/
│   │   ├── authentication/
│   │   ├── componentsLib/
│   │   ├── dashboards/
│   │   ├── iconsLib/
│   │   └── landingPages/
│   ├── sections/      # Main page sections
│   └── ui/           # shadcn/ui components
│
├── hooks/           # Custom React hooks
├── lib/            # Utility functions
├── public/         # Static assets
└── tests/          # Playwright tests
```

## Key Features

### 1. Responsive Design
- Mobile-first approach
- Responsive navigation
- Fluid typography
- Adaptive layouts

### 2. Projects Section
- Categorized project display
- Bento grid layout
- Filterable project categories:
  - Dashboards
  - Landing Pages (with subcategories)
  - Authentication
  - Apps
  - Component Libraries
  - Icon Libraries

### 3. Theme System
- Dark/Light mode toggle
- System theme detection
- Persistent theme preference

### 4. Component Architecture
- Modular component design
- Reusable UI components
- Custom icon system
- shadcn/ui integration

### 5. Landing Pages Subcategories
- Homes
- Business
- Automotive (placeholder)

## Installation

1. Clone the repository:
\`\`\`bash
git clone [repository-url]
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run development server:
\`\`\`bash
npm run dev
\`\`\`

## Testing
The project uses Playwright for end-to-end testing:
\`\`\`bash
npm run test
\`\`\`

## Project Organization

### Components
- **BentoGrid**: Grid layout system for project cards
- **ProjectCard**: Reusable card component for project display
- **ModeToggle**: Theme switcher component
- **MainNav**: Main navigation component

### Sections
- Hero Section
- Projects Section
- Skills Section
- Contact Section
- About Section
- Call to Action

### Custom Hooks
- `use-mobile`: Mobile detection hook
- `use-toast`: Toast notification system

## Future Enhancements
- Add more project categories
- Implement search functionality
- Add animation effects
- Enhance mobile navigation
- Add more interactive features