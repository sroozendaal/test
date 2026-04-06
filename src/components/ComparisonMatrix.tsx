import React, { useMemo } from 'react'
import { useComparisonStore } from '../store'
import { Competitor } from '../types'
import { CompetitorSelector } from './CompetitorSelector'
import { SpecsComparison } from './SpecsComparison'
import { CompetitiveAdvantage } from './CompetitiveAdvantage'
import { DetailToggle } from './DetailToggle'
import '../styles/ComparisonMatrix.css'

interface Props {
  competitors: Competitor[]
}

export const ComparisonMatrix: React.FC<Props> = ({ competitors }) => {
  const { selectedCompetitor, showDetails } = useComparisonStore()

  const activeCompetitor = useMemo(() => {
    return competitors.find((c) => c.vendor === selectedCompetitor)
  }, [selectedCompetitor, competitors])

  if (!activeCompetitor) {
    return <div className="comparison-error">No competitor selected</div>
  }

  return (
    <div className="comparison-matrix">
      <CompetitorSelector competitors={competitors} />

      <DetailToggle />

      <div className="comparison-content">
        {!showDetails ? (
          <SpecsComparison competitor={activeCompetitor} />
        ) : (
          <CompetitiveAdvantage competitor={activeCompetitor} />
        )}
      </div>
    </div>
  )
}
