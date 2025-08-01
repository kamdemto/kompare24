import React from 'react';
import { ShoppingBag, Search, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import CatalogCard from '@/components/ui/catalog-card';
import catalogSupermarket from '@/assets/catalog-supermarket-1.jpg';

const SupermarchesPage = () => {
  // Mock data pour les catalogues supermarchés
  const catalogs = [
    {
      id: '1',
      title: 'Grande promotion fin d\'année',
      company: 'Casino',
      validUntil: '31/12/2024',
      imageUrl: catalogSupermarket,
      viewCount: 1250,
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
      aspectRatio: '1:1' as const
    },
    {
      id: '3',
      title: 'Offres spéciales janvier',
      company: 'Auchan',
      validUntil: '20/01/2025',
      imageUrl: catalogSupermarket,
      viewCount: 567,
      aspectRatio: '9:16' as const
    },
    {
      id: '4',
      title: 'Produits frais en promotion',
      company: 'Mahima',
      validUntil: '15/01/2025',
      imageUrl: catalogSupermarket,
      viewCount: 423,
      aspectRatio: '1:1' as const
    },
    {
      id: '5',
      title: 'Épicerie à prix cassés',
      company: 'Score',
      validUntil: '25/01/2025',
      imageUrl: catalogSupermarket,
      viewCount: 789,
      aspectRatio: '9:16' as const
    },
    {
      id: '6',
      title: 'Week-end promotionnel',
      company: 'Santa Lucia',
      validUntil: '22/01/2025',
      imageUrl: catalogSupermarket,
      viewCount: 345,
      aspectRatio: '1:1' as const
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <ShoppingBag className="h-12 w-12 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">Supermarchés</h1>
            </div>
            <p className="text-xl text-white/90 mb-8">
              Découvrez toutes les promotions alimentaires et produits du quotidien des grandes enseignes
            </p>
            
            {/* Search & Filters */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Rechercher dans les supermarchés..."
                    className="pl-10 h-12 text-foreground"
                  />
                </div>
                
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Enseigne" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les enseignes</SelectItem>
                    <SelectItem value="casino">Casino</SelectItem>
                    <SelectItem value="carrefour">Carrefour</SelectItem>
                    <SelectItem value="auchan">Auchan</SelectItem>
                    <SelectItem value="mahima">Mahima</SelectItem>
                    <SelectItem value="score">Score</SelectItem>
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
                Catalogues Supermarchés
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
                  <SelectItem value="company">Par enseigne</SelectItem>
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

      {/* Popular Stores */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
            Enseignes Populaires
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Casino', 'Carrefour', 'Auchan', 'Mahima', 'Score', 'Santa Lucia'].map((store) => (
              <Link
                key={store}
                to={`/entreprise/${store.toLowerCase()}`}
                className="group bg-white rounded-xl p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-16 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
                  <ShoppingBag className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {store}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupermarchesPage;