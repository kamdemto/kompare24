import React from 'react';
import { Check, Star, Users, BarChart3, Zap, Crown, Shield, Briefcase, ArrowRight, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const DevenirAnnonceurPage = () => {
  const freeFeatures = [
    'Publication de catalogues illimitée',
    'Visibilité dans votre secteur d\'activité',
    'Statistiques de base (vues, clics)',
    'Durée de promotion jusqu\'à 30 jours',
    'Support client standard',
    'Profil entreprise complet'
  ];

  const premiumFeatures = [
    'Toutes les fonctionnalités gratuites',
    'Mise en avant dans l\'espace Sassayé',
    'Visibilité premium sur la page d\'accueil',
    'Statistiques avancées et analytics',
    'Durée de promotion jusqu\'à 90 jours',
    'Support client prioritaire',
    'Badge "Premium" sur vos catalogues',
    'Promotion sur nos réseaux sociaux'
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Audience Qualifiée',
      description: 'Atteignez des milliers de clients potentiels recherchant activement des promotions'
    },
    {
      icon: BarChart3,
      title: 'Analytics Détaillées',
      description: 'Suivez les performances de vos catalogues avec des statistiques précises'
    },
    {
      icon: Zap,
      title: 'Publication Rapide',
      description: 'Publiez vos catalogues en quelques minutes grâce à notre interface intuitive'
    },
    {
      icon: Shield,
      title: 'Sécurité Garantie',
      description: 'Vos données et catalogues sont protégés par nos systèmes sécurisés'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Création de compte',
      description: 'Inscrivez-vous en choisissant l\'offre qui vous convient'
    },
    {
      number: 2,
      title: 'Configuration du profil',
      description: 'Complétez les informations de votre entreprise'
    },
    {
      number: 3,
      title: 'Publication de catalogues',
      description: 'Uploadez vos catalogues et définissez leur durée de validité'
    },
    {
      number: 4,
      title: 'Suivi des performances',
      description: 'Analysez l\'impact de vos promotions avec nos outils'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Devenez Annonceur
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Boostez votre visibilité et augmentez vos ventes grâce à Kompar24
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-white text-primary hover:bg-white/90">
                <a href="#offres">
                  <Gift className="w-4 h-4 mr-2" />
                  Voir les offres
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white/20 text-white hover:bg-white/10">
                <a href="#contact">
                  Nous contacter
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Pourquoi choisir Kompar24 ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="offres" className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              Nos Offres
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choisissez l'offre qui correspond le mieux à vos besoins et commencez à promouvoir vos catalogues dès aujourd'hui
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Free Plan */}
              <Card className="relative hover:shadow-elegant transition-all duration-300">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-green-500 text-white px-4 py-1">
                    Gratuit
                  </Badge>
                </div>
                <CardHeader className="text-center pb-4 pt-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Offre Gratuite</CardTitle>
                  <div className="text-3xl font-bold text-foreground mt-2">
                    0 <span className="text-lg font-normal text-muted-foreground">XAF/mois</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {freeFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Commencer Gratuitement
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Aucune carte de crédit requise
                  </p>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="relative hover:shadow-elegant transition-all duration-300 border-2 border-secondary">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-secondary text-secondary-foreground px-4 py-1">
                    Premium Sassayé
                  </Badge>
                </div>
                <CardHeader className="text-center pb-4 pt-8">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Crown className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Offre Premium</CardTitle>
                  <div className="text-3xl font-bold text-foreground mt-2">
                    5,000 <span className="text-lg font-normal text-muted-foreground">XAF/mois</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {premiumFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="w-full bg-gradient-secondary hover:bg-secondary/90">
                    <Crown className="w-4 h-4 mr-2" />
                    Devenir Premium
                  </Button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Facturé mensuellement - Résiliable à tout moment
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Comment ça marche ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <Card key={step.number} className="text-center hover:shadow-elegant transition-all duration-300 relative">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </CardContent>
                  
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

      {/* Success Stories */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nos Partenaires Témoignent
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Découvrez comment Kompar24 a aidé nos partenaires à augmenter leur visibilité et leurs ventes
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { company: 'Casino Douala', growth: '+45%', metric: 'de visibilité' },
                { company: 'Decathlon Cameroun', growth: '+60%', metric: 'de trafic' },
                { company: 'Toyota Yaoundé', growth: '+35%', metric: 'de conversions' }
              ].map((story, index) => (
                <Card key={index} className="hover:shadow-elegant transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {story.growth}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {story.metric}
                    </div>
                    <div className="font-semibold text-foreground">
                      {story.company}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary text-secondary-foreground">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Prêt à booster votre business ?
            </h2>
            <p className="text-xl text-secondary-foreground/90 mb-8">
              Rejoignez dès maintenant les entreprises qui font confiance à Kompar24
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Star className="w-4 h-4 mr-2" />
                Commencer Maintenant
              </Button>
              
              <Button asChild variant="outline" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-white/10">
                <Link to="/contact">
                  Une question ? Contactez-nous
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevenirAnnonceurPage;