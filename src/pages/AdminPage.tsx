import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { Users, Store, BookOpen, Settings, Plus, Edit, Trash2, Crown, Eye, BarChart3, UserPlus, Search } from 'lucide-react';
import { AdvertiserForm, AdvertiserFormData } from '../components/ui/advertiser-form';
import { useToast } from '../hooks/use-toast';

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

// Mock advertiser details with stats
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
      conversionRate: '1.8%'
    }
  };
};

const AdminPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [users, setUsers] = useState(mockUsers);
  const [catalogs, setCatalogs] = useState(mockCatalogs);
  const [categories, setCategories] = useState(mockCategories);
  const [newCategory, setNewCategory] = useState({ name: '', subcategories: [] });
  const [newSubcategory, setNewSubcategory] = useState('');
  
  // Search states
  const [userSearch, setUserSearch] = useState('');
  const [catalogSearch, setCatalogSearch] = useState('');
  const [categorySearch, setCategorySearch] = useState('');
  const [catalogStatusFilter, setCatalogStatusFilter] = useState('all');

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

  const handleAddAdvertiser = async (data: AdvertiserFormData) => {
    // Simuler l'ajout d'un nouvel annonceur
    const newUser = {
      id: users.length + 1,
      name: data.companyName,
      email: data.email,
      type: 'annonceur' as const,
      status: 'active' as const,
      premium: data.premium || false,
      catalogs: 0
    };
    
    setUsers([...users, newUser]);
    
    toast({
      title: "Annonceur ajouté avec succès !",
      description: `Le compte de ${data.companyName} a été créé.`,
    });
  };

  const handleAddCatalog = async (data: any) => {
    const newCatalog = {
      id: catalogs.length + 1,
      title: data.title,
      advertiser: data.advertiser,
      category: data.category,
      status: 'active' as const,
      views: 0
    };
    
    setCatalogs([...catalogs, newCatalog]);
    
    toast({
      title: "Catalogue ajouté avec succès !",
      description: `Le catalogue "${data.title}" a été créé.`,
    });
  };

  // Filter functions
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(userSearch.toLowerCase()) ||
    user.email.toLowerCase().includes(userSearch.toLowerCase()) ||
    user.type.toLowerCase().includes(userSearch.toLowerCase())
  );

  const filteredCatalogs = catalogs.filter(catalog => {
    const matchesSearch = catalog.title.toLowerCase().includes(catalogSearch.toLowerCase()) ||
      catalog.advertiser.toLowerCase().includes(catalogSearch.toLowerCase()) ||
      catalog.category.toLowerCase().includes(catalogSearch.toLowerCase());
    
    const matchesStatus = catalogStatusFilter === 'all' || catalog.status === catalogStatusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(categorySearch.toLowerCase()) ||
    category.subcategories.some(sub => sub.toLowerCase().includes(categorySearch.toLowerCase()))
  );

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
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Gestion des Utilisateurs</CardTitle>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <UserPlus className="h-4 w-4 mr-2" />
                      Ajouter un annonceur
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Créer un nouveau compte annonceur</DialogTitle>
                    </DialogHeader>
                    <AdvertiserForm 
                      onSubmit={handleAddAdvertiser}
                      isAdmin={true}
                      title="Créer un compte annonceur"
                    />
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                {/* Search Field */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Rechercher par nom, email ou type..."
                      value={userSearch}
                      onChange={(e) => setUserSearch(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  {userSearch && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {filteredUsers.length} résultat(s) trouvé(s)
                    </p>
                  )}
                </div>
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
                    {filteredUsers.map((user) => (
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
                             {user.type === 'annonceur' && (
                               <Button 
                                 size="sm" 
                                 variant="outline"
                                 onClick={() => navigate(`/admin/advertiser/${user.id}`)}
                               >
                                 <Eye className="h-4 w-4 mr-2" />
                                 Voir détails
                               </Button>
                             )}
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
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Gestion des Catalogues</CardTitle>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Ajouter un catalogue
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Ajouter un nouveau catalogue</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="catalog-title">Titre du catalogue</Label>
                        <Input
                          id="catalog-title"
                          placeholder="Ex: Promos Janvier 2024"
                          onChange={(e) => {
                            const title = e.target.value;
                            e.target.setAttribute('data-title', title);
                          }}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="catalog-advertiser">Annonceur</Label>
                        <Select onValueChange={(value) => {
                          const select = document.getElementById('catalog-advertiser');
                          if (select) select.setAttribute('data-advertiser', value);
                        }}>
                          <SelectTrigger id="catalog-advertiser">
                            <SelectValue placeholder="Sélectionnez un annonceur" />
                          </SelectTrigger>
                          <SelectContent>
                            {users.filter(u => u.type === 'annonceur').map((user) => (
                              <SelectItem key={user.id} value={user.name}>{user.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="catalog-category">Catégorie</Label>
                        <Select onValueChange={(value) => {
                          const select = document.getElementById('catalog-category');
                          if (select) select.setAttribute('data-category', value);
                        }}>
                          <SelectTrigger id="catalog-category">
                            <SelectValue placeholder="Sélectionnez une catégorie" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category.id} value={category.name}>{category.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Button 
                        onClick={() => {
                          const titleInput = document.getElementById('catalog-title') as HTMLInputElement;
                          const advertiserSelect = document.getElementById('catalog-advertiser');
                          const categorySelect = document.getElementById('catalog-category');
                          
                          const data = {
                            title: titleInput?.getAttribute('data-title') || titleInput?.value || '',
                            advertiser: advertiserSelect?.getAttribute('data-advertiser') || '',
                            category: categorySelect?.getAttribute('data-category') || ''
                          };
                          
                          if (data.title && data.advertiser && data.category) {
                            handleAddCatalog(data);
                          }
                        }}
                        className="w-full"
                      >
                        Créer le catalogue
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardHeader>
              <CardContent>
                {/* Search and Filter Fields */}
                <div className="mb-6 space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Rechercher par titre, annonceur ou catégorie..."
                        value={catalogSearch}
                        onChange={(e) => setCatalogSearch(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <div className="w-48">
                      <Select value={catalogStatusFilter} onValueChange={setCatalogStatusFilter}>
                        <SelectTrigger>
                          <SelectValue placeholder="Filtrer par statut" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">Tous les statuts</SelectItem>
                          <SelectItem value="active">Actif</SelectItem>
                          <SelectItem value="inactive">Inactif</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  {(catalogSearch || catalogStatusFilter !== 'all') && (
                    <p className="text-sm text-muted-foreground">
                      {filteredCatalogs.length} résultat(s) trouvé(s)
                    </p>
                  )}
                </div>
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
                    {filteredCatalogs.map((catalog) => (
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
                  {/* Search Field */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                      <Input
                        placeholder="Rechercher une catégorie ou sous-catégorie..."
                        value={categorySearch}
                        onChange={(e) => setCategorySearch(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    {categorySearch && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {filteredCategories.length} résultat(s) trouvé(s)
                      </p>
                    )}
                  </div>
                  <div className="grid gap-4">
                    {filteredCategories.map((category) => (
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