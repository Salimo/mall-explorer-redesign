import React, { useState } from 'react'
import { Router, Route, Switch } from 'wouter'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import LoginView from './components/LoginView'
import SignUpView from './components/SignUpView'
import ProfileSetupView from './components/ProfileSetupView'
import ProfileView from './components/ProfileView'
import Layout from './components/Layout'
import Home from './pages/Home'
import MallDetail from './pages/MallDetail'
import Events from './pages/Events'
import Deals from './pages/Deals'
import SearchPage from './pages/SearchPage'
import IndoorMap from './pages/IndoorMap'
import NotFound from './pages/NotFound'

function AppContent() {
  const { state } = useAuth()
  const [showSignUp, setShowSignUp] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  // Loading state
  if (state === 'loading') {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal mb-4">
            <span className="text-navy font-display font-bold text-xl">M</span>
          </div>
          <h1 className="text-foreground text-xl font-bold font-display">Mall Explorer</h1>
          <div className="w-6 h-6 border-2 border-foreground/30 border-t-teal rounded-full animate-spin mx-auto mt-4" />
        </div>
      </div>
    )
  }

  // Unauthenticated
  if (state === 'unauthenticated') {
    return showSignUp
      ? <SignUpView onBack={() => setShowSignUp(false)} />
      : <LoginView onShowSignUp={() => setShowSignUp(true)} />
  }

  // Needs profile setup
  if (state === 'needsProfile') {
    return <ProfileSetupView />
  }

  // Profile view (overlay)
  if (showProfile) {
    return <ProfileView onBack={() => setShowProfile(false)} />
  }

  // Authenticated — show main app with routing
  return (
    <Layout onShowProfile={() => setShowProfile(true)}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/mall/:id" component={MallDetail} />
        <Route path="/events" component={Events} />
        <Route path="/deals" component={Deals} />
        <Route path="/search" component={SearchPage} />
        <Route path="/map/:mallId" component={IndoorMap} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  )
}

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  )
}
