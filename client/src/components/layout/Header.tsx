import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 bg-white ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center text-white font-bold text-xl mr-2">RA</div>
              <span className="text-gray-900 font-semibold text-lg hidden sm:block">Radiant Agility Technology</span>
              <span className="text-gray-900 font-semibold text-lg sm:hidden">RAT</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`font-medium ${location === link.href ? 'text-primary' : 'text-gray-500 hover:text-primary'} transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <Link href="/contact" className="hidden md:inline-block">
              <Button className="gradient-bg hover:opacity-90 text-white px-5 py-2 rounded-lg transition-colors font-medium">
                Get Started
              </Button>
            </Link>
            
            {/* Mobile menu button */}
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden rounded-md p-2 text-gray-500 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} pb-4`}>
          <div className="flex flex-col space-y-3 pt-2 pb-3">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={closeMobileMenu}
                className={`px-3 py-2 rounded-md font-medium ${location === link.href ? 'text-primary' : 'text-gray-500 hover:bg-gray-100 hover:text-primary'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" onClick={closeMobileMenu} className="mt-2">
              <Button className="w-full gradient-bg hover:opacity-90 text-white px-3 py-2 rounded-md font-medium">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
