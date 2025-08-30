// Imagens do site Doctor NFS-e
import { photoImages } from './photos/index'

export const images = {
  // Fotos profissionais do diretório photos
  doctorWorkingComputer: photoImages.doctorWorkingComputer,
  clinicManagerCalculator: photoImages.clinicManagerCalculator,
  medicalTeamCollaboration: photoImages.medicalTeamCollaboration,
  clinicManagement: photoImages.clinicManagement,
  softwareEfficiency: photoImages.softwareEfficiency,
  
  // Usando as mesmas imagens para a galeria (reutilizando as principais)
  medicalProfessional1: photoImages.doctorWorkingComputer,
  medicalProfessional2: photoImages.clinicManagerCalculator,
  medicalProfessional3: photoImages.medicalTeamCollaboration,
  medicalProfessional4: photoImages.clinicManagement,
  medicalProfessional5: photoImages.softwareEfficiency,
  medicalProfessional6: photoImages.doctorWorkingComputer,
}

// Tipos para as imagens
export type ImageKey = keyof typeof images

// Função helper para obter URL da imagem
export const getImageUrl = (key: ImageKey): string => {
  return images[key]
}

// Metadados das imagens
export const imageMetadata = {
  // Metadados das fotos profissionais principais
  doctorWorkingComputer: {
    alt: 'Médico Trabalhando no Computador',
    description: 'Profissional de saúde utilizando sistemas digitais para gestão médica',
    fallbackIcon: '💻'
  },
  clinicManagerCalculator: {
    alt: 'Gestor de Clínica Analisando Finanças',
    description: 'Profissional de saúde analisando cálculos e gestão financeira da clínica',
    fallbackIcon: '🧮'
  },
  medicalTeamCollaboration: {
    alt: 'Equipe Médica Colaborando',
    description: 'Equipe de profissionais de saúde trabalhando em conjunto na gestão da clínica',
    fallbackIcon: '👥'
  },
  clinicManagement: {
    alt: 'Gestão Eficiente de Clínicas',
    description: 'Profissionais de saúde gerenciando operações e recursos da clínica',
    fallbackIcon: '🏥'
  },
  softwareEfficiency: {
    alt: 'Software Médico Garantindo Eficiência',
    description: 'Sistemas médicos que garantem maior eficiência na gestão de clínicas e consultórios',
    fallbackIcon: '⚡'
  },
  
  // Metadados das imagens adicionais
  medicalProfessional1: {
    alt: 'Profissional de Saúde Trabalhando',
    description: 'Profissional de saúde em ambiente clínico',
    fallbackIcon: '👨‍⚕️'
  },
  medicalProfessional2: {
    alt: 'Equipe Médica em Ação',
    description: 'Equipe de profissionais de saúde trabalhando',
    fallbackIcon: '👩‍⚕️'
  },
  medicalProfessional3: {
    alt: 'Profissional de Saúde Analisando',
    description: 'Profissional de saúde analisando documentos',
    fallbackIcon: '📋'
  },
  medicalProfessional4: {
    alt: 'Gestor de Clínica',
    description: 'Gestor de clínica em reunião',
    fallbackIcon: '💼'
  },
  medicalProfessional5: {
    alt: 'Profissional de Saúde',
    description: 'Profissional de saúde em consultório',
    fallbackIcon: '🏥'
  },
  medicalProfessional6: {
    alt: 'Equipe Médica',
    description: 'Equipe médica em colaboração',
    fallbackIcon: '👥'
  },
  medicalProfessional7: {
    alt: 'Profissional de Saúde Trabalhando',
    description: 'Profissional de saúde em atividade',
    fallbackIcon: '👨‍⚕️'
  },
  medicalProfessional8: {
    alt: 'Gestão de Clínica',
    description: 'Profissional gerenciando clínica',
    fallbackIcon: '📊'
  },
  medicalProfessional9: {
    alt: 'Profissional de Saúde',
    description: 'Profissional de saúde em trabalho',
    fallbackIcon: '👩‍⚕️'
  },
  medicalProfessional10: {
    alt: 'Equipe Médica',
    description: 'Equipe médica em reunião',
    fallbackIcon: '👥'
  },
  medicalProfessional11: {
    alt: 'Profissional de Saúde',
    description: 'Profissional de saúde em consulta',
    fallbackIcon: '💉'
  },
  medicalProfessional12: {
    alt: 'Gestor de Clínica',
    description: 'Gestor analisando relatórios',
    fallbackIcon: '📈'
  },
  medicalProfessional13: {
    alt: 'Profissional de Saúde',
    description: 'Profissional de saúde em atividade',
    fallbackIcon: '👨‍⚕️'
  },
  medicalProfessional14: {
    alt: 'Equipe Médica',
    description: 'Equipe médica em colaboração',
    fallbackIcon: '👥'
  }
}
