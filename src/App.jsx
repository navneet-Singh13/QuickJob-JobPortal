import React from 'react'
import { Button } from './components/ui/button'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/app-layout'
import LandingPage from './pages/landing'
import Onboarding from './pages/Onboarding'
import JobPage from './pages/Job'
import Postjob from './pages/Postjob'
import SavedJobs from './pages/saved-jobs'
import MyJobs from './pages/my-jobs'
import Joblisting from './pages/Joblisting'
import { ThemeProvider } from './components/ui/theme-provider'

const router = createBrowserRouter([
  { 
    element : <AppLayout></AppLayout>,
    children : [ 
      { 
        path : '/', 
        element:<LandingPage/>
      }, 
      { 
        path : '/onboarding', 
        element:<Onboarding/>
      }, 
      { 
        path : '/jobs', 
        element:<Joblisting/>
      }, 
      { 
        path : '/job/:id', 
        element: <JobPage/>
      }, 
      { 
        path : '/post-job', 
        element:<Postjob/>
      },
      { 
        path : '/saved-jobs', 
        element:<SavedJobs/>
      }, 
      { 
        path : '/my-jobs', 
        element: <MyJobs/>
      }
    ]
  }
])
const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
  <RouterProvider router={ router } />
  </ThemeProvider>
    
  )
}

export default App
