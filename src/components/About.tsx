import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

const About = () => {

  return (
    <section id="about" className="py-20 bg-background section-pattern scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know the person behind the code and the vision that drives innovation
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 items-center">
          {/* Bio Content */}
          <div className="scroll-animate">
            <div className="glow-card rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Software Developer
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                I'm a passionate software developer specializing in mobile and web app development. 
                Currently pursuing my final year of Computer Science & Engineering at Paavai Engineering College, 
                I've already made my mark in the tech industry by co-founding{' '}
                <span className="text-primary font-semibold">2.5 Soft Solutions</span>, 
                a software development startup.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                I'm deeply committed to using technology for impactful change, such as empowering 
                agriculture through youth-friendly applications. My work on{' '}
                <span className="text-primary font-semibold">"Go Agro"</span> demonstrates my 
                dedication to creating solutions that matter.
              </p>

              {/* Education */}
              <div className="glow-card rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-primary/20 rounded-2xl">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">
                      B.E. Computer Science & Engineering
                    </h4>
                    <p className="text-muted-foreground text-lg">
                      Paavai Engineering College, Namakkal
                    </p>
                    <p className="text-primary font-medium mt-1">
                      Expected Graduation: 2026
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;