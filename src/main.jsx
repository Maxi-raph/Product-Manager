import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router'
import './index.css'
import App from './App.jsx'
import { ProductProvider } from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
  <ProductProvider>
    <App />  
  </ProductProvider>
  </StrictMode>
  </BrowserRouter>,
)
