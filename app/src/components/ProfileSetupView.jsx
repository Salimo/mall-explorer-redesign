import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { NATIONALITIES } from '../data/stores'
import { User, Search, Check, ChevronDown } from 'lucide-react'

const GENDERS = ['Male', 'Female', 'Other', 'Prefer not to say']
const AGE_RANGES = ['Under 18', '18-24', '25-34', '35-44', '45-54', '55+']

export default function ProfileSetupView() {
  const { saveProfile } = useAuth()
  const [name, setName] = useState('')
  const [gender, setGender] = useState('Prefer not to say')
  const [age, setAge] = useState('25-34')
  const [nationality, setNationality] = useState('Other')
  const [showNat, setShowNat] = useState(false)
  const [natSearch, setNatSearch] = useState('')
  const [loading, setLoading] = useState(false)

  const filteredNats = natSearch
    ? NATIONALITIES.filter(n => n.toLowerCase().includes(natSearch.toLowerCase()))
    : NATIONALITIES

  async function handleSave() {
    setLoading(true)
    await saveProfile({ displayName: name, gender, ageRange: age, nationality })
    setLoading(false)
  }

  if (showNat) {
    return (
      <div className="min-h-screen bg-background">
        <div className="sticky top-0 bg-card/90 backdrop-blur-lg border-b border-border/50 p-4 flex items-center justify-between">
          <h2 className="font-semibold text-foreground font-display">Select Nationality</h2>
          <button onClick={() => { setShowNat(false); setNatSearch('') }} className="text-teal font-medium text-sm">Done</button>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 px-3 py-2.5 bg-secondary rounded-xl border border-border/50 mb-3">
            <Search className="w-4 h-4 text-teal" />
            <input value={natSearch} onChange={e => setNatSearch(e.target.value)} placeholder="Search nationality..." className="flex-1 outline-none bg-transparent text-sm text-foreground placeholder:text-muted-foreground" autoFocus />
          </div>
          <div className="space-y-1">
            {filteredNats.map(n => (
              <button key={n} onClick={() => { setNationality(n); setShowNat(false); setNatSearch('') }} className="w-full text-left px-4 py-3 rounded-lg hover:bg-secondary flex items-center justify-between transition-colors">
                <span className="text-foreground">{n}</span>
                {n === nationality && <Check className="w-5 h-5 text-teal" />}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal/15 mb-4">
            <User className="w-10 h-10 text-teal" />
          </div>
          <h1 className="text-2xl font-bold text-foreground font-display">Complete Your Profile</h1>
          <p className="text-muted-foreground mt-1 text-sm">Tell us a bit about yourself</p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="text-sm text-muted-foreground block mb-1">Display Name</label>
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary rounded-xl border border-border/50 focus-within:border-teal/50 transition-colors">
              <User className="w-5 h-5 text-teal" />
              <input value={name} onChange={e => setName(e.target.value)} placeholder="Your name" className="flex-1 outline-none text-foreground bg-transparent placeholder:text-muted-foreground" />
            </div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground block mb-2">Gender</label>
            <div className="grid grid-cols-2 gap-2">
              {GENDERS.map(g => (
                <button key={g} onClick={() => setGender(g)} className={`py-2.5 rounded-lg text-sm font-medium border transition-all ${gender === g ? 'bg-teal/20 border-teal/50 text-foreground' : 'bg-secondary border-border/50 text-muted-foreground hover:border-teal/30'}`}>
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground block mb-2">Age Range</label>
            <div className="grid grid-cols-3 gap-2">
              {AGE_RANGES.map(a => (
                <button key={a} onClick={() => setAge(a)} className={`py-2 rounded-lg text-sm font-medium border transition-all ${age === a ? 'bg-teal/20 border-teal/50 text-foreground' : 'bg-secondary border-border/50 text-muted-foreground hover:border-teal/30'}`}>
                  {a}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm text-muted-foreground block mb-1">Nationality</label>
            <button onClick={() => setShowNat(true)} className="w-full flex items-center gap-2 px-4 py-3 bg-secondary rounded-xl border border-border/50 text-left hover:border-teal/30 transition-colors">
              <span className={nationality === 'Other' ? 'text-muted-foreground' : 'text-foreground'}>{nationality}</span>
              <ChevronDown className="w-4 h-4 text-muted-foreground ml-auto" />
            </button>
          </div>

          <button onClick={handleSave} disabled={!name || loading} className="w-full py-3.5 bg-teal text-white font-semibold rounded-xl disabled:opacity-50 transition-all active:scale-[0.98]">
            {loading ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto" /> : 'Get Started'}
          </button>
        </div>
      </div>
    </div>
  )
}
