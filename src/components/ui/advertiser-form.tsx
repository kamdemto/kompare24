import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Textarea } from './textarea';
import { Switch } from './switch';
import { Badge } from './badge';
import { Building2, Mail, Phone, MapPin, Crown, Check } from 'lucide-react';

interface AdvertiserFormProps {
  onSubmit: (data: AdvertiserFormData) => void;
  isAdmin?: boolean;
  title?: string;
}

export interface AdvertiserFormData {
  companyName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  category: string;
  description: string;
  website?: string;
  premium?: boolean;
  contactPerson: string;
}

const categories = [
  'Supermarchés',
  'Sport & Mode', 
  'Automobile',
  'Informatique & Tech',
  'Station service',
  'Aménagement',
  'Restaurants & Alimentation',
  'Santé & Beauté',
  'Électroménager',
  'Autres'
];

export const AdvertiserForm: React.FC<AdvertiserFormProps> = ({ 
  onSubmit, 
  isAdmin = false,
  title = "Devenir Annonceur"
}) => {
  const [formData, setFormData] = useState<AdvertiserFormData>({
    companyName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    category: '',
    description: '',
    website: '',
    premium: false,
    contactPerson: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      // Reset form on success
      setFormData({
        companyName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        category: '',
        description: '',
        website: '',
        premium: false,
        contactPerson: ''
      });
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof AdvertiserFormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building2 className="h-6 w-6 text-primary" />
          {title}
        </CardTitle>
        {!isAdmin && (
          <p className="text-muted-foreground">
            Rejoignez Kompar24 et commencez à promouvoir vos catalogues dès aujourd'hui
          </p>
        )}
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Informations de l'entreprise
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="companyName">Nom de l'entreprise *</Label>
                <Input
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => updateField('companyName', e.target.value)}
                  placeholder="Ex: SuperU Sassaye"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="contactPerson">Personne de contact *</Label>
                <Input
                  id="contactPerson"
                  value={formData.contactPerson}
                  onChange={(e) => updateField('contactPerson', e.target.value)}
                  placeholder="Nom du responsable"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="category">Catégorie d'activité *</Label>
              <Select value={formData.category} onValueChange={(value) => updateField('category', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez votre secteur d'activité" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description">Description de l'entreprise</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => updateField('description', e.target.value)}
                placeholder="Décrivez brièvement votre entreprise et vos activités..."
                rows={3}
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Informations de contact
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email">Email professionnel *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="contact@votre-entreprise.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Téléphone *</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  placeholder="+237 6XX XXX XXX"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="website">Site web (optionnel)</Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => updateField('website', e.target.value)}
                placeholder="https://www.votre-site.com"
              />
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Localisation
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="city">Ville *</Label>
                <Select value={formData.city} onValueChange={(value) => updateField('city', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez votre ville" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="douala">Douala</SelectItem>
                    <SelectItem value="yaounde">Yaoundé</SelectItem>
                    <SelectItem value="bafoussam">Bafoussam</SelectItem>
                    <SelectItem value="bamenda">Bamenda</SelectItem>
                    <SelectItem value="garoua">Garoua</SelectItem>
                    <SelectItem value="maroua">Maroua</SelectItem>
                    <SelectItem value="ngaoundere">Ngaoundéré</SelectItem>
                    <SelectItem value="autres">Autres</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="address">Adresse complète *</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => updateField('address', e.target.value)}
                  placeholder="Quartier, rue, numéro"
                  required
                />
              </div>
            </div>
          </div>

          {/* Premium Option (Admin only) */}
          {isAdmin && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Crown className="h-5 w-5" />
                Options d'abonnement
              </h3>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Label htmlFor="premium">Compte Premium</Label>
                    <Badge variant="secondary">
                      <Crown className="h-3 w-3 mr-1" />
                      Premium
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Accès aux fonctionnalités premium et visibilité prioritaire
                  </p>
                </div>
                <Switch
                  id="premium"
                  checked={formData.premium}
                  onCheckedChange={(checked) => updateField('premium', checked)}
                />
              </div>
            </div>
          )}

          {/* Terms and Submit */}
          <div className="space-y-4">
            {!isAdmin && (
              <div className="bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-500" />
                  Ce que vous obtenez
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Publication de catalogues illimitée</li>
                  <li>• Visibilité dans votre secteur d'activité</li>
                  <li>• Statistiques de performance</li>
                  <li>• Support client dédié</li>
                </ul>
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Création en cours...' : (isAdmin ? 'Créer le compte annonceur' : 'Créer mon compte annonceur')}
            </Button>
            
            {!isAdmin && (
              <p className="text-xs text-center text-muted-foreground">
                En créant votre compte, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
              </p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
};