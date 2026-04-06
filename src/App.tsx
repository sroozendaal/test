import React, { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { ComparisonMatrix } from './components/ComparisonMatrix'
import { Competitor } from './types'
import competitors from './data/competitors.json'
import './styles/App.css'

export const App: React.FC = () => {
  const [competitorData, setCompetitorData] = useState<Competitor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    try {
      setCompetitorData(competitors.competitors as Competitor[])
      setLoading(false)
    } catch (err) {
      setError('Failed to load competitor data')
      setLoading(false)
      console.error(err)
    }
  }, [])

  if (loading) {
    return (
      <div className="app loading">
        <p>Loading comparison tool...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app error">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ComparisonMatrix competitors={competitorData} />
      </main>
      <footer className="app-footer">
        <p>
          FortiGate NGFW Competitive Analysis | Based on public product documentation & industry benchmarks
        </p>
      </footer>
    </div>
  )
}

export default App
