import { createBrowserRouter } from 'react-router-dom'

import { mainRoutes } from './main-routes'
import { registerRoutes } from './register/register-routes'

export const router = createBrowserRouter([mainRoutes, registerRoutes])
