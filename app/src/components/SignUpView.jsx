import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Mail, Lock, ArrowLeft, AlertCircle } from 'lucide-react'

export default function SignUpView({ onBack }) {
  const { signUp, error } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)

  const passwordsMatch = password === confirm && password.length > 0
  const isValid = email && password.length >= 6 && passwordsMatch

  async function handleSignUp(e) {
    e.preventDefault()
    setLoading(true)
    await signUp(email, password)
    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <button onClick={onBack} className="mb-6 p-2 -ml-2 rounded-full hover:bg-secondary transition-colors">
          <ArrowLeft className="w-6 h-6 text-foreground" />
        </button>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground font-display">Create Account</h1>
          <p className="text-muted-foreground mt-1 text-sm">Join Mall Explorer to discover Abu Dhabi Mall</p>
        </div>

        <form onSubmit={handleSignUp} className="space-y-4">
          <FormField label="Email" placeholder="your@email.com" value={email} onChange={setEmail} type="email" />
          <FormField label="Password" placeholder="At least 6 characters" value={password} onChange={setPassword} type="password" />
          <FormField label="Confirm Password" placeholder="Re-enter password" value={confirm} onChange={setConfirm} type="password" />

          {confirm && !passwordsMatch && (
            <p className="text-destructive text-xs flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              Passwords don't match
            </p>
          )}

          {error && <p className="text-destructive text-sm">{error}</p>}

          <button type="submit" disabled={!isValid || loading} className="w-full py-3.5 bg-teal text-white font-semibold rounded-xl disabled:opacity-50 transition-all active:scale-[0.98]">
            {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" /> : 'Create Account'}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-muted-foreground">
          Already have an account?{' '}
          <button onClick={onBack} className="text-teal font-medium">Sign In</button>
        </p>
      </div>
    </div>
  )
}

function FormField({ label, placeholder, value, onChange, type = 'text' }) {
  const Icon = type === 'email' ? Mail : Lock
  return (
    <div>
      <label className="text-sm text-muted-foreground block mb-1">{label}</label>
      <div className="flex items-center gap-2 px-4 py-3 bg-secondary rounded-xl border border-border/50 focus-within:border-teal/50 transition-colors">
        <Icon className="w-5 h-5 text-teal flex-shrink-0" />
        <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} className="flex-1 outline-none text-foreground bg-transparent placeholder:text-muted-foreground" autoComplete={type === 'email' ? 'email' : 'new-password'} />
      </div>
    </div>
  )
}
