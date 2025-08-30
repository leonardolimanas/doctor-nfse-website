<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="nav-brand">
          <router-link to="/" class="logo">
            <span class="logo-icon">🏥</span>
            <span class="logo-text">Doctor NFS-e</span>
          </router-link>
        </div>
        
        <div class="nav-menu" :class="{ 'nav-menu--open': isMenuOpen }">
          <router-link to="/" class="nav-link">Início</router-link>
          <router-link to="/recursos" class="nav-link">Recursos</router-link>
          <router-link to="/precos" class="nav-link">Preços</router-link>
          <router-link to="/sobre" class="nav-link">Sobre</router-link>
          <router-link to="/contato" class="nav-link">Contato</router-link>
        </div>
        
        <div class="nav-actions">
          <router-link to="/login" class="btn btn-secondary">Entrar</router-link>
          <router-link to="/demo" class="btn btn-primary">Solicitar Demo</router-link>
        </div>
        
        <button 
          class="nav-toggle" 
          @click="toggleMenu"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <span class="nav-toggle-line"></span>
          <span class="nav-toggle-line"></span>
          <span class="nav-toggle-line"></span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.header {
  background-color: var(--white);
  border-bottom: 1px solid var(--gray-200);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.95);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-4) 0;
  position: relative;
}

.nav-brand {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: 700;
  font-size: var(--font-size-xl);
}

.logo-icon {
  font-size: var(--font-size-2xl);
  margin-right: var(--spacing-2);
}

.logo-text {
  background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
}

.nav-link {
  text-decoration: none;
  color: var(--gray-600);
  font-weight: 500;
  transition: var(--transition);
  position: relative;
}

.nav-link:hover {
  color: var(--primary-color);
}

.nav-link.router-link-active {
  color: var(--primary-color);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--primary-color);
  border-radius: 1px;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
}

.nav-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-2);
  gap: 4px;
}

.nav-toggle-line {
  width: 24px;
  height: 2px;
  background-color: var(--gray-600);
  transition: var(--transition);
}

/* Responsividade */
@media (max-width: 768px) {
  .nav-menu {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--white);
    border-top: 1px solid var(--gray-200);
    flex-direction: column;
    padding: var(--spacing-4);
    gap: var(--spacing-4);
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
  }
  
  .nav-menu--open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }
  
  .nav-actions {
    display: none;
  }
  
  .nav-toggle {
    display: flex;
  }
  
  .nav-toggle--open .nav-toggle-line:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }
  
  .nav-toggle--open .nav-toggle-line:nth-child(2) {
    opacity: 0;
  }
  
  .nav-toggle--open .nav-toggle-line:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }
}
</style>
