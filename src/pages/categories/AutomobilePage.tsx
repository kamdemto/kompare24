import React from 'react';
import { Car, Search, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CatalogCard from '@/components/ui/catalog-card';
import catalogAuto from '@/assets/catalog-auto-1.jpg';

const AutomobilePage = () => {
  const catalogs = [
    {
      id: '1',
      title: 'Offres automobiles de janvier',
      company: 'Toyota Cameroun',
      validUntil: '20/01/2025',
      imageUrl: catalogAuto,
      viewCount: 567,
      isNew: true,
      aspectRatio: '9:16' as const
    },
    {
      id: '2',
      title: 'Pièces détachées -30%',
      company: 'Bosch Auto Parts',
      validUntil: '25/01/2025',
      imageUrl: catalogAuto,
      viewCount: 432,
      aspectRatio: '1:1' as const
    },
    {
      id: '3',
      title: 'Service après-vente',
      company: 'Garage Central',
      validUntil: '31/01/2025',
      imageUrl: catalogAuto,
      viewCount: 289,
      aspectRatio: '9:16' as const
    }
  ];

  const companies = ['Toyota', 'Mercedes-Benz', 'BMW', 'Volkswagen', 'Ford', 'Hyundai'];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 to-teal-600 text-white py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Car className="h-12 w-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Automobile</h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Pièces auto, accessoires et services automobiles en promotion
            </p>
            
            {/* Search & Filters */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Rechercher automobile..."
                    className="pl-10 h-12 text-foreground"
                  />
                </div>
                
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Marque" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les marques</SelectItem>
                    {companies.map(company => (
                      <SelectItem key={company} value={company.toLowerCase()}>{company}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les types</SelectItem>
                    <SelectItem value="pieces">Pièces détachées</SelectItem>
                    <SelectItem value="accessoires">Accessoires</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                    <SelectItem value="vehicules">Véhicules</SelectItem>
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
                Catalogues Automobile
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

      {/* Popular Companies */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Marques Automobile
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {companies.map((company) => (
              <Link
                key={company}
                to={`/entreprise/${company.toLowerCase()}`}
                className="group bg-white rounded-xl p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-16 bg-gradient-to-br from-green-500/10 to-teal-600/10 rounded-lg mb-4 flex items-center justify-center">
                  <Car className="h-8 w-8 text-green-500" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-green-500 transition-colors">
                  {company}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomobilePage;