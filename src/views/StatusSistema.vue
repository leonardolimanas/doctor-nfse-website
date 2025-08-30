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

    <!-- Loading Section -->
    <section class="loading-section" v-if="loading">
      <div class="container">
        <div class="loading-content">
          <div class="loading-spinner"></div>
          <h3>Carregando status em tempo real...</h3>
          <p>Conectando ao sistema de monitoramento</p>
        </div>
      </div>
    </section>

    <!-- Live Status Section -->
    <section class="live-status" v-else-if="statusData.length > 0">
      <div class="container">
        <div class="status-wrapper">
          <div class="status-header">
            <h2>Status dos Serviços</h2>
            <p>
              Informações atualizadas em tempo real do nosso sistema de monitoramento Kuma.
              Última atualização: {{ lastUpdate }}
            </p>
            <div class="status-actions">
              <button 
                @click="refreshStatus" 
                :disabled="refreshing"
                class="btn btn-secondary"
              >
                <span v-if="refreshing">🔄 Atualizando...</span>
                <span v-else>🔄 Atualizar</span>
              </button>
              <a 
                href="https://kuma.doctornfse.com.br/status/doctornfse" 
                target="_blank" 
                rel="noopener noreferrer"
                class="btn btn-primary"
              >
                📊 Ver Original
              </a>
            </div>
          </div>
          
          <div class="status-grid">
            <div 
              v-for="service in statusData" 
              :key="service.name"
              class="status-card"
              :class="getStatusClass(service.status)"
            >
              <div class="status-indicator">
                <div class="status-dot" :class="getStatusClass(service.status)"></div>
                <div class="status-text">{{ getStatusText(service.status) }}</div>
              </div>
              
              <div class="service-info">
                <h3>{{ service.name }}</h3>
                <p v-if="service.description">{{ service.description }}</p>
                <div class="service-meta">
                  <span v-if="service.uptime" class="uptime">
                    Uptime: {{ service.uptime }}
                  </span>
                  <span v-if="service.responseTime" class="response-time">
                    Tempo: {{ service.responseTime }}
                  </span>
                </div>
              </div>
              
              <div class="service-actions">
                <a 
                  v-if="service.url" 
                  :href="service.url" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn btn-sm btn-outline"
                >
                  Testar
                </a>
              </div>
            </div>
          </div>
          
          <div class="status-summary">
            <div class="summary-item">
              <span class="summary-label">Total de Serviços:</span>
              <span class="summary-value">{{ statusData.length }}</span>
            </div>
            <div class="summary-item">
              <span class="summary-label">Operacionais:</span>
              <span class="summary-value operational">{{ getOperationalCount() }}</span>
            </div>
            <div class="summary-item">
              <span class="summary-label">Com Problemas:</span>
              <span class="summary-value warning">{{ getWarningCount() }}</span>
            </div>
            <div class="summary-item">
              <span class="summary-label">Indisponíveis:</span>
              <span class="summary-value error">{{ getErrorCount() }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fallback Section -->
    <section class="fallback" v-else>
      <div class="container">
        <div class="fallback-content">
          <div class="fallback-icon">⚠️</div>
          <h2>Status Temporariamente Indisponível</h2>
          <p>
            Não foi possível conectar ao sistema de monitoramento no momento. 
            Tente novamente em alguns instantes.
          </p>
          
          <div class="fallback-actions">
            <button @click="loadStatus" class="btn btn-primary btn-lg">
              🔄 Tentar Novamente
            </button>
            
            <a 
              href="https://kuma.doctornfse.com.br/status/doctornfse" 
              target="_blank" 
              rel="noopener noreferrer"
              class="btn btn-secondary btn-lg"
            >
              📊 Acessar Original
            </a>
            
            <a 
              href="mailto:suporte@doctornfse.com.br" 
              class="btn btn-outline btn-lg"
            >
              📧 Contatar Suporte
            </a>
          </div>
          
          <div class="fallback-note">
            <p>
              <strong>Nota:</strong> Se o problema persistir, entre em contato conosco 
              através do suporte técnico.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface StatusService {
  name: string
  status: 'operational' | 'warning' | 'error' | 'unknown'
  description?: string
  uptime?: string
  responseTime?: string
  url?: string
}

const loading = ref(true)
const refreshing = ref(false)
const statusData = ref<StatusService[]>([])
const lastUpdate = ref('')

const getStatusClass = (status: string) => {
  switch (status) {
    case 'operational': return 'operational'
    case 'warning': return 'warning'
    case 'error': return 'error'
    default: return 'unknown'
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'operational': return 'Operacional'
    case 'warning': return 'Atenção'
    case 'error': return 'Indisponível'
    default: return 'Desconhecido'
  }
}

const getOperationalCount = () => {
  return statusData.value.filter(service => service.status === 'operational').length
}

const getWarningCount = () => {
  return statusData.value.filter(service => service.status === 'warning').length
}

const getErrorCount = () => {
  return statusData.value.filter(service => service.status === 'error').length
}

const parseKumaStatus = (html: string): StatusService[] => {
  const services: StatusService[] = []
  
  try {
    // Criar um DOM parser temporário
    const parser = new DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    
    console.log('Analisando estrutura HTML do Kuma...')
    
    // Primeiro, vamos tentar identificar a estrutura real da página Kuma
    // Procurar por diferentes padrões comuns em páginas de status
    
    // Padrão 1: Elementos com classes específicas do Kuma
    let statusElements: NodeListOf<Element> | Element[] = doc.querySelectorAll('.status-item, .service-item, .monitor-item, [class*="status"], [class*="service"], [class*="monitor"]')
    
    // Padrão 2: Se não encontrar, procurar por elementos que contenham informações de status
    if (statusElements.length === 0) {
      statusElements = doc.querySelectorAll('div, section, article')
      console.log('Procurando por elementos alternativos...')
    }
    
    // Padrão 3: Procurar por elementos que contenham texto relacionado a status
    if (statusElements.length === 0) {
      const allElements = doc.querySelectorAll('*')
      const statusRelatedElements: Element[] = []
      
      allElements.forEach(element => {
        const text = element.textContent?.toLowerCase() || ''
        if (text.includes('operational') || text.includes('down') || text.includes('up') || 
            text.includes('status') || text.includes('uptime') || text.includes('response')) {
          statusRelatedElements.push(element)
        }
      })
      
      statusElements = statusRelatedElements.length > 0 ? 
        statusRelatedElements.slice(0, 10) : // Limitar a 10 elementos para análise
        doc.querySelectorAll('body > *') // Último recurso: elementos diretos do body
    }
    
    console.log(`Encontrados ${statusElements.length} elementos para análise`)
    
    // Analisar cada elemento encontrado
    statusElements.forEach((element, index) => {
      console.log(`Analisando elemento ${index + 1}:`, element.tagName, element.className)
      
      // Extrair texto completo do elemento para análise
      const fullText = element.textContent?.trim() || ''
      console.log(`Texto do elemento ${index + 1}:`, fullText.substring(0, 100) + '...')
      
      // Procurar por padrões de nome de serviço
      const namePatterns = [
        /([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/g, // Palavras capitalizadas
        /([A-Za-z]+(?:\s+[A-Za-z]+)*)/g, // Qualquer texto
      ]
      
      let serviceName = ''
      for (const pattern of namePatterns) {
        const matches = fullText.match(pattern)
        if (matches && matches.length > 0) {
          // Filtrar nomes que parecem ser de serviços
          const potentialNames = matches.filter(match => 
            match.length > 3 && 
            !match.toLowerCase().includes('status') &&
            !match.toLowerCase().includes('uptime') &&
            !match.toLowerCase().includes('response') &&
            !match.toLowerCase().includes('operational') &&
            !match.toLowerCase().includes('down') &&
            !match.toLowerCase().includes('up')
          )
          
          if (potentialNames.length > 0) {
            serviceName = potentialNames[0]
            break
          }
        }
      }
      
      // Procurar por status
      let status: StatusService['status'] = 'unknown'
      const statusText = fullText.toLowerCase()
      
      if (statusText.includes('operational') || statusText.includes('operacional') || statusText.includes('up') || statusText.includes('online')) {
        status = 'operational'
      } else if (statusText.includes('warning') || statusText.includes('atenção') || statusText.includes('degraded')) {
        status = 'warning'
      } else if (statusText.includes('error') || statusText.includes('erro') || statusText.includes('offline') || statusText.includes('down')) {
        status = 'error'
      }
      
      // Procurar por uptime
      let uptime = ''
      const uptimeMatch = fullText.match(/(\d+\.?\d*%?\s*uptime|uptime\s*:?\s*(\d+\.?\d*%?))/i)
      if (uptimeMatch) {
        uptime = uptimeMatch[1] || uptimeMatch[2] || ''
      }
      
      // Procurar por tempo de resposta
      let responseTime = ''
      const responseMatch = fullText.match(/(\d+\.?\d*\s*ms|response\s*:?\s*(\d+\.?\d*\s*ms))/i)
      if (responseMatch) {
        responseTime = responseMatch[1] || responseMatch[2] || ''
      }
      
      // Se encontrou um nome de serviço válido, adicionar aos serviços
      if (serviceName && serviceName.length > 3) {
        // Filtrar nomes que são claramente não-serviços
        const invalidNames = ['sorry', 'javascript', 'noscript', 'enable', 'browser', 'support', 'website']
        const isInvalidName = invalidNames.some(invalid => 
          serviceName.toLowerCase().includes(invalid)
        )
        
        if (!isInvalidName) {
          // Verificar se já não temos este serviço (evitar duplicatas)
          const existingService = services.find(s => s.name.toLowerCase() === serviceName.toLowerCase())
          if (!existingService) {
            const service: StatusService = {
              name: serviceName,
              status,
              description: fullText.length > 100 ? fullText.substring(0, 100) + '...' : fullText,
              uptime,
              responseTime
            }
            
            services.push(service)
            console.log(`Serviço encontrado: ${serviceName} - ${status}`)
          }
        } else {
          console.log(`Nome inválido filtrado: ${serviceName}`)
        }
      }
    })
    
    console.log(`Total de serviços encontrados: ${services.length}`)
    
    // Se não encontrou nenhum serviço, tentar uma abordagem mais genérica
    if (services.length === 0) {
      console.log('Nenhum serviço encontrado, analisando estrutura geral...')
      
      // Procurar por qualquer texto que pareça ser um nome de serviço
      const bodyText = doc.body.textContent || ''
      const lines = bodyText.split('\n').filter(line => line.trim().length > 0)
      
      lines.forEach(line => {
        const trimmedLine = line.trim()
        if (trimmedLine.length > 5 && trimmedLine.length < 100) {
          // Verificar se a linha parece ser um nome de serviço
          const hasStatusKeywords = /status|uptime|response|operational|down|up/i.test(trimmedLine)
          const hasServiceKeywords = /api|service|system|database|email|web|app|server/i.test(trimmedLine)
          
          if (hasStatusKeywords || hasServiceKeywords) {
            // Extrair nome do serviço (primeira parte da linha)
            const serviceName = trimmedLine.split(/[:\-\s]/)[0]
            if (serviceName && serviceName.length > 3) {
              const status: StatusService['status'] = 
                /operational|up|online/i.test(trimmedLine) ? 'operational' :
                /warning|degraded/i.test(trimmedLine) ? 'warning' :
                /error|down|offline/i.test(trimmedLine) ? 'error' : 'unknown'
              
              const service: StatusService = {
                name: serviceName,
                status,
                description: trimmedLine
              }
              
              services.push(service)
              console.log(`Serviço genérico encontrado: ${serviceName} - ${status}`)
            }
          }
        }
      })
    }
    
    // Se ainda não encontrou nada, retornar array vazio para mostrar fallback
    if (services.length === 0) {
      console.log('Nenhum serviço encontrado, retornando array vazio')
      return []
    }
    
    return services
    
  } catch (error) {
    console.error('Erro ao fazer parse do HTML:', error)
    return []
  }
}

const loadStatus = async () => {
  loading.value = true
  
  try {
    // Lista de proxies CORS para tentar
    const proxyUrls = [
      'https://api.allorigins.win/get?url=',
      'https://cors-anywhere.herokuapp.com/',
      'https://thingproxy.freeboard.io/fetch/',
      'https://api.codetabs.com/v1/proxy?quest='
    ]
    
    let htmlContent = ''
    let success = false
    
    // Tentar cada proxy até encontrar um que funcione
    for (const proxyUrl of proxyUrls) {
      try {
        console.log(`Tentando proxy: ${proxyUrl}`)
        
        const targetUrl = encodeURIComponent('https://kuma.doctornfse.com.br/status/doctornfse')
        const response = await fetch(proxyUrl + targetUrl, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
          }
        })
        
        if (response.ok) {
          const data = await response.json()
          
          if (data.contents) {
            htmlContent = data.contents
            success = true
            console.log('Proxy funcionou:', proxyUrl)
            break
          } else if (data.status === 'success' && data.data) {
            htmlContent = data.data
            success = true
            console.log('Proxy funcionou (formato alternativo):', proxyUrl)
            break
          }
        }
      } catch (proxyError) {
        console.log(`Proxy falhou: ${proxyUrl}`, proxyError)
        continue
      }
    }
    
    // Se nenhum proxy funcionou, tentar uma abordagem alternativa
    if (!success) {
      console.log('Tentando abordagem alternativa...')
      
      try {
        // Tentar fazer uma requisição direta com headers específicos
        const response = await fetch('https://kuma.doctornfse.com.br/status/doctornfse', {
          method: 'GET',
          headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'pt-BR,pt;q=0.9,en;q=0.8',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache'
          }
        })
        
        if (response.ok) {
          htmlContent = await response.text()
          success = true
          console.log('Requisição direta funcionou')
        }
      } catch (directError) {
        console.log('Requisição direta falhou:', directError)
      }
    }
    
    if (success && htmlContent) {
      // Verificar se o conteúdo contém noscript (página de fallback)
      if (htmlContent.includes('noscript') || htmlContent.includes('JavaScript') || htmlContent.includes('Sorry, you don\'t seem to have JavaScript')) {
        console.log('Detectado conteúdo noscript - página de fallback')
        throw new Error('Página de fallback detectada - JavaScript necessário')
      }
      
      // Verificar se o conteúdo parece ser uma página de status válida
      if (!htmlContent.includes('status') && !htmlContent.includes('uptime') && !htmlContent.includes('operational')) {
        console.log('Conteúdo não parece ser uma página de status válida')
        throw new Error('Conteúdo inválido - não é uma página de status')
      }
      
      // Fazer parse do HTML retornado
      const services = parseKumaStatus(htmlContent)
      
      if (services.length > 0) {
        statusData.value = services
        lastUpdate.value = new Date().toLocaleString('pt-BR')
        console.log('Status carregado com sucesso:', services.length, 'serviços')
      } else {
        throw new Error('Nenhum serviço encontrado no conteúdo')
      }
    } else {
      throw new Error('Não foi possível carregar o conteúdo da página')
    }
    
  } catch (error) {
    console.error('Erro ao carregar status:', error)
    // Em caso de erro, retornar array vazio para mostrar fallback
    statusData.value = []
    lastUpdate.value = new Date().toLocaleString('pt-BR')
  } finally {
    loading.value = false
  }
}

const refreshStatus = async () => {
  refreshing.value = true
  await loadStatus()
  refreshing.value = false
}

onMounted(() => {
  loadStatus()
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

.loading-section {
  padding: var(--spacing-16) 0;
  text-align: center;
}

.loading-content {
  max-width: 400px;
  margin: 0 auto;
}

.loading-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid var(--gray-200);
  border-top: 4px solid var(--primary-color);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto var(--spacing-4);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-content h3 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
}

.loading-content p {
  color: var(--gray-600);
}

.live-status {
  padding: var(--spacing-16) 0;
  background: var(--white);
}

.status-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.status-header {
  text-align: center;
  margin-bottom: var(--spacing-8);
}

.status-header h2 {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
}

.status-header p {
  color: var(--gray-600);
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-6);
}

.status-actions {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
}

.status-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-8);
}

.status-card {
  background: var(--white);
  border: 2px solid var(--gray-200);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-6);
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.status-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.status-card.operational {
  border-color: var(--success-color);
}

.status-card.warning {
  border-color: var(--warning-color);
}

.status-card.error {
  border-color: var(--danger-color);
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.status-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
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

.status-dot.unknown {
  background: var(--gray-400);
}

.status-text {
  font-size: var(--font-size-sm);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.status-text.operational {
  color: var(--success-color);
}

.status-text.warning {
  color: var(--warning-color);
}

.status-text.error {
  color: var(--danger-color);
}

.status-text.unknown {
  color: var(--gray-500);
}

.service-info h3 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
}

.service-info p {
  color: var(--gray-600);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-3);
}

.service-meta {
  display: flex;
  gap: var(--spacing-4);
  font-size: var(--font-size-xs);
  color: var(--gray-500);
}

.uptime, .response-time {
  background: var(--gray-100);
  padding: var(--spacing-1) var(--spacing-2);
  border-radius: var(--border-radius-sm);
}

.service-actions {
  margin-top: auto;
}

.btn-sm {
  padding: var(--spacing-2) var(--spacing-3);
  font-size: var(--font-size-sm);
}

.status-summary {
  background: var(--gray-50);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-6);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: var(--spacing-4);
}

.summary-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-3);
  background: var(--white);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
}

.summary-label {
  font-size: var(--font-size-sm);
  color: var(--gray-600);
  font-weight: 500;
}

.summary-value {
  font-size: var(--font-size-lg);
  font-weight: 700;
}

.summary-value.operational {
  color: var(--success-color);
}

.summary-value.warning {
  color: var(--warning-color);
}

.summary-value.error {
  color: var(--danger-color);
}

.fallback {
  padding: var(--spacing-16) 0;
  background: var(--gray-50);
}

.fallback-content {
  text-align: center;
  max-width: 600px;
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

.fallback-actions {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  margin: var(--spacing-8) 0;
  flex-wrap: wrap;
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
  
  .status-header h2 {
    font-size: var(--font-size-xl);
  }
  
  .status-header p {
    font-size: var(--font-size-base);
  }
  
  .status-grid {
    grid-template-columns: 1fr;
  }
  
  .status-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .fallback-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .status-summary {
    grid-template-columns: 1fr;
  }
}
</style>
