<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              Simplifique a Gestão de <span class="text-gradient">NFS-e</span> da Sua Clínica
            </h1>
            <p class="hero-subtitle">
              Sistema completo e intuitivo para emissão, controle e gestão de Notas Fiscais de Serviços Eletrônicos. 
              Foque no que realmente importa: seus pacientes.
            </p>
            <div class="hero-actions">
              <router-link to="/demo" class="btn btn-primary btn-lg">
                Solicitar Demo Gratuito
              </router-link>
              <router-link to="/recursos" class="btn btn-secondary btn-lg">
                Conhecer Recursos
              </router-link>
            </div>
            <div class="hero-stats">
              <div class="stat">
                <span class="stat-number">500+</span>
                <span class="stat-label">Clínicas Atendidas</span>
              </div>
              <div class="stat">
                <span class="stat-number">50k+</span>
                <span class="stat-label">NFS-e Emitidas</span>
              </div>
              <div class="stat">
                <span class="stat-number">99.9%</span>
                <span class="stat-label">Uptime</span>
              </div>
            </div>
          </div>
          <div class="hero-visual">
            <div class="hero-image">
              <OptimizedImage 
                :src="images.doctorWorkingComputer"
                image-key="doctorWorkingComputer"
                image-class="hero-illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Por que escolher o Doctor NFS-e?</h2>
          <p class="section-subtitle">
            Desenvolvido especificamente para clínicas médicas, nosso sistema oferece tudo que você precisa 
            para uma gestão fiscal eficiente e sem complicações.
          </p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">⚡</div>
            <h3 class="feature-title">Emissão Rápida</h3>
            <p class="feature-description">
              Emita NFS-e em segundos com nossa interface intuitiva e templates personalizáveis.
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🔒</div>
            <h3 class="feature-title">100% Seguro</h3>
            <p class="feature-description">
              Conformidade total com a legislação fiscal e proteção de dados dos seus pacientes.
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">📊</div>
            <h3 class="feature-title">Relatórios Detalhados</h3>
            <p class="feature-description">
              Acompanhe o desempenho financeiro com dashboards e relatórios em tempo real.
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🔄</div>
            <h3 class="feature-title">Integração Total</h3>
            <p class="feature-description">
              Conecte-se com seus sistemas existentes via API ou integrações nativas.
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3 class="feature-title">Multiplataforma</h3>
            <p class="feature-description">
              Acesse de qualquer dispositivo: desktop, tablet ou smartphone.
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3 class="feature-title">Suporte Especializado</h3>
            <p class="feature-description">
              Equipe técnica especializada em NFS-e para clínicas médicas.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Software Efficiency Section -->
    <section class="software-efficiency">
      <div class="container">
        <div class="efficiency-content">
          <div class="efficiency-text">
            <h2 class="efficiency-title">Software Médico que Garante Mais Eficiência</h2>
            <p class="efficiency-description">
              Nossa solução foi desenvolvida especificamente para otimizar a gestão de clínicas e consultórios, 
              garantindo maior eficiência operacional e melhor atendimento aos pacientes.
            </p>
            <ul class="efficiency-list">
              <li>Automação de processos fiscais</li>
              <li>Integração com sistemas médicos</li>
              <li>Relatórios em tempo real</li>
              <li>Conformidade fiscal automática</li>
            </ul>
          </div>
          <div class="efficiency-visual">
            <OptimizedImage 
              :src="images.softwareEfficiency"
              image-key="softwareEfficiency"
              image-class="efficiency-illustration"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Medical Professionals Gallery -->
    <section class="professionals-gallery">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Profissionais que Confiam no Doctor NFS-e</h2>
          <p class="section-subtitle">
            Conheça alguns dos profissionais de saúde que já utilizam nossa solução para otimizar 
            a gestão fiscal de suas clínicas e consultórios.
          </p>
        </div>
        
        <div class="gallery-grid">
          <div class="gallery-item">
            <OptimizedImage 
              :src="images.medicalProfessional1"
              image-key="medicalProfessional1"
              image-class="gallery-image"
            />
          </div>
          <div class="gallery-item">
            <OptimizedImage 
              :src="images.medicalProfessional2"
              image-key="medicalProfessional2"
              image-class="gallery-image"
            />
          </div>
          <div class="gallery-item">
            <OptimizedImage 
              :src="images.medicalProfessional3"
              image-key="medicalProfessional3"
              image-class="gallery-image"
            />
          </div>
          <div class="gallery-item">
            <OptimizedImage 
              :src="images.medicalProfessional4"
              image-key="medicalProfessional4"
              image-class="gallery-image"
            />
          </div>
          <div class="gallery-item">
            <OptimizedImage 
              :src="images.medicalProfessional5"
              image-key="medicalProfessional5"
              image-class="gallery-image"
            />
          </div>
          <div class="gallery-item">
            <OptimizedImage 
              :src="images.medicalProfessional6"
              image-key="medicalProfessional6"
              image-class="gallery-image"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Pronto para simplificar sua gestão fiscal?</h2>
          <p class="cta-subtitle">
            Junte-se a centenas de clínicas que já confiam no Doctor NFS-e para suas necessidades fiscais.
          </p>
          <div class="cta-actions">
            <router-link to="/demo" class="btn btn-primary btn-lg">
              Começar Agora
            </router-link>
            <router-link to="/contato" class="btn btn-secondary btn-lg">
              Falar com Vendas
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import OptimizedImage from '@/components/OptimizedImage.vue'
import { images } from '@/assets/images/index'

// Componente Home - Página inicial do site
</script>

<style scoped>
.home {
  min-height: 100vh;
}

/* Hero Section */
.hero {
  padding: var(--spacing-20) 0 var(--spacing-16);
  background: linear-gradient(135deg, var(--gray-50) 0%, var(--white) 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 80% 20%, var(--primary-color) 0%, transparent 50%);
  opacity: 0.05;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-16);
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: 800;
  line-height: 1.1;
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
}

.text-gradient {
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  color: var(--gray-600);
  line-height: 1.6;
  margin-bottom: var(--spacing-8);
}

.hero-actions {
  display: flex;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-10);
}

.hero-stats {
  display: flex;
  gap: var(--spacing-8);
}

.stat {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-number {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--primary-color);
}

.stat-label {
  font-size: var(--font-size-sm);
  color: var(--gray-500);
  text-align: center;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image {
  position: relative;
}

.hero-illustration {
  width: 400px;
  height: 300px;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-xl);
  transition: var(--transition);
  object-fit: cover;
  object-position: center;
}

.hero-illustration:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-2xl);
}

/* Features Section */
.features {
  padding: var(--spacing-16) 0;
  background: var(--white);
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-16);
}

.section-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: var(--spacing-4);
}

.section-subtitle {
  font-size: var(--font-size-xl);
  color: var(--gray-600);
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-8);
}

.feature-card {
  background: var(--white);
  padding: var(--spacing-8);
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

.feature-icon {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-4);
}

.feature-title {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
}

.feature-description {
  color: var(--gray-600);
  line-height: 1.6;
}

/* Software Efficiency Section */
.software-efficiency {
  padding: var(--spacing-16) 0;
  background: var(--gray-50);
}

.efficiency-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  align-items: center;
}

.efficiency-title {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: var(--spacing-4);
}

.efficiency-description {
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  margin-bottom: var(--spacing-6);
  line-height: 1.6;
}

.efficiency-list {
  list-style: none;
  padding: 0;
}

.efficiency-list li {
  padding: var(--spacing-2) 0;
  color: var(--gray-700);
  position: relative;
  padding-left: var(--spacing-6);
}

.efficiency-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--success-color);
  font-weight: bold;
}

.efficiency-illustration {
  width: 100%;
  height: 300px;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  object-fit: cover;
  object-position: center;
}

/* Medical Professionals Gallery */
.professionals-gallery {
  padding: var(--spacing-16) 0;
  background: var(--white);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-6);
  margin-top: var(--spacing-12);
}

.gallery-item {
  background: var(--white);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.gallery-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
  display: block;
}

/* Garantir que todos os itens da galeria sejam visíveis */
.gallery-item {
  background: var(--white);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  min-height: 200px;
  display: flex;
  flex-direction: column;
}

.gallery-item img {
  flex: 1;
  width: 100%;
  height: 200px;
  object-fit: cover;
  object-position: center;
}

/* CTA Section */
.cta {
  padding: var(--spacing-16) 0;
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: var(--white);
}

.cta-content {
  text-align: center;
}

.cta-title {
  font-size: var(--font-size-4xl);
  font-weight: 700;
  margin-bottom: var(--spacing-4);
}

.cta-subtitle {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-8);
  opacity: 0.9;
}

.cta-actions {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
}

/* Responsividade */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-8);
  }
  
  .hero-title {
    font-size: var(--font-size-4xl);
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-stats {
    justify-content: center;
  }
  
  .hero-illustration {
    width: 350px;
    height: 250px;
  }
  
  .efficiency-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: var(--spacing-8);
  }
}

@media (max-width: 768px) {
  .hero {
    padding: var(--spacing-12) 0 var(--spacing-8);
  }
  
  .hero-title {
    font-size: var(--font-size-3xl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-lg);
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-stats {
    flex-direction: column;
    gap: var(--spacing-4);
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .hero-illustration {
    width: 300px;
    height: 200px;
  }
}
</style>
