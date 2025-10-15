import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@assets/generated_images/Hero_workspace_background_image_209e60ce.png';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center py-20">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary via-chart-2 to-primary bg-clip-text text-transparent">
            Muhammad Faisal
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8">
          WordPress & Frontend Developer
        </p>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Crafting beautiful, responsive websites and web applications with modern technologies
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => scrollToSection('projects')}
            data-testid="button-view-projects"
          >
            View Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="backdrop-blur-sm bg-background/10"
            data-testid="button-contact-me"
          >
            Contact Me
          </Button>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        data-testid="button-scroll-down"
      >
        <ArrowDown className="h-6 w-6 text-primary" />
      </button>
    </section>
  );
}
