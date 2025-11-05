import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export const useCarTranslation = () => {
	const { language } = useLanguage();

	const getCarTranslation = (_carId: string) => {
		// For now, return null as car translations are handled in the car data itself
		// This can be extended if needed for additional translations
		return null;
	};

	const translateFuel = (fuel: string) => {
		const langTranslations = translations[language];
		const fuelMap: Record<string, string> = {
			petrol: langTranslations.fuelPetrol,
			diesel: langTranslations.fuelDiesel,
			electric: langTranslations.fuelElectric,
			hybrid: langTranslations.fuelHybrid,
		};
		return fuelMap[fuel] || fuel;
	};

	const translateTransmission = (transmission: string) => {
		const langTranslations = translations[language];
		const transmissionMap: Record<string, string> = {
			manual: langTranslations.transmissionManual,
			automatic: langTranslations.transmissionAutomatic,
			cvt: langTranslations.transmissionCVT,
		};
		return transmissionMap[transmission] || transmission;
	};

	const formatPrice = (price: number) => {
		// Always format as Rupiah (IDR)
		return new Intl.NumberFormat('id-ID', {
			style: 'currency',
			currency: 'IDR',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0,
		}).format(price);
	};

	const formatMileage = (mileage: number) => {
		if (language === 'id') {
			return `${mileage.toLocaleString('id-ID')} km`;
		}
		return `${mileage.toLocaleString('en-US')} km`;
	};

	return { 
		getCarTranslation, 
		translateFuel, 
		translateTransmission, 
		formatPrice, 
		formatMileage 
	};
};

