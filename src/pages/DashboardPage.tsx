import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { 
  TrendingUp, 
  Eye, 
  Users, 
  Calendar, 
  Plus, 
  BarChart3,
  ShoppingBag,
  MessageCircle,
  Star
} from 'lucide-react';

const DashboardPage = () => {
  // Données mockées pour le MVP
  const stats = {
    totalViews: 15420,
    monthlyViews: 3280,
    activeCatalogs: 8,
    totalCatalogs: 12,
    averageRating: 4.6,
    totalReviews: 142
  };

  const recentCatalogs = [
    {
      id: 1,
      title: "Offres Spéciales Électronique",
      status: "active",
      views: 1240,
      validUntil: "2024-09-15",
      type: "premium"
    },
    {
      id: 2,
      title: "Collection Automne 2024",
      status: "active",
      views: 890,
      validUntil: "2024-08-30",
      type: "standard"
    },
    {
      id: 3,
      title: "Soldes d'Été",
      status: "expired",
      views: 2340,
      validUntil: "2024-07-31",
      type: "premium"
    }
  ];

  const monthlyData = [
    { month: "Jan", views: 2100 },
    { month: "Fév", views: 2400 },
    { month: "Mar", views: 2800 },
    { month: "Avr", views: 3200 },
    { month: "Mai", views: 2900 },
    { month: "Juin", views: 3100 },
    { month: "Juil", views: 3280 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Tableau de bord</h1>
            <p className="text-muted-foreground">Gérez vos catalogues et suivez vos performances</p>
          </div>
          <Button className="bg-gradient-primary">
            <Plus className="h-4 w-4 mr-2" />
            Nouveau catalogue
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vues totales</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalViews.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +12% par rapport au mois dernier
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Vues ce mois</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.monthlyViews.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                +8% par rapport au mois dernier
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Catalogues actifs</CardTitle>
              <ShoppingBag className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.activeCatalogs}</div>
              <p className="text-xs text-muted-foreground">
                Sur {stats.totalCatalogs} catalogues total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Note moyenne</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.averageRating}/5</div>
              <p className="text-xs text-muted-foreground">
                Basé sur {stats.totalReviews} avis
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="catalogs" className="space-y-6">
          <TabsList>
            <TabsTrigger value="catalogs">Mes Catalogues</TabsTrigger>
            <TabsTrigger value="analytics">Statistiques</TabsTrigger>
            <TabsTrigger value="profile">Mon Profil</TabsTrigger>
          </TabsList>

          <TabsContent value="catalogs" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Catalogues récents</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentCatalogs.map((catalog) => (
                    <div key={catalog.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-medium">{catalog.title}</h3>
                          <Badge variant={catalog.status === 'active' ? 'default' : 'secondary'}>
                            {catalog.status === 'active' ? 'Actif' : 'Expiré'}
                          </Badge>
                          {catalog.type === 'premium' && (
                            <Badge variant="secondary" className="bg-gradient-primary text-white">
                              Premium
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{catalog.views} vues</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>Valide jusqu'au {catalog.validUntil}</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          Modifier
                        </Button>
                        <Button variant="outline" size="sm">
                          <BarChart3 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Évolution des vues mensuelles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyData.map((data, index) => (
                    <div key={data.month} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{data.month}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full"
                            style={{ width: `${(data.views / 3500) * 100}%` }}
                          />
                        </div>
                        <span className="text-sm text-muted-foreground w-16 text-right">
                          {data.views}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Engagement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span>Taux de clics</span>
                    <span className="font-medium">12.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Temps moyen</span>
                    <span className="font-medium">2m 35s</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Partages</span>
                    <span className="font-medium">184</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Catalogues</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Soldes d'Été</span>
                    <span className="text-sm font-medium">2,340 vues</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Offres Électronique</span>
                    <span className="text-sm font-medium">1,240 vues</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Collection Automne</span>
                    <span className="text-sm font-medium">890 vues</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Informations de l'entreprise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">TechStore Cameroun</h4>
                    <p className="text-sm text-muted-foreground">
                      Spécialiste en électronique et informatique
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Contact</h4>
                    <p className="text-sm text-muted-foreground">
                      contact@techstore.cm<br />
                      +237 694 846 159
                    </p>
                  </div>
                </div>
                <Button variant="outline">
                  Modifier le profil
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardPage;