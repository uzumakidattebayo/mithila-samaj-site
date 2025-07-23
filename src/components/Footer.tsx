import { Heart, Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' }
  ];

  const programs = [
    { name: 'Education Programs', href: '#' },
    { name: 'Healthcare Services', href: '#' },
    { name: 'Community Development', href: '#' },
    { name: 'Women Empowerment', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Email', icon: Mail, href: 'mailto:info@mithilasamaj.org' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Organization Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img src={logo} alt="Mithila Samaj Bikash Manch" className="h-12 w-12" />
                <div>
                  <h3 className="text-xl font-bold">Mithila Samaj Bikash Manch</h3>
                  <p className="text-sm opacity-90">समाज विकास मंच</p>
                </div>
              </div>
              <p className="text-primary-foreground/90 mb-6 max-w-md">
                Empowering rural communities through education, healthcare, and sustainable development 
                initiatives across the Mithila region. Together, we build a better tomorrow.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="ghost"
                    size="icon"
                    className="text-primary-foreground hover:bg-primary-foreground/10"
                    asChild
                  >
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-5 w-5" />
                      <span className="sr-only">{link.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
              <ul className="space-y-2">
                {programs.map((program) => (
                  <li key={program.name}>
                    <a
                      href={program.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                    >
                      {program.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-semibold mb-2">Stay Updated</h4>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to our newsletter to receive updates about our work and impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-foreground bg-primary-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button variant="secondary" className="px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 text-sm mb-4 md:mb-0">
              © 2024 Mithila Samaj Bikash Manch. All rights reserved.
            </p>
            <div className="flex items-center text-primary-foreground/80 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-accent" />
              <span>for our community</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;