import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Award, Smartphone, Globe } from 'lucide-react';
import aiGoAgro from '@/assets/projects/ai-go-agro.jpg';
import aiCareerpath from '@/assets/projects/ai-careerpath.jpg';
import aiMediaHub from '@/assets/projects/ai-media-hub.jpg';
import aiSSWebsite from '@/assets/projects/ai-ss-website.jpg';
import aiTranslator from '@/assets/projects/ai-translator.jpg';
import aiCollege from '@/assets/projects/ai-college.jpg';
import aiForms from '@/assets/projects/ai-forms.jpg';

const Projects = () => {
  const projects = [
    {
      title: 'Go Agro',
      subtitle: 'Agriculture Mobile Application',
      description: 'A comprehensive Flutter application designed to guide young farmers in smart agriculture practices. Features include crop recommendations, weather forecasting, market prices, and expert advice.',
      technologies: ['Flutter', 'Dart', 'Firebase', 'Weather API', 'Market Data API'],
      type: 'Mobile App',
      icon: Smartphone,
      features: [
        'Smart crop recommendations based on soil and climate',
        'Real-time weather forecasting for farmers',
        'Market price tracking and alerts',
        'Expert advice and community support',
        'Offline mode for rural areas'
      ],
      awards: [
        { event: "Techfini'24", prize: '₹5000 Prize' },
        { event: 'Agritech Hackathon', prize: '₹1000 Prize' }
      ],
      image: aiGoAgro,
      status: 'Completed'
    },
    {
      title: 'CareerPath Optimizer',
      subtitle: 'Career Guidance Platform',
      description: 'A comprehensive career guidance website that helps users discover suitable career paths through interactive questionnaires and provides detailed profession information.',
      technologies: ['React', 'HTML', 'CSS', 'JavaScript', 'Netlify'],
      type: 'Web Application',
      icon: Globe,
      features: [
        'Interactive career assessment questionnaire',
        'Personalized career recommendations',
        'Detailed profession information and requirements',
        'Contact system with industry professionals',
        'Responsive design for all devices'
      ],
      liveUrl: 'https://careerpathoptimizer.netlify.app/',
      githubUrl: 'https://github.com/swathisuren77/career-path-optimizer',
      image: aiCareerpath,
      status: 'Live'
    },
    {
      title: 'Media Hub',
      subtitle: 'Media management toolkit',
      description: 'Media Hub repository for media management features.',
      technologies: ['GitHub Repo'],
      type: 'Repository',
      icon: Github,
      features: [
        'Open-source project',
        'Code organization and modular structure',
        'Actively maintained'
      ],
      githubUrl: 'https://github.com/swathisuren77/Media-Hub',
      image: aiMediaHub,
      status: 'Public'
    },
    /*{
      title: 'SS Website',
      subtitle: 'Static website project',
      description: 'A simple static website hosted on GitHub.',
      technologies: ['GitHub Repo'],
      type: 'Repository',
      icon: Github,
      features: [
        'Clean HTML/CSS structure',
        'Responsive layout basics',
        'Easy to deploy'
      ],
      githubUrl: 'https://github.com/swathisuren77/SS-Wesite',
      image: aiSSWebsite,
      status: 'Public'
    },*/
    {
      title: 'Translator',
      subtitle: 'Language translator utility',
      description: 'Translator application repository for language conversion features.',
      technologies: ['GitHub Repo'],
      type: 'Repository',
      icon: Github,
      features: [
        'Utility-focused code',
        'Modular architecture',
        'Extensible design'
      ],
      githubUrl: 'https://github.com/swathisuren77/Translator',
      image: aiTranslator,
      status: 'Public'
    },
    {
      title: 'College',
      subtitle: 'College site project',
      description: 'A repository for a college information website.',
      technologies: ['GitHub Repo'],
      type: 'Repository',
      icon: Github,
      features: [
        'Informational pages',
        'Simple navigation',
        'Static content'
      ],
      githubUrl: 'https://github.com/swathisuren77/College',
      image: aiCollege,
      status: 'Public'
    },
    {
      title: 'FORMS',
      subtitle: 'Form components and examples',
      description: 'Repository containing various form implementations.',
      technologies: ['GitHub Repo'],
      type: 'Repository',
      icon: Github,
      features: [
        'Input validation examples',
        'Reusable components',
        'Clean patterns'
      ],
      githubUrl: 'https://github.com/swathisuren77/FORMS',
      image: aiForms,
      status: 'Public'
    }
  ];

  const handleProjectClick = (url?: string) => {
    if (url) {
      window.open(url, '_blank');
    }
  };

  return (
    <section id="projects" className="py-20 bg-background scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A showcase of my work in mobile and web development, creating solutions 
            that make a real impact in agriculture and career guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gradient-card border-none shadow-card hover:shadow-elegant transition-all duration-300 transform hover:scale-[1.01] scroll-animate overflow-hidden group"
            >
              <CardContent className="p-0">
                {/* Project Header */}
                <div className="bg-gradient-hero p-3 text-white">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <project.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold">{project.title}</h3>
                        <p className="text-white/80">{project.subtitle}</p>
                      </div>
                    </div>
                    <Badge 
                      variant="secondary"
                      className="bg-white/20 text-white border-white/30"
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <p className="text-white/90 text-sm">{project.description}</p>
                </div>
                <img
                  src={project.image}
                  alt={`${project.title} project cover image`}
                  className="w-full h-36 md:h-40 object-cover"
                  loading="lazy"
                />

                <div className="p-3">
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="border-primary/30 text-primary hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Awards (if any) */}
                  {project.awards && (
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-secondary" />
                        Awards & Recognition:
                      </h4>
                      <div className="space-y-2">
                        {project.awards.map((award, awardIndex) => (
                          <div key={awardIndex} className="flex items-center justify-between bg-secondary/10 rounded-lg p-3">
                            <span className="text-sm font-medium text-foreground">{award.event}</span>
                            <Badge variant="secondary">{award.prize}</Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => handleProjectClick(project.liveUrl)}
                        className="flex-1"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleProjectClick(project.githubUrl)}
                        className="flex-1"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    )}
                    {!project.liveUrl && !project.githubUrl && (
                      <Button
                        variant="elegant"
                        size="sm"
                        className="flex-1"
                        disabled
                      >
                        <Smartphone className="w-4 h-4 mr-2" />
                        Mobile App
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Statistics */}
        <div className="mt-16 scroll-animate">
          <Card className="bg-gradient-hero border-none">
            <CardContent className="p-8">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-8">Project Impact</h3>
                <div className="grid md:grid-cols-4 gap-8">
                  <div>
                    <div className="text-3xl font-bold mb-2">4+</div>
                    <p className="text-white/90">Major Projects</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">₹6000</div>
                    <p className="text-white/90">Prize Money Won</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">5+</div>
                    <p className="text-white/90">Technologies Mastered</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <p className="text-white/90">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;