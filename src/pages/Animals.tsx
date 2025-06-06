
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Heart, Search, Filter, Dog, Cat, MapPin } from 'lucide-react';

const Animals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState('all');
  const [sizeFilter, setSizeFilter] = useState('all');
  const [genderFilter, setGenderFilter] = useState('all');

  const animals = [
    {
      id: 1,
      name: "Luna",
      type: "cat",
      age: "2 anos",
      size: "small",
      gender: "female",
      location: "São Paulo, SP",
      description: "Gata carinhosa e brincalhona, adora crianças",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop",
      vaccinated: true,
      castrated: true
    },
    {
      id: 2,
      name: "Thor",
      type: "dog",
      age: "3 anos",
      size: "large",
      gender: "male",
      location: "São Paulo, SP",
      description: "Cão dócil e protetor, ideal para famílias",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop",
      vaccinated: true,
      castrated: true
    },
    {
      id: 3,
      name: "Mimi",
      type: "cat",
      age: "1 ano",
      size: "small",
      gender: "female",
      location: "São Paulo, SP",
      description: "Gatinha tímida mas muito carinhosa",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop",
      vaccinated: true,
      castrated: false
    },
    {
      id: 4,
      name: "Belo",
      type: "dog",
      age: "5 anos",
      size: "medium",
      gender: "male",
      location: "São Paulo, SP",
      description: "Cão calmo e obediente, perfeito para apartamento",
      image: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632?w=400&h=300&fit=crop",
      vaccinated: true,
      castrated: true
    },
    {
      id: 5,
      name: "Princesa",
      type: "cat",
      age: "4 anos",
      size: "small",
      gender: "female",
      location: "São Paulo, SP",
      description: "Gata independente e elegante",
      image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=400&h=300&fit=crop",
      vaccinated: true,
      castrated: true
    },
    {
      id: 6,
      name: "Rex",
      type: "dog",
      age: "2 anos",
      size: "large",
      gender: "male",
      location: "São Paulo, SP",
      description: "Cão energético e brincalhão, adora exercícios",
      image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=400&h=300&fit=crop",
      vaccinated: true,
      castrated: true
    }
  ];

  const filteredAnimals = animals.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         animal.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || animal.type === typeFilter;
    const matchesSize = sizeFilter === 'all' || animal.size === sizeFilter;
    const matchesGender = genderFilter === 'all' || animal.gender === genderFilter;
    
    return matchesSearch && matchesType && matchesSize && matchesGender;
  });

  const getTypeLabel = (type: string) => {
    return type === 'cat' ? 'Gato' : 'Cachorro';
  };

  const getSizeLabel = (size: string) => {
    const sizes = { small: 'Pequeno', medium: 'Médio', large: 'Grande' };
    return sizes[size as keyof typeof sizes];
  };

  const getGenderLabel = (gender: string) => {
    return gender === 'male' ? 'Macho' : 'Fêmea';
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Animais para Adoção
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre seu novo melhor amigo entre nossos queridos animais resgatados.
            Todos estão saudáveis, vacinados e prontos para uma nova vida.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-primary" />
            <h2 className="text-lg font-semibold text-foreground">Filtros</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por nome..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Type Filter */}
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Tipo de animal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os tipos</SelectItem>
                <SelectItem value="dog">Cachorros</SelectItem>
                <SelectItem value="cat">Gatos</SelectItem>
              </SelectContent>
            </Select>

            {/* Size Filter */}
            <Select value={sizeFilter} onValueChange={setSizeFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Porte" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos os portes</SelectItem>
                <SelectItem value="small">Pequeno</SelectItem>
                <SelectItem value="medium">Médio</SelectItem>
                <SelectItem value="large">Grande</SelectItem>
              </SelectContent>
            </Select>

            {/* Gender Filter */}
            <Select value={genderFilter} onValueChange={setGenderFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Sexo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Ambos os sexos</SelectItem>
                <SelectItem value="male">Macho</SelectItem>
                <SelectItem value="female">Fêmea</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Mostrando {filteredAnimals.length} de {animals.length} animais
          </p>
        </div>

        {/* Animals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAnimals.map((animal) => (
            <Card key={animal.id} className="card-hover cursor-pointer">
              <div className="relative">
                <img 
                  src={animal.image}
                  alt={animal.name}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    {animal.type === 'cat' ? (
                      <Cat className="w-5 h-5 text-primary" />
                    ) : (
                      <Dog className="w-5 h-5 text-primary" />
                    )}
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {getTypeLabel(animal.type)}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground">{animal.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-1" />
                    SP
                  </div>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <span>{animal.age}</span>
                  <span>•</span>
                  <span>{getSizeLabel(animal.size)}</span>
                  <span>•</span>
                  <span>{getGenderLabel(animal.gender)}</span>
                </div>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {animal.description}
                </p>

                <div className="flex items-center gap-2 mb-4">
                  {animal.vaccinated && (
                    <span className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">
                      Vacinado
                    </span>
                  )}
                  {animal.castrated && (
                    <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                      Castrado
                    </span>
                  )}
                </div>

                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  <Heart className="w-4 h-4 mr-2" />
                  Quero Adotar {animal.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredAnimals.length === 0 && (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">Nenhum animal encontrado com os filtros selecionados.</p>
              <p className="text-sm">Tente ajustar os filtros para ver mais resultados.</p>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-muted/50 rounded-lg">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Não encontrou o que procurava?
          </h2>
          <p className="text-muted-foreground mb-6">
            Temos muitos outros animais que chegam frequentemente. 
            Cadastre-se para receber notificações de novos pets!
          </p>
          <Button className="bg-primary hover:bg-primary/90">
            Cadastrar-me para Notificações
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default Animals;
