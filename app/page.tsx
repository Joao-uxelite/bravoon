'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-light to-white">
      {/* Header */}
      <header className="bg-white border-b border-neutral-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-h1 font-serif font-bold text-secondary">Bravo ON</h1>
              <p className="text-body text-neutral-medium mt-2">Ecossistema de Saúde Digital</p>
            </div>
            <Badge variant="accent">Design System</Badge>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-serif font-bold text-secondary mb-4">
            Bem-vindo ao Design System
          </h2>
          <p className="text-body text-neutral-medium max-w-2xl mx-auto mb-8">
            Guia completo de componentes, cores, tipografia e padrões de design para o site Bravo ON.
            Navegue pelas seções para explorar todos os elementos do sistema.
          </p>
          <Link href="/design-system">
            <Button size="lg">Explorar Design System</Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-h2 font-serif font-bold text-secondary mb-8 text-center">
          O que você encontrará
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-card-hover transition-smooth">
            <CardHeader>
              <CardTitle>🎨 Paleta de Cores</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-body text-neutral-medium">
                8 cores principais com uso específico para cada contexto do design.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card-hover transition-smooth">
            <CardHeader>
              <CardTitle>🔤 Tipografia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-body text-neutral-medium">
                Hierarquia completa com Lora (headlines) e Inter (body text).
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card-hover transition-smooth">
            <CardHeader>
              <CardTitle>🔘 Componentes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-body text-neutral-medium">
                Botões, cards, inputs, badges e outros componentes reutilizáveis.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card-hover transition-smooth">
            <CardHeader>
              <CardTitle>📐 Grid & Spacing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-body text-neutral-medium">
                Sistema de espaçamento consistente para desktop, tablet e mobile.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card-hover transition-smooth">
            <CardHeader>
              <CardTitle>✨ Animações</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-body text-neutral-medium">
                Transições suaves e animações com suporte a reduced-motion.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-card-hover transition-smooth">
            <CardHeader>
              <CardTitle>♿ Acessibilidade</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-body text-neutral-medium">
                WCAG AA compliant com contraste adequado e navegação por teclado.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stack */}
      <section className="bg-secondary text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-h2 font-serif font-bold mb-8 text-center">Stack Tecnológico</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h4 className="font-serif font-bold text-lg mb-2">Framework</h4>
              <p className="text-neutral-medium">Next.js 14+</p>
            </div>
            <div className="text-center">
              <h4 className="font-serif font-bold text-lg mb-2">Styling</h4>
              <p className="text-neutral-medium">Tailwind CSS</p>
            </div>
            <div className="text-center">
              <h4 className="font-serif font-bold text-lg mb-2">Components</h4>
              <p className="text-neutral-medium">shadcn/ui</p>
            </div>
            <div className="text-center">
              <h4 className="font-serif font-bold text-lg mb-2">Animations</h4>
              <p className="text-neutral-medium">Framer Motion</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-primary to-primary-dark rounded-card p-12 text-white text-center">
          <h3 className="text-h2 font-serif font-bold mb-4">Pronto para começar?</h3>
          <p className="text-body mb-8 max-w-2xl mx-auto">
            Explore o Design System completo e veja todos os componentes, cores e padrões de design.
          </p>
          <Link href="/design-system">
            <Button variant="ghost" size="lg" className="text-white border-white hover:bg-white hover:text-primary">
              Acessar Design System
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-neutral-medium">© 2026 Bravo ON. Design System Guide.</p>
        </div>
      </footer>
    </div>
  )
}
