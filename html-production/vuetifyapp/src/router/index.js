import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  {
    path: '/',
    component: 'Homepage'
  },
  {
    path: '/guidelines',
    component: 'GuidelinesDirectory'
  },
  {
    path: '/contact',
    component: 'Contact'
  },
  {
    path: '/guidelines/developer',
    component: 'DeveloperGuidelines'
  },
  {
    path: '/guidelines/user',
    component: 'UserGuidelines'
  }
]

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  history: true,
  mode: 'history',
  routes
})
