'use client';

import { motion } from 'framer-motion';
import { 
  Globe, 
  Settings, 
  TrendingUp, 
  MessageSquare, 
  GraduationCap 
} from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: "Desenvolvimento de Sites",
      description: "Sites modernos, responsivos e otimizados para conversão. Desenvolvidos com as melhores tecnologias do mercado.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Settings,
      title: "Soluções Personalizadas",
      description: "Sistemas sob medida para atender às necessidades específicas do seu negócio e processos.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Geração de Leads & Estratégias de Negócio",
      description: "Estratégias digitais para atrair clientes qualificados e aumentar suas vendas online.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MessageSquare,
      title: "Consultoria Online",
      description: "Orientações estratégicas para digitalizar seu negócio e aproveitar oportunidades do mercado digital.",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: GraduationCap,
      title: "Mentoria Online",
      description: "Acompanhamento personalizado para desenvolver suas habilidades em tecnologia e negócios digitais.",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Nossos{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Serviços
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas para transformar sua presença digital e acelerar o crescimento do seu negócio
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon size={32} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Pronto para começar seu projeto?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Vamos conversar sobre como posso ajudar a transformar suas ideias em realidade digital
            </p>
            <a
              href="https://wa.me/5594988110021?text=Olá! Gostaria de saber mais sobre os serviços da DevService.Space"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-green-500/25"
            >
              <MessageSquare size={24} />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
