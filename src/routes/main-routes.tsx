import { RouteObject } from 'react-router-dom'

import { HomeDashboard } from '@/pages/app/RegisterPages/homeDashboard'
import { AppLayout } from '@/pages/layouts/app'

export const mainRoutes: RouteObject = {
  path: '/',
  element: <AppLayout />,
  children: [{ path: '/', element: <HomeDashboard /> }],
}
