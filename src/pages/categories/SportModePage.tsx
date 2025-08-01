import React from 'react';
import { User, Search, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CatalogCard from '@/components/ui/catalog-card';
import catalogSport from '@/assets/catalog-sport-1.jpg';

const SportModePage = () => {
  const catalogs = [
    {
      id: '1',
      title: 'Soldes d\'hiver exceptionnels',
      company: 'Decathlon',
      validUntil: '15/01/2025',
      imageUrl: catalogSport,
      viewCount: 890,
      isNew: true,
      aspectRatio: '1:1' as const
    },
    {
      id: '2',
      title: 'Collection printemps-été',
      company: 'Nike',
      validUntil: '20/02/2025',
      imageUrl: catalogSport,
      viewCount: 1456,
      aspectRatio: '9:16' as const
    },
    {
      id: '3',
      title: 'Équipements fitness -50%',
      company: 'Adidas',
      validUntil: '28/01/2025',
      imageUrl: catalogSport,
      viewCount: 678,
      aspectRatio: '1:1' as const
    },
    {
      id: '4',
      title: 'Mode urbaine tendance',
      company: 'Puma',
      validUntil: '31/01/2025',
      imageUrl: catalogSport,
      viewCount: 543,
      aspectRatio: '9:16' as const
    }
  ];

  const brands = ['Nike', 'Adidas', 'Puma', 'Decathlon', 'Under Armour', 'Reebok'];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-500 to-purple-600 text-white py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <User className="h-12 w-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Sport & Mode</h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Découvrez les dernières tendances mode et équipements sportifs à prix réduits
            </p>
            
            {/* Search & Filters */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Rechercher mode & sport..."
                    className="pl-10 h-12 text-foreground"
                  />
                </div>
                
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Marque" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les marques</SelectItem>
                    {brands.map(brand => (
                      <SelectItem key={brand} value={brand.toLowerCase()}>{brand}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les types</SelectItem>
                    <SelectItem value="vetements">Vêtements</SelectItem>
                    <SelectItem value="chaussures">Chaussures</SelectItem>
                    <SelectItem value="equipements">Équipements sport</SelectItem>
                    <SelectItem value="accessoires">Accessoires</SelectItem>
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
                Catalogues Sport & Mode
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
                  <SelectItem value="expiring">Expire bientôt</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {catalogs.map((catalog) => (
              <CatalogCard key={catalog.id} {...catalog} />
            ))}
          </div>

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
            {brands.map((brand) => (
              <Link
                key={brand}
                to={`/entreprise/${brand.toLowerCase()}`}
                className="group bg-white rounded-xl p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-16 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-lg mb-4 flex items-center justify-center">
                  <User className="h-8 w-8 text-blue-500" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-blue-500 transition-colors">
                  {brand}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SportModePage;