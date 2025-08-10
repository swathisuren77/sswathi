import { Heart, ExternalLink } from 'lucide-react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gradient-hero text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Swathi S</h3>
            <p className="text-white/80 mb-4">
              Software Developer passionate about creating impactful digital solutions.
            </p>
            <div className="flex items-center gap-2 text-white/60">
              <span>Made with</span>
              <Heart className="w-4 h-4 fill-current text-red-400" />
              <span>Swathi</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[{
              href: '#about',
              label: 'About'
            }, {
              href: '#skills',
              label: 'Skills'
            }, {
              href: '#projects',
              label: 'Projects'
            }, {
              href: '#contact',
              label: 'Contact'
            }].map(link => <li key={link.href}>
                  <button onClick={() => {
                const element = document.querySelector(link.href);
                if (element) {
                  element.scrollIntoView({
                    behavior: 'smooth'
                  });
                }
              }} className="text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </button>
                </li>)}
            </ul>
          </div>

          {/* Company & Projects */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Projects & Company</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-white/80">2.5 Soft Solutions</span>
              </li>
              <li>
                <span className="text-white/80">Go Agro App</span>
              </li>
              <li>
                <a href="https://careerpathoptimizer.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors flex items-center gap-1">
                  CareerPath Optimizer
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://github.com/swathisuren77" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors flex items-center gap-1">
                  GitHub Portfolio
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Swathi S. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <a href="https://linkedin.com/in/swathi-s-8018a62a7" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">
                LinkedIn
              </a>
              <a href="https://github.com/swathisuren77" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors text-sm">
                GitHub
              </a>
              <a href="mailto:swathisuren77@gmail.com" className="text-white/60 hover:text-white transition-colors text-sm">
                swathisuren77@gmail.com
              </a>
              <button onClick={scrollToTop} className="text-white/60 hover:text-white transition-colors text-sm hover:underline">
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;