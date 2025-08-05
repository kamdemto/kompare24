import React, { useState } from 'react';
import { ShoppingBag, Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CatalogCard from '@/components/ui/catalog-card';
import catalogSupermarket from '@/assets/catalog-supermarket-1.jpg';

const SupermarchesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAdvertiser, setSelectedAdvertiser] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState('all');
  const [selectedCity, setSelectedCity] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  // Mock data pour les catalogues supermarchés
  const catalogs = [
    {
      id: '1',
      title: 'Grande promotion fin d\'année',
      company: 'Casino',
      validUntil: '31/12/2024',
      imageUrl: catalogSupermarket,
      viewCount: 1250,
      country: 'Cameroun',
      city: 'Douala',
      isNew: true,
      aspectRatio: '9:16' as const
    },
    {
      id: '2',
      title: 'Méga soldes alimentaires',
      company: 'Carrefour',
      validUntil: '28/01/2025',
      imageUrl: catalogSupermarket,
      viewCount: 890,
      country: 'France',
      city: 'Paris',
      aspectRatio: '9:16' as const
    },
    {
      id: '3',
      title: 'Offres spéciales janvier',
      company: 'Auchan',
      validUntil: '20/01/2025',
      imageUrl: catalogSupermarket,
      viewCount: 567,
      country: 'Belgique',
      city: 'Bruxelles',
      aspectRatio: '9:16' as const
    },
    {
      id: '4',
      title: 'Produits frais en promotion',
      company: 'Mahima',
      validUntil: '15/01/2025',
      imageUrl: catalogSupermarket,
      viewCount: 423,
      country: 'Cameroun',
      city: 'Yaoundé',
      aspectRatio: '9:16' as const
    },
    {
      id: '5',
      title: 'Épicerie à prix cassés',
      company: 'Score',
      validUntil: '25/01/2025',
      imageUrl: catalogSupermarket,
      viewCount: 789,
      country: 'Suisse',
      city: 'Genève',
      aspectRatio: '9:16' as const
    },
    {
      id: '6',
      title: 'Week-end promotionnel',
      company: 'Santa Lucia',
      validUntil: '22/01/2025',
      imageUrl: catalogSupermarket,
      viewCount: 345,
      country: 'France',
      city: 'Lyon',
      aspectRatio: '9:16' as const
    }
  ];

  const companies = ['Casino', 'Carrefour', 'Auchan', 'Mahima', 'Score', 'Santa Lucia'];
  const countries = ['Cameroun', 'France', 'Belgique', 'Suisse'];
  const cities = ['Douala', 'Paris', 'Bruxelles', 'Yaoundé', 'Genève', 'Lyon'];

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
      <section className="bg-gradient-primary text-white py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <ShoppingBag className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Supermarchés
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez toutes les promotions alimentaires et produits du quotidien des grandes enseignes
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
                placeholder="Rechercher dans les supermarchés..."
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
              <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
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
              Nos Partenaires Supermarchés
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos enseignes partenaires pour vos courses quotidiennes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {companies.map((company) => (
              <div key={company} className="text-center p-6 bg-background rounded-lg shadow-sm border">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingBag className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{company}</h3>
                <p className="text-sm text-muted-foreground">
                  {company === 'Casino' && 'Grande distribution et alimentaire'}
                  {company === 'Carrefour' && 'Hypermarché et courses en ligne'}
                  {company === 'Auchan' && 'Produits frais et épicerie'}
                  {company === 'Mahima' && 'Supermarché local au Cameroun'}
                  {company === 'Score' && 'Distribution alimentaire'}
                  {company === 'Santa Lucia' && 'Épicerie et produits du quotidien'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupermarchesPage;