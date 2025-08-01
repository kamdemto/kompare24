import React from 'react';
import { Star, Search, Filter, ArrowRight, Crown, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import CatalogCard from '@/components/ui/catalog-card';
import catalogPremium from '@/assets/catalog-premium-9-16.jpg';

const SassayePage = () => {
  const premiumCatalogs = [
    {
      id: '1',
      title: 'Collection premium',
      company: 'Louis Vuitton',
      validUntil: '28/01/2025',
      imageUrl: catalogPremium,
      viewCount: 2150,
      isPremium: true,
      aspectRatio: '9:16' as const
    },
    {
      id: '2',
      title: 'Offres exclusives VIP',
      company: 'Rolex',
      validUntil: '15/02/2025',
      imageUrl: catalogPremium,
      viewCount: 1876,
      isPremium: true,
      aspectRatio: '9:16' as const
    },
    {
      id: '3',
      title: 'Luxe automobile',
      company: 'Mercedes-Benz Premium',
      validUntil: '10/02/2025',
      imageUrl: catalogPremium,
      viewCount: 1432,
      isPremium: true,
      aspectRatio: '9:16' as const
    }
  ];

  const premiumBrands = ['Louis Vuitton', 'Rolex', 'Hermès', 'Chanel', 'Gucci', 'Prada'];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-secondary text-secondary-foreground py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Crown className="h-12 w-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Sassayé</h1>
              <Badge className="ml-4 bg-white/20 text-secondary-foreground">Premium</Badge>
            </div>
            <p className="text-xl text-secondary-foreground/90 mb-8">
              Découvrez les offres exclusives premium des meilleures enseignes
            </p>
            
            {/* Premium Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Star className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Offres Exclusives</h3>
                <p className="text-sm text-secondary-foreground/80">Accès aux promotions premium avant tout le monde</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Crown className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Marques Luxury</h3>
                <p className="text-sm text-secondary-foreground/80">Les plus grandes marques de luxe réunies</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Zap className="h-8 w-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Mise à Jour Live</h3>
                <p className="text-sm text-secondary-foreground/80">Nouvelles offres ajoutées quotidiennement</p>
              </div>
            </div>
            
            {/* Search & Filters */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Rechercher dans Sassayé..."
                    className="pl-10 h-12 text-foreground"
                  />
                </div>
                
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Marque Premium" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les marques</SelectItem>
                    {premiumBrands.map(brand => (
                      <SelectItem key={brand} value={brand.toLowerCase()}>{brand}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les catégories</SelectItem>
                    <SelectItem value="mode">Mode Luxury</SelectItem>
                    <SelectItem value="bijoux">Bijoux & Montres</SelectItem>
                    <SelectItem value="automobile">Automobile Premium</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full md:w-auto mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Search className="h-4 w-4 mr-2" />
                Rechercher
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Benefits Banner */}
      <section className="py-8 bg-gradient-to-r from-primary/5 to-secondary/5">
        <div className="container px-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-elegant">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="bg-gradient-secondary p-3 rounded-full">
                  <Star className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Vous êtes une marque premium ?</h3>
                  <p className="text-muted-foreground">Rejoignez l'espace Sassayé et bénéficiez d'une visibilité maximale</p>
                </div>
              </div>
              <Button asChild className="bg-gradient-secondary hover:bg-secondary/90">
                <Link to="/devenir-annonceur#premium">
                  <Crown className="h-4 w-4 mr-2" />
                  Découvrir Premium
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Catalogs Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Catalogues Premium Sassayé
              </h2>
              <p className="text-muted-foreground">
                {premiumCatalogs.length} offres exclusives disponibles
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Select>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="exclusive">Plus exclusives</SelectItem>
                  <SelectItem value="recent">Plus récentes</SelectItem>
                  <SelectItem value="popular">Plus populaires</SelectItem>
                  <SelectItem value="expiring">Expire bientôt</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumCatalogs.map((catalog) => (
              <CatalogCard key={catalog.id} {...catalog} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="px-8">
              Voir plus d'offres premium
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Premium Partners */}
      <section className="py-16 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Marques Premium Partenaires
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {premiumBrands.map((brand) => (
              <Link
                key={brand}
                to={`/entreprise/${brand.toLowerCase()}`}
                className="group bg-white rounded-xl p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-secondary/20"
              >
                <div className="h-16 bg-gradient-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                  <Crown className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-secondary transition-colors text-sm">
                  {brand}
                </h3>
                <Badge className="mt-2 bg-secondary/10 text-secondary text-xs">Premium</Badge>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SassayePage;