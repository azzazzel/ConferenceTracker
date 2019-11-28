
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/Index.vue') },
      { name: 'conferencesList', path: 'list', component: () => import('pages/Conferences.vue') },
      { name: 'conferencesMap', path: 'map', component: () => import('pages/ConferencesMap.vue') },
      { name: 'calendar', path: 'calendar', component: () => import('pages/Calendar.vue') },
      { name: 'cfp', path: 'cfp', component: () => import('pages/CFPs.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
