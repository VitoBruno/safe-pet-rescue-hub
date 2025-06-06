
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, PawPrint, Users, Award, ArrowRight, Dog, Cat } from 'lucide-react';

const Index = () => {
  const [stats] = useState({
    animalsRescued: 1247,
    adoptions: 892,
    volunteers: 156,
    years: 8
  });

  const featuredAnimals = [
    {
      id: 1,
      name: "Luna",
      type: "Gato",
      age: "2 anos",
      size: "Pequeno",
      description: "Gata carinhosa e brincalhona",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Thor",
      type: "Cachorro",
      age: "3 anos",
      size: "Grande",
      description: "Cão dócil e protetor",
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Mimi",
      type: "Gato",
      age: "1 ano",
      size: "Pequeno",
      description: "Gatinha tímida mas carinhosa",
      image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Felix",
      type: "Gato",
      age: "3 anos",
      size: "Médio",
      description: "Gato independente e elegante",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Princesa",
      type: "Gato",
      age: "4 anos",
      size: "Pequeno",
      description: "Gata muito dócil e companheira",
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Simba",
      type: "Gato",
      age: "6 meses",
      size: "Pequeno",
      description: "Gatinho brincalhão e cheio de energia",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cada Animal Merece uma 
                <span className="block text-secondary"> Segunda Chance</span>
              </h1>
              <p className="text-xl mb-8 text-white/90">
                A SafePet é uma ONG dedicada ao resgate, cuidado e proteção de animais de rua. 
                Junte-se a nós nessa missão de amor e compaixão.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
                  <Heart className="w-5 h-5 mr-2" />
                  Adotar Agora
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Users className="w-5 h-5 mr-2" />
                  Seja Voluntário
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=300&h=400&fit=crop"
                    alt="Gato resgatado"
                    className="rounded-xl shadow-lg w-full h-48 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=300&h=200&fit=crop"
                    alt="Gatinho"
                    className="rounded-xl shadow-lg w-full h-32 object-cover"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1493962853295-0fd70327578a?w=300&h=200&fit=crop"
                    alt="Cão resgatado"
                    className="rounded-xl shadow-lg w-full h-32 object-cover"
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=300&h=400&fit=crop"
                    alt="Animais felizes"
                    className="rounded-xl shadow-lg w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stats.animalsRescued}+
              </div>
              <div className="text-muted-foreground">Animais Resgatados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                {stats.adoptions}+
              </div>
              <div className="text-muted-foreground">Adoções Realizadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {stats.volunteers}+
              </div>
              <div className="text-muted-foreground">Voluntários Ativos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stats.years}
              </div>
              <div className="text-muted-foreground">Anos de Atuação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Animals */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Animais Esperando por uma Família
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça alguns dos nossos queridos amigos que estão procurando um lar cheio de amor e carinho.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredAnimals.map((animal) => (
              <Card key={animal.id} className="card-hover cursor-pointer">
                <div className="relative">
                  <img 
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      {animal.type === 'Gato' ? (
                        <Cat className="w-5 h-5 text-primary" />
                      ) : (
                        <Dog className="w-5 h-5 text-primary" />
                      )}
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{animal.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span>{animal.type}</span>
                    <span>•</span>
                    <span>{animal.age}</span>
                    <span>•</span>
                    <span>{animal.size}</span>
                  </div>
                  <p className="text-muted-foreground mb-4">{animal.description}</p>
                  <Button className="w-full" variant="outline">
                    <Heart className="w-4 h-4 mr-2" />
                    Quero Adotar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Ver Todos os Animais
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como Você Pode Ajudar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Existem várias maneiras de contribuir com nossa missão de proteção animal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Adotar</h3>
              <p className="text-muted-foreground mb-6">
                Dê uma nova vida a um animal resgatado. A adoção é o ato mais transformador para um pet.
              </p>
              <Button className="bg-secondary hover:bg-secondary/90">
                Quero Adotar
              </Button>
            </Card>

            <Card className="text-center p-8 card-hover">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Voluntariar</h3>
              <p className="text-muted-foreground mb-6">
                Dedique seu tempo e amor aos nossos animais. Cada gesto de cuidado faz toda diferença.
              </p>
              <Button variant="outline">
                Ser Voluntário
              </Button>
            </Card>

            <Card className="text-center p-8 card-hover">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <PawPrint className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Doar</h3>
              <p className="text-muted-foreground mb-6">
                Suas doações ajudam com alimentação, medicamentos e cuidados veterinários.
              </p>
              <Button variant="outline">
                Fazer Doação
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Fazer a Diferença?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Junte-se a nós na missão de transformar vidas. Cada animal salvo é uma vitória do amor sobre o abandono.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              <Heart className="w-5 h-5 mr-2" />
              Adotar um Animal
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Users className="w-5 h-5 mr-2" />
              Cadastrar-se como Voluntário
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
