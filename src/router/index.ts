import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Recursos from '../views/Recursos.vue'
import Precos from '../views/Precos.vue'
import Sobre from '../views/Sobre.vue'
import Contato from '../views/Contato.vue'
import Login from '../views/Login.vue'
import Demo from '../views/Demo.vue'
import PoliticaPrivacidade from '../views/PoliticaPrivacidade.vue'
import TermosUso from '../views/TermosUso.vue'
import LGPD from '../views/LGPD.vue'
import PoliticaCookies from '../views/PoliticaCookies.vue'
import StatusSistema from '../views/StatusSistema.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Doctor NFS-e - Sistema de Gerenciamento de NFS-e para Clínicas' }
  },
  {
    path: '/recursos',
    name: 'Recursos',
    component: Recursos,
    meta: { title: 'Recursos - Doctor NFS-e' }
  },
  {
    path: '/precos',
    name: 'Precos',
    component: Precos,
    meta: { title: 'Preços - Doctor NFS-e' }
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: Sobre,
    meta: { title: 'Sobre Nós - Doctor NFS-e' }
  },
  {
    path: '/contato',
    name: 'Contato',
    component: Contato,
    meta: { title: 'Contato - Doctor NFS-e' }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'Login - Doctor NFS-e' }
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo,
    meta: { title: 'Solicitar Demo - Doctor NFS-e' }
  },
  {
    path: '/politica-privacidade',
    name: 'PoliticaPrivacidade',
    component: PoliticaPrivacidade,
    meta: { title: 'Política de Privacidade - Doctor NFS-e' }
  },
  {
    path: '/termos-uso',
    name: 'TermosUso',
    component: TermosUso,
    meta: { title: 'Termos de Uso - Doctor NFS-e' }
  },
  {
    path: '/lgpd',
    name: 'LGPD',
    component: LGPD,
    meta: { title: 'LGPD - Doctor NFS-e' }
  },
  {
    path: '/politica-cookies',
    name: 'PoliticaCookies',
    component: PoliticaCookies,
    meta: { title: 'Política de Cookies - Doctor NFS-e' }
  },
  {
    path: '/status',
    name: 'StatusSistema',
    component: StatusSistema,
    meta: { title: 'Status do Sistema - Doctor NFS-e' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Middleware para alterar o título da página
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router
