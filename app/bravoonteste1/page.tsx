'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Mail, Phone, MapPin } from 'lucide-react'

export default function BravoONTeste1() {
  const [scrollY, setScrollY] = useState(0)
  const [carouselIndex, setCarouselIndex] = useState(0)
  const [resourceIndex, setResourceIndex] = useState(0)

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

  const videos = [
    { title: 'Como Começar Seu Tratamento Online', views: '45K' },
    { title: 'Protocolo Bravo ON Explicado', views: '32K' },
    { title: 'Histórias de Sucesso - Bravo Hair', views: '28K' },
    { title: 'Bravo Max: Transformando Vidas', views: '51K' },
    { title: 'Perguntas Frequentes Respondidas', views: '19K' },
  ]

  const resources = [
    { title: 'Guia Completo de Tratamento', type: 'PDF' },
    { title: 'Checklist de Bem-estar', type: 'Checklist' },
    { title: 'Protocolo Passo a Passo', type: 'Guide' },
    { title: 'Histórias de Transformação', type: 'Stories' },
    { title: 'FAQ Completo', type: 'FAQ' },
  ]

  const nextVideo = () => setCarouselIndex((prev) => (prev + 1) % videos.length)
  const prevVideo = () => setCarouselIndex((prev) => (prev - 1 + videos.length) % videos.length)
  const nextResource = () => setResourceIndex((prev) => (prev + 1) % resources.length)
  const prevResource = () => setResourceIndex((prev) => (prev - 1 + resources.length) % resources.length)

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/10 to-transparent rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.h1 className="text-2xl font-serif font-bold text-secondary" whileHover={{ scale: 1.05 }}>
            Bravo ON
          </motion.h1>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-neutral-600">
              Sobre
            </Button>
            <Button className="bg-primary hover:bg-primary-dark text-white">
              Começar
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section with Image */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="flex flex-col justify-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants} className="mb-6">
                <Badge className="bg-primary/10 text-primary border-primary/20 text-sm">
                  👋 Bem-vindo à Revolução da Saúde Digital
                </Badge>
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="text-6xl md:text-7xl font-serif font-bold text-secondary mb-6 leading-tight"
              >
                Rotina que cabe na vida real.
              </motion.h1>

              <motion.p variants={itemVariants} className="text-2xl text-primary font-semibold mb-4">
                Tratamentos online, sem exposição.
              </motion.p>

              <motion.p variants={itemVariants} className="text-lg text-neutral-600 mb-8 max-w-xl">
                Nós cuidamos dos seus problemas de saúde e bem-estar, sem sair de casa. Consulta 100% online, tratamento validado e entrega discreta.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col gap-3 mb-12">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-neutral-700">Consulta 100% online e confidencial</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-neutral-700">Tratamento validado por profissionais</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-neutral-700">Entrega em casa com embalagem discreta</span>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex gap-4 flex-wrap">
                <Button size="lg" className="bg-primary hover:bg-primary-dark text-white group">
                  Fazer Consulta Online
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-neutral-300">
                  Conhecer Protocolo
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative h-96 lg:h-full min-h-96"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=600&fit=crop"
                  alt="Saúde Digital"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Social Proof */}
          <motion.div
            className="mt-20 pt-12 border-t border-neutral-200"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-center text-neutral-600 mb-8 font-medium">Confiado por mais de 50.000 pessoas</p>
            <div className="flex justify-center gap-8 flex-wrap items-center">
              {['TechCrunch', 'Forbes', 'Wired', 'The Verge'].map((brand, i) => (
                <motion.div key={i} variants={itemVariants} className="text-neutral-400 font-semibold">
                  {brand}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA - Prominent Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4 text-center">
              Junte-se a 50.000+ pessoas
            </h2>
            <p className="text-lg text-neutral-600 text-center mb-8">
              Receba dicas exclusivas sobre saúde digital, bem-estar e transformação pessoal direto no seu email.
            </p>

            <form className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="flex-1 px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="bg-primary hover:bg-primary-dark text-white px-8">
                  Inscrever
                </Button>
              </div>
              <p className="text-sm text-neutral-500 text-center">
                Sem spam. Apenas conteúdo valioso. Cancele quando quiser.
              </p>
            </form>

            <div className="mt-8 pt-8 border-t border-neutral-200 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-primary">50K+</p>
                <p className="text-sm text-neutral-600">Inscritos</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">98%</p>
                <p className="text-sm text-neutral-600">Satisfação</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-neutral-600">Suporte</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How Can I Help You - Grid Section */}
      <section ref={ref1} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-serif font-bold text-secondary mb-4">Como posso ajudar você?</h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Escolha a área que mais está pesando no seu dia a dia e comece sua transformação.
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
                icon: '💇',
                title: 'Tratar Queda de Cabelo',
                desc: 'Recupere a confiança com nosso protocolo capilar completo, 100% online.',
                link: 'Começar com Bravo Hair',
              },
              {
                icon: '💪',
                title: 'Superar Baixa Performance',
                desc: 'Deixe o medo no passado com um plano terapêutico discreto e seguro.',
                link: 'Começar com Bravo Max',
              },
              {
                icon: '😴',
                title: 'Melhorar Qualidade do Sono',
                desc: 'Durma melhor com orientações personalizadas de um especialista.',
                link: 'Explorar Protocolo de Sono',
              },
              {
                icon: '🧠',
                title: 'Aumentar Foco e Produtividade',
                desc: 'Recupere sua concentração com técnicas comprovadas e acompanhamento.',
                link: 'Descobrir Protocolo Cognitivo',
              },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants} whileHover={{ y: -10 }}>
                <Card className="border-neutral-200 hover:shadow-2xl transition-all duration-300 h-full group cursor-pointer">
                  <CardHeader>
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-neutral-600 mb-6">{item.desc}</p>
                    <a href="#" className="text-primary font-semibold hover:underline flex items-center gap-2">
                      {item.link}
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Promotional Section - Side by Side */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              className="relative h-96 lg:h-full min-h-96 order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=600&fit=crop"
                  alt="Bravo ON Kit"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">✨ Exclusivo</Badge>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
                Kit Completo Bravo ON
              </h2>
              <p className="text-lg text-neutral-600 mb-4">
                Tudo que você precisa para começar sua transformação em um único lugar. Consulta, tratamento e acompanhamento profissional.
              </p>
              <p className="text-lg text-neutral-600 mb-8">
                Receba em casa com embalagem 100% discreta e comece a ver resultados em 30 dias.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Avaliação online com especialista',
                  'Plano personalizado para seu caso',
                  'Medicamentos originais',
                  'Acompanhamento contínuo',
                  'Suporte 24/7',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-neutral-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white">
                Conhecer o Kit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={ref2} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              className="relative h-96 lg:h-full min-h-96"
              initial={{ opacity: 0, x: -50 }}
              animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=600&fit=crop"
                  alt="Sobre Bravo ON"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              ref={ref2}
              initial={{ opacity: 0, x: 50 }}
              animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-serif font-bold text-secondary mb-6">
                Sobre a Bravo ON
              </h2>
              <p className="text-lg text-neutral-600 mb-4">
                Nascemos com uma missão simples: remover as barreiras que impedem as pessoas de cuidar da sua saúde e bem-estar.
              </p>
              <p className="text-lg text-neutral-600 mb-4">
                Sabemos que a burocracia, o medo do julgamento e a falta de tempo são os maiores inimigos da transformação pessoal. Por isso, criamos um protocolo que coloca você em primeiro lugar.
              </p>
              <p className="text-lg text-neutral-600 mb-8">
                Hoje, mais de 50.000 pessoas confiam em nós para sua saúde digital. E você? Está pronto para começar?
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-3xl font-bold text-primary">50K+</p>
                  <p className="text-neutral-600">Pessoas Transformadas</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">98%</p>
                  <p className="text-neutral-600">Taxa de Satisfação</p>
                </div>
              </div>

              <Button size="lg" variant="outline" className="border-neutral-300">
                Ler Nossa História Completa
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Videos Carousel */}
      <section ref={ref3} className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-serif font-bold text-secondary mb-4">Assista Meus Vídeos Mais Populares</h2>
            <p className="text-xl text-neutral-600">Aprenda com conteúdo que já ajudou milhares de pessoas</p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={inView3 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {videos.slice(carouselIndex, carouselIndex + 3).map((video, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <Card className="border-neutral-200 hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-${1576091160550 + i}?w=400&h=300&fit=crop`}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-8 border-l-primary border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-primary transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-neutral-600">{video.views} visualizações</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Carousel Controls */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prevVideo}
                className="p-3 rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-neutral-600" />
              </button>
              <button
                onClick={nextVideo}
                className="p-3 rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-neutral-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Carousel */}
      <section ref={ref4} className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-serif font-bold text-secondary mb-4">Confira Meus Recursos Mais Populares</h2>
            <p className="text-xl text-neutral-600">Ferramentas e guias para sua transformação</p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={inView4 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {resources.slice(resourceIndex, resourceIndex + 3).map((resource, i) => (
                <motion.div key={i} whileHover={{ y: -10 }}>
                  <Card className="border-neutral-200 hover:shadow-xl transition-all duration-300 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center mb-4 text-xl">
                        📄
                      </div>
                      <CardTitle className="text-xl">{resource.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-neutral-600 mb-6">{resource.type}</p>
                      <a href="#" className="text-primary font-semibold hover:underline flex items-center gap-2">
                        Acessar
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Carousel Controls */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prevResource}
                className="p-3 rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-neutral-600" />
              </button>
              <button
                onClick={nextResource}
                className="p-3 rounded-full border border-neutral-300 hover:bg-neutral-100 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-neutral-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-serif font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Pronto para começar sua transformação?
          </motion.h2>
          <motion.p
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Junte-se a mais de 50.000 pessoas que já transformaram suas vidas com a Bravo ON.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button size="lg" className="bg-white text-primary hover:bg-neutral-100">
              Fazer Consulta Online Agora
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Newsletter in Footer */}
          <div className="mb-16 pb-16 border-b border-white/10">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">Não perca nossas atualizações</h3>
              <p className="text-white/70 mb-6">Receba dicas exclusivas e conteúdo premium direto no seu email.</p>
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button className="bg-white text-primary hover:bg-neutral-100">
                  Inscrever
                </Button>
              </form>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="font-serif font-bold text-lg mb-4">Bravo ON</h3>
              <p className="text-white/70 text-sm mb-6">Saúde Digital Revolucionária</p>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social, i) => (
                  <a key={i} href="#" className="text-white/50 hover:text-white transition-colors text-sm">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4">Produtos</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Bravo Hair</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bravo Max</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Protocolo Completo</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-white/10">
            <div className="flex gap-4">
              <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-white/70">Email</p>
                <p className="font-semibold">contato@bravoon.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-white/70">Telefone</p>
                <p className="font-semibold">+55 (11) 9999-9999</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-white/70">Localização</p>
                <p className="font-semibold">São Paulo, Brasil</p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="text-center text-white/50 text-sm">
            <p>© 2026 Bravo ON. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com ❤️ para sua saúde</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
