import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LaFine Interior Design | Color Psychology Experts',
  description: 'Transform your space with LaFine\'s color psychology-based interior design services. Experience how thoughtful color choices can enhance your well-being and productivity.',
  keywords: 'interior design, color psychology, luxury interiors, space planning, design consultation',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
