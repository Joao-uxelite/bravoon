'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Lock, Zap, Users, Heart, Shield } from 'lucide-react'

export default function BravoONTeste1() {
  const [scrollY, setScrollY] = useState(0)

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2 })
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2 })
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.2 })
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
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
      </div>

      {/* Navigation */}
      <motion.nav
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-medium"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.h1 className="text-2xl font-serif font-bold text-secondary" whileHover={{ scale: 1.05 }}>
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
            <Badge className="bg-primary/10 text-primary border-primary/20">✨ Saúde Digital Revolucionária</Badge>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl font-serif font-bold text-secondary mb-6 leading-tight">
            Rotina que cabe na vida real.
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Tratamentos online.
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-neutral-medium max-w-2xl mx-auto mb-4">
            Sem exposição, sem perda de tempo, sem sair de casa.
          </motion.p>

          <motion.p variants={itemVariants} className="text-lg text-neutral-medium max-w-3xl mx-auto mb-12">
            Nós cuidamos dos seus problemas de saúde e bem-estar, sem sair de casa. A Bravo ON é seu ecossistema de saúde digital para tratamentos online, com:
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col gap-3 max-w-2xl mx-auto mb-12 text-left">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-lg text-secondary">Consulta 100% online e confidencial</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-lg text-secondary">Tratamento validado por profissionais de saúde</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-lg text-secondary">Entrega em casa com embalagem 100% discreta</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap mb-20">
            <Button size="lg" className="bg-primary hover:bg-primary-dark text-white group">
              Fazer a Consulta Online
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              Conhecer o Protocolo
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Consulta Online', icon: '💻' },
              { label: 'Medicamentos Originais', icon: '💊' },
              { label: 'Entregas Gratuitas', icon: '📦' },
            ].map((stat, i) => (
              <motion.div key={i} variants={itemVariants} className="p-6 bg-white rounded-lg shadow-lg border border-neutral-medium" whileHover={{ y: -5 }}>
                <p className="text-3xl mb-2">{stat.icon}</p>
                <p className="text-neutral-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* The Problem Section */}
      <section ref={ref1} className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-light">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-serif font-bold text-secondary mb-4">O Problema</h2>
            <h3 className="text-3xl font-serif font-bold text-primary mb-8">A Paralisia Invisível do Primeiro Passo</h3>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView1 ? 'visible' : 'hidden'}
          >
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-primary">
              <p className="text-lg text-neutral-medium mb-4">
                Você sabe que tem algo incomodando. O espelho, a hora H, o cansaço sem fim.
              </p>
              <p className="text-lg text-neutral-medium mb-4">
                Mas só de pensar em marcar consulta, esperar em sala cheia e falar disso cara a cara… já dá aquela "preguiça" e você adia.
              </p>
              <p className="text-lg text-secondary font-semibold">
                O problema não é falta de tratamento. É o modelo antigo de cuidado, que exige sua energia e seu tempo quando você só queria praticidade.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-lg text-neutral-medium">
                Distância, burocracia e medo de julgamento travam o primeiro passo. Não é você, é o sistema que está totalmente defasado.
              </p>
              <p className="text-lg text-neutral-medium mt-4">
                Resultado: você sofre em silêncio — e a ansiedade cresce junto com a sensação de perder o controle.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section ref={ref2} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-serif font-bold text-secondary mb-4">Solução: Protocolo Bravo ON</h2>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
              Um sistema completo para retomar o controle da sua saúde e bem-estar com agilidade, sem consulta presencial e sem a burocracia que faz você adiar.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView2 ? 'visible' : 'hidden'}
          >
            {[
              {
                icon: <Lock className="w-8 h-8" />,
                title: 'O Diagnóstico da Confiança',
                desc: 'Avaliação online, 100% confidencial',
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: 'O Plano de Ação Personalizado',
                desc: 'Plano individual validado por médico',
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: 'A Caixa da Tranquilidade',
                desc: 'Tratamento chegando em casa, em embalagem neutra',
              },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -10 }}>
                <Card className="border-neutral-medium hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-medium">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 p-8 bg-primary/10 rounded-lg border border-primary/20 text-center"
          >
            <p className="text-lg text-secondary font-semibold">
              Se o que mais te trava hoje é a burocracia da consulta presencial, esse protocolo foi desenhado exatamente para você.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={ref3} className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-light">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-serif font-bold text-secondary mb-4">Por onde você quer começar?</h2>
            <p className="text-xl text-neutral-medium max-w-3xl mx-auto">
              Escolha a área que mais está pesando no seu dia a dia — e comece com um cuidado 100% online, discreto e validado por profissionais de saúde.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView3 ? 'visible' : 'hidden'}
          >
            {[
              {
                title: 'Tratar Queda de Cabelo (Bravo Hair)',
                desc: 'Recupere a segurança ao se olhar no espelho com um tratamento capilar completo, com avaliação online e orientação profissional — sem clínica e com entrega discreta em casa.',
                icon: '💇',
              },
              {
                title: 'Superar a Baixa Potência na cama (Bravo Max)',
                desc: 'Deixe o medo de falhar na hora H no passado com um plano terapêutico discreto, seguro e acompanhado, do jeito certo — sem constrangimento e com entrega em casa.',
                icon: '💪',
              },
            ].map((product, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -10 }}>
                <Card className="border-neutral-medium hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <CardTitle className="text-2xl">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-medium mb-6">{product.desc}</p>
                    <Button className="w-full bg-primary hover:bg-primary-dark">
                      Começar Agora
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section ref={ref4} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary to-primary-dark text-white">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-5xl font-serif font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            Como funciona o Protocolo Bravo ON?
          </motion.h2>

          <motion.p
            className="text-xl text-center text-white/80 max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0 }}
            animate={inView4 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Um processo simples, discreto e guiado — do começo ao fim.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView4 ? 'visible' : 'hidden'}
          >
            {[
              {
                step: 1,
                title: 'Avaliação 100% online e confidencial',
                desc: 'Você responde a um questionário rápido e em um ambiente seguro, discreto e sem julgamentos.',
              },
              {
                step: 2,
                title: 'Plano de tratamento só para você',
                desc: 'Com base na avaliação, o profissional define um plano individual, adequado ao seu caso.',
              },
              {
                step: 3,
                title: 'Entrega em casa com embalagem discreta',
                desc: 'Seu tratamento é enviado para sua casa em embalagem neutra — com velocidade e descrição.',
              },
              {
                step: 4,
                title: 'Acompanhamento contínuo Bravo ON',
                desc: 'Você acompanha tudo pelo celular, tira dúvidas com a equipe de saúde e ajusta o plano quando necessário.',
              },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ scale: 1.05 }}>
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-bold mb-4 border-2 border-white/30"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {item.step}
                  </motion.div>
                  <h3 className="text-lg font-medium mb-2">{item.title}</h3>
                  <p className="text-white/70 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-serif font-bold text-secondary mb-4">Por que complicar se pode simplificar com a Bravo ON?</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Chega de Sentir vergonha',
                icon: <Shield className="w-8 h-8" />,
                desc: 'Todo o processo é pensado para proteger sua privacidade do começo ao fim.',
              },
              {
                title: 'Chega de Perder tempo',
                icon: <Zap className="w-8 h-8" />,
                desc: 'Nós levamos consulta, tratamento e o medicamento até você, em um único fluxo, com zero esforço.',
              },
              {
                title: 'Chega de Tratamentos genéricos',
                icon: <Heart className="w-8 h-8" />,
                desc: 'Você tem avaliação individual, plano personalizado e acompanhamento durante a jornada de cuidado.',
              },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -10 }}>
                <Card className="border-neutral-medium hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-medium">{item.desc}</p>
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
            <h2 className="text-4xl font-serif font-bold mb-4">Pronto para começar?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Praticidade para você. Seriedade para a saúde.
            </p>
            <Button size="lg" className="bg-white text-primary hover:bg-neutral-light">
              Fazer a Consulta Online
            </Button>
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
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Empresa</h4>
              <ul className="text-sm text-white/70 space-y-1">
                <li>Sobre</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Legal</h4>
              <ul className="text-sm text-white/70 space-y-1">
                <li>Privacidade</li>
                <li>Termos</li>
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
