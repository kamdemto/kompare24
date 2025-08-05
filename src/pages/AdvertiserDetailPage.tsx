import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Label } from '../components/ui/label';
import { ArrowLeft, Store, BarChart3, BookOpen, Crown, Mail, Calendar, TrendingUp, Eye } from 'lucide-react';

// Mock data - same as AdminPage
const mockUsers = [
  { id: 1, name: 'SuperU Sassaye', email: 'contact@superu-sassaye.com', type: 'annonceur', status: 'active', premium: false, catalogs: 3 },
  { id: 2, name: 'Ink Computer', email: 'info@inkcomputer.com', type: 'annonceur', status: 'active', premium: true, catalogs: 2 },
  { id: 3, name: 'Total Energie', email: 'contact@totalenergie.com', type: 'annonceur', status: 'inactive', premium: false, catalogs: 1 },
];

const mockCatalogs = [
  { id: 1, title: 'Catalogue SuperU - Février 2024', advertiser: 'SuperU Sassaye', category: 'Supermarchés', status: 'active', views: 1250 },
  { id: 2, title: 'Promos Informatique Ink Computer', advertiser: 'Ink Computer', category: 'Informatique & Tech', status: 'active', views: 890 },
  { id: 3, title: 'Catalogue Total Station', advertiser: 'Total Energie', category: 'Station service', status: 'inactive', views: 456 },
];

const getAdvertiserDetails = (userId: number) => {
  const user = mockUsers.find(u => u.id === userId);
  if (!user || user.type !== 'annonceur') return null;

  const userCatalogs = mockCatalogs.filter(c => c.advertiser === user.name);
  const totalViews = userCatalogs.reduce((sum, cat) => sum + cat.views, 0);
  
  return {
    ...user,
    catalogs: userCatalogs,
    stats: {
      totalViews,
      avgViews: userCatalogs.length > 0 ? Math.round(totalViews / userCatalogs.length) : 0,
      activePromos: userCatalogs.filter(c => c.status === 'active').length,
      lastActivity: '2024-01-15',
      clickThroughRate: '3.2%',
      conversionRate: '1.8%',
      monthlyGrowth: '+12%',
      totalClicks: 2840,
      registeredSince: '2023-06-15'
    }
  };
};

const AdvertiserDetailPage = () => {
  const { id } = useParams();
  const advertiserDetails = getAdvertiserDetails(Number(id));

  if (!advertiserDetails) {
    return (
      <div className="min-h-screen bg-gradient-subtle p-6 flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Annonceur introuvable</h2>
            <p className="text-muted-foreground mb-4">L'annonceur demandé n'existe pas ou n'est pas accessible.</p>
            <Button asChild>
              <Link to="/admin">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour à l'administration
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button asChild variant="outline" className="mb-4">
            <Link to="/admin">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour à l'administration
            </Link>
          </Button>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center gap-3">
                <Store className="h-8 w-8 text-primary" />
                {advertiserDetails.name}
                {advertiserDetails.premium && <Crown className="h-6 w-6 text-yellow-500" />}
              </h1>
              <div className="flex items-center gap-4">
                <Badge variant={advertiserDetails.status === 'active' ? 'default' : 'destructive'}>
                  {advertiserDetails.status}
                </Badge>
                {advertiserDetails.premium && (
                  <Badge variant="secondary">
                    <Crown className="h-3 w-3 mr-1" />
                    Premium
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vues totales</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{advertiserDetails.stats.totalViews}</div>
              <p className="text-xs text-muted-foreground">
                Moyenne: {advertiserDetails.stats.avgViews} par catalogue
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux de clic</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{advertiserDetails.stats.clickThroughRate}</div>
              <p className="text-xs text-muted-foreground">
                {advertiserDetails.stats.totalClicks} clics au total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux conversion</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{advertiserDetails.stats.conversionRate}</div>
              <p className="text-xs text-muted-foreground">
                Croissance: {advertiserDetails.stats.monthlyGrowth}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Catalogues actifs</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-primary">{advertiserDetails.stats.activePromos}</div>
              <p className="text-xs text-muted-foreground">
                sur {advertiserDetails.catalogs.length} au total
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Company Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Store className="h-5 w-5" />
                  Informations de l'entreprise
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">Email</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{advertiserDetails.email}</span>
                  </div>
                </div>
                
                <div>
                  <Label className="text-sm font-medium">Membre depuis</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{advertiserDetails.stats.registeredSince}</span>
                  </div>
                </div>
                
                <div>
                  <Label className="text-sm font-medium">Dernière activité</Label>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{advertiserDetails.stats.lastActivity}</span>
                  </div>
                </div>

                <div>
                  <Label className="text-sm font-medium">Type de compte</Label>
                  <div className="flex items-center gap-2 mt-1">
                    {advertiserDetails.premium ? (
                      <Badge variant="secondary">
                        <Crown className="h-3 w-3 mr-1" />
                        Premium
                      </Badge>
                    ) : (
                      <Badge variant="outline">Gratuit</Badge>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Catalogs */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Catalogues ({advertiserDetails.catalogs.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                {advertiserDetails.catalogs.length > 0 ? (
                  <div className="space-y-4">
                    {advertiserDetails.catalogs.map((catalog) => (
                      <div key={catalog.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-medium text-lg mb-2">{catalog.title}</h4>
                            <div className="flex items-center gap-3 mb-3">
                              <Badge variant="outline">{catalog.category}</Badge>
                              <Badge variant={catalog.status === 'active' ? 'default' : 'destructive'}>
                                {catalog.status}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Eye className="h-4 w-4" />
                                {catalog.views} vues
                              </div>
                              <div className="flex items-center gap-1">
                                <BarChart3 className="h-4 w-4" />
                                Performance: Bonne
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{catalog.views}</div>
                            <div className="text-xs text-muted-foreground">vues</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Aucun catalogue trouvé</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertiserDetailPage;