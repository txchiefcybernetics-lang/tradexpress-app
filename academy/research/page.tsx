'use client';

export default function DissertationResearchPage() {
  const chapters = [
    { title: "Chapter 1: Foundations", focus: "Introduction to the Intelligent Trade Ecosystem Theory", status: "Published" },
    { title: "Chapter 2: Platform Architecture", focus: "Integration of AI and Trade Systems", status: "Published" },
    { title: "Chapter 3: Regulatory Compliance", focus: "RA 10863 and Customs Automation", status: "In Progress" }
  ];

  const briefs = [
    "Bridging Borders: Enhancing Regional Connectivity through Digital Trade Platforms",
    "Engineering Futures: The Role of Generative AI in Customs Modernization",
    "Sustainable Commerce: Implementing GreenCore Initiatives in Global Supply Chains"
  ];

  return (
    <div style={{ background: '#0B0F19', color: '#F3F4F6', minHeight: '100vh', padding: '40px', fontFamily: 'monospace' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <span style={{ background: '#1E3A8A', color: '#93C5FD', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
          TRADE-X ACADEMY REPOSITORY
        </span>
        <h1 style={{ color: '#60A5FA', fontSize: '28px', margin: '15px 0 10px 0' }}>Research & Dissertation Portal</h1>
        <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: '1.6', marginBottom: '30px' }}>
          Official repository for the Intelligent Trade Ecosystem Theory and foundational research conducted by TradeXpress Cybernetics Corporation.
        </p>

        <div style={{ background: '#111827', padding: '25px', borderRadius: '8px', border: '1px solid #1F2937', marginBottom: '30px' }}>
          <h3 style={{ color: '#34D399', fontSize: '16px', marginBottom: '15px' }}>📚 The Dissertation: Intelligent Trade Ecosystem Theory</h3>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #374151', textAlign: 'left', color: '#9CA3AF' }}>
                <th style={{ padding: '10px' }}>Chapter / Module</th>
                <th style={{ padding: '10px' }}>Focus Area</th>
                <th style={{ padding: '10px' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {chapters.map((c, i) => (
                <tr key={i} style={{ borderBottom: '1px solid #1F2937' }}>
                  <td style={{ padding: '10px', color: '#E5E7EB', fontWeight: 'bold' }}>{c.title}</td>
                  <td style={{ padding: '10px', color: '#D1D5DB' }}>{c.focus}</td>
                  <td style={{ padding: '10px', color: c.status === 'Published' ? '#34D399' : '#F59E0B' }}>{c.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ background: '#111827', padding: '25px', borderRadius: '8px', border: '1px solid #1F2937' }}>
          <h3 style={{ color: '#60A5FA', fontSize: '16px', marginBottom: '15px' }}>📄 Featured Policy Briefs</h3>
          <ul style={{ paddingLeft: '20px', color: '#D1D5DB', fontSize: '13px', lineHeight: '1.8' }}>
            {briefs.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
