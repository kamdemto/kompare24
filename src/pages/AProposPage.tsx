import React from 'react';
import { Users, Target, Award, Globe, Calendar, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const AProposPage = () => {
  const stats = [
    { number: '500+', label: 'Catalogues disponibles', icon: Award },
    { number: '100+', label: 'Entreprises partenaires', icon: Users },
    { number: '4', label: 'Secteurs d\'activité', icon: Target },
    { number: '50K+', label: 'Visiteurs mensuels', icon: Globe }
  ];

  const values = [
    {
      title: 'Simplicité',
      description: 'Une interface intuitive pour trouver rapidement ce que vous cherchez',
      icon: Target
    },
    {
      title: 'Actualité',
      description: 'Des catalogues toujours à jour avec les dernières promotions',
      icon: Calendar
    },
    {
      title: 'Proximité',
      description: 'Un service local qui met en avant les entreprises camerounaises',
      icon: MapPin
    },
    {
      title: 'Excellence',
      description: 'Un engagement qualité avec notre espace premium Sassayé',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kompar24 en bref
            </h1>
            <p className="text-xl text-white/90 mb-8">
              La plateforme de référence pour découvrir les meilleures promotions au Cameroun
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Notre Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Kompar24 révolutionne la façon dont les Camerounais découvrent et accèdent aux promotions. 
                  Notre plateforme centralise tous les catalogues promotionnels des entreprises locales, 
                  permettant aux consommateurs de faire des économies importantes tout en soutenant 
                  l'économie locale.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Nous croyons que chaque promotion mérite d'être découverte et que chaque entreprise 
                  mérite une visibilité optimale. C'est pourquoi nous avons créé Kompar24 : 
                  pour connecter efficacement consommateurs et entreprises.
                </p>
                <Button asChild className="bg-gradient-secondary hover:bg-secondary/90">
                  <Link to="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Nous contacter
                  </Link>
                </Button>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300">
                        <CardContent className="p-6">
                          <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                          <div className="text-2xl font-bold text-foreground mb-1">
                            {stat.number}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {stat.label}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Nos Valeurs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Notre Vision
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Devenir la plateforme de référence en Afrique centrale pour la découverte 
              et la consultation de catalogues promotionnels. Nous aspirons à créer un 
              écosystème numérique où chaque entreprise, quelle que soit sa taille, 
              peut atteindre sa clientèle cible efficacement.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">2024</h3>
                <p className="text-muted-foreground">Lancement au Cameroun avec 4 secteurs d'activité</p>
              </div>
              <div className="bg-gradient-to-br from-secondary/10 to-transparent rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">2025</h3>
                <p className="text-muted-foreground">Expansion vers d'autres villes et nouveaux secteurs</p>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">2026</h3>
                <p className="text-muted-foreground">Déploiement dans toute l'Afrique centrale</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-secondary text-secondary-foreground">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Une équipe passionnée
            </h2>
            <p className="text-xl text-secondary-foreground/90 mb-8">
              Kompar24 est né de la passion d'une équipe dédiée au service des consommateurs 
              et des entreprises camerounaises. Nous combinons expertise technologique et 
              connaissance du marché local pour offrir la meilleure expérience possible.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link to="/contact">
                  <Phone className="w-4 h-4 mr-2" />
                  Nous rencontrer
                </Link>
              </Button>
              
              <Button asChild variant="outline" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-white/10">
                <Link to="/devenir-annonceur">
                  Rejoindre l'aventure
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AProposPage;