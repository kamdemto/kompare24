import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, ArrowLeft, Clock, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CatalogCard from '@/components/ui/catalog-card';

const RestaurantAlimentationPage = () => {
  const catalogs = [
    {
      id: '1',
      title: 'Menu découverte janvier',
      company: 'KFC Cameroun',
      validUntil: '31/01/2025',
      imageUrl: 'https://images.unsplash.com/photo-1513185158878-8d132c1790bb?auto=format&fit=crop&w=400&h=600',
      viewCount: 1840,
      category: 'Fast-food'
    },
    {
      id: '2',
      title: 'Offres petit-déjeuner',
      company: 'Boulangerie Paul',
      validUntil: '15/02/2025',
      imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&h=600',
      viewCount: 967,
      category: 'Boulangerie'
    },
    {
      id: '3',
      title: 'Menu spécial weekend',
      company: 'Pizza Hut',
      validUntil: '28/02/2025',
      imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=400&h=600',
      viewCount: 1456,
      category: 'Restaurant'
    },
    {
      id: '4',
      title: 'Boissons fraîches',
      company: 'Coca-Cola',
      validUntil: '20/03/2025',
      imageUrl: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=400&h=600',
      viewCount: 2130,
      category: 'Boissons'
    },
    {
      id: '5',
      title: 'Snacks et en-cas',
      company: 'Carrefour Express',
      validUntil: '10/02/2025',
      imageUrl: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=400&h=600',
      viewCount: 876,
      category: 'Snacks'
    },
    {
      id: '6',
      title: 'Cuisine traditionnelle',
      company: 'Restaurant Le Palais',
      validUntil: '25/02/2025',
      imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&h=600',
      viewCount: 1234,
      category: 'Restaurant'
    }
  ];

  const subcategories = [
    { name: 'Fast-food', count: 12 },
    { name: 'Restaurants', count: 8 },
    { name: 'Boulangeries', count: 6 },
    { name: 'Boissons', count: 10 },
    { name: 'Snacks', count: 7 }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <section className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white py-16">
        <div className="container px-4">
          <Button asChild variant="outline" className="mb-6 border-white/20 text-white hover:bg-white/10">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'accueil
            </Link>
          </Button>
          
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Utensils className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  Restaurant et alimentation
                </h1>
                <p className="text-xl text-white/90">
                  Fast-food, restaurants, boulangeries et spécialités culinaires
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Clock className="h-4 w-4" />
                <span>22 catalogues actifs</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <MapPin className="h-4 w-4" />
                <span>Disponible dans toutes les villes</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Star className="h-4 w-4" />
                <span>Offres mises à jour quotidiennement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subcategories */}
      <section className="py-12">
        <div className="container px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Sous-catégories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {subcategories.map((subcategory) => (
              <Card key={subcategory.name} className="hover:shadow-elegant transition-all duration-300 cursor-pointer">
                <CardContent className="p-4 text-center">
                  <h3 className="font-semibold text-foreground mb-2">{subcategory.name}</h3>
                  <Badge variant="secondary">{subcategory.count} offres</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogs */}
      <section className="py-12">
        <div className="container px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-foreground">Catalogues disponibles</h2>
            <Button asChild variant="outline">
              <Link to="/catalogues?category=restaurant-alimentation">
                Voir tous les catalogues
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {catalogs.map((catalog) => (
              <CatalogCard key={catalog.id} {...catalog} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Restaurants partenaires populaires</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['KFC Cameroun', 'Pizza Hut', 'Restaurant Le Palais', 'Boulangerie Paul'].map((restaurant) => (
              <Card key={restaurant} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Utensils className="h-6 w-6 text-white" />
                    </div>
                    <span>{restaurant}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Découvrez les dernières offres et promotions
                  </p>
                  <Button variant="outline" className="w-full">
                    Voir les offres
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantAlimentationPage;