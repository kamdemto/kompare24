import React from 'react';
import { ShoppingBag, Car, User, Star, ArrowRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import catalogSupermarket from '@/assets/catalog-supermarket-1.jpg';
import catalogSport from '@/assets/catalog-sport-9-16.jpg';
import catalogAuto from '@/assets/catalog-auto-1.jpg';
import catalogPremium from '@/assets/catalog-premium-9-16.jpg';
import HeroSection from '@/components/ui/hero-section';
import CategoryCard from '@/components/ui/category-card';
import CatalogCard from '@/components/ui/catalog-card';
import AdvertiserLogo from '@/components/ui/advertiser-logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Home = () => {
  // Mock data - Dans une vraie app, ces données viendraient d'une API
  const categories = [
    {
      title: 'Supermarchés',
      description: 'Découvrez les meilleures offres alimentaires et produits du quotidien',
      href: '/categories/supermarches',
      icon: ShoppingBag,
      catalogCount: 45,
      gradient: 'bg-gradient-primary'
    },
    {
      title: 'Sport & Mode',
      description: 'Les dernières tendances mode et équipements sportifs à prix réduits',
      href: '/categories/sport-mode',
      icon: User,
      catalogCount: 32,
      gradient: 'bg-gradient-to-br from-blue-500 to-purple-600'
    },
    {
      title: 'Automobile',
      description: 'Pièces auto, accessoires et services automobiles en promotion',
      href: '/categories/automobile',
      icon: Car,
      catalogCount: 28,
      gradient: 'bg-gradient-to-br from-green-500 to-teal-600'
    },
    {
      title: 'Sassayé',
      description: 'Offres premium exclusives des meilleures enseignes',
      href: '/categories/sassaye',
      icon: Star,
      catalogCount: 15,
      gradient: 'bg-gradient-secondary',
      isPremium: true
    }
  ];

  const premiumCatalogs = [
    {
      id: '1',
      title: 'Collection Printemps-Été',
      company: 'Louis Vuitton',
      validUntil: '28/02/2025',
      imageUrl: catalogPremium,
      viewCount: 2150,
      category: 'Mode Luxe',
      isPremium: true
    },
    {
      id: '2',
      title: 'Montres d\'exception',
      company: 'Rolex Cameroun',
      validUntil: '15/03/2025',
      imageUrl: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=400&h=600',
      viewCount: 1890,
      category: 'Horlogerie',
      isPremium: true
    },
    {
      id: '3',
      title: 'Véhicules Premium',
      company: 'Mercedes-Benz',
      validUntil: '25/02/2025',
      imageUrl: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&h=600',
      viewCount: 1456,
      category: 'Automobile Luxe',
      isPremium: true
    },
    {
      id: '4',
      title: 'Décoration Haut de Gamme',
      company: 'Roche Bobois',
      validUntil: '20/03/2025',
      imageUrl: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=400&h=600',
      viewCount: 987,
      category: 'Décoration',
      isPremium: true
    },
    {
      id: '5',
      title: 'Bijoux d\'Exception',
      company: 'Cartier',
      validUntil: '10/04/2025',
      imageUrl: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=400&h=600',
      viewCount: 2340,
      category: 'Bijouterie',
      isPremium: true
    },
    {
      id: '6',
      title: 'Tech Premium',
      company: 'Apple Store',
      validUntil: '05/03/2025',
      imageUrl: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&w=400&h=600',
      viewCount: 3210,
      category: 'High-Tech',
      isPremium: true
    }
  ];

  const latestCatalogs = [
    {
      id: '7',
      title: 'Grande promotion fin d\'année',
      company: 'Casino',
      validUntil: '31/12/2024',
      imageUrl: catalogSupermarket,
      viewCount: 1250,
      category: 'Alimentation',
      isNew: true
    },
    {
      id: '8',
      title: 'Soldes d\'hiver exceptionnels',
      company: 'Decathlon',
      validUntil: '15/01/2025',
      imageUrl: catalogSport,
      viewCount: 890,
      category: 'Sport'
    },
    {
      id: '9',
      title: 'Offres automobiles de janvier',
      company: 'Toyota Cameroun',
      validUntil: '20/01/2025',
      imageUrl: catalogAuto,
      viewCount: 567,
      category: 'Automobile'
    },
    {
      id: '10',
      title: 'Électronique pas cher',
      company: 'Jumia',
      validUntil: '28/01/2025',
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&h=600',
      viewCount: 1876,
      category: 'Électronique'
    },
    {
      id: '11',
      title: 'Mode et accessoires',
      company: 'H&M',
      validUntil: '05/02/2025',
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&h=600',
      viewCount: 1234,
      category: 'Mode'
    },
    {
      id: '12',
      title: 'Offres voyage',
      company: 'Travel Agency',
      validUntil: '15/02/2025',
      imageUrl: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400&h=600',
      viewCount: 756,
      category: 'Voyage'
    }
  ];

  const advertisers = [
    { name: 'Casino', logoUrl: '/api/placeholder/120/60', href: '/entreprise/casino' },
    { name: 'Carrefour', logoUrl: '/api/placeholder/120/60', href: '/entreprise/carrefour' },
    { name: 'Decathlon', logoUrl: '/api/placeholder/120/60', href: '/entreprise/decathlon' },
    { name: 'Toyota', logoUrl: '/api/placeholder/120/60', href: '/entreprise/toyota' },
    { name: 'Puma', logoUrl: '/api/placeholder/120/60', href: '/entreprise/puma' },
    { name: 'Nike', logoUrl: '/api/placeholder/120/60', href: '/entreprise/nike' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nos Catégories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explorez nos différents secteurs d'activité et découvrez les meilleures promotions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.href}
                title={category.title}
                description={category.description}
                href={category.href}
                icon={category.icon}
                catalogCount={category.catalogCount}
                gradient={category.gradient}
                isPremium={category.isPremium}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sassayé Premium Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
              <Star className="h-5 w-5 text-secondary-foreground" />
              <span className="text-secondary-foreground font-semibold">Premium</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
              Espace Sassayé
            </h2>
            <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
              Découvrez les offres exclusives de nos partenaires premium
            </p>
          </div>

          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {premiumCatalogs.map((catalog) => (
                  <CarouselItem key={catalog.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <CatalogCard {...catalog} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>

          <div className="text-center">
            <Button 
              asChild 
              variant="outline" 
              className="bg-white/10 border-white/20 text-secondary-foreground hover:bg-white hover:text-primary"
            >
              <Link to="/categories/sassaye">
                Voir toutes les offres Sassayé
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest Catalogs Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Derniers Catalogues
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Les dernières promotions ajoutées par nos partenaires
            </p>
          </div>

          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {latestCatalogs.map((catalog) => (
                  <CarouselItem key={catalog.id} className="pl-4 md:basis-1/2 lg:basis-1/4">
                    <CatalogCard {...catalog} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>

          <div className="text-center">
            <Button asChild variant="outline">
              <Link to="/catalogues">
                Voir tous les catalogues
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vous êtes une entreprise ?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Rejoignez Kompar24 et diffusez vos catalogues promotionnels auprès de milliers de clients potentiels
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Briefcase className="h-5 w-5 mr-2" />
                    Offre Gratuite
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/90">
                  <p>Publiez vos catalogues gratuitement et touchez votre audience locale</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Star className="h-5 w-5 mr-2" />
                    Offre Premium
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-white/90">
                  <p>Accédez à l'espace Sassayé et bénéficiez d'une visibilité maximale</p>
                </CardContent>
              </Card>
            </div>

            <Button 
              asChild 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold"
            >
              <Link to="/devenir-annonceur">
                <Briefcase className="h-5 w-5 mr-2" />
                Devenir Annonceur
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Logos */}
      <section className="py-16 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Nos Partenaires
            </h2>
            <p className="text-muted-foreground">
              Ils nous font confiance pour diffuser leurs promotions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {advertisers.map((advertiser) => (
              <AdvertiserLogo
                key={advertiser.href}
                name={advertiser.name}
                logoUrl={advertiser.logoUrl}
                href={advertiser.href}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;