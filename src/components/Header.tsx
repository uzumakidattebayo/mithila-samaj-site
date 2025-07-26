import { useState } from 'react';
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import logo from '@/assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'WHO WE ARE', href: '#about' },
    { name: 'WHAT WE DO', href: '#services' },
    { name: 'OUR ARCHIVE', href: '#gallery' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-slate-800 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+977-9851234567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>mithilasamaj@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Twitter size={16} />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <Youtube size={16} />
              </a>
              <Button variant="destructive" size="sm" className="ml-4 bg-orange-500 hover:bg-orange-600">
                DONATE NOW
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border mt-0 md:mt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img src={logo} alt="Mithila Samaj Bikash Manch" className="h-16 w-16" />
              <div>
                <h1 className="text-2xl font-bold text-primary">मिथिला समाज विकास मञ्च</h1>
                <p className="text-sm text-muted-foreground font-medium">Mithila Samaj Bikash Manch</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-orange-500 transition-colors duration-200 font-medium text-sm"
                >
                  {item.name}
                </a>
              ))}
              <ThemeToggle />
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-orange-500 transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button variant="destructive" className="mt-4 w-full bg-orange-500 hover:bg-orange-600">
                  DONATE NOW
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;