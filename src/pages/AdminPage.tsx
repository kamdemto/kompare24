import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Switch } from '../components/ui/switch';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Users, Store, BookOpen, Settings, Plus, Edit, Trash2, Crown } from 'lucide-react';

// Mock data
const mockUsers = [
  { id: 1, name: 'SuperU Sassaye', email: 'contact@superu-sassaye.com', type: 'annonceur', status: 'active', premium: false, catalogs: 3 },
  { id: 2, name: 'Ink Computer', email: 'info@inkcomputer.com', type: 'annonceur', status: 'active', premium: true, catalogs: 2 },
  { id: 3, name: 'Total Energie', email: 'contact@totalenergie.com', type: 'annonceur', status: 'inactive', premium: false, catalogs: 1 },
  { id: 4, name: 'Admin Principal', email: 'admin@kompar24.com', type: 'admin', status: 'active', premium: false, catalogs: 0 },
];

const mockCatalogs = [
  { id: 1, title: 'Catalogue SuperU - Février 2024', advertiser: 'SuperU Sassaye', category: 'Supermarchés', status: 'active', views: 1250 },
  { id: 2, title: 'Promos Informatique Ink Computer', advertiser: 'Ink Computer', category: 'Informatique & Tech', status: 'active', views: 890 },
  { id: 3, title: 'Catalogue Total Station', advertiser: 'Total Energie', category: 'Station service', status: 'inactive', views: 456 },
];

const mockCategories = [
  { id: 1, name: 'Supermarchés', subcategories: ['Alimentation', 'Produits frais', 'Boissons'] },
  { id: 2, name: 'Sport & Mode', subcategories: ['Vêtements', 'Chaussures', 'Équipements sport'] },
  { id: 3, name: 'Automobile', subcategories: ['Pièces détachées', 'Accessoires', 'Entretien'] },
  { id: 4, name: 'Informatique & Tech', subcategories: ['Ordinateurs', 'Smartphones', 'Accessoires'] },
  { id: 5, name: 'Station service', subcategories: ['Carburants', 'Boutique', 'Services'] },
];

const AdminPage = () => {
  const [users, setUsers] = useState(mockUsers);
  const [catalogs, setCatalogs] = useState(mockCatalogs);
  const [categories, setCategories] = useState(mockCategories);
  const [newCategory, setNewCategory] = useState({ name: '', subcategories: [] });
  const [newSubcategory, setNewSubcategory] = useState('');

  const toggleUserStatus = (userId: number) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, status: user.status === 'active' ? 'inactive' : 'active' }
        : user
    ));
  };

  const togglePremiumStatus = (userId: number) => {
    setUsers(users.map(user => 
      user.id === userId 
        ? { ...user, premium: !user.premium }
        : user
    ));
  };

  const toggleCatalogStatus = (catalogId: number) => {
    setCatalogs(catalogs.map(catalog => 
      catalog.id === catalogId 
        ? { ...catalog, status: catalog.status === 'active' ? 'inactive' : 'active' }
        : catalog
    ));
  };

  const addSubcategory = (categoryId: number) => {
    if (newSubcategory.trim()) {
      setCategories(categories.map(cat => 
        cat.id === categoryId 
          ? { ...cat, subcategories: [...cat.subcategories, newSubcategory.trim()] }
          : cat
      ));
      setNewSubcategory('');
    }
  };

  const addCategory = () => {
    if (newCategory.name.trim()) {
      const newCat = {
        id: categories.length + 1,
        name: newCategory.name.trim(),
        subcategories: []
      };
      setCategories([...categories, newCat]);
      setNewCategory({ name: '', subcategories: [] });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle p-6">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Administration Kompar24</h1>
          <p className="text-muted-foreground">Gérez la plateforme, les utilisateurs et le contenu</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Utilisateurs Actifs</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.filter(u => u.status === 'active').length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Catalogues Actifs</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{catalogs.filter(c => c.status === 'active').length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Annonceurs Premium</CardTitle>
              <Crown className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.filter(u => u.premium).length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Catégories</CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{categories.length}</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="users" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="users">Utilisateurs</TabsTrigger>
            <TabsTrigger value="catalogs">Catalogues</TabsTrigger>
            <TabsTrigger value="categories">Catégories</TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Utilisateurs</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Nom</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Premium</TableHead>
                      <TableHead>Catalogues</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant={user.type === 'admin' ? 'default' : 'secondary'}>
                            {user.type}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.status === 'active' ? 'default' : 'destructive'}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {user.type === 'annonceur' && (
                            <div className="flex items-center space-x-2">
                              <Switch
                                checked={user.premium}
                                onCheckedChange={() => togglePremiumStatus(user.id)}
                              />
                              {user.premium && <Crown className="h-4 w-4 text-yellow-500" />}
                            </div>
                          )}
                        </TableCell>
                        <TableCell>{user.catalogs}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant={user.status === 'active' ? 'destructive' : 'default'}
                              onClick={() => toggleUserStatus(user.id)}
                            >
                              {user.status === 'active' ? 'Désactiver' : 'Activer'}
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="catalogs">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Catalogues</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Titre</TableHead>
                      <TableHead>Annonceur</TableHead>
                      <TableHead>Catégorie</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Vues</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {catalogs.map((catalog) => (
                      <TableRow key={catalog.id}>
                        <TableCell className="font-medium">{catalog.title}</TableCell>
                        <TableCell>{catalog.advertiser}</TableCell>
                        <TableCell>{catalog.category}</TableCell>
                        <TableCell>
                          <Badge variant={catalog.status === 'active' ? 'default' : 'destructive'}>
                            {catalog.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{catalog.views}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant={catalog.status === 'active' ? 'destructive' : 'default'}
                              onClick={() => toggleCatalogStatus(catalog.id)}
                            >
                              {catalog.status === 'active' ? 'Désactiver' : 'Activer'}
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="categories">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ajouter une Catégorie</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <div className="flex-1">
                      <Label htmlFor="category-name">Nom de la catégorie</Label>
                      <Input
                        id="category-name"
                        placeholder="Ex: Bricolage & Jardinage"
                        value={newCategory.name}
                        onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                      />
                    </div>
                    <Button onClick={addCategory} className="mt-6">
                      <Plus className="h-4 w-4 mr-2" />
                      Ajouter
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Catégories Existantes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {categories.map((category) => (
                      <div key={category.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold">{category.name}</h3>
                          <Button size="sm" variant="destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="space-y-2">
                          <Label>Sous-catégories:</Label>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {category.subcategories.map((sub, index) => (
                              <Badge key={index} variant="outline">{sub}</Badge>
                            ))}
                          </div>
                          
                          <div className="flex space-x-2">
                            <Input
                              placeholder="Nouvelle sous-catégorie"
                              value={newSubcategory}
                              onChange={(e) => setNewSubcategory(e.target.value)}
                              onKeyPress={(e) => e.key === 'Enter' && addSubcategory(category.id)}
                            />
                            <Button size="sm" onClick={() => addSubcategory(category.id)}>
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;