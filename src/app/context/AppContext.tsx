import React, { createContext, useContext, useState, ReactNode } from 'react';

export type UserMode = 'participant' | 'guardian' | 'coordinator';

interface AppContextType {
  mode: UserMode;
  setMode: (mode: UserMode) => void;
  currentDay: number;
  totalDays: number;
  userName: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<UserMode>('participant');

  return (
    <AppContext.Provider
      value={{
        mode,
        setMode,
        currentDay: 3,
        totalDays: 4,
        userName: '김영숙',
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
}
