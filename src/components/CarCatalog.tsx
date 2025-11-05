import { motion, AnimatePresence } from 'framer-motion';
import CarCard from './CarCard';
import { cars, carBrands } from '@/data/cars';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Car } from '@/types';
import { Car as CarIcon } from 'lucide-react';
import { memo, useMemo, useCallback, useState } from 'react';
import { Button } from '@/components/ui/button';
import BrandLogo from './BrandLogos';

interface CarCatalogProps {
	onCarSelect: (car: Car) => void;
}

const CarCatalog = memo(({ onCarSelect }: CarCatalogProps) => {
	const { t } = useLanguage();
	const [selectedBrand, setSelectedBrand] = useState<string>('All');
	
	const containerVariants = useMemo(() => ({
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.3,
			},
		},
	}), []);


	const filteredCars = useMemo(() => {
		if (selectedBrand === 'All') {
			return cars;
		}
		return cars.filter(car => car.brand === selectedBrand);
	}, [selectedBrand]);

	const handleCarClick = useCallback((car: Car) => {
		onCarSelect(car);
	}, [onCarSelect]);

	const handleBrandFilter = useCallback((brand: string) => {
		setSelectedBrand(brand);
	}, []);


	return (
		<section id="cars" className="py-24 px-4 relative overflow-hidden bg-background">
			<div className="container mx-auto relative z-10">
				{/* Section Title */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
					className="text-center mb-12"
				>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-foreground">
						{t('carsTitle')}
					</h2>
				</motion.div>

				{/* Brand Filter */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="flex flex-wrap justify-center gap-4 mb-12"
				>
					{carBrands.map((brand, index) => (
						<motion.div
							key={brand}
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
						>
							<Button
								onClick={() => handleBrandFilter(brand)}
								variant="ghost"
								className={`
									rounded-lg px-8 py-4 transition-all duration-300 flex items-center justify-center min-w-[120px] h-20
									${selectedBrand === brand
										? 'bg-primary text-primary-foreground hover:bg-primary/90'
										: 'bg-card text-muted-foreground hover:bg-accent hover:text-foreground'
									}
								`}
							>
								{brand === 'All' ? (
									<span className="font-semibold text-lg">{t('filterAll')}</span>
								) : (
									<BrandLogo 
										brand={brand} 
										className="object-contain w-14 h-14"
									/>
								)}
							</Button>
						</motion.div>
					))}
				</motion.div>

				{/* Car Grid */}
				<AnimatePresence mode="wait">
					<motion.div
						key={selectedBrand}
						variants={containerVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
						viewport={{ once: true, margin: '-100px' }}
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
					>
						{filteredCars.map((car, index) => (
							<CarCard
								key={car.id}
								car={car}
								onClick={() => handleCarClick(car)}
								index={index}
							/>
						))}
					</motion.div>
				</AnimatePresence>

				{/* Empty State */}
				{filteredCars.length === 0 && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						className="text-center py-20"
					>
						<CarIcon className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
						<p className="text-muted-foreground text-lg">{t('noCarsFound')}</p>
					</motion.div>
				)}
			</div>
		</section>
	);
});

CarCatalog.displayName = 'CarCatalog';

export default CarCatalog;
