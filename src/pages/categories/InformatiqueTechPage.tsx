import React, { useState } from 'react';
import { Monitor, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CatalogCard from '@/components/ui/catalog-card';

const InformatiqueTechPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAdvertiser, setSelectedAdvertiser] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Mock data avec les annonceurs spécifiés
  const catalogs = [
    {
      id: '1',
      title: 'Ordinateurs Gaming & Bureautique',
      company: 'Ink Computer',
      validUntil: '15/03/2025',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&h=600',
      viewCount: 1850,
      category: 'Informatique',
      isNew: true
    },
    {
      id: '2',
      title: 'Smartphones & Tablettes',
      company: 'Klass Computer',
      validUntil: '20/03/2025',
      imageUrl: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=400&h=600',
      viewCount: 2340,
      category: 'Mobile & Tablettes'
    },
    {
      id: '3',
      title: 'Accessoires Tech Premium',
      company: 'Avenir Computer',
      validUntil: '25/02/2025',
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&h=600',
      viewCount: 1567,
      category: 'Accessoires'
    },
    {
      id: '4',
      title: 'Solutions Professionnelles',
      company: 'Ink Computer',
      validUntil: '10/04/2025',
      imageUrl: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&h=600',
      viewCount: 987,
      category: 'Professionnel'
    },
    {
      id: '5',
      title: 'Écrans & Moniteurs',
      company: 'Klass Computer',
      validUntil: '28/03/2025',
      imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=400&h=600',
      viewCount: 1456,
      category: 'Écrans'
    },
    {
      id: '6',
      title: 'Composants PC Gaming',
      company: 'Avenir Computer',
      validUntil: '15/04/2025',
      imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=400&h=600',
      viewCount: 2100,
      category: 'Gaming'
    }
  ];

  const advertisers = ['Ink Computer', 'Klass Computer', 'Avenir Computer'];

  const filteredCatalogs = catalogs.filter(catalog => {
    const matchesSearch = catalog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         catalog.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAdvertiser = selectedAdvertiser === 'all' || catalog.company === selectedAdvertiser;
    return matchesSearch && matchesAdvertiser;
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
      <section className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Monitor className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Informatique & Teché
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Découvrez les meilleures offres tech : ordinateurs, smartphones, accessoires et solutions informatiques
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                {catalogs.length} catalogues disponibles
              </span>
              <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                {advertisers.length} annonceurs partenaires
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
                placeholder="Rechercher des catalogues informatique..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={selectedAdvertiser} onValueChange={setSelectedAdvertiser}>
              <SelectTrigger className="w-full md:w-64">
                <SelectValue placeholder="Tous les annonceurs" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tous les annonceurs</SelectItem>
                {advertisers.map((advertiser) => (
                  <SelectItem key={advertiser} value={advertiser}>
                    {advertiser}
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
              <Monitor className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
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
              Nos Partenaires Informatique & Tech
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez nos annonceurs spécialisés dans l'informatique et la technologie
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {advertisers.map((advertiser) => (
              <div key={advertiser} className="text-center p-6 bg-background rounded-lg shadow-sm border">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{advertiser}</h3>
                <p className="text-sm text-muted-foreground">
                  Spécialiste en informatique et technologies
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default InformatiqueTechPage;