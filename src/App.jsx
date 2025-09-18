import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Star, BookOpen, User, Calendar, Award, Play } from 'lucide-react'
import capaLivro from './assets/capa_a_hora_da_estrela.jpg'
import clariceLispector from './assets/clarice_lispector.jpg'
import macabeaAdormecida from './assets/macabea_adormecida.png'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('inicio')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Star className="h-6 w-6 text-accent star-animation" />
            <span className="text-xl font-bold text-gradient">A Hora da Estrela</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('inicio')}
              className={activeSection === 'inicio' ? 'text-primary' : ''}
            >
              Início
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('sinopse')}
              className={activeSection === 'sinopse' ? 'text-primary' : ''}
            >
              Sinopse
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('analise')}
              className={activeSection === 'analise' ? 'text-primary' : ''}
            >
              Análise
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('autora')}
              className={activeSection === 'autora' ? 'text-primary' : ''}
            >
              Autora
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => scrollToSection('video')}
              className={activeSection === 'video' ? 'text-primary' : ''}
            >
              Vídeo
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              A Hora da Estrela
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Uma obra-prima de Clarice Lispector sobre a existência humana
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <BookOpen className="w-4 h-4 mr-2" />
                Romance
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Calendar className="w-4 h-4 mr-2" />
                1977
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <User className="w-4 h-4 mr-2" />
                Clarice Lispector
              </Badge>
            </div>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => scrollToSection('sinopse')}
              className="text-lg px-8 py-3"
            >
              Explorar a Obra
            </Button>
          </div>
        </div>
      </section>

      {/* Sinopse Section */}
      <section id="sinopse" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Sinopse</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src={capaLivro} 
                  alt="Capa do livro A Hora da Estrela" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-2xl card-hover"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  A história é narrada por Rodrigo S.M., um escritor à espera da morte, que conta a vida de 
                  <strong className="text-primary"> Macabéa</strong>, uma jovem alagoana de 19 anos, órfã e pobre, 
                  que migra para o Rio de Janeiro em busca de uma vida melhor.
                </p>
                <p className="text-lg leading-relaxed">
                  Nordestina de corpo franzino, tímida e solitária, Macabéa trabalha como datilógrafa e vive 
                  numa pensão dividindo quarto com quatro moças. Seu maior prazer é ouvir o rádio relógio 
                  emprestado por uma colega.
                </p>
                <p className="text-lg leading-relaxed">
                  O romance culmina quando Macabéa, após visitar uma cartomante, é atropelada por um Mercedes 
                  Benz amarelo. É neste momento trágico que ocorre sua <em>"hora da estrela"</em> - o único 
                  instante em que todos a enxergam e ela se sente importante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Análise Section */}
      <section id="analise" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Análise da Obra</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="w-5 h-5 mr-2 text-accent" />
                    Temas Principais
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Existencialismo</li>
                    <li>• Solidão urbana</li>
                    <li>• Desigualdade social</li>
                    <li>• Migração nordestina</li>
                    <li>• Condição feminina</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="w-5 h-5 mr-2 text-accent" />
                    Características
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Narrador-personagem</li>
                    <li>• Fluxo de consciência</li>
                    <li>• Linguagem introspectiva</li>
                    <li>• Crítica social</li>
                    <li>• Final irônico</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-accent" />
                    Importância
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>• Última obra de Clarice</li>
                    <li>• Marco da literatura brasileira</li>
                    <li>• Adaptação cinematográfica</li>
                    <li>• Estudo obrigatório</li>
                    <li>• Reflexão social profunda</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="quote-style">
              <p className="text-lg">
                "E agora — agora só me resta acender um cigarro e ir para casa. Meu Deus, só agora me lembrei que a gente morre. Mas — mas eu também?! Não esquecer que por enquanto é tempo de morangos. Sim."
              </p>
              <cite className="block text-right mt-4 text-muted-foreground">— Clarice Lispector, A Hora da Estrela</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Autora Section */}
      <section id="autora" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Sobre a Autora</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Clarice Lispector (1920-1977)</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Considerada uma das maiores escritoras brasileiras do século XX, Clarice Lispector 
                  revolucionou a literatura nacional com sua prosa introspectiva e inovadora.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Nascida na Ucrânia e criada no Brasil, desenvolveu um estilo único que mescla 
                  filosofia, psicologia e poesia, explorando a condição humana de forma profunda e original.
                </p>
                <p className="text-lg leading-relaxed">
                  "A Hora da Estrela" foi sua última obra, publicada pouco antes de sua morte em 1977, 
                  representando uma síntese de sua genialidade literária e sensibilidade social.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src={clariceLispector} 
                  alt="Clarice Lispector" 
                  className="w-full max-w-md mx-auto rounded-lg shadow-2xl card-hover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Vídeo Section */}
      <section id="video" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gradient">Apresentação do Grupo</h2>
            <p className="text-lg mb-8 text-muted-foreground">
              Assista ao vídeo produzido pelo nosso grupo de trabalho sobre "A Hora da Estrela"
            </p>
            
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 32 }}>
              <video controls width="600">
                <source src="/videoplaceholder.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Star className="h-6 w-6 mr-2 star-animation" />
            <span className="text-xl font-bold">A Hora da Estrela</span>
          </div>
          <p className="text-lg mb-4">Trabalho Escolar sobre a obra de Clarice Lispector</p>
          <p className="text-sm opacity-80 mb-8">
            "Esta história acontece em estado de emergência e de calamidade pública." - Clarice Lispector
          </p>

          {/* Seção de Integrantes */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Equipe</h3>
            <ul className="flex flex-wrap justify-center gap-4 text-base">
              <li className="bg-primary-foreground text-primary rounded px-4 py-2 shadow-sm min-w-[120px] text-center">Ana Carolliny de Camargo Prates </li>
              <li className="bg-primary-foreground text-primary rounded px-4 py-2 shadow-sm min-w-[120px] text-center">Beatriz Vieira de Araujo</li>
              <li className="bg-primary-foreground text-primary rounded px-4 py-2 shadow-sm min-w-[120px] text-center">Lucas Soares de Moraes </li>
              <li className="bg-primary-foreground text-primary rounded px-4 py-2 shadow-sm min-w-[120px] text-center">Maria Clara Paiva Polido</li>
              <li className="bg-primary-foreground text-primary rounded px-4 py-2 shadow-sm min-w-[120px] text-center">Maria Luiza Motta dos Reis</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

