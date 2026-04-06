export interface CompetitorSpecs {
  architecture: string
  throughput: string
  sslInspection: string
  sdwan: string
  ztna: string
  threatIntel: string
  fabric: string
}

export interface Comparison {
  performanceAdvantage: string
  integrationAdvantage: string
  tcoAdvantage?: string
  operationalAdvantage?: string
  easeOfUseAdvantage?: string
  scaleAdvantage?: string
  fabricAdvantage?: string
  relevanceAdvantage?: string
}

export interface Competitor {
  vendor: string
  product: string
  category: string
  specs: CompetitorSpecs
  strengths: string[]
  weaknesses: string[]
  vsFortigate: Comparison
}

export interface ComparisonState {
  selectedCompetitor: string
  selectedCategory: string
  showDetails: boolean
}

export type FeatureCategory = 'performance' | 'integration' | 'tco' | 'operations' | 'all'
