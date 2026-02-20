import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { ArrowLeft, LogOut, User, Calendar, Globe, Clock } from 'lucide-react'

export default function ProfileView({ onBack }) {
  const { profile, signOut } = useAuth()
  const [showConfirm, setShowConfirm] = useState(false)

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="sticky top-0 z-10 glass-card px-4 py-3 flex items-center">
        {onBack && (
          <button onClick={onBack} className="p-1 -ml-1 mr-2 rounded-full hover:bg-secondary transition-colors">
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </button>
        )}
        <h1 className="font-semibold text-foreground text-lg font-display">Profile</h1>
      </div>

      <div className="px-4 space-y-4 mt-4">
        {profile && (
          <>
            <div className="flex flex-col items-center py-6">
              <div className="w-20 h-20 rounded-full bg-teal/20 flex items-center justify-center mb-3">
                <span className="text-3xl font-bold text-teal font-display">{profile.displayName?.[0]?.toUpperCase()}</span>
              </div>
              <h2 className="text-xl font-semibold text-foreground font-display">{profile.displayName}</h2>
              <p className="text-sm text-muted-foreground">{profile.email}</p>
            </div>

            <div className="space-y-2">
              <InfoRow icon={<User className="w-5 h-5 text-teal" />} label="Gender" value={profile.gender} />
              <InfoRow icon={<Calendar className="w-5 h-5 text-teal" />} label="Age Range" value={profile.ageRange} />
              <InfoRow icon={<Globe className="w-5 h-5 text-teal" />} label="Nationality" value={profile.nationality} />
              <InfoRow icon={<Clock className="w-5 h-5 text-teal" />} label="Member Since" value={
                profile.createdAt instanceof Date
                  ? profile.createdAt.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
                  : 'N/A'
              } />
            </div>

            {profile.couponsGiven > 0 && (
              <div className="glass-card rounded-2xl p-5">
                <h3 className="font-display font-bold text-foreground mb-1">Coupons Earned</h3>
                <p className="text-3xl font-display font-bold text-teal">{profile.couponsGiven}</p>
                <p className="text-xs text-muted-foreground mt-1">From {profile.receipts?.length || 0} receipts</p>
              </div>
            )}

            <button onClick={() => setShowConfirm(true)} className="w-full flex items-center justify-center gap-2 py-3.5 bg-destructive/10 text-destructive font-semibold rounded-xl mt-6 hover:bg-destructive/20 transition-colors">
              <LogOut className="w-5 h-5" />
              Sign Out
            </button>

            <div className="text-center pt-6">
              <p className="text-xs text-muted-foreground">Mall Explorer v2.0 (Web)</p>
              <p className="text-xs text-muted-foreground">Abu Dhabi Mall · 212 Stores</p>
            </div>
          </>
        )}
      </div>

      {showConfirm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowConfirm(false)}>
          <div className="glass-card rounded-2xl p-6 w-full max-w-xs" onClick={e => e.stopPropagation()}>
            <h3 className="font-semibold text-foreground text-lg font-display mb-2">Sign Out</h3>
            <p className="text-sm text-muted-foreground mb-4">Are you sure you want to sign out?</p>
            <div className="flex gap-3">
              <button onClick={() => setShowConfirm(false)} className="flex-1 py-2.5 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:bg-secondary transition-colors">Cancel</button>
              <button onClick={signOut} className="flex-1 py-2.5 rounded-xl bg-destructive text-white text-sm font-semibold hover:bg-destructive/90 transition-colors">Sign Out</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center gap-3 p-4 glass-card rounded-xl">
      <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="font-medium text-foreground text-sm">{value}</p>
      </div>
    </div>
  )
}
