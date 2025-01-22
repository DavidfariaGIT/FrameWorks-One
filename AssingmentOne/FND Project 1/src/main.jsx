import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  HelloMessage from "./Hello"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloMessage/>
  </StrictMode>,
)
