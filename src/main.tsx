import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppProvider } from './provider/AppProvider.tsx'
import { AppRoutes } from './routes/AppRoutes.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <AppRoutes/>
    </AppProvider>
  </React.StrictMode>,
)
