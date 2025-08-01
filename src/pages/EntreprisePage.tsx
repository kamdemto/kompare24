import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink, Star, Users, Calendar, BarChart3, ArrowLeft, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import CatalogCard from '@/components/ui/catalog-card';
import catalogSupermarket from '@/assets/catalog-supermarket-1.jpg';
import catalogSport from '@/assets/catalog-sport-9-16.jpg';

const EntreprisePage = () => {
  const { slug } = useParams();

  // Mock data - En production, ces données viendraient d'une API selon le slug
  const company = {
    id: 'decathlon',
    name: 'Decathlon Cameroun',
    description: 'Decathlon Cameroun, votre partenaire sport depuis plus de 10 ans. Nous proposons une large gamme d\'équipements sportifs de qualité au meilleur prix. Notre mission est de rendre le sport accessible à tous avec plus de 5000 références en magasin.',
    logo: '/api/placeholder/120/120',
    banner: '/api/placeholder/1200/300',
    isPremium: false,
    establishedYear: '2014',
    employeeCount: '150+',
    locations: [
      'Douala - Bonanjo (Magasin principal)',
      'Yaoundé - Centre ville',
      'Bafoussam - Commercial'
    ],
    contact: {
      phone: '+237 694 846 159',
      email: 'contact@decathlon-cameroun.com',
      website: 'https://decathlon-cameroun.com',
      whatsapp: '+237694846159',
      address: 'Avenue du Général de Gaulle, Bonanjo, Douala'
    },
    sectors: ['Sport & Mode', 'Équipements outdoor', 'Fitness'],
    socialMedia: {
      facebook: 'https://facebook.com/decathloncameroun',
      instagram: 'https://instagram.com/decathloncameroun',
      twitter: 'https://twitter.com/decathloncameroun'
    },
    stats: {
      totalCatalogs: 12,
      activeCatalogs: 8,
      totalViews: 15670,
      monthlyViews: 3450
    }
  };

  const activeCatalogs = [
    {
      id: '2',
      title: 'Soldes d\'hiver exceptionnels',
      company: 'Decathlon',
      validUntil: '15/01/2025',
      imageUrl: catalogSport,
      viewCount: 890,
      isNew: true
    },
    {
      id: '5',
      title: 'Collection Printemps-Été 2025',
      company: 'Decathlon',
      validUntil: '30/03/2025',
      imageUrl: catalogSport,
      viewCount: 567
    },
    {
      id: '6',
      title: 'Équipements de randonnée',
      company: 'Decathlon',
      validUntil: '28/02/2025',
      imageUrl: catalogSport,
      viewCount: 234
    },
    {
      id: '7',
      title: 'Matériel de fitness',
      company: 'Decathlon',
      validUntil: '31/01/2025',
      imageUrl: catalogSport,
      viewCount: 432
    }
  ];

  const expiredCatalogs = [
    {
      id: '8',
      title: 'Offres de Noël',
      company: 'Decathlon',
      validUntil: '31/12/2024',
      imageUrl: catalogSport,
      viewCount: 1250,
      isExpired: true
    },
    {
      id: '9',
      title: 'Black Friday Sports',
      company: 'Decathlon',
      validUntil: '30/11/2024',
      imageUrl: catalogSport,
      viewCount: 2340,
      isExpired: true
    }
  ];

  const handleWhatsAppContact = () => {
    const message = `Bonjour ${company.name} ! Je souhaite obtenir plus d'informations sur vos produits et services.`;
    const whatsappUrl = `https://wa.me/${company.contact.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <section className="bg-muted/50 py-4">
        <div className="container px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link to="/entreprises" className="hover:text-primary transition-colors">Entreprises</Link>
            <span>/</span>
            <span className="text-foreground">{company.name}</span>
          </div>
        </div>
      </section>

      {/* Company Header */}
      <section className="relative">
        {/* Banner */}
        <div className="h-48 md:h-64 bg-gradient-to-r from-primary/20 to-secondary/20 overflow-hidden">
          <img
            src={company.banner}
            alt={`Bannière ${company.name}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        {/* Company Info Overlay */}
        <div className="container px-4">
          <div className="relative -mt-20 md:-mt-24">
            <Card className="bg-white/95 backdrop-blur-sm shadow-elegant">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  {/* Logo */}
                  <div className="relative">
                    <img
                      src={company.logo}
                      alt={`Logo ${company.name}`}
                      className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                    {company.isPremium && (
                      <Badge className="absolute -top-2 -right-2 bg-gradient-secondary">
                        Premium
                      </Badge>
                    )}
                  </div>

                  {/* Company Details */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                          {company.name}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Depuis {company.establishedYear}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="h-4 w-4" />
                            <span>{company.employeeCount} employés</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <BarChart3 className="h-4 w-4" />
                            <span>{company.stats.totalViews.toLocaleString()} vues</span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {company.sectors.map((sector) => (
                            <Badge key={sector} variant="outline">
                              {sector}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Contact Buttons */}
                      <div className="flex flex-col space-y-2">
                        <Button
                          onClick={handleWhatsAppContact}
                          className="bg-green-500 hover:bg-green-600 text-white"
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          WhatsApp
                        </Button>
                        <Button variant="outline" asChild>
                          <a href={company.contact.website} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Site Web
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Tabs defaultValue="catalogs" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="catalogs">
                      Catalogues ({company.stats.activeCatalogs})
                    </TabsTrigger>
                    <TabsTrigger value="about">À propos</TabsTrigger>
                    <TabsTrigger value="locations">Magasins</TabsTrigger>
                    <TabsTrigger value="archives">Archives</TabsTrigger>
                  </TabsList>

                  {/* Active Catalogs */}
                  <TabsContent value="catalogs" className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-4">
                        Catalogues Actifs
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activeCatalogs.map((catalog) => (
                          <CatalogCard key={catalog.id} {...catalog} />
                        ))}
                      </div>
                    </div>
                  </TabsContent>

                  {/* About Tab */}
                  <TabsContent value="about" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>À propos de {company.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {company.description}
                        </p>

                        <Separator />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold mb-3">Nos valeurs</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>• Rendre le sport accessible à tous</li>
                              <li>• Qualité et durabilité des produits</li>
                              <li>• Service client exemplaire</li>
                              <li>• Innovation constante</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Nos services</h4>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>• Conseil sportif personnalisé</li>
                              <li>• Service après-vente</li>
                              <li>• Livraison à domicile</li>
                              <li>• Ateliers et formations</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Locations Tab */}
                  <TabsContent value="locations" className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Nos Magasins</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {company.locations.map((location, index) => (
                          <div key={index} className="flex items-start space-x-3 p-4 bg-muted/50 rounded-lg">
                            <MapPin className="h-5 w-5 text-primary mt-0.5" />
                            <div>
                              <h4 className="font-medium text-foreground">{location}</h4>
                              <p className="text-sm text-muted-foreground">
                                Ouvert du lundi au samedi, 8h-19h
                              </p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </TabsContent>

                  {/* Archives Tab */}
                  <TabsContent value="archives" className="space-y-6">
                    <div>
                      <h2 className="text-2xl font-bold text-foreground mb-4">
                        Catalogues Expirés
                      </h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {expiredCatalogs.map((catalog) => (
                          <div key={catalog.id} className="opacity-60">
                            <CatalogCard {...catalog} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Contact Info */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="h-5 w-5 mr-2" />
                      Informations de Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>{company.contact.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <span className="break-all">{company.contact.email}</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <MapPin className="h-4 w-4 text-primary mt-0.5" />
                        <span>{company.contact.address}</span>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <Button 
                        onClick={handleWhatsAppContact}
                        className="w-full bg-green-500 hover:bg-green-600 text-white"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contacter via WhatsApp
                      </Button>
                      
                      <Button variant="outline" className="w-full" asChild>
                        <a href={`tel:${company.contact.phone}`}>
                          <Phone className="h-4 w-4 mr-2" />
                          Appeler
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Statistics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="h-5 w-5 mr-2" />
                      Statistiques
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">
                          {company.stats.totalCatalogs}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Catalogues total
                        </div>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-secondary">
                          {company.stats.activeCatalogs}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Actifs
                        </div>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-primary">
                          {(company.stats.totalViews / 1000).toFixed(1)}K
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Vues totales
                        </div>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-secondary">
                          {(company.stats.monthlyViews / 1000).toFixed(1)}K
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Ce mois
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Actions Rapides</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Star className="h-4 w-4 mr-2" />
                      Suivre cette entreprise
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Partager le profil
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EntreprisePage;