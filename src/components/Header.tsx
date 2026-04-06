import React from 'react'
import '../styles/Header.css'

export const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="header-title">
          <h1>FortiGate NGFW</h1>
          <p className="subtitle">Competitive Analysis & Technical Comparison</p>
        </div>
        <div className="header-badge">
          <span className="badge">Technical Reference</span>
        </div>
      </div>
    </header>
  )
}
