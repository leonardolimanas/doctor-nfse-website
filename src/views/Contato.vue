<template>
  <div class="contato">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Entre em Contato</h1>
          <p class="hero-subtitle">
            Estamos aqui para ajudar sua clínica. Entre em contato conosco e descubra 
            como o Doctor NFS-e pode transformar sua gestão fiscal.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-section">
            <h2>Envie uma Mensagem</h2>
            <p class="form-description">
              Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
            </p>
            
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Nome Completo *</label>
                  <input 
                    type="text" 
                    id="name" 
                    v-model="form.name"
                    required
                    placeholder="Seu nome completo"
                  >
                </div>
                <div class="form-group">
                  <label for="email">E-mail *</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email"
                    required
                    placeholder="seu@email.com"
                  >
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="phone">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone"
                    placeholder="(11) 99999-9999"
                  >
                </div>
                <div class="form-group">
                  <label for="clinic">Nome da Clínica</label>
                  <input 
                    type="text" 
                    id="clinic" 
                    v-model="form.clinic"
                    placeholder="Nome da sua clínica"
                  >
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject">Assunto *</label>
                <select id="subject" v-model="form.subject" required>
                  <option value="">Selecione um assunto</option>
                  <option value="demo">Solicitar Demo</option>
                  <option value="pricing">Informações sobre Preços</option>
                  <option value="support">Suporte Técnico</option>
                  <option value="partnership">Parceria Comercial</option>
                  <option value="other">Outro</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Mensagem *</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  rows="5"
                  required
                  placeholder="Descreva sua necessidade ou dúvida..."
                ></textarea>
              </div>
              
              <div class="form-group">
                <label class="checkbox-label">
                  <input 
                    type="checkbox" 
                    v-model="form.newsletter"
                    class="checkbox-input"
                  >
                  <span class="checkbox-custom"></span>
                  Desejo receber novidades sobre o Doctor NFS-e
                </label>
              </div>
              
              <button type="submit" class="btn btn-primary btn-lg" :disabled="isSubmitting">
                <span v-if="isSubmitting">Enviando...</span>
                <span v-else>Enviar Mensagem</span>
              </button>
            </form>
          </div>
          
          <!-- Contact Info -->
          <div class="contact-info-section">
            <h2>Informações de Contato</h2>
            <p class="info-description">
              Entre em contato conosco através dos canais abaixo ou visite nossa sede.
            </p>
            
            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">📧</div>
                <div class="method-content">
                  <h3>E-mail</h3>
                  <p>contato@doctornfse.com.br</p>
                  <p class="method-note">Resposta em até 24 horas</p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">📞</div>
                <div class="method-content">
                  <h3>Telefone</h3>
                  <p>(11) 3000-5000</p>
                  <p class="method-note">Segunda a Sexta, 8h às 18h</p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">💬</div>
                <div class="method-content">
                  <h3>WhatsApp</h3>
                  <p>(11) 99999-5000</p>
                  <p class="method-note">Resposta em até 2 horas</p>
                </div>
              </div>
              
              <div class="contact-method">
                <div class="method-icon">📍</div>
                <div class="method-content">
                  <h3>Endereço</h3>
                  <p>Rua das Clínicas, 123</p>
                  <p>Vila Médica - São Paulo/SP</p>
                  <p class="method-note">CEP: 01234-567</p>
                </div>
              </div>
            </div>
            
            <div class="social-links">
              <h3>Redes Sociais</h3>
              <div class="social-grid">
                <a href="#" class="social-link">
                  <span class="social-icon">🔗</span>
                  <span>LinkedIn</span>
                </a>
                <a href="#" class="social-link">
                  <span class="social-icon">🐦</span>
                  <span>Twitter</span>
                </a>
                <a href="#" class="social-link">
                  <span class="social-icon">📘</span>
                  <span>Facebook</span>
                </a>
                <a href="#" class="social-link">
                  <span class="social-icon">📷</span>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq">
      <div class="container">
        <h2 class="section-title">Perguntas Frequentes</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3 class="faq-question">Qual o tempo de resposta para solicitações?</h3>
            <p class="faq-answer">
              Nossa equipe responde todas as solicitações em até 24 horas úteis. 
              Para demos e informações comerciais, o contato é feito em até 4 horas.
            </p>
          </div>
          
          <div class="faq-item">
            <h3 class="faq-question">Posso agendar uma reunião online?</h3>
            <p class="faq-answer">
              Sim! Oferecemos reuniões online via Google Meet, Zoom ou Microsoft Teams. 
              Basta informar sua preferência no formulário de contato.
            </p>
          </div>
          
          <div class="faq-item">
            <h3 class="faq-question">Vocês atendem clínicas de todo o Brasil?</h3>
            <p class="faq-answer">
              Sim, atendemos clínicas de todos os estados brasileiros. Nossa plataforma 
              é compatível com as legislações fiscais de todas as regiões.
            </p>
          </div>
          
          <div class="faq-item">
            <h3 class="faq-question">Como funciona o suporte técnico?</h3>
            <p class="faq-answer">
              Oferecemos suporte técnico por e-mail, telefone e WhatsApp. Clientes dos 
              planos Professional e Enterprise têm acesso a suporte prioritário.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="container">
        <h2 class="section-title">Nossa Localização</h2>
        <div class="map-container">
          <div class="map-placeholder">
            <div class="map-content">
              <span class="map-icon">🗺️</span>
              <h3>Rua das Clínicas, 123</h3>
              <p>Vila Médica - São Paulo/SP</p>
              <p>CEP: 01234-567</p>
              <div class="map-actions">
                <a href="#" class="btn btn-secondary">Ver no Google Maps</a>
                <a href="#" class="btn btn-primary">Como Chegar</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  clinic: '',
  subject: '',
  message: '',
  newsletter: false
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simular envio do formulário
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Aqui você implementaria a lógica real de envio
  console.log('Formulário enviado:', form.value)
  
  // Reset do formulário
  form.value = {
    name: '',
    email: '',
    phone: '',
    clinic: '',
    subject: '',
    message: '',
    newsletter: false
  }
  
  isSubmitting.value = false
  alert('Mensagem enviada com sucesso! Entraremos em contato em breve.')
}
</script>

<style scoped>
.contato {
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

/* Contact Content */
.contact-content {
  padding: var(--spacing-16) 0;
  background: var(--white);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
}

.contact-form-section h2,
.contact-info-section h2 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: var(--spacing-4);
}

.form-description,
.info-description {
  font-size: var(--font-size-lg);
  color: var(--gray-600);
  margin-bottom: var(--spacing-8);
  line-height: 1.6;
}

/* Contact Form */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4);
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 500;
  color: var(--gray-700);
  margin-bottom: var(--spacing-2);
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: var(--spacing-3);
  border: 1px solid var(--gray-300);
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
  transition: var(--transition);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-group textarea {
  resize: vertical;
  min-height: 120px;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  cursor: pointer;
  font-size: var(--font-size-sm);
  color: var(--gray-600);
}

.checkbox-input {
  display: none;
}

.checkbox-custom {
  width: 18px;
  height: 18px;
  border: 2px solid var(--gray-300);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.checkbox-input:checked + .checkbox-custom {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.checkbox-input:checked + .checkbox-custom::after {
  content: '✓';
  color: var(--white);
  font-size: var(--font-size-sm);
  font-weight: bold;
}

/* Contact Info */
.contact-methods {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-8);
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-4);
}

.method-icon {
  font-size: var(--font-size-2xl);
  background: var(--gray-100);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  flex-shrink: 0;
}

.method-content h3 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--spacing-1);
}

.method-content p {
  color: var(--gray-600);
  margin-bottom: var(--spacing-1);
}

.method-note {
  font-size: var(--font-size-sm);
  color: var(--gray-500);
  font-style: italic;
}

.social-links h3 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--spacing-4);
}

.social-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-3);
}

.social-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  padding: var(--spacing-3);
  background: var(--gray-100);
  border-radius: var(--border-radius);
  text-decoration: none;
  color: var(--gray-700);
  transition: var(--transition);
}

.social-link:hover {
  background: var(--primary-color);
  color: var(--white);
  transform: translateY(-2px);
}

.social-icon {
  font-size: var(--font-size-lg);
}

/* FAQ Section */
.faq {
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

.faq-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-8);
  max-width: 1000px;
  margin: 0 auto;
}

.faq-item {
  background: var(--white);
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

/* Map Section */
.map-section {
  padding: var(--spacing-16) 0;
  background: var(--white);
}

.map-container {
  max-width: 800px;
  margin: 0 auto;
}

.map-placeholder {
  background: var(--gray-100);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-12);
  text-align: center;
  border: 2px dashed var(--gray-300);
}

.map-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-4);
}

.map-icon {
  font-size: var(--font-size-6xl);
  opacity: 0.6;
}

.map-content h3 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--gray-900);
  margin: 0;
}

.map-content p {
  color: var(--gray-600);
  margin: 0;
}

.map-actions {
  display: flex;
  gap: var(--spacing-3);
  margin-top: var(--spacing-4);
}

/* Responsividade */
@media (max-width: 1024px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
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
  
  .contact-form-section h2,
  .contact-info-section h2,
  .section-title {
    font-size: var(--font-size-2xl);
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .social-grid {
    grid-template-columns: 1fr;
  }
  
  .map-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>
