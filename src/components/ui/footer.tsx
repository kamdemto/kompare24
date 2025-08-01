import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Navigation',
      links: [
        { label: 'Accueil', href: '/' },
        { label: 'Comment ça marche', href: '/comment-ca-marche' },
        { label: 'Kompare24 en bref', href: '/a-propos' },
        { label: 'Contact', href: '/contact' },
      ]
    },
    {
      title: 'Catégories',
      links: [
        { label: 'Supermarchés', href: '/categories/supermarches' },
        { label: 'Sport & Mode', href: '/categories/sport-mode' },
        { label: 'Automobile', href: '/categories/automobile' },
        { label: 'Sassayé', href: '/categories/sassaye' },
      ]
    },
    {
      title: 'Annonceurs',
      links: [
        { label: 'Devenir annonceur', href: '/devenir-annonceur' },
        { label: 'Offre gratuite', href: '/devenir-annonceur#gratuit' },
        { label: 'Offre premium', href: '/devenir-annonceur#premium' },
        { label: 'Connexion', href: '/login' },
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/27ba9664-c45a-4160-8694-d81796df0589.png" 
                alt="Kompar24" 
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Kompar24 est la plateforme de référence pour découvrir les meilleures promotions 
              et catalogues de vos enseignes préférées au Cameroun.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+237 6XX XXX XXX</span>
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

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-primary-foreground">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="max-w-md">
            <h3 className="font-semibold text-primary-foreground mb-2">
              Restez informé des dernières promotions
            </h3>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Inscrivez-vous à notre newsletter et ne ratez aucune offre
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors font-medium">
                S'inscrire
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-primary-foreground/80">
            <p>&copy; 2024 Kompar24. Tous droits réservés.</p>
            <div className="flex space-x-4">
              <Link to="/mentions-legales" className="hover:text-primary-foreground transition-colors">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="hover:text-primary-foreground transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/cgv" className="hover:text-primary-foreground transition-colors">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;