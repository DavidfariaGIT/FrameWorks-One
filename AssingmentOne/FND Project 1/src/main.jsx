import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  HelloMessage from "./Hello"
import Profile from './Avatar'
import Footer from './Footer'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelloMessage/>
   <Profile />
   <Footer />
  </StrictMode>
)
