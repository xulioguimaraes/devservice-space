'use client';

import { motion } from 'framer-motion';
import { Code, Users, Target, Lightbulb } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Code,
      title: "Desenvolvimento Fullstack",
      description: "Experiência em tecnologias modernas"
    },
    {
      icon: Users,
      title: "Consultoria Estratégica",
      description: "Ajuda empresas a crescer no digital"
    },
    {
      icon: Target,
      title: "Soluções Personalizadas",
      description: "Cada projeto é único e sob medida"
    },
    {
      icon: Lightbulb,
      title: "Mentoria Online",
      description: "Compartilhando conhecimento e experiência"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Avatar and Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Avatar */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="w-44 h-44 bg-white rounded-full flex items-center justify-center">
                    <Code size={80} className="text-blue-600" />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Quem sou
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Sou desenvolvedor fullstack com experiência em desenvolvimento web, 
                soluções digitais, consultoria e mentoria. A missão da{' '}
                <span className="font-semibold text-blue-600">DevService.Space</span> é 
                ajudar empreendedores e empresas a crescer no digital com tecnologia e estratégia.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Com anos de experiência no mercado, entendo as necessidades reais dos 
                negócios e como a tecnologia pode ser uma aliada poderosa para o crescimento.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
