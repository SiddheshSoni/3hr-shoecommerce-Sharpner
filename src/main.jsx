import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
<<<<<<< HEAD
import { ContextProvider } from './store/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
    <ContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextProvider>
=======
import { ContextProvider } from './components/Store/CartContext.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>,
>>>>>>> 97862ddfa1dc2d8933930039482150a37e521b7a
)
