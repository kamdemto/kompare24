import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Badge } from './badge';
import { User, UserPlus } from 'lucide-react';

interface SystemUserFormProps {
  onSubmit: (data: SystemUserFormData) => void;
  title?: string;
}

export interface SystemUserFormData {
  name: string;
  email: string;
  type: 'admin' | 'moderateur' | 'support';
  permissions: string[];
}

const userTypes = [
  { value: 'admin', label: 'Administrateur', description: 'Accès complet au système' },
  { value: 'moderateur', label: 'Modérateur', description: 'Gestion du contenu et des utilisateurs' },
  { value: 'support', label: 'Support client', description: 'Support et assistance aux utilisateurs' }
];

const availablePermissions = [
  'manage_users',
  'manage_catalogs', 
  'manage_categories',
  'view_analytics',
  'moderate_content',
  'support_access'
];

const permissionLabels: Record<string, string> = {
  manage_users: 'Gestion des utilisateurs',
  manage_catalogs: 'Gestion des catalogues',
  manage_categories: 'Gestion des catégories',
  view_analytics: 'Accès aux statistiques',
  moderate_content: 'Modération du contenu',
  support_access: 'Accès support client'
};

export const SystemUserForm: React.FC<SystemUserFormProps> = ({ 
  onSubmit,
  title = "Ajouter un utilisateur système"
}) => {
  const [formData, setFormData] = useState<SystemUserFormData>({
    name: '',
    email: '',
    type: 'support',
    permissions: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await onSubmit(formData);
      // Reset form on success
      setFormData({
        name: '',
        email: '',
        type: 'support',
        permissions: []
      });
    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: keyof SystemUserFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const togglePermission = (permission: string) => {
    setFormData(prev => ({
      ...prev,
      permissions: prev.permissions.includes(permission)
        ? prev.permissions.filter(p => p !== permission)
        : [...prev.permissions, permission]
    }));
  };

  const getDefaultPermissions = (userType: string) => {
    const defaultPerms: Record<string, string[]> = {
      admin: availablePermissions,
      moderateur: ['manage_users', 'manage_catalogs', 'moderate_content', 'view_analytics'],
      support: ['support_access', 'view_analytics']
    };
    
    updateField('permissions', defaultPerms[userType] || []);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <UserPlus className="h-6 w-6 text-primary" />
          {title}
        </CardTitle>
        <p className="text-muted-foreground">
          Créer un nouveau compte utilisateur système avec des permissions spécifiques
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* User Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-5 w-5" />
              Informations utilisateur
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="user-name">Nom complet *</Label>
                <Input
                  id="user-name"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  placeholder="Ex: Jean Dupont"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="user-email">Email *</Label>
                <Input
                  id="user-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  placeholder="jean.dupont@kompar24.com"
                  required
                />
              </div>
            </div>

            <div>
              <Label htmlFor="user-type">Type d'utilisateur *</Label>
              <Select 
                value={formData.type} 
                onValueChange={(value: any) => {
                  updateField('type', value);
                  getDefaultPermissions(value);
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez le type d'utilisateur" />
                </SelectTrigger>
                <SelectContent>
                  {userTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      <div>
                        <div className="font-medium">{type.label}</div>
                        <div className="text-sm text-muted-foreground">{type.description}</div>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Permissions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Permissions</h3>
            <p className="text-sm text-muted-foreground">
              Sélectionnez les permissions à accorder à cet utilisateur
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {availablePermissions.map((permission) => (
                <div 
                  key={permission}
                  className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                    formData.permissions.includes(permission) 
                      ? 'border-primary bg-primary/10' 
                      : 'border-muted hover:border-primary/50'
                  }`}
                  onClick={() => togglePermission(permission)}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      {permissionLabels[permission]}
                    </span>
                    {formData.permissions.includes(permission) && (
                      <Badge variant="default" className="text-xs">
                        Activé
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Résumé du compte</h4>
            <div className="space-y-1 text-sm">
              <p><span className="font-medium">Type:</span> {userTypes.find(t => t.value === formData.type)?.label}</p>
              <p><span className="font-medium">Permissions:</span> {formData.permissions.length} sélectionnée(s)</p>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting || !formData.name || !formData.email}
          >
            {isSubmitting ? 'Création en cours...' : 'Créer le compte utilisateur'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};