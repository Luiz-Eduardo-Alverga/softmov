import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme-provider'
import { router } from './routes/routes'

function App() {
  return (
    <HelmetProvider>
      <Toaster richColors closeButton />
      <Helmet titleTemplate="%s | Softmov" />
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}

export default App
