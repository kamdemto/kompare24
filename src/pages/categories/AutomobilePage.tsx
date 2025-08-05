import React, { useState } from 'react';
import { Car, Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CatalogCard from '@/components/ui/catalog-card';
import catalogAuto from '@/assets/catalog-auto-1.jpg';

const AutomobilePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAdvertiser, setSelectedAdvertiser] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const catalogs = [
    {
      id: '1',
      title: 'Offres automobiles de janvier',
      company: 'Toyota Cameroun',
      validUntil: '20/01/2025',
      imageUrl: catalogAuto,
      viewCount: 567,
      category: 'Véhicules Neufs',
      country: 'Cameroun',
      city: 'Douala',
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
      category: 'Pièces Détachées',
      country: 'France',
      city: 'Paris',
      aspectRatio: '9:16' as const
    },
    {
      id: '3',
      title: 'Service après-vente',
      company: 'Garage Central',
      validUntil: '31/01/2025',
      imageUrl: catalogAuto,
      viewCount: 289,
      category: 'Services Auto',
      country: 'Belgique',
      city: 'Bruxelles',
      aspectRatio: '9:16' as const
    }
  ];

  const companies = ['Toyota Cameroun', 'Bosch Auto Parts', 'Garage Central'];
  const countries = ['Cameroun', 'France', 'Belgique'];
  const cities = ['Douala', 'Paris', 'Bruxelles'];

  const filteredCatalogs = catalogs.filter(catalog => {
    const matchesSearch = catalog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         catalog.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAdvertiser = selectedAdvertiser === 'all' || catalog.company === selectedAdvertiser;
    const matchesCountry = selectedCountry === 'all' || catalog.country === selectedCountry;
    const matchesCity = selectedCity === 'all' || catalog.city === selectedCity;
    return matchesSearch && matchesAdvertiser && matchesCountry && matchesCity;
  });

  const sortedCatalogs = [...filteredCatalogs].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.validUntil).getTime() - new Date(a.validUntil).getTime();
      case 'popular':
        return b.viewCount - a.viewCount;
      case 'name':
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-500 to-teal-600 text-white py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Car className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Automobile
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Pièces auto, accessoires et services automobiles en promotion
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                {catalogs.length} catalogues disponibles
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                {companies.length} enseignes partenaires
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/50 sticky top-16 z-40 backdrop-blur-sm">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Rechercher automobile..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedAdvertiser} onValueChange={setSelectedAdvertiser}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Toutes les enseignes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les enseignes</SelectItem>
                {companies.map((company) => (
                  <SelectItem key={company} value={company}>
                    {company}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-full md:w-48">
                <MapPin className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Tous les pays" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les pays</SelectItem>
                {countries.map((country) => (
                  <SelectItem key={country} value={country}>
                    {country}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Toutes les villes" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes les villes</SelectItem>
                {cities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Plus récents</SelectItem>
                <SelectItem value="popular">Plus populaires</SelectItem>
                <SelectItem value="name">Nom A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Catalogs Grid */}
      <section className="py-12">
        <div className="container px-4">
          {sortedCatalogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedCatalogs.map((catalog) => (
                <CatalogCard key={catalog.id} {...catalog} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Car className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Aucun catalogue trouvé
              </h3>
              <p className="text-muted-foreground">
                Essayez de modifier vos critères de recherche
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Nos Partenaires Automobile
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos enseignes partenaires pour vos besoins automobiles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {companies.map((company) => (
              <div key={company} className="text-center p-6 bg-background rounded-lg shadow-sm border">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{company}</h3>
                <p className="text-sm text-muted-foreground">
                  {company === 'Toyota Cameroun' && 'Leader automobile au Cameroun'}
                  {company === 'Bosch Auto Parts' && 'Spécialiste pièces détachées'}
                  {company === 'Garage Central' && 'Services et entretien automobile'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AutomobilePage;