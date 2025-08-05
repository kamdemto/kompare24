import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { LogIn, Briefcase } from 'lucide-react';

const ConnexionPage = () => {
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email') as string;
    
    // Simple MVP logic to determine user type based on email
    if (email?.includes('admin@kompar24.com')) {
      // Redirect to admin page
      window.location.href = '/admin';
    } else {
      // Redirect to advertiser dashboard
      window.location.href = '/dashboard';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="container max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Connexion Annonceur</h1>
          <p className="text-muted-foreground">Accédez à votre espace entreprise</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <LogIn className="h-5 w-5" />
              <span>Se connecter</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="votre-email@entreprise.com"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              
              <div className="text-xs text-muted-foreground p-3 bg-muted/50 rounded-lg">
                <p><strong>Comptes de test :</strong></p>
                <p>Admin: admin@kompar24.com</p>
                <p>Annonceur: contact@superu-sassaye.com</p>
              </div>

              <Button type="submit" className="w-full bg-gradient-primary">
                <LogIn className="h-4 w-4 mr-2" />
                Se connecter
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Pas encore d'espace annonceur ?
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/devenir-annonceur">
                  <Briefcase className="h-4 w-4 mr-2" />
                  Devenir annonceur
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConnexionPage;