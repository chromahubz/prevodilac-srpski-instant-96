import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type ModelQuality = 'najbolji' | 'standardan' | 'obican';

interface ModelContextType {
  modelQuality: ModelQuality;
  setModelQuality: (quality: ModelQuality) => void;
}

const ModelContext = createContext<ModelContextType | undefined>(undefined);

export function ModelProvider({ children }: { children: ReactNode }) {
  const [modelQuality, setModelQualityState] = useState<ModelQuality>(() => {
    // Load from localStorage or default to 'standardan'
    const saved = localStorage.getItem('modelQuality');
    return (saved as ModelQuality) || 'standardan';
  });

  const setModelQuality = (quality: ModelQuality) => {
    setModelQualityState(quality);
    localStorage.setItem('modelQuality', quality);
  };

  return (
    <ModelContext.Provider value={{ modelQuality, setModelQuality }}>
      {children}
    </ModelContext.Provider>
  );
}

export function useModel() {
  const context = useContext(ModelContext);
  if (context === undefined) {
    throw new Error('useModel must be used within a ModelProvider');
  }
  return context;
}
