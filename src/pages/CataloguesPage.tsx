import React, { useState } from 'react';
import { Search, Filter, Grid, List, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CatalogCard from '@/components/ui/catalog-card';
import catalogSupermarket from '@/assets/catalog-supermarket-1.jpg';
import catalogSport from '@/assets/catalog-sport-9-16.jpg';
import catalogAuto from '@/assets/catalog-auto-1.jpg';
import catalogPremium from '@/assets/catalog-premium-9-16.jpg';

const CataloguesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const allCatalogs = [
    {
      id: '1',
      title: 'Grande promotion fin d\'année',
      company: 'Casino',
      validUntil: '31/12/2024',
      imageUrl: catalogSupermarket,
      viewCount: 1250,
      category: 'Alimentation',
      isNew: true
    },
    {
      id: '2',
      title: 'Soldes d\'hiver exceptionnels',
      company: 'Decathlon',
      validUntil: '15/01/2025',
      imageUrl: catalogSport,
      viewCount: 890,
      category: 'Sport'
    },
    {
      id: '3',
      title: 'Offres automobiles de janvier',
      company: 'Toyota Cameroun',
      validUntil: '20/01/2025',
      imageUrl: catalogAuto,
      viewCount: 567,
      category: 'Automobile'
    },
    {
      id: '4',
      title: 'Collection premium luxe',
      company: 'Louis Vuitton',
      validUntil: '28/01/2025',
      imageUrl: catalogPremium,
      viewCount: 2150,
      category: 'Mode Luxe',
      isPremium: true
    },
    {
      id: '5',
      title: 'Électronique haute technologie',
      company: 'Jumia',
      validUntil: '10/02/2025',
      imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&h=600',
      viewCount: 1876,
      category: 'Électronique'
    },
    {
      id: '6',
      title: 'Mode et accessoires tendance',
      company: 'H&M',
      validUntil: '05/02/2025',
      imageUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400&h=600',
      viewCount: 1234,
      category: 'Mode'
    },
    {
      id: '7',
      title: 'Offres voyage exotique',
      company: 'Travel Agency',
      validUntil: '15/02/2025',
      imageUrl: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=400&h=600',
      viewCount: 756,
      category: 'Voyage'
    },
    {
      id: '8',
      title: 'Maison et décoration',
      company: 'Ikea Cameroun',
      validUntil: '20/02/2025',
      imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=600',
      viewCount: 1345,
      category: 'Maison'
    }
  ];

  const categories = [
    { value: 'all', label: 'Toutes les catégories' },
    { value: 'alimentation', label: 'Alimentation' },
    { value: 'sport', label: 'Sport & Mode' },
    { value: 'automobile', label: 'Automobile' },
    { value: 'electronique', label: 'Électronique' },
    { value: 'maison', label: 'Maison & Décoration' },
    { value: 'voyage', label: 'Voyage & Loisirs' }
  ];

  const filteredCatalogs = allCatalogs.filter(catalog => {
    const matchesSearch = catalog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         catalog.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || 
                           catalog.category.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const premiumCatalogs = filteredCatalogs.filter(catalog => catalog.isPremium);
  const regularCatalogs = filteredCatalogs.filter(catalog => !catalog.isPremium);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tous les Catalogues
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez toutes les promotions et offres spéciales de nos partenaires
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-5 w-5" />
                  <Input
                    placeholder="Rechercher un catalogue ou une entreprise..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="md:w-64 bg-white/20 border-white/30 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12">
        <div className="container px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <p className="text-muted-foreground">
                {filteredCatalogs.length} catalogue(s) trouvé(s)
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Trier par" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Plus récents</SelectItem>
                  <SelectItem value="popular">Plus populaires</SelectItem>
                  <SelectItem value="expiring">Expire bientôt</SelectItem>
                  <SelectItem value="company">Par entreprise</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Tabs for Premium vs Regular */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all">Tous les catalogues</TabsTrigger>
              <TabsTrigger value="premium">Sassayé Premium</TabsTrigger>
              <TabsTrigger value="regular">Catalogues Gratuits</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredCatalogs.map((catalog) => (
                  <CatalogCard key={catalog.id} {...catalog} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="premium" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {premiumCatalogs.map((catalog) => (
                  <CatalogCard key={catalog.id} {...catalog} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="regular" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {regularCatalogs.map((catalog) => (
                  <CatalogCard key={catalog.id} {...catalog} />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" className="px-8">
              Charger plus de catalogues
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CataloguesPage;