<template>
  <div class="demo">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Solicite sua Demonstração</h1>
          <p class="hero-subtitle">
            Descubra como o Doctor NFS-e pode transformar a gestão fiscal da sua clínica. 
            Nossa equipe especializada fará uma apresentação personalizada para suas necessidades.
          </p>
        </div>
      </div>
    </section>

    <!-- Demo Content -->
    <section class="demo-content">
      <div class="container">
        <div class="demo-grid">
          <!-- Demo Form -->
          <div class="demo-form-section">
            <h2>Solicitar Demo</h2>
            <p class="form-description">
              Preencha o formulário abaixo e nossa equipe entrará em contato em até 4 horas 
              para agendar sua demonstração personalizada.
            </p>
            
            <form @submit.prevent="submitDemoRequest" class="demo-form">
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
                  <label for="email">E-mail Corporativo *</label>
                  <input 
                    type="email" 
                    id="email" 
                    v-model="form.email"
                    required
                    placeholder="seu@clinica.com"
                  >
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="phone">Telefone *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    v-model="form.phone"
                    required
                    placeholder="(11) 99999-9999"
                  >
                </div>
                <div class="form-group">
                  <label for="clinic">Nome da Clínica *</label>
                  <input 
                    type="text" 
                    id="clinic" 
                    v-model="form.clinic"
                    required
                    placeholder="Nome da sua clínica"
                  >
                </div>
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="size">Tamanho da Clínica *</label>
                  <select id="size" v-model="form.size" required>
                    <option value="">Selecione o tamanho</option>
                    <option value="small">Pequena (1-10 funcionários)</option>
                    <option value="medium">Média (11-50 funcionários)</option>
                    <option value="large">Grande (51+ funcionários)</option>
                    <option value="network">Rede de Clínicas</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="specialty">Especialidade Principal</label>
                  <select id="specialty" v-model="form.specialty">
                    <option value="">Selecione a especialidade</option>
                    <option value="general">Clínica Geral</option>
                    <option value="cardiology">Cardiologia</option>
                    <option value="dermatology">Dermatologia</option>
                    <option value="gynecology">Ginecologia</option>
                    <option value="orthopedics">Ortopedia</option>
                    <option value="pediatrics">Pediatria</option>
                    <option value="psychiatry">Psiquiatria</option>
                    <option value="laboratory">Laboratório</option>
                    <option value="imaging">Imagem</option>
                    <option value="other">Outra</option>
                  </select>
                </div>
              </div>
              
              <div class="form-group">
                <label for="current-system">Sistema Atual</label>
                <select id="current-system" v-model="form.currentSystem">
                  <option value="">Selecione o sistema atual</option>
                  <option value="none">Nenhum sistema</option>
                  <option value="manual">Processo manual</option>
                  <option value="spreadsheet">Planilhas (Excel)</option>
                  <option value="generic">Sistema genérico</option>
                  <option value="medical">Sistema médico específico</option>
                  <option value="erp">ERP empresarial</option>
                  <option value="other">Outro</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="pain-points">Principais Desafios *</label>
                <textarea 
                  id="pain-points" 
                  v-model="form.painPoints"
                  rows="4"
                  required
                  placeholder="Descreva os principais desafios que sua clínica enfrenta na gestão fiscal..."
                ></textarea>
              </div>
              
              <div class="form-group">
                <label for="demo-preference">Preferência de Demo</label>
                <div class="radio-group">
                  <label class="radio-label">
                    <input 
                      type="radio" 
                      name="demo-preference" 
                      value="online"
                      v-model="form.demoPreference"
                      class="radio-input"
                    >
                    <span class="radio-custom"></span>
                    Online (Google Meet, Zoom, Teams)
                  </label>
                  <label class="radio-label">
                    <input 
                      type="radio" 
                      name="demo-preference" 
                      value="onsite"
                      v-model="form.demoPreference"
                      class="radio-input"
                    >
                    <span class="radio-custom"></span>
                    Presencial (em sua clínica)
                  </label>
                </div>
              </div>
              
              <div class="form-group">
                <label for="best-time">Melhor Horário para Contato</label>
                <select id="best-time" v-model="form.bestTime">
                  <option value="">Selecione o horário</option>
                  <option value="morning">Manhã (8h às 12h)</option>
                  <option value="afternoon">Tarde (13h às 17h)</option>
                  <option value="evening">Noite (18h às 20h)</option>
                  <option value="flexible">Horário flexível</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="additional-info">Informações Adicionais</label>
                <textarea 
                  id="additional-info" 
                  v-model="form.additionalInfo"
                  rows="3"
                  placeholder="Alguma informação adicional que gostaria de compartilhar..."
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
                <span v-if="isSubmitting">Enviando Solicitação...</span>
                <span v-else>Solicitar Demo</span>
              </button>
            </form>
          </div>
          
          <!-- Demo Info -->
          <div class="demo-info-section">
            <h2>O que você receberá</h2>
            <p class="info-description">
              Nossa demonstração personalizada inclui tudo que você precisa para tomar 
              uma decisão informada sobre o Doctor NFS-e.
            </p>
            
            <div class="demo-benefits">
              <div class="benefit-item">
                <div class="benefit-icon">🎯</div>
                <div class="benefit-content">
                  <h3>Demo Personalizada</h3>
                  <p>Apresentação focada nas necessidades específicas da sua clínica</p>
                </div>
              </div>
              
              <div class="benefit-item">
                <div class="benefit-icon">💻</div>
                <div class="benefit-content">
                  <h3>Teste Prático</h3>
                  <p>Experiência hands-on com o sistema em ambiente de demonstração</p>
                </div>
              </div>
              
              <div class="benefit-item">
                <div class="benefit-icon">📊</div>
                <div class="benefit-content">
                  <h3>Análise de ROI</h3>
                  <p>Demonstração do retorno sobre investimento para sua clínica</p>
                </div>
              </div>
              
              <div class="benefit-item">
                <div class="benefit-icon">🤝</div>
                <div class="benefit-content">
                  <h3>Consultoria Especializada</h3>
                  <p>Conversa com especialistas em NFS-e para clínicas médicas</p>
                </div>
              </div>
            </div>
            
            <div class="demo-process">
              <h3>Como funciona o processo</h3>
              <div class="process-steps">
                <div class="step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h4>Envio da Solicitação</h4>
                    <p>Preencha o formulário com suas informações</p>
                  </div>
                </div>
                
                <div class="step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <h4>Contato em 4h</h4>
                    <p>Nossa equipe entra em contato para agendar</p>
                  </div>
                </div>
                
                <div class="step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <h4>Demo Personalizada</h4>
                    <p>Apresentação focada nas suas necessidades</p>
                  </div>
                </div>
                
                <div class="step">
                  <div class="step-number">4</div>
                  <div class="step-content">
                    <h4>Proposta Comercial</h4>
                    <p>Receba uma proposta personalizada</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="demo-cta">
              <h3>Pronto para transformar sua gestão fiscal?</h3>
              <p>Solicite sua demonstração gratuita e sem compromisso hoje mesmo!</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
      <div class="container">
        <h2 class="section-title">O que nossos clientes dizem</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"A demonstração foi exatamente o que precisávamos. A equipe entendeu perfeitamente 
              nossos desafios e mostrou como o Doctor NFS-e poderia resolvê-los."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">👨‍⚕️</div>
              <div class="author-info">
                <h4>Dr. Carlos Mendes</h4>
                <p>Clínica CardioVida</p>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"Processo muito profissional desde o primeiro contato. A demo foi clara, 
              objetiva e nos deu todas as informações necessárias para decidir."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">👩‍⚕️</div>
              <div class="author-info">
                <h4>Dra. Ana Silva</h4>
                <p>Centro Médico Integrado</p>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"Excelente atendimento e demonstração personalizada. Conseguimos ver exatamente 
              como o sistema se adaptaria ao nosso fluxo de trabalho."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-avatar">👨‍💼</div>
              <div class="author-info">
                <h4>Roberto Santos</h4>
                <p>Gestor - Clínica Saúde Total</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq">
      <div class="container">
        <h2 class="section-title">Perguntas sobre a Demonstração</h2>
        <div class="faq-grid">
          <div class="faq-item">
            <h3 class="faq-question">A demonstração é realmente gratuita?</h3>
            <p class="faq-answer">
              Sim! Nossa demonstração é 100% gratuita e sem compromisso. Queremos que você 
              conheça o sistema antes de tomar qualquer decisão.
            </p>
          </div>
          
          <div class="faq-item">
            <h3 class="faq-question">Quanto tempo dura a demonstração?</h3>
            <p class="faq-answer">
              A demonstração padrão dura entre 45 a 60 minutos, mas pode ser estendida 
              conforme suas necessidades e dúvidas.
            </p>
          </div>
          
          <div class="faq-item">
            <h3 class="faq-question">Posso fazer perguntas durante a demo?</h3>
            <p class="faq-answer">
              Absolutamente! A demonstração é interativa e você pode fazer perguntas a qualquer momento. 
              Nossa equipe está preparada para responder todas as suas dúvidas.
            </p>
          </div>
          
          <div class="faq-item">
            <h3 class="faq-question">E se eu não estiver disponível no horário agendado?</h3>
            <p class="faq-answer">
              Sem problemas! Basta nos avisar com antecedência e reagendaremos para um horário 
              que seja melhor para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  clinic: '',
  size: '',
  specialty: '',
  currentSystem: '',
  painPoints: '',
  demoPreference: 'online',
  bestTime: '',
  additionalInfo: '',
  newsletter: false
})

const isSubmitting = ref(false)

const submitDemoRequest = async () => {
  isSubmitting.value = true
  
  try {
    // Simular envio da solicitação
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Aqui você implementaria a lógica real de envio
    console.log('Solicitação de demo enviada:', form)
    
    // Reset do formulário
    Object.keys(form).forEach(key => {
      if (key === 'demoPreference') {
        (form as any)[key] = 'online'
      } else if (key === 'newsletter') {
        (form as any)[key] = false
      } else {
        (form as any)[key] = ''
      }
    })
    
    isSubmitting.value = false
    alert('Solicitação enviada com sucesso! Nossa equipe entrará em contato em até 4 horas.')
    
  } catch (error) {
    console.error('Erro ao enviar solicitação:', error)
    alert('Erro ao enviar solicitação. Tente novamente.')
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.demo {
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

/* Demo Content */
.demo-content {
  padding: var(--spacing-16) 0;
  background: var(--white);
}

.demo-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
}

.demo-form-section h2,
.demo-info-section h2 {
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

/* Demo Form */
.demo-form {
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
  min-height: 100px;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
}

.radio-label {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  cursor: pointer;
  font-size: var(--font-size-base);
  color: var(--gray-700);
}

.radio-input {
  display: none;
}

.radio-custom {
  width: 18px;
  height: 18px;
  border: 2px solid var(--gray-300);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.radio-input:checked + .radio-custom {
  border-color: var(--primary-color);
}

.radio-input:checked + .radio-custom::after {
  content: '';
  width: 8px;
  height: 8px;
  background: var(--primary-color);
  border-radius: 50%;
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

/* Demo Info */
.demo-benefits {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-8);
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-4);
}

.benefit-icon {
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

.benefit-content h3 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
}

.benefit-content p {
  color: var(--gray-600);
  line-height: 1.6;
}

.demo-process {
  margin-bottom: var(--spacing-8);
}

.demo-process h3 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--spacing-6);
}

.process-steps {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.step {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-4);
}

.step-number {
  background: var(--primary-color);
  color: var(--white);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 600;
  flex-shrink: 0;
}

.step-content h4 {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--spacing-1);
}

.step-content p {
  color: var(--gray-600);
  font-size: var(--font-size-sm);
}

.demo-cta {
  background: var(--gray-50);
  padding: var(--spacing-6);
  border-radius: var(--border-radius-lg);
  text-align: center;
  border: 1px solid var(--gray-200);
}

.demo-cta h3 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
}

.demo-cta p {
  color: var(--gray-600);
  margin-bottom: 0;
}

/* Testimonials Section */
.testimonials {
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

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-8);
}

.testimonial-card {
  background: var(--white);
  padding: var(--spacing-6);
  border-radius: var(--border-radius-lg);
  border: 1px solid var(--gray-200);
}

.testimonial-content p {
  color: var(--gray-700);
  line-height: 1.6;
  font-style: italic;
  margin-bottom: var(--spacing-4);
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.author-avatar {
  font-size: var(--font-size-2xl);
  background: var(--gray-100);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.author-info h4 {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--gray-900);
  margin-bottom: var(--spacing-1);
}

.author-info p {
  color: var(--gray-600);
  font-size: var(--font-size-sm);
  margin: 0;
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

/* Responsividade */
@media (max-width: 1024px) {
  .demo-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
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
  
  .demo-form-section h2,
  .demo-info-section h2,
  .section-title {
    font-size: var(--font-size-2xl);
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
  
  .radio-group {
    gap: var(--spacing-2);
  }
}
</style>
