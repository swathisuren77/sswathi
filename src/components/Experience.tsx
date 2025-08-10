import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, Calendar, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Founder & CEO',
      company: '2.5 Soft Solutions',
      location: 'Startup',
      period: '2024 – Present',
      type: 'Leadership',
      description: [
        'Founded and lead a software development startup specializing in digital products',
        'Developed "Go Agro," an agriculture-focused mobile application for youth farmers',
        'Successfully managed external client website and mobile app projects',
        'Built and led a talented team of developers and designers',
        'Established business processes and client relationships'
      ],
      technologies: ['Flutter', 'Firebase', 'React', 'Node.js', 'Project Management'],
      achievements: [
        'Won ₹5000 prize at Techfini\'24 for Go Agro',
        'Won ₹1000 prize at Agritech Hackathon',
        'Successfully delivered multiple client projects'
      ]
    },
    {
      title: 'Android App Development Intern',
      company: 'Internzlearn',
      location: 'Bangalore',
      period: '3 months',
      type: 'Internship',
      description: [
        'Gained hands-on experience in Android app development',
        'Learned advanced Android architecture patterns and best practices',
        'Worked on UI/UX design principles for mobile applications',
        'Collaborated with senior developers on real-world projects',
        'Enhanced skills in Java and Android Studio'
      ],
      technologies: ['Android Studio', 'Java', 'XML', 'Material Design', 'Git'],
      achievements: [
        'Successfully completed internship program',
        'Contributed to production-ready Android applications',
        'Received positive feedback from mentors'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            My journey as an entrepreneur and developer, building impactful solutions 
            and gaining valuable industry experience.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-none shadow-card hover:shadow-elegant transition-all duration-300 scroll-animate"
            >
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Header Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-gradient-hero rounded-lg">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          {exp.company}
                        </h4>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            {exp.period}
                          </div>
                        </div>
                        <Badge 
                          variant="secondary"
                          className="bg-primary/10 text-primary mt-2"
                        >
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  {/* Description & Technologies */}
                  <div className="lg:col-span-2">
                    <h4 className="font-semibold text-foreground mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2 mb-6">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground flex items-start gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
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

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Award className="w-4 h-4 text-secondary" />
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-muted-foreground flex items-start gap-2">
                            <span className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Timeline Visual */}
        <div className="mt-16 scroll-animate">
          <Card className="bg-gradient-hero border-none">
            <CardContent className="p-8 text-center">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-4">Professional Journey</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold mb-2">2024</div>
                    <p className="text-white/90">Founded 2.5 Soft Solutions</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">3+</div>
                    <p className="text-white/90">Months of Industry Experience</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">2026</div>
                    <p className="text-white/90">Expected Graduation</p>
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

export default Experience;