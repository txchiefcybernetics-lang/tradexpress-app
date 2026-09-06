'use client';

import { useState } from 'react';

export default function DocumentOCRPage() {
  const [fileName, setFileName] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [extractedData, setExtractedData] = useState<any>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setProcessing(true);
      setExtractedData(null);

      // Simulate OCR and AI data extraction
      setTimeout(() => {
        setExtractedData({
          consignee: "TradeXpress Import/Export Corp",
          portOfEntry: "Port of Davao",
          hsCode: "8541.43.00",
          itemDescription: "Monocrystalline Solar Panels",
          declaredValueUSD: 15000,
          dutyRate: "0% (EO 12 / MFN)",
          status: "Verified & Ready for AutoAgent Audit"
        });
        setProcessing(false);
      }, 1500);
    }
  };

  return (
    <div style={{ background: '#0B0F19', color: '#F3F4F6', minHeight: '100vh', padding: '40px', fontFamily: 'monospace' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <span style={{ background: '#D97706', color: '#fff', padding: '4px 10px', borderRadius: '4px', fontSize: '11px', fontWeight: 'bold' }}>
          DOCUMENT INTELLIGENCE
        </span>
        <h1 style={{ color: '#60A5FA', fontSize: '28px', margin: '15px 0 10px 0' }}>Automated Trade Document OCR</h1>
        <p style={{ color: '#9CA3AF', fontSize: '13px', lineHeight: '1.6', marginBottom: '30px' }}>
          Upload commercial invoices, bills of lading, or packing lists to automatically extract customs data and tariff lines.
        </p>

        <div style={{ background: '#111827', padding: '30px', borderRadius: '8px', border: '1px solid #1F2937', marginBottom: '25px', textAlign: 'center' }}>
          <input
            type="file"
            onChange={handleFileUpload}
            style={{ display: 'none' }}
            id="ocr-file-input"
          />
          <label
            htmlFor="ocr-file-input"
            style={{ display: 'inline-block', padding: '12px 24px', background: '#2563EB', color: '#fff', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '13px' }}
          >
            {fileName ? `Selected: ${fileName}` : 'Upload Trade Document (PDF/Image)'}
          </label>
          <p style={{ color: '#9CA3AF', fontSize: '12px', marginTop: '12px' }}>Supported formats: PDF, PNG, JPG (Max 25MB)</p>
        </div>

        {processing && (
          <div style={{ background: '#111827', padding: '20px', borderRadius: '8px', border: '1px solid #374151', color: '#60A5FA', fontSize: '13px', textAlign: 'center' }}>
            Processing document via TX OCR Edge Engine & Google Gen AI SDK...
          </div>
        )}

        {extractedData && (
          <div style={{ background: '#111827', padding: '25px', borderRadius: '8px', border: '1px solid #34D399' }}>
            <h3 style={{ color: '#34D399', fontSize: '16px', marginBottom: '15px' }}>📄 Extracted Customs & Tariff Data</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13px' }}>
              <p style={{ color: '#E5E7EB', margin: 0 }}><strong>Consignee:</strong> {extractedData.consignee}</p>
              <p style={{ color: '#E5E7EB', margin: 0 }}><strong>Port of Entry:</strong> {extractedData.portOfEntry}</p>
              <p style={{ color: '#E5E7EB', margin: 0 }}><strong>HS Code:</strong> {extractedData.hsCode}</p>
              <p style={{ color: '#E5E7EB', margin: 0 }}><strong>Description:</strong> {extractedData.itemDescription}</p>
              <p style={{ color: '#E5E7EB', margin: 0 }}><strong>Declared Value:</strong> ${extractedData.declaredValueUSD.toLocaleString()}</p>
              <p style={{ color: '#E5E7EB', margin: 0 }}><strong>Duty Rate:</strong> {extractedData.dutyRate}</p>
            </div>
            <div style={{ marginTop: '20px', padding: '10px', background: '#065F46', color: '#6EE7B7', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', textAlign: 'center' }}>
              {extractedData.status}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
