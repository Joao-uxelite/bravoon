'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'

const colors = [
  { name: 'Primary', hex: '#A67130', usage: 'CTAs, Headlines, Accents' },
  { name: 'Primary Dark', hex: '#8B5A24', usage: 'Hover states' },
  { name: 'Secondary', hex: '#312F1F', usage: 'Backgrounds, Main text' },
  { name: 'Accent', hex: '#5B819E', usage: 'Secondary elements, Links' },
  { name: 'Neutral Light', hex: '#F3EEE3', usage: 'Card backgrounds' },
  { name: 'Neutral Medium', hex: '#B5ADA4', usage: 'Borders, Disabled states' },
  { name: 'Neutral Dark', hex: '#EBDFD6', usage: 'Subtle backgrounds' },
  { name: 'Dark', hex: '#363636', usage: 'Text, Dark elements' },
]

const typography = [
  { name: 'H1', size: '48px', weight: '700', font: 'Lora', lineHeight: '1.2' },
  { name: 'H2', size: '36px', weight: '700', font: 'Lora', lineHeight: '1.3' },
  { name: 'H3', size: '24px', weight: '700', font: 'Lora', lineHeight: '1.4' },
  { name: 'Body', size: '16px', weight: '400', font: 'Inter', lineHeight: '1.6' },
  { name: 'Small', size: '14px', weight: '400', font: 'Inter', lineHeight: '1.5' },
  { name: 'Caption', size: '12px', weight: '400', font: 'Inter', lineHeight: '1.4' },
]

const sections = [
  { id: 'colors', label: 'Cores' },
  { id: 'typography', label: 'Tipografia' },
  { id: 'buttons', label: 'Botões' },
  { id: 'cards', label: 'Cards' },
  { id: 'forms', label: 'Formulários' },
  { id: 'badges', label: 'Badges' },
]

export default function DesignSystem() {
  const [activeSection, setActiveSection] = useState('colors')

  return (
    <div className="min-h-screen bg-neutral-light">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-medium shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-h2 font-serif font-bold text-secondary">Bravo ON</h1>
              <p className="text-small text-neutral-medium mt-1">Design System</p>
            </div>
            <Badge variant="accent">v1.0</Badge>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <nav className="sticky top-24 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-md transition-smooth ${
                    activeSection === section.id
                      ? 'bg-primary text-white font-medium'
                      : 'text-secondary hover:bg-neutral-light'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            {/* CORES */}
            {activeSection === 'colors' && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-h2 font-serif font-bold text-secondary mb-2">Paleta de Cores</h2>
                  <p className="text-body text-neutral-medium">Cores principais do Design System Bravo ON</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {colors.map((color) => (
                    <Card key={color.hex} className="overflow-hidden hover-scale">
                      <div className="h-24" style={{ backgroundColor: color.hex }} />
                      <CardContent className="pt-4">
                        <h3 className="font-serif font-bold text-secondary">{color.name}</h3>
                        <p className="text-small text-neutral-medium font-mono mt-1">{color.hex}</p>
                        <p className="text-small text-neutral-medium mt-2">{color.usage}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* TIPOGRAFIA */}
            {activeSection === 'typography' && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-h2 font-serif font-bold text-secondary mb-2">Tipografia</h2>
                  <p className="text-body text-neutral-medium">Hierarquia tipográfica com Lora (headlines) e Inter (body)</p>
                </div>

                <div className="space-y-4">
                  {typography.map((type) => (
                    <Card key={type.name} className="hover-scale">
                      <CardContent className="pt-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="font-serif font-bold text-secondary">{type.name}</h3>
                            <p className="text-small text-neutral-medium">
                              {type.font} • {type.size} • Weight {type.weight} • Line-height {type.lineHeight}
                            </p>
                          </div>
                          <Badge variant="outline">{type.font}</Badge>
                        </div>
                        <div
                          style={{
                            fontSize: type.size,
                            fontWeight: type.weight as any,
                            lineHeight: type.lineHeight,
                            fontFamily: type.font === 'Lora' ? 'Lora, serif' : 'Inter, sans-serif',
                          }}
                          className="text-secondary"
                        >
                          {type.name === 'H1' && 'Rotina que cabe na vida real'}
                          {type.name === 'H2' && 'A Paralisia Invisível do Primeiro Passo'}
                          {type.name === 'H3' && 'Por que complicar se pode simplificar?'}
                          {type.name === 'Body' && 'Nós cuidamos dos seus problemas de saúde e bem-estar, sem sair de casa.'}
                          {type.name === 'Small' && 'Consulta 100% online e confidencial'}
                          {type.name === 'Caption' && 'Entrega em casa com embalagem 100% discreta'}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* BOTÕES */}
            {activeSection === 'buttons' && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-h2 font-serif font-bold text-secondary mb-2">Botões</h2>
                  <p className="text-body text-neutral-medium">Variações de botões com diferentes estados</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Variantes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <p className="text-small font-medium text-secondary">Default</p>
                      <div className="flex flex-wrap gap-3">
                        <Button>Fazer a Consulta Online</Button>
                        <Button disabled>Desabilitado</Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-small font-medium text-secondary">Secondary</p>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="secondary">Conhecer o Protocolo</Button>
                        <Button variant="secondary" disabled>Desabilitado</Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-small font-medium text-secondary">Outline</p>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="outline">Começar com Bravo Hair</Button>
                        <Button variant="outline" disabled>Desabilitado</Button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-small font-medium text-secondary">Ghost</p>
                      <div className="flex flex-wrap gap-3">
                        <Button variant="ghost">Saiba Mais</Button>
                        <Button variant="ghost" disabled>Desabilitado</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tamanhos</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-3 items-center">
                      <Button size="sm">Small</Button>
                      <Button size="default">Default</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* CARDS */}
            {activeSection === 'cards' && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-h2 font-serif font-bold text-secondary mb-2">Cards</h2>
                  <p className="text-body text-neutral-medium">Componentes de card para diferentes contextos</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="hover-scale">
                    <CardHeader>
                      <CardTitle>Tratar Queda de Cabelo</CardTitle>
                      <CardDescription>Bravo Hair</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body text-neutral-medium mb-4">
                        Recupere a segurança ao se olhar no espelho com um tratamento capilar completo.
                      </p>
                      <Button className="w-full">Começar com Bravo Hair</Button>
                    </CardContent>
                  </Card>

                  <Card className="hover-scale">
                    <CardHeader>
                      <CardTitle>Superar a Baixa Potência</CardTitle>
                      <CardDescription>Bravo Max</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-body text-neutral-medium mb-4">
                        Deixe o medo de falhar no passado com um plano terapêutico discreto e seguro.
                      </p>
                      <Button className="w-full">Começar com Bravo Max</Button>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Protocolo Bravo ON</CardTitle>
                    <CardDescription>Um processo simples, discreto e guiado</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                          1
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-secondary">Avaliação 100% online</h4>
                          <p className="text-small text-neutral-medium mt-1">Você responde a um questionário rápido em um ambiente seguro.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                          2
                        </div>
                        <div>
                          <h4 className="font-serif font-bold text-secondary">Plano personalizado</h4>
                          <p className="text-small text-neutral-medium mt-1">O profissional define um plano individual adequado ao seu caso.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* FORMULÁRIOS */}
            {activeSection === 'forms' && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-h2 font-serif font-bold text-secondary mb-2">Formulários</h2>
                  <p className="text-body text-neutral-medium">Componentes de entrada de dados</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Exemplo de Formulário</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-small font-medium text-secondary mb-2">
                        Nome Completo
                      </label>
                      <Input placeholder="João Silva" />
                    </div>

                    <div>
                      <label className="block text-small font-medium text-secondary mb-2">
                        Email
                      </label>
                      <Input type="email" placeholder="joao@example.com" />
                    </div>

                    <div>
                      <label className="block text-small font-medium text-secondary mb-2">
                        Telefone
                      </label>
                      <Input type="tel" placeholder="(11) 99999-9999" />
                    </div>

                    <div>
                      <label className="block text-small font-medium text-secondary mb-2">
                        Mensagem
                      </label>
                      <textarea
                        className="flex w-full rounded-input border border-neutral-medium bg-white px-3 py-2 text-sm placeholder:text-neutral-medium focus-ring"
                        placeholder="Sua mensagem aqui..."
                        rows={4}
                      />
                    </div>

                    <Button className="w-full">Enviar</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Estados de Input</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <label className="block text-small font-medium text-secondary mb-2">
                        Normal
                      </label>
                      <Input placeholder="Digite algo..." />
                    </div>

                    <div>
                      <label className="block text-small font-medium text-secondary mb-2">
                        Desabilitado
                      </label>
                      <Input placeholder="Desabilitado" disabled />
                    </div>

                    <div>
                      <label className="block text-small font-medium text-secondary mb-2">
                        Com valor
                      </label>
                      <Input value="João Silva" readOnly />
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* BADGES */}
            {activeSection === 'badges' && (
              <div className="space-y-6 animate-fade-in">
                <div>
                  <h2 className="text-h2 font-serif font-bold text-secondary mb-2">Badges</h2>
                  <p className="text-body text-neutral-medium">Componentes de etiqueta para categorização</p>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Variantes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <p className="text-small font-medium text-secondary">Default</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Consulta Online</Badge>
                        <Badge>Entrega Discreta</Badge>
                        <Badge>100% Confidencial</Badge>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-small font-medium text-secondary">Secondary</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Bravo Hair</Badge>
                        <Badge variant="secondary">Bravo Max</Badge>
                        <Badge variant="secondary">Suporte</Badge>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-small font-medium text-secondary">Outline</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Novo</Badge>
                        <Badge variant="outline">Popular</Badge>
                        <Badge variant="outline">Recomendado</Badge>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-small font-medium text-secondary">Accent</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="accent">Premium</Badge>
                        <Badge variant="accent">Exclusivo</Badge>
                        <Badge variant="accent">Destaque</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-secondary text-white mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-serif font-bold text-lg mb-2">Bravo ON</h3>
              <p className="text-neutral-medium text-sm">Design System v1.0</p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Stack</h4>
              <ul className="text-sm text-neutral-medium space-y-1">
                <li>Next.js 14+</li>
                <li>Tailwind CSS</li>
                <li>shadcn/ui</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Tipografia</h4>
              <ul className="text-sm text-neutral-medium space-y-1">
                <li>Lora (Headlines)</li>
                <li>Inter (Body)</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-neutral-medium pt-8 text-center text-sm text-neutral-medium">
            <p>© 2026 Bravo ON. Design System Guide.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
