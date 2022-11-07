import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/catalog:slug',
    name: 'CatalogPage',
    component: () => import('../views/CatalogPage.vue')
  },
  {
    path: '/productPage:id',
    name: 'ProductPage',
    component: () => import('../views/ProductPage.vue')
  },
  {
    path: '/pro-nas',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/politika-konfidencijnosti',
    name: 'Privacy',
    component: () => import('../views/Privacy.vue')
  },
  {
    path: '/kontakti',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/oplata-i-dostavka',
    name: 'PaymAndDelivery',
    component: () => import('../views/PaymAndDelivery.vue')
  },
  {
    path: '/order',
    name: 'OrderPage',
    component: () => import('../views/OrderPage.vue')
  },

  {
    path: '/order/success:orderNumber',
    name: 'SuccesPage',
    component: () => import('../views/SuccesPage.vue')
  },

  // Don't have this components yet

  {
    path: '/umovi-vikoristannya',
    name: 'TermsOfUse',
    component: () => import('../views/TermsOfUse.vue')
  },
  {
    path: '/povernennya-tovaru',
    name: 'ReturnProducts',
    component: () => import('../views/ReturnProducts.vue')
  },
  {
    path: '/dogovir-publichnoyi-oferti',
    name: 'PublicOffer',
    component: () => import('../views/PublicOffer.vue')
  },

  
]

routes.push({
  path: '*',
  name: 'NotFound',
  component: () => import('../views/NotFoundPage.vue')
})

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },

})

export default router