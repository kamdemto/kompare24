import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Eye, ExternalLink, Clock, MapPin, Phone, Mail, MessageCircle, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import catalogSport from '@/assets/catalog-sport-9-16.jpg';

const CatalogDetailPage = () => {
  const { id } = useParams();

  // Mock data - En production, ces données viendraient d'une API
  const catalog = {
    id: '2',
    title: 'Soldes d\'hiver exceptionnels',
    description: 'Découvrez notre collection hiver avec des réductions allant jusqu\'à 70% sur une sélection d\'articles de sport et de mode. Équipements de ski, vêtements chauds, chaussures de sport et bien plus encore.',
    company: 'Decathlon',
    validFrom: '15/12/2024',
    validUntil: '15/01/2025',
    imageUrl: catalogSport,
    viewCount: 890,
    isNew: false,
    isPremium: false,
    category: 'Sport & Mode',
    aspects: {
      hasPhysicalCatalog: true,
      hasOnlineVersion: true,
      discountRange: '30-70%'
    }
  };

  const company = {
    name: 'Decathlon',
    description: 'Decathlon Cameroun, votre partenaire sport depuis plus de 10 ans. Retrouvez tous vos équipements sportifs au meilleur prix.',
    logo: '/api/placeholder/120/120',
    banner: '/api/placeholder/800/200',
    location: 'Douala, Bonanjo - Face au Commissariat Central',
    phone: '+237 695 123 456',
    email: 'contact@decathlon-cameroun.com',
    whatsapp: '+237695123456',
    website: 'https://decathlon-cameroun.com',
    sectors: ['Sport & Mode', 'Équipements outdoor'],
    established: '2014'
  };

  const relatedCatalogs = [
    {
      id: '3',
      title: 'Collection Printemps-Été',
      company: 'Decathlon',
      validUntil: '20/03/2025',
      imageUrl: catalogSport,
      viewCount: 456
    },
    {
      id: '4',
      title: 'Équipements fitness',
      company: 'Decathlon',
      validUntil: '28/02/2025',
      imageUrl: catalogSport,
      viewCount: 234
    }
  ];

  const handleWhatsAppOrder = () => {
    const message = `Bonjour ! Je suis intéressé(e) par votre catalogue "${catalog.title}". Pouvez-vous me donner plus d'informations ?`;
    const whatsappUrl = `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: catalog.title,
        text: `Découvrez le catalogue "${catalog.title}" de ${catalog.company} sur Kompar24`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      // Ici on pourrait ajouter un toast de confirmation
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Navigation */}
      <section className="bg-muted/50 py-4">
        <div className="container px-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link to={`/categories/${catalog.category.toLowerCase().replace(' & ', '-')}`} className="hover:text-primary transition-colors">
              {catalog.category}
            </Link>
            <span>/</span>
            <span className="text-foreground">{catalog.title}</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-6">
              <Link to={`/categories/${catalog.category.toLowerCase().replace(' & ', '-')}`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour aux catalogues
              </Link>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Catalog Image and Details */}
              <div className="lg:col-span-2 space-y-6">
                {/* Catalog Header */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                        {catalog.title}
                      </h1>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <span className="font-medium text-primary">{catalog.company}</span>
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{catalog.viewCount} vues</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button variant="outline" size="icon" onClick={handleShare}>
                        <Share2 className="h-4 w-4" />
                      </Button>
                      {catalog.isPremium && (
                        <Badge className="bg-gradient-secondary">Premium</Badge>
                      )}
                      {catalog.isNew && (
                        <Badge className="bg-green-500">Nouveau</Badge>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {catalog.description}
                  </p>

                  {/* Validity Info */}
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4">
                    <div className="flex items-center space-x-2 text-primary">
                      <Clock className="h-5 w-5" />
                      <span className="font-semibold">
                        Valable du {catalog.validFrom} au {catalog.validUntil}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Catalog Image */}
                <Card>
                  <CardContent className="p-0">
                    <div className="aspect-[9/16] max-w-md mx-auto bg-muted rounded-lg overflow-hidden">
                      <img
                        src={catalog.imageUrl}
                        alt={catalog.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={handleWhatsAppOrder}
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Passer commande via WhatsApp
                  </Button>
                  
                  <Button variant="outline" className="flex-1">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Voir le PDF complet
                  </Button>
                </div>
              </div>

              {/* Company Info Sidebar */}
              <div className="space-y-6">
                {/* Company Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-bold">{company.name}</h3>
                        <p className="text-sm text-muted-foreground">Depuis {company.established}</p>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      {company.description}
                    </p>

                    <Separator />

                    {/* Contact Info */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{company.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Phone className="h-4 w-4 text-primary" />
                        <span>{company.phone}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm">
                        <Mail className="h-4 w-4 text-primary" />
                        <span>{company.email}</span>
                      </div>
                    </div>

                    <Separator />

                    {/* Sectors */}
                    <div>
                      <h4 className="font-semibold mb-2">Secteurs d'activité</h4>
                      <div className="flex flex-wrap gap-2">
                        {company.sectors.map((sector) => (
                          <Badge key={sector} variant="outline" className="text-xs">
                            {sector}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2">
                      <Button asChild className="w-full" variant="outline">
                        <Link to={`/entreprise/${company.name.toLowerCase()}`}>
                          Voir tous les catalogues
                        </Link>
                      </Button>
                      
                      <Button 
                        onClick={handleWhatsAppOrder}
                        className="w-full bg-green-500 hover:bg-green-600 text-white"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contacter via WhatsApp
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Catalogs */}
                <Card>
                  <CardHeader>
                    <CardTitle>Autres catalogues de {company.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {relatedCatalogs.map((relatedCatalog) => (
                      <Link
                        key={relatedCatalog.id}
                        to={`/catalogue/${relatedCatalog.id}`}
                        className="block group"
                      >
                        <div className="flex space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                          <img
                            src={relatedCatalog.imageUrl}
                            alt={relatedCatalog.title}
                            className="w-16 h-20 object-cover rounded"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                              {relatedCatalog.title}
                            </h4>
                            <div className="flex items-center space-x-2 mt-1 text-xs text-muted-foreground">
                              <Calendar className="h-3 w-3" />
                              <span>Expire le {relatedCatalog.validUntil}</span>
                            </div>
                            <div className="flex items-center space-x-1 mt-1 text-xs text-muted-foreground">
                              <Eye className="h-3 w-3" />
                              <span>{relatedCatalog.viewCount} vues</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
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

export default CatalogDetailPage;