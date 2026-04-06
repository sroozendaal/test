import React from 'react'
import { Competitor } from '../types'
import '../styles/SpecsComparison.css'

interface Props {
  competitor: Competitor
}

const SPECS_ORDER = [
  'architecture',
  'throughput',
  'sslInspection',
  'sdwan',
  'ztna',
  'threatIntel',
  'fabric'
] as const

const SPEC_LABELS: Record<string, string> = {
  architecture: 'Architecture',
  throughput: 'Throughput',
  sslInspection: 'SSL/TLS Inspection',
  sdwan: 'Secure SD-WAN',
  ztna: 'Zero Trust (ZTNA)',
  threatIntel: 'Threat Intelligence',
  fabric: 'Security Fabric'
}

export const SpecsComparison: React.FC<Props> = ({ competitor }) => {
  return (
    <div className="specs-comparison">
      <h3>Technical Specifications: {competitor.vendor}</h3>
      
      <table className="specs-table">
        <thead>
          <tr>
            <th>Capability</th>
            <th>{competitor.vendor}</th>
          </tr>
        </thead>
        <tbody>
          {SPECS_ORDER.map((spec) => (
            <tr key={spec} className={`spec-row spec-${spec}`}>
              <td className="spec-label">{SPEC_LABELS[spec]}</td>
              <td className="spec-value">
                {competitor.specs[spec as keyof typeof competitor.specs]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="spec-note">
        <strong>FortiGate Reference:</strong> Custom ASIC/SPU hardware acceleration, native SD-WAN + ZTNA, integrated Security Fabric, FortiGuard Labs real-time threat intel
      </div>
    </div>
  )
}
