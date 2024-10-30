import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './layouts/app-layout';
import LandingPage from './pages/landing';
import Onboarding from './pages/Onboarding';
import JobPage from './pages/Job';
import Postjob from './pages/Postjob';
import SavedJobs from './pages/saved-jobs';
import MyJobs from './pages/my-jobs';
import Joblisting from './pages/Joblisting';
import { ThemeProvider } from './components/ui/theme-provider';
import ProtectedRoute from './components/protected-routes';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: (
         
            <LandingPage />
      
        ),
      },
      {
        path: '/onboarding',
        element: <Onboarding />,
      },
      {
        path: '/jobs',
        element: (
          <ProtectedRoute>
            <Joblisting />
          </ProtectedRoute>
        ),
      },
      {
        path: '/job/:id',
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        ),
      },
      {
        path: '/post-job',
        element: (
          <ProtectedRoute>
            <Postjob />
          </ProtectedRoute>
        ),
      },
      {
        path: '/saved-jobs',
        element: (
          <ProtectedRoute>
            <SavedJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: '/my-jobs',
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
