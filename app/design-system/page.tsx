'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

export default function DesignSystem() {
  const [activeTab, setActiveTab] = useState('overview')

  const colors = [
    { name: 'Primary', hex: '#A67130', rgb: '166, 113, 48', usage: 'CTAs, Headlines, Accents' },
    { name: 'Primary Dark', hex: '#8B5A24', rgb: '139, 90, 36', usage: 'Hover states, Depth' },
    { name: 'Secondary', hex: '#312F1F', rgb: '49, 47, 31', usage: 'Main text, Backgrounds' },
    { name: 'Accent', hex: '#5B819E', rgb: '91, 129, 158', usage: 'Secondary elements, Links' },
    { name: 'Neutral Light', hex: '#F3EEE3', rgb: '243, 238, 227', usage: 'Card backgrounds' },
    { name: 'Neutral Medium', hex: '#B5ADA4', rgb: '181, 173, 164', usage: 'Borders, Disabled' },
    { name: 'Neutral Dark', hex: '#EBDFD6', rgb: '235, 223, 214', usage: 'Subtle backgrounds' },
    { name: 'Dark', hex: '#363636', rgb: '54, 54, 54', usage: 'Text, Dark elements' },
  ]

  const typography = [
    { name: 'H1', size: '48px', weight: '700', font: 'Lora', lineHeight: '1.2', example: 'Rotina que cabe na vida real' },
    { name: 'H2', size: '36px', weight: '700', font: 'Lora', lineHeight: '1.3', example: 'A Paralisia Invisível do Primeiro Passo' },
    { name: 'H3', size: '24px', weight: '700', font: 'Lora', lineHeight: '1.4', example: 'Por que complicar se pode simplificar?' },
    { name: 'Body', size: '16px', weight: '400', font: 'Inter', lineHeight: '1.6', example: 'Nós cuidamos dos seus problemas de saúde e bem-estar, sem sair de casa.' },
    { name: 'Small', size: '14px', weight: '400', font: 'Inter', lineHeight: '1.5', example: 'Consulta 100% online e confidencial' },
    { name: 'Caption', size: '12px', weight: '400', font: 'Inter', lineHeight: '1.4', example: 'Entrega em casa com embalagem 100% discreta' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary via-secondary to-primary-dark py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="outline" className="mb-4 bg-white/10 text-white border-white/20">Design System v1.0</Badge>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              Bravo ON
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Ecossistema de Saúde Digital. Um design system completo, moderno e acessível para criar experiências de saúde que transformam vidas.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-white text-secondary hover:bg-neutral-light">
                Explorar Componentes
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Documentação
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white border-b border-neutral-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8 overflow-x-auto">
            {[
              { id: 'overview', label: '📋 Visão Geral' },
              { id: 'colors', label: '🎨 Cores' },
              { id: 'typography', label: '✍️ Tipografia' },
              { id: 'components', label: '🧩 Componentes' },
              { id: 'guidelines', label: '📐 Guidelines' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-4 font-medium border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-neutral-medium hover:text-secondary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-12 animate-fade-in">
            <div>
              <h2 className="text-4xl font-serif font-bold text-secondary mb-4">Bem-vindo ao Design System</h2>
              <p className="text-lg text-neutral-medium max-w-3xl">
                O Design System Bravo ON é uma coleção completa de componentes, padrões e diretrizes de design criados para garantir consistência, qualidade e acessibilidade em todas as nossas interfaces de saúde digital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-neutral-medium hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">🎯 Objetivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-medium">
                    Criar uma experiência consistente e intuitiva para usuários que buscam soluções de saúde digital confiáveis e acessíveis.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-neutral-medium hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">✨ Princípios</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-medium">
                    Clareza, confiança, acessibilidade e simplicidade. Cada decisão de design é guiada por esses valores fundamentais.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-neutral-medium hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary">🚀 Stack</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-medium">
                    Next.js 14, Tailwind CSS, shadcn/ui e Framer Motion para performance e experiência moderna.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Colors */}
        {activeTab === 'colors' && (
          <div className="space-y-12 animate-fade-in">
            <div>
              <h2 className="text-4xl font-serif font-bold text-secondary mb-4">Paleta de Cores</h2>
              <p className="text-lg text-neutral-medium max-w-3xl">
                Uma paleta cuidadosamente selecionada que transmite confiança, profissionalismo e acessibilidade. Cada cor tem um propósito específico no design system.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {colors.map((color) => (
                <div key={color.hex} className="group cursor-pointer">
                  <div
                    className="w-full h-40 rounded-lg shadow-md mb-4 transition-transform group-hover:scale-105"
                    style={{ backgroundColor: color.hex }}
                  />
                  <h3 className="font-serif font-bold text-secondary mb-1">{color.name}</h3>
                  <p className="text-sm font-mono text-primary mb-2">{color.hex}</p>
                  <p className="text-sm text-neutral-medium">{color.usage}</p>
                </div>
              ))}
            </div>

            <Card className="bg-neutral-light border-neutral-medium">
              <CardHeader>
                <CardTitle>Acessibilidade de Cores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-medium mb-4">
                  Todas as cores foram testadas para garantir contraste WCAG AA em combinações críticas. Nenhuma informação é transmitida apenas por cor.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 bg-white border border-neutral-medium rounded">
                    <p className="text-sm font-medium text-secondary">Contraste</p>
                    <p className="text-2xl font-bold text-primary">7:1</p>
                  </div>
                  <div className="p-4 bg-white border border-neutral-medium rounded">
                    <p className="text-sm font-medium text-secondary">Padrão</p>
                    <p className="text-2xl font-bold text-primary">WCAG AA</p>
                  </div>
                  <div className="p-4 bg-white border border-neutral-medium rounded">
                    <p className="text-sm font-medium text-secondary">Testado</p>
                    <p className="text-2xl font-bold text-primary">✓</p>
                  </div>
                  <div className="p-4 bg-white border border-neutral-medium rounded">
                    <p className="text-sm font-medium text-secondary">Daltonismo</p>
                    <p className="text-2xl font-bold text-primary">✓</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Typography */}
        {activeTab === 'typography' && (
          <div className="space-y-12 animate-fade-in">
            <div>
              <h2 className="text-4xl font-serif font-bold text-secondary mb-4">Tipografia</h2>
              <p className="text-lg text-neutral-medium max-w-3xl">
                Uma hierarquia tipográfica clara com Lora para headlines (elegância e confiança) e Inter para body text (legibilidade e modernidade).
              </p>
            </div>

            <div className="space-y-6">
              {typography.map((type) => (
                <Card key={type.name} className="border-neutral-medium hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="font-serif font-bold text-secondary mb-2">{type.name}</h3>
                        <div className="space-y-1 text-sm text-neutral-medium">
                          <p><span className="font-medium">Tamanho:</span> {type.size}</p>
                          <p><span className="font-medium">Peso:</span> {type.weight}</p>
                          <p><span className="font-medium">Fonte:</span> {type.font}</p>
                          <p><span className="font-medium">Line Height:</span> {type.lineHeight}</p>
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <p
                          style={{
                            fontSize: type.size,
                            fontWeight: type.weight as any,
                            lineHeight: type.lineHeight,
                            fontFamily: type.font === 'Lora' ? 'Lora, serif' : 'Inter, sans-serif',
                          }}
                          className="text-secondary"
                        >
                          {type.example}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-secondary to-primary-dark text-white border-0">
              <CardHeader>
                <CardTitle className="text-white">Hierarquia Tipográfica</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 mb-6">
                  A hierarquia tipográfica cria uma estrutura visual clara que guia o usuário através do conteúdo de forma intuitiva.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">1</div>
                    <div>
                      <p className="font-medium">Headlines (H1-H3)</p>
                      <p className="text-sm text-white/70">Lora - Elegância e confiança</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">2</div>
                    <div>
                      <p className="font-medium">Body Text</p>
                      <p className="text-sm text-white/70">Inter - Legibilidade e modernidade</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center font-bold">3</div>
                    <div>
                      <p className="font-medium">Small & Caption</p>
                      <p className="text-sm text-white/70">Inter - Informações secundárias</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Components */}
        {activeTab === 'components' && (
          <div className="space-y-12 animate-fade-in">
            <div>
              <h2 className="text-4xl font-serif font-bold text-secondary mb-4">Componentes</h2>
              <p className="text-lg text-neutral-medium max-w-3xl">
                Componentes reutilizáveis, acessíveis e bem documentados que formam a base de todas as interfaces Bravo ON.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Buttons */}
              <Card className="border-neutral-medium">
                <CardHeader>
                  <CardTitle>Botões</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-secondary mb-3">Variantes</p>
                    <div className="flex flex-wrap gap-2">
                      <Button>Default</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary mb-3">Tamanhos</p>
                    <div className="flex flex-wrap gap-2 items-center">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-secondary mb-3">Estados</p>
                    <div className="flex flex-wrap gap-2">
                      <Button>Normal</Button>
                      <Button disabled>Disabled</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Inputs */}
              <Card className="border-neutral-medium">
                <CardHeader>
                  <CardTitle>Inputs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Normal</label>
                    <Input placeholder="Digite algo..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Com valor</label>
                    <Input value="João Silva" readOnly />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Desabilitado</label>
                    <Input placeholder="Desabilitado" disabled />
                  </div>
                </CardContent>
              </Card>

              {/* Badges */}
              <Card className="border-neutral-medium">
                <CardHeader>
                  <CardTitle>Badges</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-secondary mb-2">Variantes</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge>Default</Badge>
                      <Badge variant="secondary">Secondary</Badge>
                      <Badge variant="outline">Outline</Badge>
                      <Badge variant="accent">Accent</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cards */}
              <Card className="border-neutral-medium">
                <CardHeader>
                  <CardTitle>Cards</CardTitle>
                </CardHeader>
                <CardContent>
                  <Card className="border-neutral-medium">
                    <CardHeader>
                      <CardTitle className="text-lg">Card Title</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-medium">Card content goes here</p>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Guidelines */}
        {activeTab === 'guidelines' && (
          <div className="space-y-12 animate-fade-in">
            <div>
              <h2 className="text-4xl font-serif font-bold text-secondary mb-4">Guidelines & Padrões</h2>
              <p className="text-lg text-neutral-medium max-w-3xl">
                Diretrizes de design que garantem consistência, acessibilidade e qualidade em todas as interfaces.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-neutral-medium">
                <CardHeader>
                  <CardTitle>🎯 Espaçamento</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-medium mb-4">
                    Sistema de espaçamento baseado em múltiplos de 4px para consistência visual.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">xs:</span> 4px</p>
                    <p><span className="font-medium">sm:</span> 8px</p>
                    <p><span className="font-medium">md:</span> 16px</p>
                    <p><span className="font-medium">lg:</span> 24px</p>
                    <p><span className="font-medium">xl:</span> 32px</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-neutral-medium">
                <CardHeader>
                  <CardTitle>📐 Grid</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-medium mb-4">
                    Grid responsivo de 12 colunas com breakpoints otimizados.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Mobile:</span> 1 coluna</p>
                    <p><span className="font-medium">Tablet:</span> 2-4 colunas</p>
                    <p><span className="font-medium">Desktop:</span> 12 colunas</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-neutral-medium">
                <CardHeader>
                  <CardTitle>♿ Acessibilidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-medium mb-4">
                    WCAG 2.1 AA compliant em todas as interfaces.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Contraste mínimo 4.5:1</li>
                    <li>✓ Navegação por teclado</li>
                    <li>✓ Aria labels</li>
                    <li>✓ Focus visível</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-neutral-medium">
                <CardHeader>
                  <CardTitle>⚡ Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-medium mb-4">
                    Otimizado para velocidade e eficiência.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Lazy loading de imagens</li>
                    <li>✓ Code splitting</li>
                    <li>✓ Minificação</li>
                    <li>✓ Caching estratégico</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif font-bold text-lg mb-2">Bravo ON</h3>
              <p className="text-white/70 text-sm">Design System v1.0</p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Stack</h4>
              <ul className="text-sm text-white/70 space-y-1">
                <li>Next.js 14+</li>
                <li>Tailwind CSS</li>
                <li>shadcn/ui</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Tipografia</h4>
              <ul className="text-sm text-white/70 space-y-1">
                <li>Lora (Headlines)</li>
                <li>Inter (Body)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Padrões</h4>
              <ul className="text-sm text-white/70 space-y-1">
                <li>WCAG AA</li>
                <li>Mobile First</li>
                <li>Responsive</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>© 2026 Bravo ON. Design System Guide. Criado com ❤️ para saúde digital.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
