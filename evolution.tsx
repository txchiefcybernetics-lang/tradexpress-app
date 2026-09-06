'use client';

export default function KnowledgeEvolutionPage() {
  const evolutionStages = [
    { phase: "Phase I: Theoretical Grounding", title: "Intelligent Trade Ecosystem Theory", status: "Completed", desc: "Establishing the architecture for an AI-powered Global Trade Operating System." },
    { phase: "Phase II: Regulatory Codification", title: "CMTA RA 10863 & Tariff Automation", status: "Active", desc: "Integrating real-time AHTN codes and landed cost calculations directly into TX AI." },
    { phase: "Phase III: Decentralized Synthesis", title: "Autonomous Supply Chain Networks", status: "Roadmap", desc: "Deploying multi-channel agent frameworks (Eve AI) to automate multi-stakeholder customs clearance." }
  ];

  return (
    <div style={{ background: '#0B0F19', color: '#F3F4F6', minHeight: '100vh', padding: '40px', fontFamily: 'monospace' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <span style={{ background: '#1E3A8A', color: '#93C5FD', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
          TRADEXPRESS MEDIA & RESEARCH
        </span>
        <h1 style={{ color: '#60A5FA', fontSize: '28px', margin: '15px 0 10px 0' }}>The Knowledge Evolution</h1>
        <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: '1.6', marginBottom: '30px' }}>
          Mapping the continuous evolution of our academic theory into production-grade digital infrastructure for international trade.
        </p>

        <div style={{ display: 'grid', gap: '20px' }}>
          {evolutionStages.map((stage, i) => (
            <div key={i} style={{ background: '#111827', padding: '25px', borderRadius: '8px', border: '1px solid #1F2937' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ color: '#34D399', fontSize: '12px', fontWeight: 'bold' }}>{stage.phase}</span>
                <span style={{ background: stage.status === 'Completed' ? '#065F46' : stage.status === 'Active' ? '#1E3A8A' : '#374151', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '10px' }}>
                  {stage.status}
                </span>
              </div>
              <h3 style={{ color: '#E5E7EB', fontSize: '16px', marginBottom: '8px' }}>{stage.title}</h3>
              <p style={{ color: '#9CA3AF', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
