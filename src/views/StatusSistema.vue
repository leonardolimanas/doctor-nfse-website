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
    <section class="status-embed" v-if="!showFallback">
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
              v-if="!iframeError"
              src="https://kuma.doctornfse.com.br/status/doctornfse" 
              frameborder="0"
              class="status-iframe"
              title="Status do Sistema Doctor NFSe"
              loading="lazy"
              @load="onIframeLoad"
              @error="onIframeError"
            ></iframe>
            
            <div v-else class="iframe-error">
              <div class="error-icon">⚠️</div>
              <h3>Status Temporariamente Indisponível</h3>
              <p>O painel de status não pode ser carregado no momento.</p>
            </div>
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
          <div class="fallback-icon">📊</div>
          <h2>Status do Sistema Doctor NFSe</h2>
          <p>
            Atualmente todos os nossos serviços estão operacionais. 
            Para informações detalhadas, acesse nosso painel de monitoramento.
          </p>
          
          <div class="status-overview">
            <div class="status-item">
              <div class="status-dot operational"></div>
              <div class="status-details">
                <h3>Doctor NFSe - Sistema Principal</h3>
                <p>Operacional</p>
              </div>
            </div>
            
            <div class="status-item">
              <div class="status-dot operational"></div>
              <div class="status-details">
                <h3>API de Integração</h3>
                <p>Operacional</p>
              </div>
            </div>
            
            <div class="status-item">
              <div class="status-dot operational"></div>
              <div class="status-details">
                <h3>Banco de Dados</h3>
                <p>Operacional</p>
              </div>
            </div>
            
            <div class="status-item">
              <div class="status-dot operational"></div>
              <div class="status-details">
                <h3>Serviços de E-mail</h3>
                <p>Operacional</p>
              </div>
            </div>
          </div>
          
          <div class="fallback-actions">
            <a 
              href="https://kuma.doctornfse.com.br/status/doctornfse" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn btn-primary btn-lg"
            >
              Acessar Status Detalhado
            </a>
            
            <a 
              href="mailto:suporte@doctornfse.com.br" 
              class="btn btn-secondary btn-lg"
            >
              Contatar Suporte
            </a>
          </div>
          
          <div class="fallback-note">
            <p>
              <strong>Nota:</strong> Se você estiver enfrentando problemas específicos, 
              entre em contato conosco através do suporte técnico.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const showFallback = ref(false)
const iframeError = ref(false)

const onIframeLoad = () => {
  console.log('Iframe carregado com sucesso')
  iframeError.value = false
}

const onIframeError = () => {
  console.log('Erro ao carregar iframe')
  iframeError.value = true
}

onMounted(() => {
  // Verificar se o iframe carregou corretamente após 5 segundos
  setTimeout(() => {
    const iframe = document.querySelector('.status-iframe') as HTMLIFrameElement
    if (iframe) {
      try {
        // Tentar acessar o conteúdo do iframe
        iframe.contentWindow?.location.href
      } catch (error) {
        console.log('Erro de CORS detectado, mostrando fallback')
        showFallback.value = true
      }
    } else {
      // Se não encontrar o iframe, mostrar fallback
      showFallback.value = true
    }
  }, 5000)
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
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.status-iframe {
  width: 100%;
  height: 800px;
  border: none;
  display: block;
}

.iframe-error {
  text-align: center;
  padding: var(--spacing-8);
  color: var(--gray-600);
}

.error-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-4);
}

.iframe-error h3 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
}

.iframe-error p {
  color: var(--gray-600);
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
}

.fallback-content {
  text-align: center;
  max-width: 800px;
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

.status-overview {
  background: var(--white);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-6);
  margin: var(--spacing-8) 0;
  box-shadow: var(--shadow);
}

.status-item {
  display: flex;
  align-items: center;
  padding: var(--spacing-4);
  border-bottom: 1px solid var(--gray-200);
}

.status-item:last-child {
  border-bottom: none;
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: var(--spacing-4);
}

.status-dot.operational {
  background: var(--success-color);
}

.status-dot.warning {
  background: var(--warning-color);
}

.status-dot.error {
  background: var(--danger-color);
}

.status-details h3 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--spacing-1);
}

.status-details p {
  color: var(--gray-600);
  font-size: var(--font-size-sm);
}

.fallback-actions {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  margin: var(--spacing-8) 0;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2);
}

.fallback-note {
  margin-top: var(--spacing-6);
  padding: var(--spacing-4);
  background: var(--gray-100);
  border-radius: var(--border-radius-lg);
  border-left: 4px solid var(--primary-color);
}

.fallback-note p {
  color: var(--gray-700);
  font-size: var(--font-size-sm);
  margin: 0;
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
  
  .fallback-actions {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 480px) {
  .status-iframe {
    height: 500px;
  }
}
</style>
