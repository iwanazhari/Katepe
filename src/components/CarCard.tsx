import { motion } from 'framer-motion';
import { useState, memo, useMemo, useCallback } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { Car } from '@/types';
import { cn } from '@/lib/utils';
import { Zap, Gauge, Battery, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCarTranslation } from '@/utils/carTranslations';

interface CarCardProps {
	car: Car;
	onClick: () => void;
	index: number;
}

const CarCard = memo(({ car, onClick, index }: CarCardProps) => {
	const { t } = useLanguage();
	const { translateFuel } = useCarTranslation();
	const [isHovered, setIsHovered] = useState(false);

	const cardVariants = useMemo(() => ({
		hidden: { opacity: 0, y: 40, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.8,
				delay: index * 0.12,
				ease: [0.16, 1, 0.3, 1],
			},
		},
		hover: {
			y: -8,
			scale: 1.02,
			transition: {
				duration: 0.4,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	}), [index]);

	const handleClick = useCallback(() => {
		onClick();
	}, [onClick]);

	const handleHoverStart = useCallback(() => {
		setIsHovered(true);
	}, []);

	const handleHoverEnd = useCallback(() => {
		setIsHovered(false);
	}, []);

	const acceleration = car.details?.specifications?.acceleration || 'N/A';
	const topSpeed = car.details?.specifications?.topSpeed || 'N/A';
	const fuelType = translateFuel(car.fuel);

	return (
		<motion.div
			variants={cardVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, margin: '-50px' }}
			whileHover="hover"
			onHoverStart={handleHoverStart}
			onHoverEnd={handleHoverEnd}
		>
			<Card
				className={cn(
					'group relative overflow-hidden cursor-pointer transition-all duration-500',
					'hover:shadow-2xl hover:shadow-primary/20 border-2 border-border',
					'hover:border-primary/50 bg-card backdrop-blur-sm',
					'flex flex-col h-full'
				)}
				onClick={handleClick}
			>
				{/* Shine Effect on Hover */}
				<motion.div
					className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none z-[5]"
					initial={{ x: '-100%' }}
					whileHover={{ x: '100%' }}
					transition={{ duration: 0.6 }}
					style={{
						background:
							'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.1), transparent)',
					}}
				/>
				{/* Ensure button area is always on top */}
				<div className="absolute bottom-6 right-6 z-[25] pointer-events-none" />

				{/* Card Header - Brand and Model */}
				<div className="relative z-10 p-6 pb-4">
					<div className="flex items-start justify-between mb-4">
						<div>
							<h3 className="text-2xl font-bold text-foreground mb-1">{car.brand}</h3>
							<p className="text-lg text-muted-foreground">{car.model}</p>
						</div>
						{car.status === 'available' && (
							<Badge className="bg-green-500/20 text-green-400 border-green-500/30">
								{t('available')}
							</Badge>
						)}
					</div>
				</div>

				{/* Car Image */}
				<div className="relative overflow-hidden flex-shrink-0 px-6 h-56">
					<motion.img
						src={car.image}
						alt={`${car.brand} ${car.model}`}
						className="w-full h-full object-cover rounded-lg"
						animate={{
							scale: isHovered ? 1.1 : 1,
							filter: `brightness(${isHovered ? 1.2 : 1}) saturate(${isHovered ? 1.1 : 1})`,
						}}
						transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
						loading="lazy"
						decoding="async"
					/>
					{/* Gradient Overlay */}
					<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-lg" />
				</div>

				{/* Specifications */}
				<CardContent className="relative z-10 p-6 pt-4 flex-grow flex flex-col">
					{/* Specs Icons */}
					<div className="flex items-center gap-4 mb-6">
						{/* Acceleration */}
						<div className="flex items-center gap-2">
							<Zap className="h-5 w-5 text-primary" />
							<span className="text-sm text-muted-foreground">{acceleration}</span>
						</div>
						{/* Top Speed */}
						<div className="flex items-center gap-2">
							<Gauge className="h-5 w-5 text-primary" />
							<span className="text-sm text-muted-foreground">{topSpeed}</span>
						</div>
						{/* Fuel Type */}
						<div className="flex items-center gap-2">
							<Battery className="h-5 w-5 text-primary" />
							<span className="text-sm text-muted-foreground">{fuelType}</span>
						</div>
					</div>

					{/* Price and Action Button */}
					<div className="flex items-center justify-between mt-auto relative z-[30]">
						{/* Price */}
						<div>
							<p className="text-2xl font-bold text-foreground">
								Rp {car.price.toLocaleString('id-ID')}
							</p>
						</div>

						{/* Action Button */}
						<button
							type="button"
								className="relative z-[35] bg-primary hover:bg-primary/90 rounded-lg w-12 h-12 shadow-lg shadow-primary/30 flex items-center justify-center transition-all duration-300 text-primary-foreground"
							onClick={(e) => {
								e.stopPropagation();
								handleClick();
							}}
						>
							<motion.div
								whileHover={{ scale: 1.1, rotate: 5 }}
								whileTap={{ scale: 0.9 }}
								className="relative z-[40] flex items-center justify-center"
							>
								<ShoppingBag 
									className="h-5 w-5 text-primary-foreground" 
									strokeWidth={2}
								/>
							</motion.div>
						</button>
					</div>
				</CardContent>
			</Card>
		</motion.div>
	);
});

CarCard.displayName = 'CarCard';

export default CarCard;
