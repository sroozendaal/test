import React from 'react'
import { useComparisonStore } from '../store'
import { Competitor } from '../types'
import '../styles/CompetitorSelector.css'

interface Props {
  competitors: Competitor[]
}

export const CompetitorSelector: React.FC<Props> = ({ competitors }) => {
  const { selectedCompetitor, setSelectedCompetitor } = useComparisonStore()

  return (
    <div className="competitor-selector">
      <h2>Select Competitor</h2>
      <div className="selector-grid">
        {competitors.map((competitor) => (
          <button
            key={competitor.vendor}
            className={`competitor-btn ${
              selectedCompetitor === competitor.vendor ? 'active' : ''
            }`}
            onClick={() => setSelectedCompetitor(competitor.vendor)}
            title={competitor.product}
          >
            <span className="vendor-name">{competitor.vendor}</span>
            <span className="product-name">{competitor.product}</span>
            <span className="category-badge">{competitor.category}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
