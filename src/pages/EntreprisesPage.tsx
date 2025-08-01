import React, { useState } from 'react';
import { Search, MapPin, Star, Users, BarChart3, Filter, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const EntreprisesPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');

  const companies = [
    {
      id: 'decathlon',
      name: 'Decathlon Cameroun',
      description: 'Votre partenaire sport depuis plus de 10 ans',
      logo: '/api/placeholder/80/80',
      sector: 'Sport & Mode',
      isPremium: false,
      activeCatalogs: 8,
      totalViews: 15670,
      rating: 4.8,
      location: 'Douala, Yaoundé',
      establishedYear: 2014
    },
    {
      id: 'casino',
      name: 'Casino Cameroun',
      description: 'Votre supermarché de proximité',
      logo: '/api/placeholder/80/80',
      sector: 'Supermarchés',
      isPremium: true,
      activeCatalogs: 12,
      totalViews: 25430,
      rating: 4.7,
      location: 'Douala, Yaoundé, Bafoussam',
      establishedYear: 2010
    },
    {
      id: 'toyota',
      name: 'Toyota Cameroun',
      description: 'Concessionnaire officiel Toyota',
      logo: '/api/placeholder/80/80',
      sector: 'Automobile',
      isPremium: true,
      activeCatalogs: 5,
      totalViews: 18920,
      rating: 4.9,
      location: 'Douala, Yaoundé',
      establishedYear: 2008
    },
    {
      id: 'louis-vuitton',
      name: 'Louis Vuitton',
      description: 'Maison de luxe française',
      logo: '/api/placeholder/80/80',
      sector: 'Sassayé',
      isPremium: true,
      activeCatalogs: 3,
      totalViews: 12340,
      rating: 4.9,
      location: 'Douala',
      establishedYear: 2020
    },
    {
      id: 'carrefour',
      name: 'Carrefour Market',
      description: 'L\'hypermarché qui vous ressemble',
      logo: '/api/placeholder/80/80',
      sector: 'Supermarchés',
      isPremium: false,
      activeCatalogs: 6,
      totalViews: 13560,
      rating: 4.6,
      location: 'Douala, Yaoundé',
      establishedYear: 2012
    },
    {
      id: 'nike',
      name: 'Nike Store',
      description: 'Just Do It',
      logo: '/api/placeholder/80/80',
      sector: 'Sport & Mode',
      isPremium: false,
      activeCatalogs: 4,
      totalViews: 9870,
      rating: 4.5,
      location: 'Douala',
      establishedYear: 2018
    }
  ];

  const sectors = ['Supermarchés', 'Sport & Mode', 'Automobile', 'Sassayé'];

  const filteredCompanies = companies.filter(company => {
    const matchesSearch = company.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         company.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === 'all' || company.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  const totalCompanies = companies.length;
  const premiumCompanies = companies.filter(c => c.isPremium).length;
  const totalCatalogs = companies.reduce((sum, c) => sum + c.activeCatalogs, 0);
  const avgRating = (companies.reduce((sum, c) => sum + c.rating, 0) / companies.length).toFixed(1);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos Entreprises Partenaires
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Découvrez toutes les entreprises qui font confiance à Kompar24 pour diffuser leurs promotions
            </p>
            
            {/* Search Bar */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Rechercher une entreprise..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 h-12 text-foreground"
                  />
                </div>
                
                <Select value={selectedSector} onValueChange={setSelectedSector}>
                  <SelectTrigger className="w-full md:w-48 h-12">
                    <SelectValue placeholder="Secteur" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Tous les secteurs</SelectItem>
                    {sectors.map(sector => (
                      <SelectItem key={sector} value={sector}>{sector}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-8 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {totalCompanies}
                  </div>
                  <div className="text-sm text-muted-foreground">Entreprises</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {premiumCompanies}
                  </div>
                  <div className="text-sm text-muted-foreground">Premium</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {totalCatalogs}
                  </div>
                  <div className="text-sm text-muted-foreground">Catalogues actifs</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {avgRating}★
                  </div>
                  <div className="text-sm text-muted-foreground">Note moyenne</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Companies List */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Entreprises Partenaires
                </h2>
                <p className="text-muted-foreground">
                  {filteredCompanies.length} entreprise{filteredCompanies.length > 1 ? 's' : ''} trouvée{filteredCompanies.length > 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <div className="flex items-center border rounded-lg p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>

                <Select>
                  <SelectTrigger className="w-48">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="Trier par" defaultValue="name" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Nom A-Z</SelectItem>
                    <SelectItem value="rating">Mieux notées</SelectItem>
                    <SelectItem value="catalogs">Plus de catalogues</SelectItem>
                    <SelectItem value="views">Plus populaires</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Companies Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredCompanies.map((company) => (
                <Card key={company.id} className="hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="relative">
                        <img
                          src={company.logo}
                          alt={`Logo ${company.name}`}
                          className="w-16 h-16 rounded-full object-cover border-2 border-muted"
                        />
                        {company.isPremium && (
                          <Badge className="absolute -top-2 -right-2 bg-gradient-secondary text-xs">
                            Premium
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
                              {company.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">
                              {company.description}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{company.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span>{company.rating}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <BarChart3 className="h-3 w-3" />
                              <span>{company.activeCatalogs} catalogues</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-3 w-3" />
                              <span>{(company.totalViews / 1000).toFixed(1)}K vues</span>
                            </div>
                          </div>
                          
                          <Badge variant="outline" className="text-xs">
                            {company.sector}
                          </Badge>
                        </div>

                        <div className="mt-4 flex space-x-2">
                          <Button asChild size="sm" className="flex-1">
                            <Link to={`/entreprise/${company.id}`}>
                              Voir le profil
                            </Link>
                          </Button>
                          <Button asChild variant="outline" size="sm">
                            <Link to={`/entreprise/${company.id}#catalogues`}>
                              Catalogues
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Empty State */}
            {filteredCompanies.length === 0 && (
              <div className="text-center py-12">
                <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Aucune entreprise trouvée
                </h3>
                <p className="text-muted-foreground mb-4">
                  Essayez avec d'autres mots-clés ou changez le secteur
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedSector('all');
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EntreprisesPage;