<template>
  <div class="recursos">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Recursos Completos para Gestão de NFS-e</h1>
          <p class="hero-subtitle">
            Descubra todas as funcionalidades que fazem do Doctor NFS-e a solução ideal 
            para clínicas médicas que buscam eficiência e conformidade fiscal.
          </p>
        </div>
      </div>
    </section>

    <!-- Main Features -->
    <section class="main-features">
      <div class="container">
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-content">
              <div class="feature-icon">📝</div>
              <h2 class="feature-title">Emissão de NFS-e</h2>
              <p class="feature-description">
                Emita notas fiscais de serviços eletrônicos de forma rápida e intuitiva. 
                Nossa interface foi desenvolvida pensando na rotina das clínicas médicas.
              </p>
              <ul class="feature-list">
                <li>Templates personalizáveis</li>
                <li>Preenchimento automático de dados</li>
                <li>Validação em tempo real</li>
                <li>Assinatura digital integrada</li>
                <li>Envio automático para a SEFAZ</li>
              </ul>
            </div>
            <div class="feature-visual">
              <OptimizedImage 
                :src="images.clinicManagerCalculator"
                image-key="clinicManagerCalculator"
                image-class="feature-illustration"
              />
            </div>
          </div>

          <div class="feature-item reverse">
            <div class="feature-content">
              <div class="feature-icon">📊</div>
              <h2 class="feature-title">Dashboard e Relatórios</h2>
              <p class="feature-description">
                Acompanhe o desempenho financeiro da sua clínica com dashboards interativos 
                e relatórios detalhados em tempo real.
              </p>
              <ul class="feature-list">
                <li>Métricas de faturamento</li>
                <li>Análise de receitas por período</li>
                <li>Relatórios de impostos</li>
                <li>Exportação em múltiplos formatos</li>
                <li>Gráficos interativos</li>
              </ul>
            </div>
            <div class="feature-visual">
              <OptimizedImage 
                :src="images.medicalTeamCollaboration"
                image-key="medicalTeamCollaboration"
                image-class="feature-illustration"
              />
            </div>
          </div>

          <div class="feature-item">
            <div class="feature-content">
              <div class="feature-icon">🔗</div>
              <h2 class="feature-title">Integrações e API</h2>
              <p class="feature-description">
                Conecte o Doctor NFS-e com seus sistemas existentes através de nossa API robusta 
                ou integrações nativas com as principais soluções do mercado.
              </p>
              <ul class="feature-list">
                <li>API REST completa</li>
                <li>Webhooks para notificações</li>
                <li>Integração com sistemas médicos</li>
                <li>Conectores para ERPs</li>
                <li>Documentação detalhada</li>
              </ul>
            </div>
            <div class="feature-visual">
              <OptimizedImage 
                :src="images.clinicManagement"
                image-key="clinicManagement"
                image-class="feature-illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Features -->
    <section class="additional-features">
      <div class="container">
        <h2 class="section-title">Mais Funcionalidades</h2>
        <div class="features-cards">
          <div class="feature-card">
            <div class="card-icon">🔒</div>
            <h3>Segurança e Conformidade</h3>
            <p>Conformidade total com a legislação fiscal brasileira e proteção de dados dos pacientes.</p>
          </div>
          
          <div class="feature-card">
            <div class="card-icon">📱</div>
            <h3>Acesso Multiplataforma</h3>
            <p>Acesse o sistema de qualquer dispositivo com interface responsiva e otimizada.</p>
          </div>
          
          <div class="feature-card">
            <div class="card-icon">⚡</div>
            <h3>Performance Otimizada</h3>
            <p>Sistema rápido e responsivo, mesmo com grande volume de transações.</p>
          </div>
          
          <div class="feature-card">
            <div class="card-icon">🔄</div>
            <h3>Backup Automático</h3>
            <p>Seus dados são protegidos com backup automático e redundância de sistemas.</p>
          </div>
          
          <div class="feature-card">
            <div class="card-icon">🎯</div>
            <h3>Suporte Especializado</h3>
            <p>Equipe técnica especializada em NFS-e para clínicas médicas.</p>
          </div>
          
          <div class="feature-card">
            <div class="card-icon">📚</div>
            <h3>Treinamento e Documentação</h3>
            <p>Materiais de treinamento e documentação completa para sua equipe.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Professionals Gallery -->
    <section class="professionals-showcase">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Profissionais em Ação</h2>
          <p class="section-subtitle">
            Veja como nossos usuários utilizam o Doctor NFS-e em suas rotinas diárias.
          </p>
        </div>
        
        <div class="showcase-grid">
          <div class="showcase-item">
            <OptimizedImage 
              :src="images.medicalProfessional1"
              image-key="medicalProfessional1"
              image-class="showcase-image"
            />
            <div class="showcase-caption">
              <h3>Gestão de Consultórios</h3>
              <p>Profissionais gerenciando consultórios com eficiência</p>
            </div>
          </div>
          
          <div class="showcase-item">
            <OptimizedImage 
              :src="images.medicalProfessional2"
              image-key="medicalProfessional2"
              image-class="showcase-image"
            />
            <div class="showcase-caption">
              <h3>Análise de Relatórios</h3>
              <p>Profissionais analisando dados e métricas</p>
            </div>
          </div>
          
          <div class="showcase-item">
            <OptimizedImage 
              :src="images.medicalProfessional3"
              image-key="medicalProfessional3"
              image-class="showcase-image"
            />
            <div class="showcase-caption">
              <h3>Colaboração em Equipe</h3>
              <p>Equipes médicas trabalhando em conjunto</p>
            </div>
          </div>
          
          <div class="showcase-item">
            <OptimizedImage 
              :src="images.medicalProfessional4"
              image-key="medicalProfessional4"
              image-class="showcase-image"
            />
            <div class="showcase-caption">
              <h3>Reuniões de Planejamento</h3>
              <p>Profissionais planejando estratégias</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Experimente Todos os Recursos</h2>
          <p>Solicite uma demonstração gratuita e descubra como o Doctor NFS-e pode transformar a gestão fiscal da sua clínica.</p>
          <router-link to="/demo" class="btn btn-primary btn-lg">Solicitar Demo</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import OptimizedImage from '@/components/OptimizedImage.vue'
import { images } from '@/assets/images/index'

// Componente Recursos - Página de funcionalidades do sistema
</script>

<style scoped>
.recursos {
  min-height: 100vh;
}

/* Hero Section */
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
  font-size: var(--font-size-xl);
  color: var(--gray-600);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Main Features */
.main-features {
  padding: var(--spacing-16) 0;
}

.features-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-20);
}

.feature-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  align-items: center;
}

.feature-item.reverse {
  direction: rtl;
}

.feature-item.reverse .feature-content {
  direction: ltr;
}

.feature-content {
  padding: var(--spacing-6);
}

.feature-icon {
  font-size: var(--font-size-5xl);
  margin-bottom: var(--spacing-4);
}

.feature-title {
  font-size: var(--font-size-3xl);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--spacing-4);
}

.feature-description {
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: var(--spacing-6);
}

.feature-list {
  list-style: none;
}

.feature-list li {
  padding: var(--spacing-2) 0;
  color: var(--gray-700);
  position: relative;
  padding-left: var(--spacing-6);
}

.feature-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--success-color);
  font-weight: bold;
}

.feature-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Feature Illustrations */
.feature-illustration {
  width: 400px;
  height: 300px;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  transition: var(--transition);
  object-fit: cover;
  object-position: center;
}

.feature-illustration:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}

/* Additional Features */
.additional-features {
  padding: var(--spacing-16) 0;
  background: var(--gray-50);
}

.section-title {
  text-align: center;
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: var(--spacing-12);
}

.features-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-6);
}

.feature-card {
  background: var(--white);
  padding: var(--spacing-6);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--gray-200);
  text-align: center;
  transition: var(--transition);
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--primary-color);
}

.card-icon {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-4);
}

.feature-card h3 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
}

.feature-card p {
  color: var(--gray-600);
  line-height: 1.6;
}

/* Professionals Showcase */
.professionals-showcase {
  padding: var(--spacing-16) 0;
  background: var(--gray-50);
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-12);
}

.section-title {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: var(--spacing-4);
}

.section-subtitle {
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-6);
}

.showcase-item {
  background: var(--white);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.showcase-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.showcase-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
}

.showcase-caption {
  padding: var(--spacing-4);
}

.showcase-caption h3 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
}

.showcase-caption p {
  color: var(--gray-600);
  font-size: var(--font-size-sm);
  line-height: 1.5;
}

/* CTA Section */
.cta {
  padding: var(--spacing-16) 0;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: var(--white);
  text-align: center;
}

.cta h2 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  margin-bottom: var(--spacing-4);
}

.cta p {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-8);
  opacity: 0.9;
}

/* Responsividade */
@media (max-width: 1024px) {
  .feature-item {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }
  
  .feature-item.reverse {
    direction: ltr;
  }
  
  .feature-illustration {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: var(--font-size-3xl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-lg);
  }
  
  .feature-title {
    font-size: var(--font-size-2xl);
  }
  
  .features-cards {
    grid-template-columns: 1fr;
  }
}
</style>
