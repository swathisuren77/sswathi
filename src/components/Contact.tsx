import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
const SERVICE_ID = 'service_vfqro6r';
const TEMPLATE_ID = 'template_vdc8qmq';
const PUBLIC_KEY = 'in7cfnaDLqaNdiZ9u';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const contactInfo = [{
    icon: Mail,
    label: 'Email',
    value: 'swathisuren77@gmail.com',
    href: 'mailto:swathisuren77@gmail.com'
  }, {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/swathi-s-8018a62a7',
    href: 'https://linkedin.com/in/swathi-s-8018a62a7'
  }, {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/swathisuren77',
    href: 'https://github.com/swathisuren77'
  }, {
    icon: MapPin,
    label: 'Location',
    value: 'Namakkal, Tamil Nadu, India',
    href: null
  }];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject || 'Portfolio Contact',
      message: formData.message
    };
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY
      });
      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      alert('Failed to send message. Please try again later.');
    }
  };
  return <section id="contact" className="py-20 bg-background scroll-mt-24 md:scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-hero mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and see how 
            we can work together to create something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="scroll-animate">
            <Card className="bg-gradient-card border-none shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Send Me a Message
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your full name" required className="border-primary/20 focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="your@email.com" required className="border-primary/20 focus:border-primary" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" className="border-primary/20 focus:border-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">linkedin.com/in/swathisuren77
                  </Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project or just say hello..." rows={6} required className="border-primary/20 focus:border-primary resize-none" />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="scroll-animate">
            <div className="space-y-8">

              {/* Contact Links */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => <Card key={index} className="bg-gradient-card border-none shadow-card hover:shadow-elegant transition-all duration-300 transform hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-gradient-hero rounded-lg">
                          <contact.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-foreground mb-1">
                            {contact.label}
                          </h4>
                          {contact.href ? <a href={contact.href} target={contact.href.startsWith('http') ? '_blank' : undefined} rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-primary hover:text-primary-light transition-colors break-all">
                              {contact.value}
                            </a> : <p className="text-muted-foreground">{contact.value}</p>}
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>

              {/* Availability */}
              <Card className="bg-gradient-card border-none">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-500 rounded-lg">
                      <div className="w-5 h-5 bg-white rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Currently Available
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Ready to take on new projects and collaborations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center scroll-animate">
          <Card className="bg-gradient-subtle border-none max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                From concept to deployment, I'll work with you every step of the way to ensure 
                your project exceeds expectations. Let's discuss how we can bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" onClick={() => window.open('mailto:swathisuren77@gmail.com', '_blank')}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email Me Directly
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.open('https://linkedin.com/in/swathi-s-8018a62a7', '_blank')}>
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default Contact;