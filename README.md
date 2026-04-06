# FortiGate NGFW Competitive Analysis Tool

An interactive React-based presentation website for technical competitive analysis of FortiGate Next-Generation Firewall against major competitors: Palo Alto Networks, Cisco, Check Point, Sophos, and Juniper.

## Purpose

**Primary Use Case**: Embedded presentation tool for presales technical discussions with government/public sector IT leadership and security teams.

**Key Features**:
- **Embedded Competitor Comparison**: Select competitors and view technical specifications side-by-side
- **Toggle Views**: Switch between technical specs and FortiGate competitive advantages
- **Technical-First Messaging**: Emphasis on hardware acceleration, security fabric, performance, and integration
- **Responsive Design**: Works on presentation displays, laptops, and tablets

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build**: Vite
- **State Management**: Zustand
- **Styling**: CSS (modular, CSS variables)
- **Icons**: React Icons (react-icons)

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── ComparisonMatrix.tsx      # Main container component
│   │   ├── CompetitorSelector.tsx    # Competitor button grid
│   │   ├── SpecsComparison.tsx       # Technical specs table view
│   │   ├── CompetitiveAdvantage.tsx  # FortiGate advantages messaging
│   │   ├── DetailToggle.tsx          # View toggle buttons
│   │   └── Header.tsx                # App header
│   ├── data/
│   │   └── competitors.json          # Competitor specifications & comparison data
│   ├── styles/
│   │   ├── index.css                 # Global styles & CSS variables
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── CompetitorSelector.css
│   │   ├── SpecsComparison.css
│   │   ├── CompetitiveAdvantage.css
│   │   ├── DetailToggle.css
│   │   └── ComparisonMatrix.css
│   ├── types.ts                      # TypeScript type definitions
│   ├── store.ts                      # Zustand state management
│   ├── App.tsx                       # Main app component
│   └── main.tsx                      # React entry point
├── index.html                        # HTML entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs on http://localhost:3000 with hot-reload enabled.

### Type Checking

```bash
npm run type-check
```

### Build

```bash
npm run build
```

Outputs to `dist/` directory.

## Key Components

### ComparisonMatrix
Main container that orchestrates:
- Competitor selection
- View toggling (specs ↔ advantages)
- Dynamic content rendering

### CompetitorSelector
Grid of clickable buttons representing each competitor:
- Vendor name + product
- Category badge (Enterprise, Mid-market, etc.)
- Active state highlighting
- Responsive grid layout

### SpecsComparison
Table-based technical specifications view:
- 7 key capability categories (architecture, throughput, SSL inspection, SD-WAN, ZTNA, threat intelligence, fabric)
- Side-by-side spec layout
- Reference box highlighting FortiGate baseline

### CompetitiveAdvantage
Detailed messaging view with three sections:
1. **Competitor Strengths** (green, check marks)
2. **Competitor Weaknesses** (red, X marks)
3. **FortiGate Wins** (red highlights, detailed advantage statements)

## Data Structure

Competitors data (`src/data/competitors.json`):

```json
{
  "competitors": [
    {
      "vendor": "Vendor Name",
      "product": "Product Line",
      "category": "Market Segment",
      "specs": {
        "architecture": "...",
        "throughput": "...",
        "sslInspection": "...",
        "sdwan": "...",
        "ztna": "...",
        "threatIntel": "...",
        "fabric": "..."
      },
      "strengths": ["...", "..."],
      "weaknesses": ["...", "..."],
      "vsFortigate": {
        "performanceAdvantage": "...",
        "integrationAdvantage": "...",
        "tcoAdvantage": "...",
        "operationalAdvantage": "...",
        "easeOfUseAdvantage": "...",
        "scaleAdvantage": "...",
        "fabricAdvantage": "...",
        "relevanceAdvantage": "..."
      }
    }
  ]
}
```

## State Management (Zustand)

The `store.ts` tracks:
- `selectedCompetitor`: Which vendor is currently selected
- `selectedCategory`: Filter category (not yet implemented in UI)
- `showDetails`: Toggle between specs and advantages views

## Styling Approach

- **CSS Variables**: Centralized theme (colors, spacing, shadows, typography)
- **Responsive Design**: Mobile-first approach with media queries
- **Component Isolation**: Each component has dedicated CSS file
- **Accessibility**: Proper contrast, semantic HTML, icon labels

## Color Scheme

- **FortiGate Brand**: `#ee3124` (red)
- **Primary**: `#1e40af` (blue)
- **Success**: `#16a34a` (green)
- **Danger**: `#dc2626` (red)
- **Background**: `#f8fafc` (light slate)

## Usage in Presentations

### Quick Selection
Click any competitor button to switch focus. Content updates with:
- Their technical specs
- Their strengths/weaknesses
- Specific FortiGate advantages

### View Toggling
Toggle between:
1. **Technical Specs** - Factual comparison of capabilities
2. **FortiGate Wins** - Detailed messaging on advantages

## Extending the Tool

### Adding a New Competitor

1. Add entry to `src/data/competitors.json`
2. Follow existing competitor structure (all fields required)
3. Component automatically includes in selector

### Adding New Spec Categories

1. Add to `SPECS_ORDER` array in `SpecsComparison.tsx`
2. Add label mapping in `SPEC_LABELS`
3. Include in `CompetitorSpecs` interface (`types.ts`)
4. Update all competitors in JSON

### Customizing Styling

Edit `src/styles/index.css` CSS variables:
- Theme colors
- Spacing scale
- Typography sizes
- Shadows and animations

## Future Enhancements

- [ ] Category filtering (show only performance, integration, TCO, operations)
- [ ] Feature-level comparison drill-down
- [ ] Architecture diagram visualizer
- [ ] TCO calculator
- [ ] Export to PDF
- [ ] Dark mode toggle
- [ ] Competitor comparison matrix (all vs. all)
- [ ] Performance benchmark charts
- [ ] Customer case study integration

## Notes for Presenters

**Technical-First Audience Focus**:
- Emphasize hardware acceleration (ASIC/SPU vs. software)
- Highlight integrated fabric (operational burden reduction)
- Quantify TCO advantages
- Reference industry benchmarks (NSS Labs, Gartner)

**Key Talking Points**:
1. **Performance**: FortiGate custom processors win on throughput/watt
2. **Integration**: SD-WAN + ZTNA native, not add-ons
3. **Operations**: Single management console vs. competitor fragmentation
4. **Public Sector Relevance**: Fewer vendors = compliance simplicity

## License

Internal tool - Fortinet presales use only.

## Support

For updates to competitor data or messaging, modify `src/data/competitors.json` and rebuild.
