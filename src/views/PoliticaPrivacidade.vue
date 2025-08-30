<template>
  <div class="politica-privacidade">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Política de Privacidade</h1>
          <p class="hero-subtitle">
            Última atualização: {{ new Date().toLocaleDateString('pt-BR') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Content Section -->
    <section class="content">
      <div class="container">
        <div class="content-wrapper">
          <h2>1. Informações Gerais</h2>
          <p>
            A Doctor NFSe ("nós", "nosso", "nossa") está comprometida em proteger a privacidade 
            de seus usuários. Esta Política de Privacidade descreve como coletamos, usamos, 
            armazenamos e protegemos suas informações pessoais.
          </p>

          <h2>2. Informações que Coletamos</h2>
          <h3>2.1 Informações Fornecidas por Você</h3>
          <ul>
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Telefone</li>
            <li>Nome da empresa/clínica</li>
            <li>CNPJ</li>
            <li>Informações de contato</li>
          </ul>

          <h3>2.2 Informações Coletadas Automaticamente</h3>
          <ul>
            <li>Endereço IP</li>
            <li>Informações do navegador</li>
            <li>Cookies e tecnologias similares</li>
            <li>Dados de uso do sistema</li>
            <li>Informações de dispositivo</li>
          </ul>

          <h2>3. Como Usamos Suas Informações</h2>
          <p>Utilizamos suas informações para:</p>
          <ul>
            <li>Fornecer e melhorar nossos serviços</li>
            <li>Processar transações e pagamentos</li>
            <li>Enviar comunicações importantes</li>
            <li>Fornecer suporte técnico</li>
            <li>Analisar o uso do sistema</li>
            <li>Cumprir obrigações legais</li>
          </ul>

          <h2>4. Compartilhamento de Informações</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
            exceto nas seguintes situações:
          </p>
          <ul>
            <li>Com seu consentimento explícito</li>
            <li>Para cumprir obrigações legais</li>
            <li>Com prestadores de serviços confiáveis</li>
            <li>Para proteger nossos direitos e segurança</li>
          </ul>

          <h2>5. Segurança dos Dados</h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para proteger suas 
            informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>

          <h2>6. Retenção de Dados</h2>
          <p>
            Mantemos suas informações pessoais apenas pelo tempo necessário para cumprir 
            os propósitos descritos nesta política ou conforme exigido por lei.
          </p>

          <h2>7. Seus Direitos</h2>
          <p>Você tem o direito de:</p>
          <ul>
            <li>Acessar suas informações pessoais</li>
            <li>Corrigir dados imprecisos</li>
            <li>Solicitar a exclusão de dados</li>
            <li>Revogar consentimento</li>
            <li>Portabilidade de dados</li>
            <li>Oposição ao processamento</li>
          </ul>

          <h2>8. Cookies</h2>
          <p>
            Utilizamos cookies e tecnologias similares para melhorar sua experiência, 
            analisar o uso do site e personalizar conteúdo. Você pode gerenciar suas 
            preferências de cookies através das configurações do navegador.
          </p>

          <h2>9. Alterações na Política</h2>
          <p>
            Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos 
            sobre mudanças significativas através do site ou e-mail.
          </p>

          <h2>10. Contato</h2>
          <p>
            Para dúvidas sobre esta Política de Privacidade, entre em contato conosco:
          </p>
          <ul>
            <li><strong>E-mail:</strong> privacidade@doctornfse.com.br</li>
            <li><strong>Telefone:</strong> (11) 3000-5000</li>
            <li><strong>Endereço:</strong> Rua das Clínicas, 123 - São Paulo/SP</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Componente de Política de Privacidade
</script>

<style scoped>
.politica-privacidade {
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

.content {
  padding: var(--spacing-16) 0;
  background: var(--white);
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
}

.content-wrapper h2 {
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--gray-900);
  margin: var(--spacing-8) 0 var(--spacing-4);
  border-bottom: 2px solid var(--primary-color);
  padding-bottom: var(--spacing-2);
}

.content-wrapper h3 {
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--gray-800);
  margin: var(--spacing-6) 0 var(--spacing-3);
}

.content-wrapper p {
  color: var(--gray-700);
  margin-bottom: var(--spacing-4);
}

.content-wrapper ul {
  margin: var(--spacing-4) 0;
  padding-left: var(--spacing-6);
}

.content-wrapper li {
  color: var(--gray-700);
  margin-bottom: var(--spacing-2);
}

.content-wrapper strong {
  color: var(--gray-900);
  font-weight: 600;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: var(--font-size-3xl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-base);
  }
  
  .content-wrapper {
    padding: 0 var(--spacing-4);
  }
}
</style>
