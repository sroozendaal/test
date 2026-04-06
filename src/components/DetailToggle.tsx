import React from 'react'
import { useComparisonStore } from '../store'
import { FiToggleLeft, FiToggleRight } from 'react-icons/fi'
import '../styles/DetailToggle.css'

export const DetailToggle: React.FC = () => {
  const { showDetails, setShowDetails } = useComparisonStore()

  return (
    <div className="detail-toggle">
      <button
        className={`toggle-btn ${!showDetails ? 'active' : ''}`}
        onClick={() => setShowDetails(false)}
      >
        <FiToggleLeft />
        Technical Specs
      </button>
      <button
        className={`toggle-btn ${showDetails ? 'active' : ''}`}
        onClick={() => setShowDetails(true)}
      >
        <FiToggleRight />
        FortiGate Wins
      </button>
    </div>
  )
}
