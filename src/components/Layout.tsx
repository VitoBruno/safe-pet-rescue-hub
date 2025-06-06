
import { useState } from 'react';
import { Heart, Menu, X, User, PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">SafePet</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-foreground hover:text-primary transition-colors">
                Início
              </a>
              <a href="/animals" className="text-foreground hover:text-primary transition-colors">
                Animais
              </a>
              <a href="/about" className="text-foreground hover:text-primary transition-colors">
                Sobre Nós
              </a>
              <a href="/contact" className="text-foreground hover:text-primary transition-colors">
                Contato
              </a>
            </nav>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <PlusCircle className="w-4 h-4 mr-2" />
                Cadastrar Animal
              </Button>
              <Button variant="outline" size="sm">
                <User className="w-4 h-4 mr-2" />
                Login
              </Button>
              <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                Adotar Agora
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="/" className="text-foreground hover:text-primary transition-colors">
                  Início
                </a>
                <a href="/animals" className="text-foreground hover:text-primary transition-colors">
                  Animais
                </a>
                <a href="/about" className="text-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
                <a href="/contact" className="text-foreground hover:text-primary transition-colors">
                  Contato
                </a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" size="sm">
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Cadastrar Animal
                  </Button>
                  <Button variant="outline" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                  <Button size="sm" className="bg-secondary hover:bg-secondary/90">
                    Adotar Agora
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo e Descrição */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold text-foreground">SafePet</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Dedicados ao resgate, cuidado e proteção de animais de rua. 
                Cada vida importa e merece uma segunda chance.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm">
                  Facebook
                </Button>
                <Button variant="outline" size="sm">
                  Instagram
                </Button>
                <Button variant="outline" size="sm">
                  WhatsApp
                </Button>
              </div>
            </div>

            {/* Links Rápidos */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/animals" className="text-muted-foreground hover:text-primary transition-colors">
                    Animais para Adoção
                  </a>
                </li>
                <li>
                  <a href="/volunteer" className="text-muted-foreground hover:text-primary transition-colors">
                    Seja Voluntário
                  </a>
                </li>
                <li>
                  <a href="/donate" className="text-muted-foreground hover:text-primary transition-colors">
                    Faça uma Doação
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    Sobre Nós
                  </a>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contato</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>📧 contato@safepet.org</li>
                <li>📱 (11) 99999-9999</li>
                <li>📍 São Paulo, SP</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 SafePet. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
