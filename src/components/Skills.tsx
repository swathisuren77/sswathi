import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Smartphone, Palette, Mic } from 'lucide-react';
import BrandIcon, { type BrandKey } from '@/components/BrandIcon';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming Languages',
      skills: ['C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'Dart']
    },
    {
      icon: Smartphone,
      title: 'Platforms & Tools',
      skills: ['Flutter', 'Android Studio', 'Firebase', 'Git', 'Figma']
    },
    {
      icon: Palette,
      title: 'Creative Skills',
      skills: ['UI/UX Design', 'Poster Design', 'Logo Creation', 'Video Editing']
    },
    {
      icon: Mic,
      title: 'Soft Skills',
      skills: ['Public Speaking', 'Leadership', 'Team Building', 'Problem Solving']
    }
  ];

  const technicalSkills = [
    { name: 'Flutter', level: 90 },
    { name: 'Android Development', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'Java', level: 80 },
    { name: 'Firebase', level: 75 }
  ];
  const iconMap: Record<string, BrandKey> = {
    'C++': 'cplusplus',
    Java: 'java',
    Python: 'python',
    HTML: 'html5',
    CSS: 'css3',
    JavaScript: 'javascript',
    Dart: 'dart',
    Flutter: 'flutter',
    'Android Studio': 'androidstudio',
    Firebase: 'firebase',
    Git: 'git',
    Figma: 'figma',
    React: 'react',
  };

  return (
    <section id="skills" className="py-20 bg-background scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of technical and soft skills that enable me to create 
            impactful digital solutions and lead successful teams.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-none shadow-card hover:shadow-elegant transition-all duration-300 transform hover:scale-105 scroll-animate"
            >
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-gradient-hero rounded-lg w-fit mx-auto mb-4">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => {
                    const iconName = iconMap[skill as keyof typeof iconMap] as BrandKey | undefined;
                    return (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center gap-2"
                      >
                        {iconName && <BrandIcon name={iconName} className="w-4 h-4" title={skill} />}
                        <span>{skill}</span>
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Proficiency */}
        <div className="bg-gradient-card rounded-2xl p-8 shadow-card scroll-animate">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="h-2 bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;