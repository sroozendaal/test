import React from 'react'
import { Competitor } from '../types'
import { FiCheck, FiAlertCircle } from 'react-icons/fi'
import '../styles/CompetitiveAdvantage.css'

interface Props {
  competitor: Competitor
}

export const CompetitiveAdvantage: React.FC<Props> = ({ competitor }) => {
  const advantages = Object.entries(competitor.vsFortigate)
    .map(([key, value]) => ({
      title: key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, (str) => str.toUpperCase())
        .trim(),
      message: value
    }))

  return (
    <div className="competitive-advantage">
      <div className="advantage-grid">
        <div className="column strengths">
          <h3>
            <FiCheck className="icon" />
            {competitor.vendor} Strengths
          </h3>
          <ul>
            {competitor.strengths.map((strength, idx) => (
              <li key={idx}>{strength}</li>
            ))}
          </ul>
        </div>

        <div className="column weaknesses">
          <h3>
            <FiAlertCircle className="icon" />
            {competitor.vendor} Weaknesses
          </h3>
          <ul>
            {competitor.weaknesses.map((weakness, idx) => (
              <li key={idx}>{weakness}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="fortigate-wins">
        <h3>FortiGate Advantages vs. {competitor.vendor}</h3>
        <div className="advantages-list">
          {advantages.map((advantage, idx) => (
            <div key={idx} className="advantage-item">
              <h4>{advantage.title}</h4>
              <p>{advantage.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
