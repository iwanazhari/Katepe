import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../translations';

type Language = 'en' | 'id';

interface LanguageContextType {
	language: Language;
	toggleLanguage: () => void;
	t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [language, setLanguage] = useState<Language>('en');

	useEffect(() => {
		if (typeof window === 'undefined') return;
		
		const savedLanguage = localStorage.getItem('language') as Language;
		if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'id')) {
			setLanguage(savedLanguage);
		}
	}, []);

	useEffect(() => {
		if (typeof window === 'undefined') return;
		
		localStorage.setItem('language', language);
	}, [language]);

	const toggleLanguage = () => {
		setLanguage(prev => prev === 'en' ? 'id' : 'en');
	};

	const t = (key: string) => {
		const langTranslations = translations[language];
		return (langTranslations as any)[key] || key;
	};

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error('useLanguage must be used within a LanguageProvider');
	}
	return context;
};
