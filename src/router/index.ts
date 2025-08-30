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

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: { title: 'Doctor NFSe - Gestão de NFSe para Clínicas e Consultórios' }
    },
    {
      path: '/recursos',
      name: 'Recursos',
      component: Recursos,
      meta: { title: 'Recursos - Doctor NFSe' }
    },
    {
      path: '/precos',
      name: 'Precos',
      component: Precos,
      meta: { title: 'Preços - Doctor NFSe' }
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: Sobre,
      meta: { title: 'Sobre - Doctor NFSe' }
    },
    {
      path: '/contato',
      name: 'Contato',
      component: Contato,
      meta: { title: 'Contato - Doctor NFSe' }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { title: 'Login - Doctor NFSe' }
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
      meta: { title: 'Solicitar Demo - Doctor NFSe' }
    },
    {
      path: '/politica-privacidade',
      name: 'PoliticaPrivacidade',
      component: PoliticaPrivacidade,
      meta: { title: 'Política de Privacidade - Doctor NFSe' }
    },
    {
      path: '/termos-uso',
      name: 'TermosUso',
      component: TermosUso,
      meta: { title: 'Termos de Uso - Doctor NFSe' }
    },
    {
      path: '/lgpd',
      name: 'LGPD',
      component: LGPD,
      meta: { title: 'LGPD - Doctor NFSe' }
    },
    {
      path: '/politica-cookies',
      name: 'PoliticaCookies',
      component: PoliticaCookies,
      meta: { title: 'Política de Cookies - Doctor NFSe' }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
  next()
})

export default router
