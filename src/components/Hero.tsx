import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
const swathiProfile = '/lovable-uploads/cffe0a75-8875-4fbd-b304-a772a6adc310.png';
const Hero = () => {
  

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-background section-pattern relative overflow-hidden">
      {/* Template-inspired background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content - Left side like template */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <h1 className="text-6xl lg:text-8xl font-bold text-foreground leading-none">
                <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
                  Swathi S
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
                Software Developer | Flutter & Android Developer | Founder of 2.5 Soft Solutions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('#projects')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-medium rounded-full"
              >
                View My Work
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg"
                className="border-border hover:bg-secondary px-8 py-6 text-lg rounded-full"
              >
                <a href="/cv/paavai-cv-2025-26.jpg" download target="_blank" rel="noopener noreferrer">Download CV</a>
              </Button>
            </div>

            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
            </div>
          </div>

          {/* Profile Image - Right side like template */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up-delay">
            <div className="relative">
              <div className="relative p-1.5 overflow-hidden hero-gradient shadow-glow animate-float rounded-2xl ring-2 ring-primary/50">
                <div className="absolute inset-0 opacity-30 blur-2xl hero-gradient pulse rounded-2xl" aria-hidden />
                <img
                  src={swathiProfile}
                  alt="Swathi S - Software Developer headshot"
                  width={2979}
                  height={4096}
                  className="w-64 h-64 lg:w-96 lg:h-96 aspect-square object-cover object-top relative z-10 rounded-2xl"
                />
              </div>
               {/* Template-style accent elements */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('#about')}
            className="p-3 rounded-full bg-secondary border border-border hover:bg-secondary/80 transition-all duration-300"
          >
            <ChevronDown className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;