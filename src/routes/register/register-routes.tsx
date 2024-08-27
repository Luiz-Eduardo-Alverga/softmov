import { RouteObject } from 'react-router-dom'

import { EnterprisePage } from '@/pages/app/RegisterPages/Enterprise/enterprise'
import { SupplierPage } from '@/pages/app/RegisterPages/peoples/suppliers/supllier'
import { AppLayout } from '@/pages/layouts/app'

export const registerRoutes: RouteObject = {
  path: '/cadastros',
  element: <AppLayout />,
  children: [
    { path: 'empresa', element: <EnterprisePage /> },
    { path: 'fornecedores', element: <SupplierPage /> },
  ],
}
