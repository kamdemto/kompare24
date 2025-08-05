import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const primaryLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Sassayé', href: '/categories/sassaye' },
    { label: 'Nos références', href: '/entreprises' },
  ];

  const secondaryLinks = [
    { label: 'Supermarchés', href: '/categories/supermarches' },
    { label: 'Sport & Mode', href: '/categories/sport-mode' },
    { label: 'Automobile', href: '/categories/automobile' },
    { label: 'Aménagement', href: '/categories/amenagement' },
    { label: 'Informatique & Teché', href: '/categories/informatique-tech' },
    { label: 'Station service', href: '/categories/station-service' },
    { label: 'Restaurant et alimentation', href: '/categories/restaurant-alimentation' },
    { label: 'Santé & beauté', href: '/categories/sante-beaute' },
    { label: 'Comment ça marche', href: '/comment-ca-marche' },
    { label: 'Kompare24 en bref', href: '/a-propos' },
    { label: 'Contact', href: '/contact' },
    { label: 'Devenir annonceur', href: '/devenir-annonceur' },
  ];

  const legalLinks = [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { label: 'CGV', href: '/cgv' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="hidden md:block bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container px-4 py-8">
        {/* Description */}
        <div className="text-center mb-8">
          <p className="text-primary-foreground/80 text-sm max-w-2xl mx-auto">
            Kompar24 est la plateforme de référence pour découvrir les meilleures promotions 
            et catalogues de vos enseignes préférées au Cameroun.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center mb-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {/* Primary links displayed directly */}
            {primaryLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                <Link
                  to={link.href}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm font-medium"
                >
                  {link.label}
                </Link>
                {index < primaryLinks.length - 1 && (
                  <span className="text-primary-foreground/40 hidden md:inline">•</span>
                )}
              </React.Fragment>
            ))}
            
            {/* Dropdown for secondary links */}
            <div className="relative group">
              <button className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm">
                Plus
              </button>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-background border rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4">
                <div className="grid grid-cols-2 gap-2">
                  {secondaryLinks.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className="text-foreground hover:text-primary transition-colors text-xs py-1 px-2 rounded hover:bg-muted block"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mb-8">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+237 694 846 159</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>contact@kompar24.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Douala, Cameroun</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="text-center mb-8">
          <h3 className="font-semibold text-primary-foreground mb-3">
            Restez informé des dernières promotions
          </h3>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto space-y-2 sm:space-y-0 sm:space-x-2">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary text-sm"
            />
            <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium text-sm">
              S'inscrire
            </button>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col items-center space-y-4">
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-primary-foreground/80">
              <span>&copy; 2024 Kompar24. Tous droits réservés.</span>
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.href}>
                  <span className="hidden sm:inline text-primary-foreground/40">•</span>
                  <Link to={link.href} className="hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;