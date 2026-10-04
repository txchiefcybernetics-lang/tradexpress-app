import React, { useState } from 'react';

interface AssetTag {
  symbol: string;
  type: 'crypto' | 'forex' | 'stock';
}

interface StoryPayload {
  title: string;
  content: string;
  category: 'alpha' | 'macro' | 'post-mortem' | 'technical-analysis';
  targetedAssets: AssetTag[];
  isPremium: boolean;
  status: 'draft' | 'published';
}

export const CreateStoryWorkspace: React.FC = () => {
  const [formData, setFormData] = useState<StoryPayload>({
    title: '',
    content: '',
    category: 'technical-analysis',
    targetedAssets: [],
    isPremium: false,
    status: 'draft',
  });

  const [assetInput, setAssetInput] = useState('');
  const [assetType, setAssetType] = useState<AssetTag['type']>('crypto');

  const addAssetTag = () => {
    if (!assetInput.trim()) return;
    const newAsset: AssetTag = {
      symbol: assetInput.toUpperCase().trim(),
      type: assetType,
    };
    setFormData((prev) => ({
      ...prev,
      targetedAssets: [...prev.targetedAssets, newAsset],
    }));
    setAssetInput('');
  };

  const removeAssetTag = (symbolToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      targetedAssets: prev.targetedAssets.filter((a) => a.symbol !== symbolToRemove),
    }));
  };

  const handlePublish = async (status: 'draft' | 'published') => {
    const payload = { ...formData, status };
    console.log('Dispatching story matrix payload to server endpoint:', payload);
    // Target endpoint route: /api/story/create or migration endpoints
  };

    const handlePublish = async (status: 'draft' | 'published') => {
    const payload = { ...formData, status };
    
    try {
      const response = await fetch('/api/migrate/appdate', { // Adjust endpoint route path as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        alert(`Story ${status === 'published' ? 'published live' : 'saved as draft'} successfully!`);
      } else {
        console.error('Database response structural rejection:', result.error);
        alert(`Submission failed: ${result.error || 'Unknown server database rejection'}`);
      }
    } catch (error) {
      console.error('Network dispatch failure:', error);
      alert('Unable to reach trading application analytics backend server.');
    }
  };


              {/* Dynamic Title TXbot/*.txbot */}
              <h2 className="text-lg font-bold text-white mb-2 break-words">
