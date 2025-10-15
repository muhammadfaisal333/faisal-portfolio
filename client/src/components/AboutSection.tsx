import { Code2, Palette, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';
import profileImage from '@assets/generated_images/Professional_profile_photo_placeholder_8208da71.png';

export default function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
    },
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Creating beautiful, user-friendly interfaces with attention to detail',
    },
    {
      icon: Rocket,
      title: 'Fast Performance',
      description: 'Optimizing for speed and delivering exceptional user experiences',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-chart-2 rounded-xl blur-xl opacity-20" />
              <img
                src={profileImage}
                alt="Muhammad Faisal"
                className="relative rounded-xl w-full max-w-md shadow-xl border border-border"
                data-testid="img-profile"
              />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Hi, I'm Muhammad Faisal
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              I'm a passionate WordPress and Frontend Developer with extensive experience in building modern, responsive websites and web applications. I specialize in creating custom WordPress themes, developing interactive user interfaces, and bringing creative designs to life.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              With a strong foundation in HTML, CSS, JavaScript, and React, I focus on delivering high-quality solutions that not only look great but also perform exceptionally well. I'm committed to staying current with the latest web technologies and best practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you need a custom WordPress site, a modern web application, or a complete frontend solution, I'm here to turn your vision into reality.
            </p>
          </div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="p-6 hover-elevate" data-testid={`card-highlight-${index}`}>
              <item.icon className="h-12 w-12 text-primary mb-4" />
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
