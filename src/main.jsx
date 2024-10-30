import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './App.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { shadesOfPurple } from '@clerk/themes'
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/" appearance={
      {
        baseTheme : shadesOfPurple ,
      }
    }>
    <App />
    </ClerkProvider>
    
  </StrictMode>,
)
