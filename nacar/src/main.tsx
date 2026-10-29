import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './app/App.css'
import App from './app/App.tsx'
import { BrowserRouter } from 'react-router-dom'
import FavoritesProvider from './features/favorites/context/FavoritesProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
)
