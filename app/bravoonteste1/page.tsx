'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function BravoONTeste1() {
  const [scrollY, setScrollY] = useState(0)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      title: 'Consultas 100% Online',
      description: 'Conecte-se com profissionais de saúde sem sair de casa. Privacidade e segurança garantidas.',
      icon: '💻',
      color: 'from-primary to-primary-dark',
    },
    {
      title: 'Tratamentos Discretos',
      description: 'Soluções para queda de cabelo, baixa potência e outros problemas com total confidencialidade.',
      icon: '🔒',
      color: 'from-accent to-primary',
    },
    {
      title: 'Entrega em Casa',
      description: 'Medicamentos entregues com embalagem 100% discreta. Sem constrangimentos.',
      icon: '📦',
      color: 'from-primary-dark to-accent',
    },
    {
      title: 'Suporte 24/7',
      description: 'Equipe de profissionais disponível para tirar dúvidas e acompanhar seu tratamento.',
      icon: '🤝',
      color: 'from-secondary to-primary',
    },
  ]

  const testimonials = [
    {
      name: 'João Silva',
      role: 'Paciente Bravo Hair',
      text: 'Recuperei minha confiança em 3 meses. Processo simples e discreto.',
      avatar: '👨‍💼',
    },
    {
      name: 'Maria Santos',
      role: 'Paciente Bravo Max',
      text: 'Finalmente uma solução que funciona. Recomendo para todos os meus amigos.',
      avatar: '👩‍💼',
    },
    {
      name: 'Carlos Oliveira',
      role: 'Paciente Bravo Hair',
      text: 'O atendimento foi excelente. Sinto-me muito mais seguro agora.',
      avatar: '👨‍🔬',
    },
  ]

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-medium">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-serif font-bold text-secondary">Bravo ON</h1>
          <div className="flex gap-4">
            <Button variant="ghost">Sobre</Button>
            <Button>Começar</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div
            className="mb-6 inline-block"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          >
            <Badge className="bg-primary/10 text-primary border-primary/20">
              ✨ Saúde Digital Revolucionária
            </Badge>
          </div>

          <h1
            className="text-6xl md:text-7xl font-serif font-bold text-secondary mb-6 leading-tight"
            style={{ transform: `translateY(${scrollY * 0.15}px)` }}
          >
            Sua Saúde,
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Sua Privacidade
            </span>
          </h1>

          <p
            className="text-xl text-neutral-medium max-w-2xl mx-auto mb-12"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            Soluções de saúde digital discretas, confiáveis e acessíveis. Porque sua saúde merece atenção profissional sem constrangimentos.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
              Começar Agora
            </Button>
            <Button size="lg" variant="outline">
              Saiba Mais
            </Button>
          </div>

          {/* Floating Cards */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: '50K+', label: 'Pacientes Satisfeitos' },
              { number: '98%', label: 'Taxa de Satisfação' },
              { number: '24/7', label: 'Suporte Disponível' },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 bg-white rounded-lg shadow-lg border border-neutral-medium hover:shadow-xl transition-shadow"
                style={{
                  transform: `translateY(${Math.sin(scrollY * 0.01 + i) * 10}px)`,
                }}
              >
                <p className="text-3xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-neutral-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-secondary mb-4">
              Por que escolher Bravo ON?
            </h2>
            <p className="text-xl text-neutral-medium max-w-2xl mx-auto">
              Tudo que você precisa para cuidar da sua saúde com confiança e discrição.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => (
              <div
                key={i}
                className="group cursor-pointer"
                onClick={() => setActiveFeature(i)}
              >
                <Card
                  className={`border-neutral-medium hover:shadow-xl transition-all duration-300 ${
                    activeFeature === i ? 'ring-2 ring-primary' : ''
                  }`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-5xl">{feature.icon}</div>
                      <Badge variant="outline">{i + 1}</Badge>
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-medium text-lg">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif font-bold text-center mb-16">
            Como Funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Avaliação Online', desc: 'Responda um questionário rápido e seguro' },
              { step: 2, title: 'Consulta com Profissional', desc: 'Converse com um especialista' },
              { step: 3, title: 'Plano Personalizado', desc: 'Receba seu tratamento customizado' },
              { step: 4, title: 'Entrega Discreta', desc: 'Receba em casa com privacidade' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-white/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-serif font-bold text-center text-secondary mb-16">
            O que nossos pacientes dizem
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <Card
                key={i}
                className="border-neutral-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-4xl">{testimonial.avatar}</div>
                    <div>
                      <p className="font-medium text-secondary">{testimonial.name}</p>
                      <p className="text-sm text-neutral-medium">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-neutral-medium italic">"{testimonial.text}"</p>
                  <div className="flex gap-1 mt-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary">
                        ⭐
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-12 text-white text-center">
            <h2 className="text-4xl font-serif font-bold mb-4">
              Pronto para transformar sua saúde?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Comece sua jornada de saúde digital hoje. Sem compromissos, sem constrangimentos.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-white text-primary hover:bg-neutral-light">
                Começar Agora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Agendar Consulta
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif font-bold text-lg mb-2">Bravo ON</h3>
              <p className="text-white/70 text-sm">Saúde Digital Revolucionária</p>
            </div>
            <div>
              <h4 className="font-medium mb-3">Produtos</h4>
              <ul className="text-sm text-white/70 space-y-1">
                <li>Bravo Hair</li>
                <li>Bravo Max</li>
                <li>Bravo Saúde</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Empresa</h4>
              <ul className="text-sm text-white/70 space-y-1">
                <li>Sobre</li>
                <li>Blog</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Legal</h4>
              <ul className="text-sm text-white/70 space-y-1">
                <li>Privacidade</li>
                <li>Termos</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>© 2026 Bravo ON. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
