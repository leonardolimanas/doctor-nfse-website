# 🏥 Doctor NFS-e Website

Site institucional do **Doctor NFS-e**, sistema completo de gerenciamento de NFS-e para clínicas médicas brasileiras.

[![Vue.js](https://img.shields.io/badge/Vue.js-3.0+-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

## 🚀 Sobre o Projeto

O Doctor NFS-e é uma solução especializada para clínicas médicas que precisam gerenciar suas obrigações fiscais de forma eficiente e em conformidade com a legislação brasileira.

### ✨ Funcionalidades do Website

- **🏠 Página Inicial** - Hero section e recursos principais
- **⚡ Recursos** - Detalhamento completo do sistema
- **💰 Planos e Preços** - Comparação de funcionalidades com toggle anual/mensal
- **👥 Sobre Nós** - História da empresa e equipe
- **📞 Contato** - Formulário e informações de contato
- **🔐 Login** - Acesso ao sistema
- **🎯 Solicitar Demo** - Formulário personalizado

## 🛠️ Stack Tecnológica

### Frontend
- **Vue.js 3** - Framework frontend reativo
- **TypeScript** - Tipagem estática para maior confiabilidade
- **Vite** - Build tool ultra-rápido e dev server
- **Vue Router** - Roteamento client-side
- **CSS Variables** - Sistema de design consistente

### Deploy & Infraestrutura
- **Docker** - Containerização da aplicação
- **Nginx** - Servidor web otimizado
- **Coolify** - Plataforma de deploy automatizado

## 📋 Pré-requisitos

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0
- **Docker** >= 20.0.0 (para deploy)

## 🚀 Instalação e Execução Local

### 1. Clone o repositório
```bash
git clone https://github.com/leonardolimanas/doctor-nfse-website.git
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

## 🐳 Deploy com Docker

### Build Local (Teste)
```bash
# Build da imagem Docker
docker build -t doctor-nfse-website .

# Executar container local
docker run -d --name doctor-nfse-test -p 3000:80 doctor-nfse-website

# Acesse: http://localhost:3000
```

### Script Automatizado
```bash
# Use o script de build incluído
./build.sh
```

## ☁️ Deploy no Coolify

### Opção 1: Via Git Repository
1. Acesse o [Coolify Dashboard](https://your-coolify-instance.com)
2. Crie um novo projeto
3. Conecte o repositório: `https://github.com/leonardolimanas/doctor-nfse-website`
4. Configure:
   - **Build Pack**: Dockerfile
   - **Port**: 3000
   - **Health Check Path**: /
5. Deploy!

### Opção 2: Via Docker Compose
1. Acesse o Coolify Dashboard
2. Crie um novo projeto
3. Selecione "Docker Compose"
4. Cole o conteúdo do `docker-compose.yml`
5. Deploy!

## 📁 Estrutura do Projeto

```
doctor-nfse-website/
├── src/
│   ├── assets/          # Recursos estáticos
│   │   ├── images/      # Imagens e ícones
│   │   └── styles/      # CSS e variáveis
│   ├── components/      # Componentes reutilizáveis
│   │   ├── Header.vue
│   │   ├── Footer.vue
│   │   └── OptimizedImage.vue
│   ├── views/           # Páginas do site
│   │   ├── Home.vue
│   │   ├── Recursos.vue
│   │   ├── Precos.vue    # Com toggle anual/mensal
│   │   ├── Sobre.vue
│   │   ├── Contato.vue
│   │   ├── Login.vue
│   │   └── Demo.vue
│   ├── router/          # Configuração de rotas
│   ├── stores/          # Gerenciamento de estado
│   ├── types/           # Definições TypeScript
│   ├── utils/           # Utilitários
│   ├── App.vue          # Componente principal
│   ├── main.ts          # Ponto de entrada
│   └── env.d.ts         # Tipos do Vue
├── Dockerfile           # Build da aplicação
├── docker-compose.yml  # Configuração Coolify
├── nginx.conf          # Configuração do servidor
├── coolify.yml         # Configuração específica
├── build.sh            # Script de build
└── DEPLOY.md           # Guia de deploy
```

## 🎨 Sistema de Design

### Cores
```css
--primary-color: #2563eb      /* Azul principal */
--primary-dark: #1d4ed8       /* Azul escuro */
--accent-color: #f59e0b       /* Laranja destaque */
--success-color: #10b981      /* Verde sucesso */
--gray-50: #f8fafc           /* Cinza claro */
--gray-900: #0f172a          /* Cinza escuro */
```

### Tipografia
- **Família**: Inter (Google Fonts)
- **Escala**: xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl
- **Pesos**: 400, 500, 600, 700, 800

### Espaçamentos
- **Sistema**: 0.25rem, 0.5rem, 0.75rem, 1rem, 1.25rem, 1.5rem, 2rem, 3rem, 4rem, 5rem

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Características
- **Mobile-first** approach
- **Flexbox** e **Grid** layouts
- **Imagens** responsivas
- **Tipografia** fluida

## 🔧 Scripts Disponíveis

```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Linting do código
npm run type-check   # Verificação de tipos
```

## 🐳 Configurações Docker

### Portas
- **Aplicação**: 3000 (externa)
- **Nginx**: 80 (interna)

### Health Check
- **Path**: /
- **Interval**: 30s
- **Timeout**: 10s
- **Retries**: 3

### Otimizações
- **Multi-stage** build
- **Gzip** compression
- **Cache** de assets
- **Headers** de segurança

## 🔒 Segurança

- **X-Frame-Options**: SAMEORIGIN
- **X-XSS-Protection**: 1; mode=block
- **X-Content-Type-Options**: nosniff
- **Content-Security-Policy**: Configurado
- **HTTPS** redirect (em produção)

## 📊 Performance

- **Lighthouse Score**: 90+
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🚀 Deploy Automatizado

### GitHub Actions (Opcional)
```yaml
name: Deploy to Coolify
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Coolify
        run: |
          # Configuração do deploy
```

## 🛠️ Troubleshooting

### Problemas Comuns

#### Build falha
```bash
# Verificar logs
docker logs <container-name>

# Rebuild sem cache
docker build --no-cache -t doctor-nfse-website .
```

#### Container não inicia
```bash
# Verificar se a porta está disponível
netstat -tulpn | grep 3000

# Verificar logs
docker logs doctor-nfse-website
```

#### Problemas de roteamento
- Verifique se o `nginx.conf` está configurado
- Confirme que o `try_files` redireciona para `/index.html`

## 📞 Suporte

### Contato Técnico
- **Email**: suporte@doctornfse.com.br
- **Telefone**: (11) 3000-5000
- **WhatsApp**: (11) 99999-5000

### Links Úteis
- **Documentação**: [DEPLOY.md](./DEPLOY.md)
- **Issues**: [GitHub Issues](https://github.com/leonardolimanas/doctor-nfse-website/issues)
- **Releases**: [GitHub Releases](https://github.com/leonardolimanas/doctor-nfse-website/releases)

## 🤝 Contribuição

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**🏥 Doctor NFS-e** - Transformando a gestão fiscal das clínicas médicas brasileiras.

*Desenvolvido com ❤️ para o setor de saúde*
