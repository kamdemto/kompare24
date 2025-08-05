import React, { useState } from 'react';
import { Fuel, Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CatalogCard from '@/components/ui/catalog-card';

const StationServicePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAdvertiser, setSelectedAdvertiser] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Mock data avec les annonceurs spécifiés
  const catalogs = [
    {
      id: '1',
      title: 'Carburants & Services Premium',
      company: 'Total Energie',
      validUntil: '31/03/2025',
      imageUrl: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=400&h=600',
      viewCount: 2150,
      category: 'Carburants',
      country: 'France',
      isNew: true
    },
    {
      id: '2',
      title: 'Station & Boutique Tradex',
      company: 'Tradex',
      validUntil: '15/04/2025',
      imageUrl: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&w=400&h=600',
      viewCount: 1890,
      category: 'Services Auto',
      country: 'Belgique'
    },
    {
      id: '3',
      title: 'Offres Pétrolières Spéciales',
      company: 'Bocom Petroleum',
      validUntil: '20/03/2025',
      imageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=400&h=600',
      viewCount: 1567,
      category: 'Petroleum',
      country: 'Suisse'
    },
    {
      id: '4',
      title: 'Lavage Auto & Entretien',
      company: 'Total Energie',
      validUntil: '25/03/2025',
      imageUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&h=600',
      viewCount: 1234,
      category: 'Entretien Auto',
      country: 'France'
    },
    {
      id: '5',
      title: 'Boutique Station Tradex',
      company: 'Tradex',
      validUntil: '10/04/2025',
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=400&h=600',
      viewCount: 987,
      category: 'Boutique',
      country: 'Belgique'
    },
    {
      id: '6',
      title: 'Carburants Premium Bocom',
      company: 'Bocom Petroleum',
      validUntil: '05/04/2025',
      imageUrl: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&w=400&h=600',
      viewCount: 1456,
      category: 'Carburants Premium',
      country: 'Suisse'
    }
  ];

  const advertisers = ['Total Energie', 'Tradex', 'Bocom Petroleum'];
  const countries = ['France', 'Belgique', 'Suisse'];

  const filteredCatalogs = catalogs.filter(catalog => {
    const matchesSearch = catalog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         catalog.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAdvertiser = selectedAdvertiser === 'all' || catalog.company === selectedAdvertiser;
    const matchesCountry = selectedCountry === 'all' || catalog.country === selectedCountry;
    return matchesSearch && matchesAdvertiser && matchesCountry;
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
      <section className="bg-gradient-to-br from-red-500 to-orange-600 text-white py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Fuel className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Station Service
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Carburants, services auto et boutiques de stations-service avec les meilleures offres
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                {catalogs.length} catalogues disponibles
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                {advertisers.length} enseignes partenaires
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
                placeholder="Rechercher des stations-service..."
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
                {advertisers.map((advertiser) => (
                  <SelectItem key={advertiser} value={advertiser}>
                    {advertiser}
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
              <Fuel className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
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
              Nos Partenaires Stations-Service
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos enseignes partenaires pour vos besoins en carburants et services auto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {advertisers.map((advertiser) => (
              <div key={advertiser} className="text-center p-6 bg-background rounded-lg shadow-sm border">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Fuel className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{advertiser}</h3>
                <p className="text-sm text-muted-foreground">
                  {advertiser === 'Total Energie' && 'Leader des carburants et services énergétiques'}
                  {advertiser === 'Tradex' && 'Réseau de stations-service et boutiques'}
                  {advertiser === 'Bocom Petroleum' && 'Spécialiste en produits pétroliers'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StationServicePage;