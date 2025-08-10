import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Smartphone, Globe, Palette, Video, Code, Zap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native Android and cross-platform Flutter applications with modern UI/UX design and robust functionality.',
      features: [
        'Flutter & Android Native',
        'Firebase Integration',
        'Material Design UI',
        'App Store Deployment'
      ],
      technologies: ['Flutter', 'Dart', 'Android Studio', 'Firebase'],
      pricing: 'Starting from ₹25,000'
    },
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Responsive websites and web applications built with modern frameworks and optimized for performance.',
      features: [
        'Responsive Design',
        'SEO Optimized',
        'Fast Loading',
        'Cross-browser Compatible'
      ],
      technologies: ['React', 'HTML/CSS', 'JavaScript', 'Node.js'],
      pricing: 'Starting from ₹15,000'
    },
    {
      icon: Palette,
      title: 'Design Services',
      description: 'Creative poster and logo design services that capture your brand identity and communicate your message effectively.',
      features: [
        'Logo Design',
        'Poster Creation',
        'Brand Identity',
        'Print Ready Files'
      ],
      technologies: ['Figma', 'Adobe Creative Suite', 'Canva Pro'],
      pricing: 'Starting from ₹5,000'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing services for promotional content, social media, and educational materials.',
      features: [
        'Professional Editing',
        'Motion Graphics',
        'Color Correction',
        'Audio Enhancement'
      ],
      technologies: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve'],
      pricing: 'Starting from ₹8,000'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background section-pattern">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Explore Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions from 2.5 Soft Solutions. We bring your ideas to life 
            with cutting-edge technology and creative expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className="glow-card rounded-3xl p-8 scroll-animate group"
            >
              {/* Service Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 bg-primary/20 rounded-2xl group-hover:bg-primary/30 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-primary font-semibold">
                    {service.pricing}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-foreground mb-4">What's Included:</h4>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-muted-foreground flex items-center gap-3">
                      <Zap className="w-5 h-5 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-bold text-foreground mb-4">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium text-lg"
                onClick={scrollToContact}
              >
                <Code className="w-5 h-5 mr-2" />
                Get Started
              </Button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="scroll-animate">
          <Card className="bg-gradient-hero border-none">
            <CardContent className="p-8">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-8">Our Development Process</h3>
                <div className="grid md:grid-cols-4 gap-8">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">1</span>
                    </div>
                    <h4 className="font-semibold">Discovery</h4>
                    <p className="text-white/80 text-sm">Understanding your requirements and goals</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">2</span>
                    </div>
                    <h4 className="font-semibold">Design</h4>
                    <p className="text-white/80 text-sm">Creating wireframes and visual designs</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">3</span>
                    </div>
                    <h4 className="font-semibold">Development</h4>
                    <p className="text-white/80 text-sm">Building with cutting-edge technologies</p>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold">4</span>
                    </div>
                    <h4 className="font-semibold">Delivery</h4>
                    <p className="text-white/80 text-sm">Testing, deployment, and ongoing support</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Company Info */}
        <div className="mt-12 text-center scroll-animate">
          <Card className="bg-gradient-card border-none max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-3 bg-gradient-hero rounded-lg">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-foreground">2.5 Soft Solutions</h3>
                  <p className="text-muted-foreground">Your Digital Transformation Partner</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                As the founder of 2.5 Soft Solutions, I lead a dedicated team committed to delivering 
                high-quality digital solutions. We combine technical expertise with creative vision 
                to help businesses and individuals achieve their digital goals.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;