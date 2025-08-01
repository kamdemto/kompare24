import React from 'react';
import { Search, MapPin, Filter } from 'lucide-react';
import { Button } from './button';
import { Input } from './input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/10">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-10"></div>
      </div>

      <div className="relative z-10 container px-4 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hero Content */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Trouvez les meilleures 
              <span className="text-secondary block md:inline md:ml-3">
                promotions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Découvrez tous les catalogues promotionnels de vos enseignes préférées en un seul endroit
            </p>
          </div>

          {/* Search Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Rechercher par mots-clés..."
                  className="pl-10 h-12 text-foreground bg-white border-2 border-transparent focus:border-secondary"
                />
              </div>

              {/* Category Filter */}
              <Select>
                <SelectTrigger className="h-12 w-full lg:w-48 bg-white border-2 border-transparent focus:border-secondary text-foreground">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  <SelectItem value="supermarches">Supermarchés</SelectItem>
                  <SelectItem value="sport-mode">Sport & Mode</SelectItem>
                  <SelectItem value="automobile">Automobile</SelectItem>
                  <SelectItem value="amenagement">Aménagement</SelectItem>
                  <SelectItem value="sassaye">Sassayé</SelectItem>
                </SelectContent>
              </Select>

              {/* Country Filter */}
              <Select>
                <SelectTrigger className="h-12 w-full lg:w-48 bg-white border-2 border-transparent focus:border-secondary text-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Pays" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tous les pays</SelectItem>
                  <SelectItem value="cameroun">Cameroun</SelectItem>
                  <SelectItem value="france">France</SelectItem>
                  <SelectItem value="nigeria">Nigeria</SelectItem>
                  <SelectItem value="allemagne">Allemagne</SelectItem>
                </SelectContent>
              </Select>

              {/* Location Filter */}
              <Select>
                <SelectTrigger className="h-12 w-full lg:w-48 bg-white border-2 border-transparent focus:border-secondary text-foreground">
                  <MapPin className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Ville" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les villes</SelectItem>
                  <SelectItem value="douala">Douala</SelectItem>
                  <SelectItem value="yaounde">Yaoundé</SelectItem>
                  <SelectItem value="bafoussam">Bafoussam</SelectItem>
                  <SelectItem value="bamenda">Bamenda</SelectItem>
                </SelectContent>
              </Select>

              {/* Search Button */}
              <Button 
                className="h-12 px-8 bg-gradient-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold whitespace-nowrap"
              >
                <Search className="h-5 w-5 mr-2" />
                Rechercher
              </Button>
            </div>
          </div>

          {/* Stats or Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">500+</div>
              <div className="text-white/80">Catalogues disponibles</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">100+</div>
              <div className="text-white/80">Entreprises partenaires</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-secondary">4</div>
              <div className="text-white/80">Secteurs d'activité</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;