import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowLeft, Clock, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CatalogCard from '@/components/ui/catalog-card';

const SanteBeautePage = () => {
  const catalogs = [
    {
      id: '1',
      title: 'Collection parfums 2025',
      company: 'Sephora',
      validUntil: '31/03/2025',
      imageUrl: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=400&h=600',
      viewCount: 2340,
      category: 'Parfums'
    },
    {
      id: '2',
      title: 'Soins visage anti-âge',
      company: 'L\'Oréal Paris',
      validUntil: '15/02/2025',
      imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=400&h=600',
      viewCount: 1567,
      category: 'Soins corporels'
    },
    {
      id: '3',
      title: 'Maquillage tendance',
      company: 'MAC Cosmetics',
      validUntil: '28/02/2025',
      imageUrl: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=400&h=600',
      viewCount: 1890,
      category: 'Cosmétiques'
    },
    {
      id: '4',
      title: 'Pharmacie en ligne',
      company: 'Pharmacie Centrale',
      validUntil: '20/03/2025',
      imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&h=600',
      viewCount: 967,
      category: 'Pharmacie'
    },
    {
      id: '5',
      title: 'Bien-être et détente',
      company: 'Spa Wellness',
      validUntil: '10/04/2025',
      imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=400&h=600',
      viewCount: 1234,
      category: 'Bien-être'
    },
    {
      id: '6',
      title: 'Produits capillaires',
      company: 'Kerastase',
      validUntil: '25/02/2025',
      imageUrl: 'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=400&h=600',
      viewCount: 1456,
      category: 'Soins corporels'
    }
  ];

  const subcategories = [
    { name: 'Cosmétiques', count: 15 },
    { name: 'Parfums', count: 8 },
    { name: 'Soins corporels', count: 12 },
    { name: 'Pharmacie', count: 6 },
    { name: 'Bien-être', count: 9 }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <section className="bg-gradient-to-br from-pink-500 to-rose-600 text-white py-16">
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
                <Heart className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  Santé & beauté
                </h1>
                <p className="text-xl text-white/90">
                  Cosmétiques, parfums, soins corporels et produits de bien-être
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Clock className="h-4 w-4" />
                <span>19 catalogues actifs</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <MapPin className="h-4 w-4" />
                <span>Disponible dans toutes les villes</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <Star className="h-4 w-4" />
                <span>Marques premium</span>
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
              <Link to="/catalogues?category=sante-beaute">
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

      {/* Featured Brands */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Marques partenaires populaires</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Sephora', 'L\'Oréal Paris', 'MAC Cosmetics', 'Pharmacie Centrale', 'Spa Wellness', 'Kerastase'].map((brand) => (
              <Card key={brand} className="hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <span>{brand}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Découvrez les dernières collections et promotions
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

export default SanteBeautePage;