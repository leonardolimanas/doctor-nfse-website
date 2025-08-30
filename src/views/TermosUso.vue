<template>
  <div class="termos-uso">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Termos de Uso</h1>
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
          <h2>1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar o sistema Doctor NFSe, você concorda em cumprir e estar vinculado 
            a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, 
            não deve usar nossos serviços.
          </p>

          <h2>2. Descrição do Serviço</h2>
          <p>
            O Doctor NFSe é uma plataforma de gerenciamento de NFS-e (Nota Fiscal de Serviços 
            Eletrônica) desenvolvida especificamente para clínicas médicas, oferecendo:
          </p>
          <ul>
            <li>Emissão de NFS-e</li>
            <li>Gestão de clientes</li>
            <li>Relatórios e análises</li>
            <li>Integração com sistemas contábeis</li>
            <li>Suporte técnico especializado</li>
          </ul>

          <h2>3. Elegibilidade</h2>
          <p>
            Para usar nossos serviços, você deve:
          </p>
          <ul>
            <li>Ter capacidade legal para contratar</li>
            <li>Ser representante autorizado da empresa/clínica</li>
            <li>Fornecer informações verdadeiras e precisas</li>
            <li>Manter a confidencialidade de suas credenciais</li>
          </ul>

          <h2>4. Conta do Usuário</h2>
          <h3>4.1 Criação de Conta</h3>
          <p>
            Para acessar nossos serviços, você deve criar uma conta fornecendo informações 
            precisas e completas. Você é responsável por manter a confidencialidade de sua 
            senha e por todas as atividades que ocorrem em sua conta.
          </p>

          <h3>4.2 Responsabilidades da Conta</h3>
          <ul>
            <li>Manter informações atualizadas</li>
            <li>Proteger credenciais de acesso</li>
            <li>Notificar uso não autorizado</li>
            <li>Respeitar políticas de uso aceitável</li>
          </ul>

          <h2>5. Uso Aceitável</h2>
          <p>Você concorda em usar nossos serviços apenas para fins legais e permitidos:</p>
          <ul>
            <li>Emissão de NFS-e legítimas</li>
            <li>Gestão de dados reais da empresa</li>
            <li>Uso em conformidade com a legislação fiscal</li>
            <li>Respeito aos direitos de terceiros</li>
          </ul>

          <h2>6. Uso Proibido</h2>
          <p>É proibido usar nossos serviços para:</p>
          <ul>
            <li>Atividades ilegais ou fraudulentas</li>
            <li>Violar direitos de terceiros</li>
            <li>Interferir na operação do sistema</li>
            <li>Transmitir vírus ou código malicioso</li>
            <li>Coletar dados de outros usuários</li>
          </ul>

          <h2>7. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo, funcionalidades e tecnologia do Doctor NFSe são protegidos por 
            direitos autorais, marcas registradas e outras leis de propriedade intelectual. 
            Você não pode copiar, modificar ou distribuir nosso software sem autorização.
          </p>

          <h2>8. Privacidade e Dados</h2>
          <p>
            O uso de suas informações pessoais é regido por nossa Política de Privacidade, 
            que faz parte destes Termos de Uso. Ao usar nossos serviços, você concorda com 
            a coleta e uso de informações conforme descrito na política.
          </p>

          <h2>9. Limitação de Responsabilidade</h2>
          <p>
            Em nenhuma circunstância a Doctor NFSe será responsável por danos indiretos, 
            incidentais, especiais ou consequenciais decorrentes do uso de nossos serviços, 
            incluindo perda de lucros, dados ou interrupção de negócios.
          </p>

          <h2>10. Modificações dos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
            Notificaremos sobre mudanças significativas através do site ou e-mail. O uso 
            continuado após as modificações constitui aceitação dos novos termos.
          </p>

          <h2>11. Rescisão</h2>
          <p>
            Podemos suspender ou encerrar sua conta a qualquer momento, com ou sem aviso, 
            por violação destes Termos de Uso. Após a rescisão, você não terá mais acesso 
            aos serviços.
          </p>

          <h2>12. Lei Aplicável</h2>
          <p>
            Estes Termos de Uso são regidos pelas leis brasileiras. Qualquer disputa será 
            resolvida nos tribunais da comarca de São Paulo/SP.
          </p>

          <h2>13. Contato</h2>
          <p>
            Para dúvidas sobre estes Termos de Uso, entre em contato conosco:
          </p>
          <ul>
            <li><strong>E-mail:</strong> juridico@doctornfse.com.br</li>
            <li><strong>Telefone:</strong> (11) 3000-5000</li>
            <li><strong>Endereço:</strong> Rua das Clínicas, 123 - São Paulo/SP</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Componente de Termos de Uso
</script>

<style scoped>
.termos-uso {
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
