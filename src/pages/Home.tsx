import React from 'react';
import { ShoppingBag, Car, User, Star, ArrowRight, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import catalogSupermarket from '@/assets/catalog-supermarket-1.jpg';
import catalogSport from '@/assets/catalog-sport-1.jpg';
import catalogAuto from '@/assets/catalog-auto-1.jpg';
import catalogPremium from '@/assets/catalog-premium-1.jpg';
import HeroSection from '@/components/ui/hero-section';
import CategoryCard from '@/components/ui/category-card';
import CatalogCard from '@/components/ui/catalog-card';
import AdvertiserLogo from '@/components/ui/advertiser-logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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

  const latestCatalogs = [
    {
      id: '1',
      title: 'Grande promotion fin d\'année',
      company: 'Casino',
      validUntil: '31/12/2024',
      imageUrl: catalogSupermarket,
      viewCount: 1250,
      isNew: true,
      aspectRatio: '9:16' as const
    },
    {
      id: '2',
      title: 'Soldes d\'hiver exceptionnels',
      company: 'Decathlon',
      validUntil: '15/01/2025',
      imageUrl: catalogSport,
      viewCount: 890,
      aspectRatio: '1:1' as const
    },
    {
      id: '3',
      title: 'Offres automobiles de janvier',
      company: 'Toyota Cameroun',
      validUntil: '20/01/2025',
      imageUrl: catalogAuto,
      viewCount: 567,
      isPremium: true,
      aspectRatio: '9:16' as const
    },
    {
      id: '4',
      title: 'Collection premium',
      company: 'Louis Vuitton',
      validUntil: '28/01/2025',
      imageUrl: catalogPremium,
      viewCount: 2150,
      isPremium: true,
      aspectRatio: '1:1' as const
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {latestCatalogs
              .filter(catalog => catalog.isPremium)
              .map((catalog) => (
                <CatalogCard key={catalog.id} {...catalog} />
              ))}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {latestCatalogs.map((catalog) => (
              <CatalogCard key={catalog.id} {...catalog} />
            ))}
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