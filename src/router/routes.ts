import { RouteRecordRaw } from 'vue-router'
import { CityRoutename, CityRoutePath } from 'src/enums/routes'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        name: CityRoutename.List,
        path: CityRoutePath.List,
        component: () => import('pages/city/List.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
