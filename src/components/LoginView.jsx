import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Mail, Lock, AlertCircle } from 'lucide-react'

export default function LoginView({ onShowSignUp }) {
  const { signIn, resetPassword, error, setError } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showReset, setShowReset] = useState(false)
  const [resetSent, setResetSent] = useState(false)

  async function handleSignIn(e) {
    e.preventDefault()
    setLoading(true)
    await signIn(email, password)
    setLoading(false)
  }

  async function handleReset() {
    if (!email) { setError('Enter your email first'); return }
    const ok = await resetPassword(email)
    if (ok) { setResetSent(true); setShowReset(false) }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal mb-4">
            <span className="text-navy font-display font-bold text-xl">M</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground font-display">Mall Explorer</h1>
          <p className="text-muted-foreground mt-1 text-sm">Sign in to continue</p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Email</label>
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary rounded-xl border border-border/50 focus-within:border-teal/50 transition-colors">
              <Mail className="w-5 h-5 text-teal flex-shrink-0" />
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" className="flex-1 outline-none text-foreground bg-transparent placeholder:text-muted-foreground" autoComplete="email" />
            </div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground block mb-1">Password</label>
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary rounded-xl border border-border/50 focus-within:border-teal/50 transition-colors">
              <Lock className="w-5 h-5 text-teal flex-shrink-0" />
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" className="flex-1 outline-none text-foreground bg-transparent placeholder:text-muted-foreground" autoComplete="current-password" />
            </div>
            <div className="text-right mt-1">
              <button type="button" onClick={handleReset} className="text-sm text-teal font-medium">Forgot password?</button>
            </div>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-destructive text-sm">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {resetSent && (
            <div className="text-sm text-teal bg-teal/10 rounded-lg p-3 border border-teal/20">
              Check your inbox for the password reset link.
            </div>
          )}

          <button type="submit" disabled={!email || !password || loading} className="w-full py-3.5 bg-teal text-navy font-semibold rounded-xl disabled:opacity-50 transition-all active:scale-[0.98]">
            {loading ? <div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin mx-auto" /> : 'Sign In'}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-muted-foreground">
          Don't have an account?{' '}
          <button onClick={onShowSignUp} className="text-teal font-medium">Sign Up</button>
        </p>
      </div>
    </div>
  )
}
