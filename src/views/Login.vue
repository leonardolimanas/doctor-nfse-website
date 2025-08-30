<template>
  <div class="login">
    <div class="login-container">
      <div class="login-content">
        <!-- Logo e Header -->
        <div class="login-header">
          <div class="logo">
            <span class="logo-icon">🏥</span>
            <span class="logo-text">Doctor NFS-e</span>
          </div>
          <h1>Bem-vindo de volta</h1>
          <p>Faça login para acessar sua conta</p>
        </div>

        <!-- Formulário de Login -->
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <label for="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              required
              placeholder="seu@email.com"
              :class="{ 'error': errors.email }"
            >
            <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
          </div>

          <div class="form-group">
            <label for="password">Senha</label>
            <div class="password-input">
              <input 
                :type="showPassword ? 'text' : 'password'" 
                id="password" 
                v-model="form.password"
                required
                placeholder="Sua senha"
                :class="{ 'error': errors.password }"
              >
              <button 
                type="button" 
                class="password-toggle"
                @click="togglePassword"
                :aria-label="showPassword ? 'Ocultar senha' : 'Mostrar senha'"
              >
                <span v-if="showPassword">👁️</span>
                <span v-else>👁️‍🗨️</span>
              </button>
            </div>
            <span class="error-message" v-if="errors.password">{{ errors.password }}</span>
          </div>

          <div class="form-options">
            <label class="checkbox-label">
              <input 
                type="checkbox" 
                v-model="form.rememberMe"
                class="checkbox-input"
              >
              <span class="checkbox-custom"></span>
              Lembrar de mim
            </label>
            <a href="#" class="forgot-password">Esqueceu a senha?</a>
          </div>

          <button type="submit" class="btn btn-primary btn-lg login-btn" :disabled="isLoading">
            <span v-if="isLoading">Entrando...</span>
            <span v-else>Entrar</span>
          </button>
        </form>

        <!-- Divisor -->
        <div class="divider">
          <span>ou</span>
        </div>

        <!-- Login Social -->
        <div class="social-login">
          <button type="button" class="btn btn-social btn-google">
            <span class="social-icon">🔍</span>
            Continuar com Google
          </button>
          <button type="button" class="btn btn-social btn-microsoft">
            <span class="social-icon">🪟</span>
            Continuar com Microsoft
          </button>
        </div>

        <!-- Links de Ajuda -->
        <div class="login-help">
          <p>Não tem uma conta? <router-link to="/demo">Solicitar acesso</router-link></p>
          <p>Precisa de ajuda? <router-link to="/contato">Entre em contato</router-link></p>
        </div>
      </div>

      <!-- Sidebar com Informações -->
      <div class="login-sidebar">
        <div class="sidebar-content">
          <h2>Por que escolher o Doctor NFS-e?</h2>
          <div class="benefits">
            <div class="benefit-item">
              <div class="benefit-icon">⚡</div>
              <div class="benefit-text">
                <h3>Emissão Rápida</h3>
                <p>Emita NFS-e em segundos com nossa interface intuitiva</p>
              </div>
            </div>
            
            <div class="benefit-item">
              <div class="benefit-icon">🔒</div>
              <div class="benefit-text">
                <h3>100% Seguro</h3>
                <p>Conformidade total com a legislação fiscal brasileira</p>
              </div>
            </div>
            
            <div class="benefit-item">
              <div class="benefit-icon">📊</div>
              <div class="benefit-text">
                <h3>Relatórios Detalhados</h3>
                <p>Acompanhe o desempenho financeiro em tempo real</p>
              </div>
            </div>
          </div>
          
          <div class="sidebar-cta">
            <p>Junte-se a centenas de clínicas que já confiam no Doctor NFS-e</p>
            <router-link to="/demo" class="btn btn-secondary">
              Solicitar Demo
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  email: '',
  password: '',
  rememberMe: false
})

const errors = reactive({
  email: '',
  password: ''
})

const isLoading = ref(false)
const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const validateForm = () => {
  errors.email = ''
  errors.password = ''
  
  if (!form.email) {
    errors.email = 'E-mail é obrigatório'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'E-mail inválido'
  }
  
  if (!form.password) {
    errors.password = 'Senha é obrigatória'
  } else if (form.password.length < 6) {
    errors.password = 'Senha deve ter pelo menos 6 caracteres'
  }
  
  return !errors.email && !errors.password
}

const handleLogin = async () => {
  if (!validateForm()) return
  
  isLoading.value = true
  
  try {
    // Simular processo de login
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Aqui você implementaria a lógica real de autenticação
    console.log('Login realizado:', form)
    
    // Redirecionar para o dashboard ou aplicação principal
    // router.push('/dashboard')
    
    // Por enquanto, vamos apenas mostrar uma mensagem
    alert('Login realizado com sucesso! Redirecionando...')
    
  } catch (error) {
    console.error('Erro no login:', error)
    alert('Erro ao fazer login. Tente novamente.')
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.login {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--gray-50) 0%, var(--white) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-4);
}

.login-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  width: 100%;
  background: var(--white);
  border-radius: var(--border-radius-xl);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  min-height: 600px;
}

/* Login Content */
.login-content {
  padding: var(--spacing-12);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-header {
  text-align: center;
  margin-bottom: var(--spacing-8);
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-6);
}

.logo-icon {
  font-size: var(--font-size-3xl);
  margin-right: var(--spacing-2);
}

.logo-text {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.login-header h1 {
  font-size: var(--font-size-3xl);
  font-weight: 700;
  color: var(--gray-900);
  margin-bottom: var(--spacing-2);
}

.login-header p {
  color: var(--gray-600);
  font-size: var(--font-size-lg);
}

/* Login Form */
.login-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
  margin-bottom: var(--spacing-8);
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

.form-group input {
  padding: var(--spacing-4);
  border: 2px solid var(--gray-200);
  border-radius: var(--border-radius);
  font-size: var(--font-size-base);
  transition: var(--transition);
}

.form-group input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.form-group input.error {
  border-color: var(--danger-color);
}

.error-message {
  color: var(--danger-color);
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-1);
}

.password-input {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: var(--spacing-3);
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-1);
  font-size: var(--font-size-lg);
  color: var(--gray-500);
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-4);
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  cursor: pointer;
  font-size: var(--font-size-sm);
  color: var(--gray-600);
}

.checkbox-input {
  display: none;
}

.checkbox-custom {
  width: 16px;
  height: 16px;
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
  font-size: var(--font-size-xs);
  font-weight: bold;
}

.forgot-password {
  color: var(--primary-color);
  text-decoration: none;
  font-size: var(--font-size-sm);
  font-weight: 500;
}

.forgot-password:hover {
  text-decoration: underline;
}

.login-btn {
  width: 100%;
  margin-bottom: var(--spacing-6);
}

/* Divisor */
.divider {
  text-align: center;
  margin: var(--spacing-6) 0;
  position: relative;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: var(--gray-200);
}

.divider span {
  background: var(--white);
  padding: 0 var(--spacing-4);
  color: var(--gray-500);
  font-size: var(--font-size-sm);
}

/* Social Login */
.social-login {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-8);
}

.btn-social {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-3);
  width: 100%;
  padding: var(--spacing-3) var(--spacing-4);
  border: 2px solid var(--gray-200);
  background: var(--white);
  color: var(--gray-700);
  font-weight: 500;
  transition: var(--transition);
}

.btn-social:hover {
  border-color: var(--gray-300);
  background: var(--gray-50);
}

.social-icon {
  font-size: var(--font-size-lg);
}

/* Login Help */
.login-help {
  text-align: center;
  margin-top: auto;
}

.login-help p {
  margin-bottom: var(--spacing-2);
  color: var(--gray-600);
  font-size: var(--font-size-sm);
}

.login-help a {
  color: var(--primary-color);
  text-decoration: none;
  font-weight: 500;
}

.login-help a:hover {
  text-decoration: underline;
}

/* Sidebar */
.login-sidebar {
  background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
  color: var(--white);
  padding: var(--spacing-12);
  display: flex;
  align-items: center;
}

.sidebar-content h2 {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  margin-bottom: var(--spacing-8);
  text-align: center;
}

.benefits {
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
  background: rgba(255, 255, 255, 0.2);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  flex-shrink: 0;
}

.benefit-text h3 {
  font-size: var(--font-size-lg);
  font-weight: 600;
  margin-bottom: var(--spacing-2);
}

.benefit-text p {
  opacity: 0.9;
  line-height: 1.6;
  font-size: var(--font-size-sm);
}

.sidebar-cta {
  text-align: center;
  padding-top: var(--spacing-6);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.sidebar-cta p {
  margin-bottom: var(--spacing-4);
  opacity: 0.9;
}

/* Responsividade */
@media (max-width: 1024px) {
  .login-container {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
  
  .login-sidebar {
    display: none;
  }
}

@media (max-width: 768px) {
  .login {
    padding: var(--spacing-2);
  }
  
  .login-content {
    padding: var(--spacing-8);
  }
  
  .login-header h1 {
    font-size: var(--font-size-2xl);
  }
  
  .form-options {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-3);
  }
}
</style>
