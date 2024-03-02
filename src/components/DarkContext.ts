// DarkModeContext.tsx
import { createContext, useContext } from 'react';

// Define a type for the context
type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

// Create the context
export const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

// Create a provider component


// Custom hook to use the dark mode context
export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};