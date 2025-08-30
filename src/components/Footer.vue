<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-brand">
            <span class="footer-logo-icon">🏥</span>
            <span class="footer-logo-text">Doctor NFS-e</span>
          </div>
          <p class="footer-description">
            Sistema completo de gerenciamento de NFS-e para clínicas médicas. 
            Simplifique seus processos fiscais e foque no que realmente importa: seus pacientes.
          </p>
          <div class="footer-social">
            <a href="#" class="social-link" aria-label="LinkedIn">
              <span class="social-icon">🔗</span>
            </a>
            <a href="#" class="social-link" aria-label="Twitter">
              <span class="social-icon">🐦</span>
            </a>
            <a href="#" class="social-link" aria-label="Facebook">
              <span class="social-icon">📘</span>
            </a>
          </div>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-title">Produto</h3>
          <ul class="footer-links">
            <li><router-link to="/recursos">Recursos</router-link></li>
            <li><router-link to="/precos">Preços</router-link></li>
            <li><router-link to="/demo">Solicitar Demo</router-link></li>
            <li><router-link to="/api">API</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-title">Empresa</h3>
          <ul class="footer-links">
            <li><router-link to="/sobre">Sobre Nós</router-link></li>
            <li><router-link to="/contato">Contato</router-link></li>
            <li><router-link to="/carreiras">Carreiras</router-link></li>
            <li><router-link to="/imprensa">Imprensa</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-title">Suporte</h3>
          <ul class="footer-links">
            <li><router-link to="/ajuda">Central de Ajuda</router-link></li>
            <li><router-link to="/documentacao">Documentação</router-link></li>
            <li><router-link to="/status">Status do Sistema</router-link></li>
            <li><router-link to="/contato">Suporte Técnico</router-link></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3 class="footer-title">Legal</h3>
          <ul class="footer-links">
            <li><router-link to="/privacidade">Política de Privacidade</router-link></li>
            <li><router-link to="/termos">Termos de Uso</router-link></li>
            <li><router-link to="/lgpd">LGPD</router-link></li>
            <li><router-link to="/cookies">Política de Cookies</router-link></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>&copy; {{ currentYear }} Doctor NFS-e. Todos os direitos reservados.</p>
        </div>
        <div class="footer-newsletter">
          <p>Receba novidades sobre o produto</p>
          <div class="newsletter-form">
            <input 
              type="email" 
              placeholder="Seu e-mail" 
              class="newsletter-input"
              v-model="email"
            >
            <button class="btn btn-primary" @click="subscribeNewsletter">
              Inscrever
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const email = ref('')
const currentYear = computed(() => new Date().getFullYear())

const subscribeNewsletter = () => {
  if (email.value) {
    // Aqui você implementaria a lógica para inscrever na newsletter
    console.log('Inscrito na newsletter:', email.value)
    email.value = ''
    alert('Inscrição realizada com sucesso!')
  }
}
</script>

<style scoped>
.footer {
  background-color: var(--gray-900);
  color: var(--gray-300);
  padding: var(--spacing-16) 0 var(--spacing-8);
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-12);
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-brand {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-4);
}

.footer-logo-icon {
  font-size: var(--font-size-2xl);
  margin-right: var(--spacing-2);
}

.footer-logo-text {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--white);
}

.footer-description {
  color: var(--gray-400);
  line-height: 1.6;
  margin-bottom: var(--spacing-6);
}

.footer-social {
  display: flex;
  gap: var(--spacing-3);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--gray-800);
  border-radius: var(--border-radius);
  transition: var(--transition);
}

.social-link:hover {
  background-color: var(--primary-color);
  transform: translateY(-2px);
}

.social-icon {
  font-size: var(--font-size-lg);
}

.footer-title {
  color: var(--white);
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-4);
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: var(--spacing-2);
}

.footer-links a {
  color: var(--gray-400);
  text-decoration: none;
  transition: var(--transition);
}

.footer-links a:hover {
  color: var(--white);
}

.footer-bottom {
  border-top: 1px solid var(--gray-800);
  padding-top: var(--spacing-8);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-copyright p {
  color: var(--gray-500);
}

.footer-newsletter {
  text-align: right;
}

.footer-newsletter p {
  margin-bottom: var(--spacing-3);
  color: var(--gray-400);
}

.newsletter-form {
  display: flex;
  gap: var(--spacing-2);
}

.newsletter-input {
  padding: var(--spacing-2) var(--spacing-3);
  border: 1px solid var(--gray-700);
  border-radius: var(--border-radius);
  background-color: var(--gray-800);
  color: var(--white);
  min-width: 200px;
}

.newsletter-input::placeholder {
  color: var(--gray-500);
}

.newsletter-input:focus {
  outline: none;
  border-color: var(--primary-color);
}

/* Responsividade */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-6);
  }
  
  .footer-section:first-child {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: var(--spacing-6);
    text-align: center;
  }
  
  .footer-newsletter {
    text-align: center;
  }
  
  .newsletter-form {
    flex-direction: column;
    align-items: center;
  }
  
  .newsletter-input {
    min-width: 250px;
  }
}
</style>
