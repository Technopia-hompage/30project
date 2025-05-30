import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  getLanguageRoute: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('jp');

  useEffect(() => {
    // Get language from URL path
    const path = window.location.pathname;
    const langFromPath = path.split('/')[1] as Language;
    
    if (['jp', 'ko', 'en', 'zh'].includes(langFromPath)) {
      setLanguageState(langFromPath);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    // Update URL
    const currentPath = window.location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(jp|ko|en|zh)/, '');
    const newPath = `/${lang}${pathWithoutLang}`;
    window.history.pushState({}, '', newPath);
  };

  const getLanguageRoute = (path: string): string => {
    return `/${language}${path}`;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getLanguageRoute }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
