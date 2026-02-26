'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Heart, Lock, Zap, Users } from 'lucide-react'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2 })
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2 })
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary-dark/5 rounded-full blur-3xl"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px)` }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-medium"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.h1
            className="text-2xl font-serif font-bold text-secondary"
            whileHover={{ scale: 1.05 }}
          >
            Bravo ON
          </motion.h1>
          <div className="flex gap-4">
            <Button variant="ghost">Sobre</Button>
            <Button className="bg-primary hover:bg-primary-dark">Começar</Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="mb-6 inline-block">
            <Badge className="bg-primary/10 text-primary border-primary/20">
              ✨ Saúde Digital Revolucionária
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-7xl font-serif font-bold text-secondary mb-6 leading-tight"
          >
            Sua Saúde,
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Sua Privacidade
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-neutral-medium max-w-2xl mx-auto mb-12"
          >
            Soluções de saúde digital discretas, confiáveis e acessíveis. Porque sua saúde merece atenção profissional sem constrangimentos.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 justify-center flex-wrap mb-20"
          >
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white group">
              Começar Agora
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Saiba Mais
            </Button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { number: '50K+', label: 'Pacientes Satisfeitos' },
              { number: '98%', label: 'Taxa de Satisfação' },
              { number: '24/7', label: 'Suporte Disponível' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="p-6 bg-white rounded-lg shadow-lg border border-neutral-medium hover:shadow-xl transition-shadow"
                whileHover={{ y: -5 }}
              >
                <p className="text-3xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-neutral-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={ref1} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-serif font-bold text-secondary mb-4">
              Por que escolher Bravo ON?
            </h2>
            <p className="text-xl text-neutral-medium max-w-2xl mx-auto">
              Tudo que você precisa para cuidar da sua saúde com confiança e discrição.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
          >
            {[
              {
                icon: <Lock className="w-8 h-8" />,
                title: 'Consultas 100% Online',
                description: 'Conecte-se com profissionais de saúde sem sair de casa. Privacidade e segurança garantidas.',
                color: 'from-primary to-primary-dark',
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'Tratamentos Discretos',
                description: 'Soluções para queda de cabelo, baixa potência e outros problemas com total confidencialidade.',
                color: 'from-accent to-primary',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'Entrega em Casa',
                description: 'Medicamentos entregues com embalagem 100% discreta. Sem constrangimentos.',
                color: 'from-primary-dark to-accent',
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: 'Suporte 24/7',
                description: 'Equipe de profissionais disponível para tirar dúvidas e acompanhar seu tratamento.',
                color: 'from-secondary to-primary',
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="border-neutral-medium hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      {feature.icon}
                    </div>
                    <CardTitle className="text-2xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-medium text-lg">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={ref2} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-primary-dark text-white">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl font-serif font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Como Funciona
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView2 ? 'visible' : 'hidden'}
          >
            {[
              { step: 1, title: 'Avaliação Online', desc: 'Responda um questionário rápido e seguro' },
              { step: 2, title: 'Consulta com Profissional', desc: 'Converse com um especialista' },
              { step: 3, title: 'Plano Personalizado', desc: 'Receba seu tratamento customizado' },
              { step: 4, title: 'Entrega Discreta', desc: 'Receba em casa com privacidade' },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold mb-4 border-2 border-white/30"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-0.5 bg-white/30" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section ref={ref3} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl font-serif font-bold text-center text-secondary mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            O que nossos pacientes dizem
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView3 ? 'visible' : 'hidden'}
          >
            {[
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
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <Card className="border-neutral-medium hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-4xl">{testimonial.avatar}</div>
                      <div>
                        <p className="font-medium text-secondary">{testimonial.name}</p>
                        <p className="text-sm text-neutral-medium">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-neutral-medium italic mb-4">"{testimonial.text}"</p>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-primary">
                          ⭐
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-12 text-white text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
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
          </motion.div>
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
