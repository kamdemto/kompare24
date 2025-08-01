import React, { useState } from 'react';
import { ShoppingBag, Search, Filter, ArrowRight, TrendingUp, Clock, Star, Grid, List } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CatalogCard from '@/components/ui/catalog-card';
import catalogSupermarket from '@/assets/catalog-supermarket-1.jpg';

const SupermarchesDetailPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('recent');

  const categoryStats = {
    totalCatalogs: 45,
    totalStores: 12,
    avgDiscount: '35%',
    popularityRank: 1
  };

  const featuredStores = [
    { name: 'Casino', catalogCount: 8, rating: 4.8, isPartner: true },
    { name: 'Carrefour', catalogCount: 6, rating: 4.7, isPartner: true },
    { name: 'Auchan', catalogCount: 5, rating: 4.6, isPartner: false },
    { name: 'Mahima', catalogCount: 7, rating: 4.5, isPartner: true },
    { name: 'Score', catalogCount: 4, rating: 4.4, isPartner: false },
    { name: 'Santa Lucia', catalogCount: 3, rating: 4.3, isPartner: false }
  ];

  const trendingProducts = [
    'Produits alimentaires',
    'Produits d\'hygiène',
    'Électroménager',
    'Vêtements et textiles',
    'Produits de beauté'
  ];

  const allCatalogs = [
    {
      id: '1',
      title: 'Grande promotion fin d\'année',
      company: 'Casino',
      validUntil: '31/12/2024',
      imageUrl: catalogSupermarket,
      viewCount: 1250,
      isNew: true,
      discount: '50%',
      featured: true
    },
    {
      id: '10',
      title: 'Méga soldes alimentaires',
      company: 'Carrefour',
      validUntil: '28/01/2025',
      imageUrl: catalogSupermarket,
      viewCount: 890,
      discount: '40%',
      featured: false
    },
    {
      id: '11',
      title: 'Offres spéciales janvier',
      company: 'Auchan',
      validUntil: '20/01/2025',
      imageUrl: catalogSupermarket,
      viewCount: 567,
      discount: '30%',
      featured: false
    },
    {
      id: '12',
      title: 'Produits frais en promotion',
      company: 'Mahima',
      validUntil: '15/01/2025',
      imageUrl: catalogSupermarket,
      viewCount: 423,
      discount: '25%',
      featured: true
    },
    {
      id: '13',
      title: 'Épicerie à prix cassés',
      company: 'Score',
      validUntil: '25/01/2025',
      imageUrl: catalogSupermarket,
      viewCount: 789,
      discount: '45%',
      featured: false
    },
    {
      id: '14',
      title: 'Week-end promotionnel',
      company: 'Santa Lucia',
      validUntil: '22/01/2025',
      imageUrl: catalogSupermarket,
      viewCount: 345,
      discount: '35%',
      featured: false
    }
  ];

  const featuredCatalogs = allCatalogs.filter(catalog => catalog.featured);
  const regularCatalogs = allCatalogs.filter(catalog => !catalog.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <ShoppingBag className="h-16 w-16 mr-4" />
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-2">Supermarchés</h1>
                <div className="flex items-center justify-center space-x-6 text-sm">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-4 w-4" />
                    <span>#{categoryStats.popularityRank} Catégorie</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <ShoppingBag className="h-4 w-4" />
                    <span>{categoryStats.totalCatalogs} Catalogues</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4" />
                    <span>Jusqu'à {categoryStats.avgDiscount} de réduction</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-xl text-white/90 mb-8 text-center max-w-3xl mx-auto">
              Découvrez toutes les promotions alimentaires et produits du quotidien des grandes enseignes. 
              Économisez sur vos courses avec nos offres exclusives !
            </p>
            
            {/* Enhanced Search */}
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Rechercher produits, enseignes..."
                    className="pl-10 h-12 text-foreground"
                  />
                </div>
                
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Enseigne" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les enseignes</SelectItem>
                    {featuredStores.map(store => (
                      <SelectItem key={store.name} value={store.name.toLowerCase()}>
                        {store.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select>
                  <SelectTrigger className="h-12">
                    <SelectValue placeholder="Réduction" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les réductions</SelectItem>
                    <SelectItem value="50plus">50% et plus</SelectItem>
                    <SelectItem value="30-50">30% à 50%</SelectItem>
                    <SelectItem value="30minus">Moins de 30%</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button className="w-full md:w-auto mt-4 bg-gradient-secondary hover:bg-secondary/90">
                <Search className="h-4 w-4 mr-2" />
                Rechercher les meilleures offres
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Category Statistics */}
      <section className="py-8 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {categoryStats.totalCatalogs}
                  </div>
                  <div className="text-sm text-muted-foreground">Catalogues actifs</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-secondary mb-1">
                    {categoryStats.totalStores}
                  </div>
                  <div className="text-sm text-muted-foreground">Enseignes partenaires</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {categoryStats.avgDiscount}
                  </div>
                  <div className="text-sm text-muted-foreground">Réduction moyenne</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-secondary mb-1">
                    #{categoryStats.popularityRank}
                  </div>
                  <div className="text-sm text-muted-foreground">Catégorie populaire</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-6">
                {/* Featured Stores */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Enseignes Populaires</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {featuredStores.map((store) => (
                      <Link
                        key={store.name}
                        to={`/entreprise/${store.name.toLowerCase()}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
                            <ShoppingBag className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-sm group-hover:text-primary transition-colors">
                              {store.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {store.catalogCount} catalogues
                            </div>
                          </div>
                        </div>
                        {store.isPartner && (
                          <Badge variant="outline" className="text-xs">
                            Partenaire
                          </Badge>
                        )}
                      </Link>
                    ))}
                  </CardContent>
                </Card>

                {/* Trending Products */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Produits Tendances
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {trendingProducts.map((product, index) => (
                      <div key={product} className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-xs font-medium text-secondary">
                          {index + 1}
                        </div>
                        <span className="text-sm text-muted-foreground">{product}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <Tabs defaultValue="featured" className="space-y-6">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                    <TabsList>
                      <TabsTrigger value="featured">
                        À la Une ({featuredCatalogs.length})
                      </TabsTrigger>
                      <TabsTrigger value="all">
                        Tous les catalogues ({allCatalogs.length})
                      </TabsTrigger>
                      <TabsTrigger value="expiring">
                        Expire bientôt
                      </TabsTrigger>
                    </TabsList>

                    <div className="flex items-center space-x-4">
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

                      <Select value={sortBy} onValueChange={setSortBy}>
                        <SelectTrigger className="w-48">
                          <Filter className="h-4 w-4 mr-2" />
                          <SelectValue placeholder="Trier par" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="recent">Plus récents</SelectItem>
                          <SelectItem value="popular">Plus populaires</SelectItem>
                          <SelectItem value="discount">Meilleure réduction</SelectItem>
                          <SelectItem value="expiring">Expire bientôt</SelectItem>
                          <SelectItem value="company">Par enseigne</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Featured Catalogs */}
                  <TabsContent value="featured" className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-4">
                        Catalogues À la Une
                      </h2>
                      <div className={`grid gap-6 ${
                        viewMode === 'grid' 
                          ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                          : 'grid-cols-1'
                      }`}>
                        {featuredCatalogs.map((catalog) => (
                          <div key={catalog.id} className="relative">
                            <Badge className="absolute top-2 left-2 z-10 bg-secondary">
                              À la Une
                            </Badge>
                            <CatalogCard {...catalog} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  {/* All Catalogs */}
                  <TabsContent value="all" className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-4">
                        Tous les Catalogues Supermarchés
                      </h2>
                      <div className={`grid gap-6 ${
                        viewMode === 'grid' 
                          ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                          : 'grid-cols-1'
                      }`}>
                        {allCatalogs.map((catalog) => (
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
                  </TabsContent>

                  {/* Expiring Soon */}
                  <TabsContent value="expiring" className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                        <Clock className="h-6 w-6 mr-2 text-orange-500" />
                        Catalogues qui Expirent Bientôt
                      </h2>
                      <div className={`grid gap-6 ${
                        viewMode === 'grid' 
                          ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                          : 'grid-cols-1'
                      }`}>
                        {allCatalogs.slice(0, 3).map((catalog) => (
                          <div key={catalog.id} className="relative">
                            <Badge className="absolute top-2 left-2 z-10 bg-orange-500">
                              Expire bientôt
                            </Badge>
                            <CatalogCard {...catalog} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupermarchesDetailPage;