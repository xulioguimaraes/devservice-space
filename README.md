# DevService.Space - Landing Page

Uma landing page moderna e responsiva para a DevService.Space, desenvolvida com Next.js, Tailwind CSS e React.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional com gradientes e animações
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Animações Suaves**: Implementadas com Framer Motion
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Componentes Organizados**: Código modular e reutilizável

## 📱 Seções da Landing Page

1. **Header Fixo**: Navegação com logo e menu responsivo
2. **Hero Section**: Banner principal com CTA para WhatsApp
3. **Sobre Mim**: Apresentação pessoal com features
4. **Serviços**: Cards com os 5 serviços principais
5. **Formulário de Contato**: Captação de leads
6. **Footer**: Links sociais e informações de contato

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 🚀 Como Executar

1. **Instalar dependências:**
   ```bash
   npm install
   ```

2. **Executar em modo desenvolvimento:**
   ```bash
   npm run dev
   ```

3. **Abrir no navegador:**
   ```
   http://localhost:3000
   ```

## 📝 Personalização

### Alterar Número do WhatsApp
Edite o número nos seguintes arquivos:
- `src/components/Hero.tsx` (linha 6)
- `src/components/Services.tsx` (linha 89)
- `src/components/ContactForm.tsx` (linha 89)
- `src/components/Footer.tsx` (linha 15)

### Alterar Links das Redes Sociais
Edite os links em `src/components/Footer.tsx` (linhas 8-20)

### Alterar Textos
Todos os textos estão organizados nos componentes correspondentes e podem ser facilmente editados.

## 🎨 Cores e Estilo

- **Azul**: #3b82f6 (blue-500)
- **Roxo**: #8b5cf6 (purple-500)
- **Verde**: #10b981 (green-500)
- **Cinza**: #6b7280 (gray-500)

## 📦 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build de produção
- `npm run start` - Servidor de produção
- `npm run lint` - Verificação de código

## 🌐 Deploy

A aplicação está pronta para deploy em plataformas como:
- Vercel (recomendado)
- Netlify
- AWS Amplify
- Railway

## 📞 Contato

Para dúvidas ou sugestões sobre este projeto, entre em contato através do WhatsApp ou redes sociais.

---

**DevService.Space** - Transformando ideias em soluções digitais 🚀