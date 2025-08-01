import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+237 694 846 159',
      subtitle: 'Du lundi au vendredi, 8h - 18h'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@kompar24.com',
      subtitle: 'Réponse sous 24h'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Douala, Cameroun',
      subtitle: 'Quartier Bonanjo'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun - Ven : 8h - 18h',
      subtitle: 'Sam : 9h - 14h'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-nous
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Une question ? Un projet ? Notre équipe est là pour vous accompagner
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-elegant transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {info.title}
                    </h3>
                    <p className="text-foreground font-medium mb-1">
                      {info.content}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.subtitle}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Contact Form & Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Send className="w-5 h-5 mr-2" />
                    Envoyez-nous un message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Prénom *
                      </label>
                      <Input placeholder="Votre prénom" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nom *
                      </label>
                      <Input placeholder="Votre nom" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input type="email" placeholder="votre.email@exemple.com" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Téléphone
                    </label>
                    <Input placeholder="+237 694 846 159" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Sujet *
                    </label>
                    <Input placeholder="Objet de votre message" />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      placeholder="Décrivez votre demande en détail..."
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-secondary hover:bg-secondary/90">
                    <Send className="w-4 h-4 mr-2" />
                    Envoyer le message
                  </Button>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Support Client
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Notre équipe de support est disponible pour répondre à toutes vos questions 
                      concernant l'utilisation de Kompar24.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-primary" />
                        <span className="text-sm">Support téléphonique : Lun-Ven 8h-18h</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-primary" />
                        <span className="text-sm">Réponse email sous 24h</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Questions Fréquentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          Comment publier mon catalogue ?
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Créez un compte annonceur et suivez notre guide de publication simple et rapide.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          Les catalogues sont-ils gratuits ?
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Oui, la consultation est 100% gratuite pour tous les utilisateurs.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">
                          Qu'est-ce que Sassayé ?
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Sassayé est notre espace premium pour les offres exclusives des meilleures enseignes.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-3">
                      Vous êtes une entreprise ?
                    </h3>
                    <p className="text-muted-foreground mb-4 text-sm">
                      Découvrez comment Kompar24 peut booster votre visibilité et 
                      augmenter vos ventes grâce à nos solutions d'affichage promotionnel.
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <a href="/devenir-annonceur">
                        Devenir partenaire
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-8">
              Notre Localisation
            </h2>
            
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Douala, Cameroun
              </h3>
              <p className="text-muted-foreground mb-4">
                Quartier Bonanjo - Au cœur du centre économique
              </p>
              <p className="text-sm text-muted-foreground">
                Carte interactive bientôt disponible
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;