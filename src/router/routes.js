
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'home', path: '', component: () => import('pages/Index.vue') },
      { name: 'conferencesList', path: 'list', component: () => import('src/pages/ConferencesList.vue') },
      { name: 'conferencesMap', path: 'map', component: () => import('pages/ConferencesMap.vue') },
      // { name: 'calendar', path: 'calendar', component: () => import('src/pages/ConferencesCalendar.vue') },
      { name: 'cfp', path: 'cfp', component: () => import('pages/CFPs.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErrorNotFound.vue')
  }
]

export default routes
