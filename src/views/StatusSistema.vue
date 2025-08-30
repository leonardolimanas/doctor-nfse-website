<template>
  <div class="status-sistema">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Status do Sistema</h1>
          <p class="hero-subtitle">
            Monitoramento em tempo real dos nossos serviços
          </p>
        </div>
      </div>
    </section>

    <!-- Status Embed Section -->
    <section class="status-embed">
      <div class="container">
        <div class="embed-wrapper">
          <div class="embed-header">
            <h2>Status dos Serviços</h2>
            <p>
              Acompanhe o status de todos os nossos serviços em tempo real através 
              do nosso sistema de monitoramento Kuma.
            </p>
          </div>
          
          <div class="embed-container">
            <iframe 
              src="https://kuma.doctornfse.com.br/status/doctornfse" 
              frameborder="0"
              class="status-iframe"
              title="Status do Sistema Doctor NFSe"
              loading="lazy"
            ></iframe>
          </div>
          
          <div class="embed-footer">
            <p>
              <strong>Fonte:</strong> 
              <a 
                href="https://kuma.doctornfse.com.br/status/doctornfse" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Kuma Status Page
              </a>
            </p>
            <p class="last-update">
              Última atualização: {{ new Date().toLocaleString('pt-BR') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Fallback Section -->
    <section class="fallback" v-if="showFallback">
      <div class="container">
        <div class="fallback-content">
          <div class="fallback-icon">⚠️</div>
          <h2>Status Temporariamente Indisponível</h2>
          <p>
            O status do sistema não pode ser carregado no momento. 
            Você pode acessar diretamente através do link abaixo.
          </p>
          <a 
            href="https://kuma.doctornfse.com.br/status/doctornfse" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn btn-primary btn-lg"
          >
            Acessar Status do Sistema
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showFallback = ref(false)

onMounted(() => {
  // Verificar se o iframe carregou corretamente após 10 segundos
  setTimeout(() => {
    const iframe = document.querySelector('.status-iframe') as HTMLIFrameElement
    if (iframe && iframe.contentWindow) {
      try {
        // Tentar acessar o conteúdo do iframe
        iframe.contentWindow.location.href
      } catch (error) {
        // Se der erro de CORS, mostrar fallback
        showFallback.value = true
      }
    }
  }, 10000)
})
</script>

<style scoped>
.status-sistema {
  min-height: 100vh;
}

.hero {
  padding: var(--spacing-16) 0 var(--spacing-12);
  background: linear-gradient(135deg, var(--gray-50) 0%, var(--white) 100%);
  text-align: center;
}

.hero-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: var(--spacing-4);
}

.hero-subtitle {
  font-size: var(--font-size-lg);
  color: var(--gray-600);
}

.status-embed {
  padding: var(--spacing-16) 0;
  background: var(--white);
}

.embed-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.embed-header {
  text-align: center;
  margin-bottom: var(--spacing-8);
}

.embed-header h2 {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
}

.embed-header p {
  color: var(--gray-600);
  font-size: var(--font-size-lg);
  max-width: 600px;
  margin: 0 auto;
}

.embed-container {
  background: var(--white);
  border: 2px solid var(--gray-200);
  border-radius: var(--border-radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  margin-bottom: var(--spacing-6);
}

.status-iframe {
  width: 100%;
  height: 800px;
  border: none;
  display: block;
}

.embed-footer {
  text-align: center;
  color: var(--gray-600);
  font-size: var(--font-size-sm);
}

.embed-footer p {
  margin-bottom: var(--spacing-2);
}

.embed-footer a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
}

.embed-footer a:hover {
  text-decoration: underline;
}

.last-update {
  color: var(--gray-500);
  font-style: italic;
}

.fallback {
  padding: var(--spacing-16) 0;
  background: var(--gray-50);
  display: none;
}

.fallback.show {
  display: block;
}

.fallback-content {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}

.fallback-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-4);
}

.fallback-content h2 {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: var(--spacing-4);
}

.fallback-content p {
  color: var(--gray-600);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-6);
  line-height: 1.6;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: var(--font-size-3xl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-base);
  }
  
  .embed-header h2 {
    font-size: var(--font-size-xl);
  }
  
  .embed-header p {
    font-size: var(--font-size-base);
  }
  
  .status-iframe {
    height: 600px;
  }
}

@media (max-width: 480px) {
  .status-iframe {
    height: 500px;
  }
}
</style>
