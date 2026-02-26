'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight, Mail, Phone, MapPin, Play } from 'lucide-react'

export default function BravoONTeste1() {
  const [videoIndex, setVideoIndex] = useState(0)

  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2 })
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2 })
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.2 })
  const { ref: ref4, inView: inView4 } = useInView({ threshold: 0.2 })

  const videos = [
    { title: 'Como Começar Seu Tratamento Online', views: '45K' },
    { title: 'Protocolo Bravo ON Explicado', views: '32K' },
    { title: 'Histórias de Sucesso - Bravo Hair', views: '28K' },
    { title: 'Bravo Max: Transformando Vidas', views: '51K' },
    { title: 'Perguntas Frequentes Respondidas', views: '19K' },
  ]

  const resources = [
    { title: 'Guia Completo de Tratamento', type: 'PDF', color: 'bg-red-500' },
    { title: 'Checklist de Bem-estar', type: 'Checklist', color: 'bg-blue-500' },
    { title: 'Protocolo Passo a Passo', type: 'Guide', color: 'bg-green-500' },
    { title: 'Histórias de Transformação', type: 'Stories', color: 'bg-purple-500' },
  ]

  const categories = [
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
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        className="sticky top-0 z-50 bg-white border-b border-gray-200"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <motion.h1 className="text-2xl font-bold text-gray-900" whileHover={{ scale: 1.05 }}>
            Bravo ON
          </motion.h1>
          <div className="flex gap-4">
            <Button variant="ghost" className="text-gray-600">
              Sobre
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Começar
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <h2 className="text-sm font-semibold text-blue-500 mb-2">👋 Hey Friends</h2>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Rotina que cabe na vida real.
              </motion.h1>

              <motion.p
                className="text-xl text-gray-600 mb-8 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Tratamentos online, sem exposição, sem perda de tempo, sem sair de casa.
              </motion.p>

              <motion.div
                className="flex flex-col gap-3 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">Consulta 100% online e confidencial</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">Tratamento validado por profissionais</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-700">Entrega em casa com embalagem discreta</span>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-4 flex-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white group">
                  Fazer Consulta Online
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300">
                  Conhecer Protocolo
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Image - Circular */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Circular background with accent */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-orange-200 rounded-full opacity-30 blur-3xl" />
                
                {/* Circular image container */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                    alt="Bravo ON"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-300 rounded-full opacity-10" />
              </div>
            </motion.div>
          </div>

          {/* Social Proof */}
          <motion.div
            className="mt-20 pt-12 border-t border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-center text-gray-600 mb-8 font-medium text-sm">Confiado por mais de 50.000 pessoas</p>
            <div className="flex justify-center gap-8 flex-wrap items-center">
              {['TechCrunch', 'Forbes', 'Wired', 'The Verge'].map((brand, i) => (
                <div key={i} className="text-gray-400 font-semibold text-sm">
                  {brand}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-2xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 border border-blue-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Junte-se a 50.000+ pessoas
            </h2>
            <p className="text-lg text-gray-600 text-center mb-8">
              Receba dicas exclusivas sobre saúde digital, bem-estar e transformação pessoal.
            </p>

            <form className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8">
                  Inscrever
                </Button>
              </div>
              <p className="text-sm text-gray-500 text-center">
                Sem spam. Apenas conteúdo valioso. Cancele quando quiser.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      {/* How Can I Help You - Single Column */}
      <section ref={ref1} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView1 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Como posso ajudar você?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Escolha a área que mais está pesando no seu dia a dia.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={inView1 ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {categories.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView1 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <Card className="border border-gray-200 hover:shadow-lg transition-all duration-300 h-full group cursor-pointer bg-white">
                  <CardContent className="p-6">
                    <div className="flex gap-6 items-start">
                      <div className="text-4xl flex-shrink-0">{item.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{item.desc}</p>
                        <a href="#" className="text-blue-500 font-semibold hover:underline flex items-center gap-2 inline-flex">
                          {item.link}
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Promo Section 1 */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              className="relative h-96 lg:h-full min-h-96"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=600&fit=crop"
                  alt="Kit Bravo ON"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">✨ Exclusivo</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Kit Completo Bravo ON
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Tudo que você precisa para começar sua transformação em um único lugar.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Consulta, tratamento e acompanhamento profissional com entrega discreta em casa.
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
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
                Conhecer o Kit
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={ref2} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              className="relative h-96 lg:h-full min-h-96"
              initial={{ opacity: 0, x: -50 }}
              animate={inView2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-blue-100 rounded-2xl overflow-hidden">
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
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Sobre a Bravo ON
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Nascemos com uma missão simples: remover as barreiras que impedem as pessoas de cuidar da sua saúde e bem-estar.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Sabemos que a burocracia, o medo do julgamento e a falta de tempo são os maiores inimigos da transformação pessoal.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Hoje, mais de 50.000 pessoas confiam em nós para sua saúde digital. E você? Está pronto para começar?
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="text-3xl font-bold text-blue-500">50K+</p>
                  <p className="text-gray-600">Pessoas Transformadas</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-blue-500">98%</p>
                  <p className="text-gray-600">Taxa de Satisfação</p>
                </div>
              </div>

              <Button size="lg" variant="outline" className="border-gray-300">
                Ler Nossa História Completa
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section ref={ref3} className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Assista Meus Vídeos Mais Populares</h2>
            <p className="text-xl text-gray-600">Aprenda com conteúdo que já ajudou milhares de pessoas</p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={inView3 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {videos.slice(videoIndex, videoIndex + 3).map((video, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                >
                  <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                    <div className="relative h-48 bg-gradient-to-br from-gray-300 to-gray-200 overflow-hidden">
                      <img
                        src={`https://images.unsplash.com/photo-${1576091160550 + i}?w=400&h=300&fit=crop`}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-blue-500 ml-1" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-500 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-sm text-gray-600">{video.views} visualizações</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Carousel Controls */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={() => setVideoIndex((prev) => (prev - 1 + videos.length) % videos.length)}
                className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={() => setVideoIndex((prev) => (prev + 1) % videos.length)}
                className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section ref={ref4} className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={inView4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Confira Meus Recursos Mais Populares</h2>
            <p className="text-xl text-gray-600">Ferramentas e guias para sua transformação</p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              initial={{ opacity: 0 }}
              animate={inView4 ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {resources.map((resource, i) => (
                <motion.div key={i} whileHover={{ y: -10 }}>
                  <Card className="border border-gray-200 hover:shadow-xl transition-all duration-300 h-full overflow-hidden">
                    <div className={`h-32 ${resource.color} flex items-center justify-center`}>
                      <div className="text-4xl">📄</div>
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">{resource.type}</p>
                      <a href="#" className="text-blue-500 font-semibold hover:underline flex items-center gap-2 inline-flex text-sm">
                        Acessar
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Pronto para começar sua transformação?
          </motion.h2>
          <motion.p
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
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
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Fazer Consulta Online Agora
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div>
              <h3 className="font-bold text-lg mb-4">Bravo ON</h3>
              <p className="text-gray-400 text-sm mb-6">Saúde Digital Revolucionária</p>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter', 'LinkedIn'].map((social, i) => (
                  <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors text-sm">
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-semibold mb-4">Produtos</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Bravo Hair</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bravo Max</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Protocolo Completo</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-gray-800">
            <div className="flex gap-4">
              <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">contato@bravoon.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-400">Telefone</p>
                <p className="font-semibold">+55 (11) 9999-9999</p>
              </div>
            </div>
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm text-gray-400">Localização</p>
                <p className="font-semibold">São Paulo, Brasil</p>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="text-center text-gray-500 text-sm">
            <p>© 2026 Bravo ON. Todos os direitos reservados.</p>
            <p className="mt-2">Desenvolvido com ❤️ para sua saúde</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
