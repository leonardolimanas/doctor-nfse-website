<template>
  <div class="precos">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Planos e Preços</h1>
          <p class="hero-subtitle">
            Escolha o plano ideal para sua clínica. Todos os planos incluem funcionalidades essenciais 
            e suporte técnico especializado.
          </p>
        </div>
      </div>
    </section>

    <!-- Pricing Toggle -->
    <section class="pricing-toggle">
      <div class="container">
        <div class="toggle-container">
          <span class="toggle-label">Cobrança</span>
          <div class="toggle-switch">
            <input 
              type="checkbox" 
              id="billing-toggle" 
              v-model="isAnnual"
              class="toggle-input"
              aria-label="Alternar entre cobrança mensal e anual"
            >
            <label for="billing-toggle" class="toggle-label-switch">
              <span class="toggle-option" :class="{ active: !isAnnual }">Mensal</span>
              <span class="toggle-option" :class="{ active: isAnnual }">Anual</span>
            </label>
          </div>
          <div class="discount-badge" v-if="isAnnual">
            <span>💾 20% de desconto</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Plans -->
    <section class="pricing-plans">
      <div class="container">
        <div class="plans-grid">
          <!-- Plano Starter -->
          <div class="plan-card" :class="{ popular: false }">
            <div class="plan-header">
              <h3 class="plan-name">Starter</h3>
              <p class="plan-description">Ideal para clínicas pequenas</p>
              <div class="plan-price">
                <span class="currency">R$</span>
                <span class="amount">{{ isAnnual ? '79' : '99' }}</span>
                <span class="period">/mês</span>
              </div>
              <p class="plan-savings" v-if="isAnnual">
                Economia de R$ 240/ano
              </p>
            </div>
            
            <div class="plan-features">
              <h4>Inclui:</h4>
              <ul>
                <li>✓ Até 100 NFS-e/mês</li>
                <li>✓ Emissão básica</li>
                <li>✓ Dashboard simples</li>
                <li>✓ Suporte por email</li>
                <li>✓ Backup automático</li>
                <li>✓ Conformidade fiscal</li>
              </ul>
            </div>
            
            <div class="plan-actions">
              <router-link to="/demo" class="btn btn-primary btn-lg">
                Começar Gratuito
              </router-link>
              <p class="trial-text">14 dias de teste grátis</p>
            </div>
          </div>

          <!-- Plano Professional -->
          <div class="plan-card popular">
            <div class="plan-badge">Mais Popular</div>
            <div class="plan-header">
              <h3 class="plan-name">Professional</h3>
              <p class="plan-description">Perfeito para clínicas médias</p>
              <div class="plan-price">
                <span class="currency">R$</span>
                <span class="amount">{{ isAnnual ? '159' : '199' }}</span>
                <span class="period">/mês</span>
              </div>
              <p class="plan-savings" v-if="isAnnual">
                Economia de R$ 480/ano
              </p>
            </div>
            
            <div class="plan-features">
              <h4>Inclui tudo do Starter +:</h4>
              <ul>
                <li>✓ NFS-e ilimitadas</li>
                <li>✓ Relatórios avançados</li>
                <li>✓ Integrações API</li>
                <li>✓ Suporte prioritário</li>
                <li>✓ Múltiplos usuários</li>
                <li>✓ Templates personalizados</li>
                <li>✓ Backup em nuvem</li>
                <li>✓ Auditoria completa</li>
              </ul>
            </div>
            
            <div class="plan-actions">
              <router-link to="/demo" class="btn btn-primary btn-lg">
                Começar Gratuito
              </router-link>
              <p class="trial-text">14 dias de teste grátis</p>
            </div>
          </div>

          <!-- Plano Enterprise -->
          <div class="plan-card" :class="{ popular: false }">
            <div class="plan-header">
              <h3 class="plan-name">Enterprise</h3>
              <p class="plan-description">Para grandes clínicas e redes</p>
              <div class="plan-price">
                <span class="currency">R$</span>
                <span class="amount">{{ isAnnual ? '299' : '399' }}</span>
                <span class="period">/mês</span>
              </div>
              <p class="plan-savings" v-if="isAnnual">
                Economia de R$ 1.200/ano
              </p>
            </div>
            
            <div class="plan-features">
              <h4>Inclui tudo do Professional +:</h4>
              <ul>
                <li>✓ Múltiplas filiais</li>
                <li>✓ SSO e LDAP</li>
                <li>✓ SLA garantido</li>
                <li>✓ Gerente de conta</li>
                <li>✓ Treinamento personalizado</li>
                <li>✓ Integrações customizadas</li>
                <li>✓ Compliance avançado</li>
                <li>✓ Suporte 24/7</li>
              </ul>
            </div>
            
            <div class="plan-actions">
              <router-link to="/contato" class="btn btn-primary btn-lg">
                Falar com Vendas
              </router-link>
              <p class="trial-text">Solução personalizada</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="comparison">
      <div class="container">
        <h2 class="section-title">Comparação Detalhada dos Planos</h2>
        <div class="comparison-table">
          <table>
            <thead>
              <tr>
                <th>Funcionalidade</th>
                <th>Starter</th>
                <th>Professional</th>
                <th>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>NFS-e por mês</td>
                <td>100</td>
                <td>Ilimitadas</td>
                <td>Ilimitadas</td>
              </tr>
              <tr>
                <td>Usuários</td>
                <td>1</td>
                <td>Até 10</td>
                <td>Ilimitados</td>
              </tr>
              <tr>
                <td>Integrações API</td>
                <td>❌</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Relatórios avançados</td>
                <td>❌</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Suporte prioritário</td>
                <td>❌</td>
                <td>✓</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Múltiplas filiais</td>
                <td>❌</td>
                <td>❌</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>SLA garantido</td>
                <td>❌</td>
                <td>❌</td>
                <td>✓</td>
              </tr>
              <tr>
                <td>Suporte 24/7</td>
                <td>❌</td>
                <td>❌</td>
                <td>✓</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq">
      <div class="container">
        <h2 class="section-title">Perguntas Frequentes</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3 class="faq-question">Posso mudar de plano a qualquer momento?</h3>
            <p class="faq-answer">
              Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. 
              As alterações são aplicadas imediatamente e o valor é recalculado proporcionalmente.
            </p>
          </div>
          
          <div class="faq-item">
            <h3 class="faq-question">O que acontece se eu exceder o limite de NFS-e?</h3>
            <p class="faq-answer">
              Você será notificado quando estiver próximo do limite. Para exceder, 
              recomendamos fazer upgrade para o plano Professional que oferece NFS-e ilimitadas.
            </p>
          </div>
          
          <div class="faq-item">
            <h3 class="faq-question">Posso cancelar a qualquer momento?</h3>
            <p class="faq-answer">
              Sim, você pode cancelar sua assinatura a qualquer momento sem multas ou taxas. 
              Seu acesso permanecerá ativo até o final do período contratado.
            </p>
          </div>
          
          <div class="faq-item">
            <h3 class="faq-question">Os dados ficam seguros após o cancelamento?</h3>
            <p class="faq-answer">
              Seus dados são mantidos por 30 dias após o cancelamento. Você pode exportar 
              todas as informações antes de cancelar se desejar.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>Ainda tem dúvidas?</h2>
          <p>Nossa equipe está pronta para ajudar você a escolher o plano ideal para sua clínica.</p>
          <div class="cta-actions">
            <router-link to="/contato" class="btn btn-primary btn-lg">
              Falar com Especialista
            </router-link>
            <router-link to="/demo" class="btn btn-secondary btn-lg">
              Testar Gratuitamente
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isAnnual = ref(false)
</script>

<style scoped>
.precos {
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

/* Pricing Toggle */
.pricing-toggle {
  padding: var(--spacing-8) 0;
  background: var(--white);
}

.toggle-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-6);
}

.toggle-label {
  font-weight: 500;
  color: var(--gray-700);
}

.toggle-switch {
  position: relative;
  display: inline-block;
}

.toggle-input {
  opacity: 0;
  width: 0;
  height: 0;
}

.toggle-label-switch {
  display: flex;
  background: var(--gray-200);
  border-radius: 50px;
  padding: var(--spacing-1);
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease, box-shadow 0.2s ease;
  width: 120px;
  height: 32px;
  border: 2px solid transparent;
  overflow: hidden;
}

.toggle-label-switch:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.toggle-label-switch:focus-within {
  outline: 2px solid var(--primary-color);
  outline-offset: 2px;
}

.toggle-label-switch::before {
  content: '';
  position: absolute;
  top: var(--spacing-1);
  left: var(--spacing-1);
  width: 24px;
  height: 24px;
  background: var(--white);
  border-radius: 50%;
  transition: transform 0.3s ease;
  transform: translateX(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
}

.toggle-input:checked + .toggle-label-switch::before {
  transform: translateX(88px);
}

.toggle-option {
  padding: var(--spacing-2) var(--spacing-4);
  font-size: var(--font-size-sm);
  font-weight: 500;
  color: var(--gray-600);
  transition: color 0.3s ease;
  z-index: 1;
  position: relative;
  flex: 1;
  text-align: center;
  line-height: 24px;
  user-select: none;
  pointer-events: none;
}

.toggle-option.active {
  color: var(--white);
}

.toggle-input:checked + .toggle-label-switch {
  background: var(--primary-color);
}

.discount-badge {
  background: var(--accent-color);
  color: var(--white);
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--border-radius);
  font-size: var(--font-size-sm);
  font-weight: 500;
}

/* Pricing Plans */
.pricing-plans {
  padding: var(--spacing-16) 0;
  background: var(--white);
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-8);
  max-width: 1200px;
  margin: 0 auto;
}

.plan-card {
  background: var(--white);
  border: 2px solid var(--gray-200);
  border-radius: var(--border-radius-xl);
  padding: var(--spacing-8);
  position: relative;
  transition: var(--transition);
}

.plan-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.plan-card.popular {
  border-color: var(--primary-color);
  transform: scale(1.05);
}

.plan-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--primary-color);
  color: var(--white);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--border-radius);
  font-size: var(--font-size-sm);
  font-weight: 600;
}

.plan-header {
  text-align: center;
  margin-bottom: var(--spacing-8);
}

.plan-name {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
}

.plan-description {
  color: var(--gray-600);
  margin-bottom: var(--spacing-6);
}

.plan-price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--spacing-1);
  margin-bottom: var(--spacing-4);
}

.currency {
  font-size: var(--font-size-lg);
  color: var(--gray-600);
}

.amount {
  font-size: var(--font-size-5xl);
  font-weight: 800;
  color: var(--primary-color);
}

.period {
  font-size: var(--font-size-lg);
  color: var(--gray-600);
}

.plan-savings {
  color: var(--success-color);
  font-size: var(--font-size-sm);
  font-weight: 500;
}

.plan-features {
  margin-bottom: var(--spacing-8);
}

.plan-features h4 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--spacing-4);
}

.plan-features ul {
  list-style: none;
}

.plan-features li {
  padding: var(--spacing-2) 0;
  color: var(--gray-700);
}

.plan-actions {
  text-align: center;
}

.trial-text {
  margin-top: var(--spacing-3);
  font-size: var(--font-size-sm);
  color: var(--gray-500);
}

/* Comparison Table */
.comparison {
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

.comparison-table {
  overflow-x: auto;
}

.comparison-table table {
  width: 100%;
  border-collapse: collapse;
  background: var(--white);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.comparison-table th,
.comparison-table td {
  padding: var(--spacing-4);
  text-align: center;
  border-bottom: 1px solid var(--gray-200);
}

.comparison-table th {
  background: var(--gray-100);
  font-weight: 600;
  color: var(--gray-900);
}

.comparison-table th:first-child,
.comparison-table td:first-child {
  text-align: left;
  font-weight: 500;
}

/* FAQ Section */
.faq {
  padding: var(--spacing-16) 0;
  background: var(--white);
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-8);
  max-width: 1000px;
  margin: 0 auto;
}

.faq-item {
  background: var(--gray-50);
  padding: var(--spacing-6);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--gray-200);
}

.faq-question {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--spacing-3);
}

.faq-answer {
  color: var(--gray-600);
  line-height: 1.6;
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

.cta-actions {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
}

/* Responsividade */
@media (max-width: 1024px) {
  .plans-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
  
  .plan-card.popular {
    transform: none;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: var(--font-size-3xl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-lg);
  }
  
  .toggle-container {
    flex-direction: column;
    gap: var(--spacing-4);
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .comparison-table {
    font-size: var(--font-size-sm);
  }
}
</style>
