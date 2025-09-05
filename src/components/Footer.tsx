"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Github, MessageCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/devservice.space",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/devservice-space",
      color: "hover:text-blue-600",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/devservice-space",
      color: "hover:text-gray-800",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Vamos conversar sobre como posso ajudar a levar sua empresa para o
              próximo nível digital
            </p>
            <motion.a
              href="https://wa.me/5594988110021?text=Olá! Gostaria de saber mais sobre os serviços da DevService.Space"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-blue-600 font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-2xl"
            >
              <MessageCircle size={24} />
              Falar no WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DevService.Space
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Transformando ideias em soluções digitais. Desenvolvimento,
                consultoria e mentoria para acelerar o crescimento do seu
                negócio.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#inicio"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Início
                  </a>
                </li>
                <li>
                  <a
                    href="#sobre"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#servicos"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Serviços
                  </a>
                </li>
                <li>
                  <a
                    href="#contato"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold">Redes Sociais</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-300 ${social.color} transition-colors duration-200 p-2 rounded-lg hover:bg-gray-800`}
                    aria-label={social.name}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </div>
              <p className="text-gray-400 text-sm">
                Siga-nos para dicas e novidades sobre tecnologia e negócios
                digitais
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} DevService.Space - Todos os direitos reservados
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Política de Privacidade
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
