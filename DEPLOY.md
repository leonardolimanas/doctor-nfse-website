# 🚀 Deploy Guide - Doctor NFSe Website

## 📋 Pré-requisitos

- Docker instalado
- Coolify configurado
- Acesso ao repositório Git

## 🐳 Deploy com Docker Compose

### 1. Build Local (Teste)

```bash
# Build da imagem
docker build -t doctor-nfse-website .

# Teste local
docker run -d --name doctor-nfse-test -p 3000:80 doctor-nfse-website

# Acesse: http://localhost:3000
```

### 2. Deploy no Coolify

#### Opção A: Via Docker Compose
1. Acesse o Coolify Dashboard
2. Crie um novo projeto
3. Selecione "Docker Compose"
4. Cole o conteúdo do `docker-compose.yml`
5. Configure as variáveis de ambiente se necessário
6. Deploy!

#### Opção B: Via Git Repository
1. Acesse o Coolify Dashboard
2. Crie um novo projeto
3. Conecte o repositório Git: `https://github.com/leonardolimanas/doctor-nfse-website`
4. Selecione branch: `main`
5. Configure:
   - **Build Pack**: Dockerfile
   - **Port**: 3000
   - **Health Check Path**: /
6. Deploy!

## 🔧 Configurações

### Variáveis de Ambiente
```env
NODE_ENV=production
```

### Portas
- **Aplicação**: 3000
- **Nginx**: 80 (interno)

### Health Check
- **Path**: /
- **Interval**: 30s
- **Timeout**: 10s
- **Retries**: 3

## 📁 Estrutura dos Arquivos

```
├── Dockerfile              # Build da aplicação
├── docker-compose.yml      # Configuração do Coolify
├── nginx.conf             # Configuração do servidor web
├── coolify.yml            # Configuração específica do Coolify
├── build.sh               # Script de build local
└── .dockerignore          # Arquivos ignorados no build
```

## 🛠️ Troubleshooting

### Build falha
```bash
# Verificar logs
docker logs <container-name>

# Rebuild sem cache
docker build --no-cache -t doctor-nfse-website .
```

### Container não inicia
```bash
# Verificar se a porta está disponível
netstat -tulpn | grep 3000

# Verificar logs do container
docker logs doctor-nfse-website
```

### Problemas de roteamento
- Verifique se o `nginx.conf` está configurado corretamente
- Confirme que o `try_files` está redirecionando para `/index.html`

## 🔒 Segurança

- Headers de segurança configurados no Nginx
- Gzip compression habilitado
- Cache otimizado para assets estáticos
- Acesso negado para arquivos sensíveis

## 📊 Monitoramento

- Logs do Nginx em `/var/log/nginx/`
- Health checks automáticos
- Métricas disponíveis via Coolify Dashboard

## 🔄 CI/CD

Para deploy automático:
1. Configure webhooks no Coolify
2. Push para branch `main` = deploy automático
3. Monitoramento via Coolify Dashboard

---

**🎯 Status**: Pronto para deploy no Coolify!
