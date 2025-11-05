import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export const useProductTranslation = () => {
	const { language } = useLanguage();

	const getProductTranslation = (productId: string) => {
		const langTranslations = translations[language];
		
		const productTranslations: Record<string, { title: string; description: string; overview: string; features: Array<{ title: string; description: string }> | string[] }> = {
			'cash-management': {
				title: langTranslations.cashManagementTitle,
				description: langTranslations.cashManagementDesc,
				overview: langTranslations.cashManagementOverview,
				features: langTranslations.cashManagementFeatures || []
			},
			'warehouse-management': {
				title: langTranslations.warehouseManagementTitle,
				description: langTranslations.warehouseManagementDesc,
				overview: langTranslations.warehouseManagementOverview,
				features: langTranslations.warehouseManagementFeatures || []
			},
			'hr-system': {
				title: langTranslations.hrSystemTitle,
				description: langTranslations.hrSystemDesc,
				overview: langTranslations.hrSystemOverview,
				features: langTranslations.hrSystemFeatures || []
			},
			'courier-system': {
				title: langTranslations.courierSystemTitle,
				description: langTranslations.courierSystemDesc,
				overview: langTranslations.courierSystemOverview,
				features: langTranslations.courierSystemFeatures || []
			},
			'freight-management': {
				title: langTranslations.freightManagementTitle,
				description: langTranslations.freightManagementDesc,
				overview: langTranslations.freightManagementOverview,
				features: langTranslations.freightManagementFeatures || []
			},
			'integrated-management': {
				title: langTranslations.integratedManagementTitle || 'Integrated Management System',
				description: langTranslations.integratedManagementDesc || 'Integrated Management System',
				overview: langTranslations.integratedManagementOverview || 'A comprehensive integrated management system that combines multiple business functions into a unified platform.',
				features: langTranslations.integratedManagementFeatures || []
			}
		};

		return productTranslations[productId] || null;
	};

	return { getProductTranslation };
};

