// context/CropContext.tsx
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface CropContextType {
  imageUrl: string | null;
  setImageUrl: (url: string | null) => void;
}

const CropContext = createContext<CropContextType | undefined>(undefined);

export const CropProvider = ({ children }: { children: ReactNode }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  return (
    <CropContext.Provider value={{ imageUrl, setImageUrl }}>
      {children}
    </CropContext.Provider>
  );
};

export const useCrop = () => {
  const context = useContext(CropContext);
  if (!context) throw new Error("useCrop must be used within CropProvider");
  return context;
};
