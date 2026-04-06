import { create } from 'zustand'
import { ComparisonState, FeatureCategory } from './types'

interface ComparisonStore extends ComparisonState {
  setSelectedCompetitor: (vendor: string) => void
  setSelectedCategory: (category: FeatureCategory) => void
  setShowDetails: (show: boolean) => void
  resetFilters: () => void
}

export const useComparisonStore = create<ComparisonStore>((set) => ({
  selectedCompetitor: 'Palo Alto Networks',
  selectedCategory: 'all',
  showDetails: false,

  setSelectedCompetitor: (vendor: string) =>
    set({ selectedCompetitor: vendor, showDetails: false }),

  setSelectedCategory: (category: FeatureCategory) =>
    set({ selectedCategory: category }),

  setShowDetails: (show: boolean) => set({ showDetails: show }),

  resetFilters: () =>
    set({
      selectedCompetitor: 'Palo Alto Networks',
      selectedCategory: 'all',
      showDetails: false
    })
}))
