import React from 'react';
import { CheckCircle, Users, Search, Zap, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CommentCaMarchePage = () => {
  const steps = [
    {
      number: 1,
      title: 'Explorez les catégories',
      description: 'Parcourez nos 4 secteurs : Supermarchés, Sport & Mode, Automobile et Sassayé (premium)',
      icon: Search
    },
    {
      number: 2,
      title: 'Trouvez vos promotions',
      description: 'Utilisez notre moteur de recherche pour découvrir les meilleures offres près de chez vous',
      icon: Zap
    },
    {
      number: 3,
      title: 'Consultez les catalogues',
      description: 'Visualisez les catalogues en format PDF ou images avec toutes les informations détaillées',
      icon: CheckCircle
    },
    {
      number: 4,
      title: 'Contactez l\'entreprise',
      description: 'Cliquez sur "Consulter" pour accéder aux contacts et passer commande via WhatsApp',
      icon: Users
    }
  ];

  const features = [
    {
      title: 'Recherche avancée',
      description: 'Filtrez par catégorie, localisation et entreprise pour trouver exactement ce que vous cherchez'
    },
    {
      title: 'Catalogues actualisés',
      description: 'Tous nos catalogues sont vérifiés et mis à jour avec leurs dates de validité'
    },
    {
      title: 'Contact direct',
      description: 'Contactez directement les entreprises via WhatsApp avec le catalogue de votre choix'
    },
    {
      title: 'Espace Sassayé',
      description: 'Accédez aux offres exclusives premium des meilleures enseignes'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comment ça marche ?
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Découvrez comment utiliser Kompar24 pour trouver les meilleures promotions en quelques clics
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              4 étapes simples
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <Card key={step.number} className="relative group hover:shadow-elegant transition-all duration-300">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto mb-4 relative">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.number}
                      </div>
                      <div className="absolute -inset-2 bg-gradient-secondary rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <step.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                  
                  {/* Connector Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Nos fonctionnalités
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <CheckCircle className="w-8 h-8 text-secondary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Voir Kompar24 en action
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Regardez notre vidéo de démonstration pour découvrir toutes les fonctionnalités
            </p>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <ArrowRight className="w-8 h-8 text-white ml-1" />
                  </div>
                  <p className="text-muted-foreground">Vidéo de démonstration bientôt disponible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary text-secondary-foreground">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à découvrir les meilleures promotions ?
            </h2>
            <p className="text-xl text-secondary-foreground/90 mb-8">
              Commencez dès maintenant à explorer nos catalogues promotionnels
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/">
                  Découvrir les catalogues
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-white/10">
                <Link to="/devenir-annonceur">
                  <Star className="w-4 h-4 mr-2" />
                  Devenir annonceur
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommentCaMarchePage;