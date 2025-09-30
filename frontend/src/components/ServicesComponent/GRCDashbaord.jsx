import React from 'react';
import { Shield, FileCheck, AlertTriangle, Lock, CheckCircle, Building2, Globe, Server } from 'lucide-react';

export default function GRCDashboard() {
  const sections = [
    {
      title: "Compliance Management",
      icon: Shield,
      items: [
        {
          column: [
            "ISO 27001 ISMS",
            "ISO 22301 BCMS",
            "ISO 27701 PIMS",
            "PCI DSS",
            "Cyber Essentials"
          ]
        },
        {
          column: [
            "National Institute of Standards and Technology (NIST)",
            "Health Information Trust Alliance (HITRUST)",
            "Digital Operational Resilience Act (DORA)"
          ]
        },
        {
          column: [
            "Control Objectives for Information and Related Technologies (COBIT)",
            "Center for Internet Security (CIS)",
            "SOX (Applications & ITGC)"
          ]
        }
      ]
    },
    {
      title: "Information System Audit & Assurance",
      icon: FileCheck,
      items: [
        {
          column: [
            "RBI",
            "Payment & Settlement Systems (PSS)",
            "Co-Operative Banks",
            "Prepaid Payment Instruments PPI",
            "Central Electricity Authority"
          ]
        },
        {
          column: [
            "IRDA ISNP",
            "SEBI",
            "NPCI",
            "Aadhaar",
            "P2P Lending",
            "NBFC"
          ]
        },
        {
          column: [
            "GST Suvidha Provider",
            "Security Standards (ISO, NIST, CIS & Others)",
            "UIDAI Aadhaar",
            "eSign ASP",
            "Others"
          ]
        }
      ]
    },
    {
      title: "IT Risk Management",
      icon: AlertTriangle,
      items: [
        {
          column: [
            "SSAE 18-SOC1/2/3",
            "ISAE 3402",
            "Third Party Security Risk Management",
            "IT Risk Management"
          ]
        },
        {
          column: [
            "SSAE 18-SOC1/2/3",
            "ISAE 3402",
            "Third Party Security Risk Management",
            "IT Risk Management"
          ]
        },
        {
          column: [
            "IT in Merger & Acquisition",
            "Governance Framework",
            "Strategy and Implementation"
          ]
        }
      ]
    },
    {
      title: "Data Protection & Privacy",
      icon: Lock,
      items: [
        {
          column: [
            "General Data Protection Regulation (GDPR)",
            "California Consumer Privacy Act (CCPA)",
            "Digital Personal Data PDPD, F23,SG Protection ACT (DPDPA)"
          ]
        },
        {
          column: [
            "Brazilian General Data Protection Law (LGPD)",
            "Personal Information Protection and Electronic Documents Act (PIPEDA, Canada)"
          ]
        },
        {
          column: [
            "Singapore Personal Data Protection Act (PDPA)",
            "Health Insurance Portability and Accountability Act (HIPAA)"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
      <div className=" mb-10 p-8     text-center">
  <div className="flex flex-col items-center gap-4 mb-4">
    <div className="bg-red-700 p-3 rounded-lg">
      <Server className="w-10 h-10 text-white" />
    </div>
    <div>
      <h1 className="text-4xl md:text-5xl font-bold text-red-800">
        Governance Risk & Compliance
      </h1>
      <p className="text-2xl font-semibold text-red-600 mt-1">(GRC)</p>
    </div>
  </div>
</div>


        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => {
            const IconComponent = section.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-red-100 hover:shadow-xl transition-shadow duration-300">
                <div className="bg-gradient-to-r from-red-700 to-red-600 text-white px-6 py-4 flex items-center gap-3">
                  <IconComponent className="w-7 h-7" />
                  <h2 className="text-2xl font-semibold">{section.title}</h2>
                </div>
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="space-y-3">
                        {item.column.map((text, textIndex) => (
                          <div key={textIndex} className="flex items-start gap-3 group">
                            <div className="mt-1 flex-shrink-0">
                              <CheckCircle className="w-5 h-5 text-red-600 group-hover:text-red-700 transition-colors" />
                            </div>
                            <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors">
                              {text}
                            </p>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-md border border-red-200">
            <Globe className="w-5 h-5 text-red-600" />
            <p className="text-gray-600 font-medium">Comprehensive GRC Solutions</p>
          </div>
        </div>
      </div>
    </div>
  );
}