import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, ShoppingBag, Car, Star, Home, Info, Phone, Briefcase, LogIn, Monitor, Fuel, Utensils, Heart } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './sheet';

const Navigation = () => {
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const navItems = [
    { label: 'Accueil', href: '/', icon: Home },
    { label: 'Nos catalogues', href: '/catalogues', icon: ShoppingBag },
    { label: 'Nos références', href: '/entreprises', icon: Briefcase },
  ];

  const footerItems = [
    { label: 'Comment ça marche', href: '/comment-ca-marche', icon: Info },
    { label: 'Kompare24 en bref', href: '/a-propos', icon: Info },
    { label: 'Contact', href: '/contact', icon: Phone },
  ];

  const categories = [
    { label: 'Supermarchés', href: '/categories/supermarches', icon: ShoppingBag },
    { label: 'Sport & Mode', href: '/categories/sport-mode', icon: User },
    { label: 'Automobile', href: '/categories/automobile', icon: Car },
    { label: 'Aménagement', href: '/categories/amenagement', icon: Home },
    { label: 'Informatique & Tech', href: '/categories/informatique-tech', icon: Monitor },
    { label: 'Station service', href: '/categories/station-service', icon: Fuel },
    { label: 'Restaurant et alimentation', href: '/categories/restaurant-alimentation', icon: Utensils },
    { label: 'Santé & beauté', href: '/categories/sante-beaute', icon: Heart },
  ];

  return (
    <>
      {/* Header Desktop/Mobile */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/02679eee-a592-4d89-a767-a0006f3c46ce.png" 
              alt="Kompar24"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {/* Accueil et Nos catalogues */}
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Accueil
            </Link>
            <Link
              to="/catalogues"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/catalogues' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Nos catalogues
            </Link>
            
            {/* Categories Dropdown */}
            <div className="relative group">
              <Button variant="ghost" className="text-sm font-medium">
                Nos Catégories
              </Button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-popover border rounded-lg shadow-elegant opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {categories.map((category) => (
                  <Link
                    key={category.href}
                    to={category.href}
                    className="flex items-center space-x-2 px-4 py-3 text-sm hover:bg-muted transition-colors"
                  >
                    <category.icon className="h-4 w-4" />
                    <span>{category.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Nos références */}
            <Link
              to="/entreprises"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === '/entreprises' ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Nos références
            </Link>
          </nav>

          {/* CTA */}
          <div className="flex items-center space-x-4">

            <Button asChild variant="outline" className="hidden md:flex">
              <Link to="/connexion">
                <LogIn className="h-4 w-4 mr-2" />
                Connexion
              </Link>
            </Button>

            <Button asChild className="hidden md:flex bg-gradient-secondary hover:bg-secondary/90">
              <Link to="/devenir-annonceur">
                <Briefcase className="h-4 w-4 mr-2" />
                Devenir Annonceur
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-6">

                  {/* Navigation Links */}
                  <nav className="space-y-4">
                    {[...navItems, ...footerItems].map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors"
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.label}</span>
                      </Link>
                    ))}
                  </nav>

                  {/* Categories */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground">Nos Catégories</h3>
                    {categories.map((category) => (
                      <Link
                        key={category.href}
                        to={category.href}
                        className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <category.icon className="h-5 w-5" />
                        <span>{category.label}</span>
                      </Link>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <Button asChild variant="outline" className="w-full">
                      <Link to="/connexion">
                        <LogIn className="h-4 w-4 mr-2" />
                        Connexion
                      </Link>
                    </Button>
                    
                    <Button asChild className="w-full bg-gradient-secondary">
                      <Link to="/devenir-annonceur">
                        <Briefcase className="h-4 w-4 mr-2" />
                        Devenir Annonceur
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

      </header>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
        <div className="grid grid-cols-4 gap-1">
          {/* Accueil */}
          <Link
            to="/"
            className={`flex flex-col items-center justify-center py-2 px-1 transition-colors ${
              location.pathname === '/' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Accueil</span>
          </Link>
          
          {/* Sassayé */}
          <Link
            to="/categories/sassaye"
            className={`flex flex-col items-center justify-center py-2 px-1 transition-colors ${
              location.pathname === '/categories/sassaye' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Star className="h-5 w-5" />
            <span className="text-xs mt-1">Sassayé</span>
          </Link>

          {/* Nos références */}
          <Link
            to="/entreprises"
            className={`flex flex-col items-center justify-center py-2 px-1 transition-colors ${
              location.pathname === '/entreprises' ? 'text-primary' : 'text-muted-foreground'
            }`}
          >
            <Briefcase className="h-5 w-5" />
            <span className="text-xs mt-1 text-center leading-tight">Nos réf.</span>
          </Link>

          {/* Menu hamburger pour les autres catégories */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="flex flex-col items-center justify-center py-2 px-1 text-muted-foreground">
                <Menu className="h-5 w-5" />
                <span className="text-xs mt-1">Plus</span>
              </button>
            </SheetTrigger>
            <SheetContent side="bottom" className="h-80 bg-background z-50">
              <div className="flex flex-col space-y-4 mt-6">
                <h3 className="font-semibold text-foreground text-center">Toutes les catégories</h3>
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((category) => (
                    <SheetClose asChild key={category.href}>
                      <Link
                        to={category.href}
                        className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors p-3 rounded-lg hover:bg-muted"
                      >
                        <category.icon className="h-5 w-5" />
                        <span>{category.label}</span>
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};

export default Navigation;