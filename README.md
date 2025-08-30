# Doctor NFS-e Website

Site institucional do **Doctor NFS-e**, sistema completo de gerenciamento de NFS-e para clínicas médicas.

## 🚀 Sobre o Projeto

O Doctor NFS-e é uma solução especializada para clínicas médicas que precisam gerenciar suas obrigações fiscais de forma eficiente e em conformidade com a legislação brasileira.

Este website apresenta:
- **Página Inicial** com hero section e recursos principais
- **Recursos** detalhados do sistema
- **Planos e Preços** com comparação de funcionalidades
- **Sobre Nós** com história da empresa e equipe
- **Contato** com formulário e informações
- **Login** para acesso ao sistema
- **Solicitar Demo** com formulário personalizado

## 🛠️ Tecnologias Utilizadas

- **Vue.js 3** - Framework frontend
- **TypeScript** - Tipagem estática
- **Vite** - Build tool e dev server
- **Vue Router** - Roteamento
- **Pinia** - Gerenciamento de estado
- **CSS Variables** - Sistema de design consistente
- **Responsive Design** - Mobile-first approach

## 📋 Pré-requisitos

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0

## 🚀 Instalação e Execução

### 1. Clone o repositório
```bash
git clone <repository-url>
cd doctor-nfse-website
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute em modo de desenvolvimento
```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`

### 4. Build para produção
```bash
npm run build
```

### 5. Preview do build
```bash
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── assets/          # Estilos e recursos estáticos
│   └── styles/
│       └── main.css
├── components/      # Componentes reutilizáveis
│   ├── Header.vue
│   └── Footer.vue
├── views/           # Páginas do site
│   ├── Home.vue
│   ├── Recursos.vue
│   ├── Precos.vue
│   ├── Sobre.vue
│   ├── Contato.vue
│   ├── Login.vue
│   └── Demo.vue
├── router/          # Configuração de rotas
│   └── index.ts
├── stores/          # Gerenciamento de estado (Pinia)
├── types/           # Definições de tipos TypeScript
├── utils/           # Utilitários e helpers
├── App.vue          # Componente principal
├── main.ts          # Ponto de entrada
└── env.d.ts         # Tipos do Vue
```

## 🎨 Sistema de Design

O projeto utiliza um sistema de design baseado em CSS Variables com:

- **Cores** padronizadas (primária, secundária, acentos)
- **Tipografia** com escala consistente
- **Espaçamentos** padronizados
- **Sombras** e **bordas** uniformes
- **Transições** suaves
- **Breakpoints** responsivos

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Scripts Disponíveis

- `npm run dev` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run preview` - Preview do build
- `npm run lint` - Linting do código
- `npm run type-check` - Verificação de tipos TypeScript

## 🌐 Deploy

O projeto está configurado para deploy em qualquer plataforma estática:

- **Netlify**
- **Vercel**
- **GitHub Pages**
- **AWS S3 + CloudFront**

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor, leia as [diretrizes de contribuição](CONTRIBUTING.md) antes de submeter um pull request.

## 📞 Suporte

Para suporte técnico ou dúvidas sobre o projeto:

- **Email**: suporte@doctornfse.com.br
- **Telefone**: (11) 3000-5000
- **WhatsApp**: (11) 99999-5000

---

**Doctor NFS-e** - Transformando a gestão fiscal das clínicas médicas brasileiras.
