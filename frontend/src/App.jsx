import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react'
import React from 'react'
import { Routes, Route, Navigate } from "react-router"
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import * as Sentry from "@sentry/react"

const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes)
const App = () => {
  return (
    <>
     


        <SignedOut>


          <SentryRoutes>
            <Route path='/auth' element={<AuthPage />} />

          </SentryRoutes>
        </SignedOut>
        <SignedIn>

           <SentryRoutes>
            <Route path='/' element={<HomePage />} />

            <Route path='/auth' element={<Navigate to="/" replace />} />


          </SentryRoutes>

        </SignedIn>
      
    </>

  )
}

export default App
