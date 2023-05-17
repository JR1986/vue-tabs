import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/submenus/:submenu',
      component: () => import('../components/SubmenuPage.vue'),
      props: true
    }
  ]
})

export default router
