import React from 'react';
import { Home, Search, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CatalogCard from '@/components/ui/catalog-card';

const AmenagementPage = () => {
  // Mock data pour les catalogues aménagement
  const catalogs = [
    {
      id: '1',
      title: 'Électroménager moderne',
      company: 'Samsung',
      validUntil: '31/03/2025',
      imageUrl: '/placeholder.svg',
      viewCount: 1850,
      isNew: true,
      aspectRatio: '9:16' as const
    },
    {
      id: '2',
      title: 'Mobilier de cuisine',
      company: 'IKEA',
      validUntil: '28/02/2025',
      imageUrl: '/placeholder.svg',
      viewCount: 1240,
      aspectRatio: '9:16' as const
    },
    {
      id: '3',
      title: 'Équipements de bureau',
      company: 'Bureau Vallée',
      validUntil: '15/02/2025',
      imageUrl: '/placeholder.svg',
      viewCount: 987,
      aspectRatio: '9:16' as const
    },
    {
      id: '4',
      title: 'Décoration d\'intérieur',
      company: 'Alinéa',
      validUntil: '20/02/2025',
      imageUrl: '/placeholder.svg',
      viewCount: 756,
      aspectRatio: '9:16' as const
    },
    {
      id: '5',
      title: 'Appareils ménagers',
      company: 'Whirlpool',
      validUntil: '10/03/2025',
      imageUrl: '/placeholder.svg',
      viewCount: 623,
      aspectRatio: '9:16' as const
    },
    {
      id: '6',
      title: 'Solutions de rangement',
      company: 'Leroy Merlin',
      validUntil: '25/02/2025',
      imageUrl: '/placeholder.svg',
      viewCount: 445,
      aspectRatio: '9:16' as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Home className="h-12 w-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Aménagement</h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Découvrez les meilleures offres d'équipements, électroménager, mobilier et décoration
            </p>
            
            {/* Search & Filters */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Rechercher en aménagement..."
                    className="pl-10 h-12 text-foreground"
                  />
                </div>
                
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les catégories</SelectItem>
                    <SelectItem value="electromenager">Électroménager</SelectItem>
                    <SelectItem value="mobilier">Mobilier</SelectItem>
                    <SelectItem value="decoration">Décoration</SelectItem>
                    <SelectItem value="bureau">Bureau</SelectItem>
                    <SelectItem value="cuisine">Cuisine</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Ville" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les villes</SelectItem>
                    <SelectItem value="douala">Douala</SelectItem>
                    <SelectItem value="yaounde">Yaoundé</SelectItem>
                    <SelectItem value="bafoussam">Bafoussam</SelectItem>
                    <SelectItem value="bamenda">Bamenda</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full md:w-auto mt-4 bg-gradient-secondary hover:bg-secondary/90">
                <Search className="h-4 w-4 mr-2" />
                Rechercher
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Catalogs Grid */}
      <section className="py-16">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Catalogues Aménagement
              </h2>
              <p className="text-muted-foreground">
                {catalogs.length} catalogues disponibles
              </p>
            </div>
            
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Select>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Plus récents</SelectItem>
                  <SelectItem value="popular">Plus populaires</SelectItem>
                  <SelectItem value="price-low">Prix croissant</SelectItem>
                  <SelectItem value="price-high">Prix décroissant</SelectItem>
                  <SelectItem value="brand">Par marque</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {catalogs.map((catalog) => (
              <CatalogCard key={catalog.id} {...catalog} />
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8">
              Charger plus de catalogues
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Marques Populaires
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Samsung', 'IKEA', 'Bureau Vallée', 'Alinéa', 'Whirlpool', 'Leroy Merlin'].map((brand) => (
              <Link
                key={brand}
                to={`/entreprise/${brand.toLowerCase().replace(/\s+/g, '-')}`}
                className="group bg-white rounded-xl p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">
                  {brand}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-secondary text-secondary-foreground">
        <div className="container px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Vous êtes un équipementier ?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Rejoignez Kompar24 et diffusez vos catalogues d'équipements auprès de milliers de clients potentiels
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
          >
            Devenir partenaire
          </Button>
        </div>
      </section>
    </div>
  );
};

export default AmenagementPage;