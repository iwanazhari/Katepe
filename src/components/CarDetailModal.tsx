import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, memo, useMemo } from 'react';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useCarTranslation } from '@/utils/carTranslations';
import type { Car } from '@/types';
import { cn } from '@/lib/utils';
import { Car as CarIcon, Phone, MapPin, Calendar, Gauge, Fuel, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CarDetailModalProps {
	car: Car;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

const CarDetailModal = memo(({
	car,
	open,
	onOpenChange,
}: CarDetailModalProps) => {
	const { t } = useLanguage();
	const { translateFuel, translateTransmission, formatPrice, formatMileage } = useCarTranslation();

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [open]);

	const modalVariants = useMemo(() => ({
		hidden: {
			opacity: 0,
			scale: 0.9,
			y: 30,
			rotateX: 10,
		},
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			rotateX: 0,
			transition: {
				type: 'spring',
				damping: 30,
				stiffness: 300,
				mass: 0.8,
			},
		},
		exit: {
			opacity: 0,
			scale: 0.9,
			y: 20,
			transition: {
				duration: 0.2,
			},
		},
	}), []);

	const imageVariants = useMemo(() => ({
		hidden: { scale: 1.2, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.46, 0.45, 0.94],
			},
		},
	}), []);

	const featureVariants = useMemo(() => ({
		hidden: { opacity: 0, x: -20 },
		visible: (i: number) => ({
			opacity: 1,
			x: 0,
			transition: {
				delay: 0.5 + i * 0.1,
				duration: 0.4,
				ease: 'easeOut',
			},
		}),
	}), []);

	return (
		<Dialog open={open} onOpenChange={onOpenChange}>
			<DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto sm:max-w-5xl p-0 gap-0">
				<AnimatePresence>
					{open && (
						<motion.div
							variants={modalVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
							className="p-6"
						>
							{/* Image Section */}
							<div className="relative h-64 md:h-96 overflow-hidden rounded-xl mb-8 border-2 border-border/50 shadow-2xl">
								{car.status === 'sold' && (
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-[2px] bg-background/40 dark:bg-background/50"
									>
										<Badge
											variant="secondary"
											className={cn(
												'text-base md:text-lg font-bold px-5 py-2.5 md:px-6 md:py-3 tracking-wide uppercase',
												'bg-red-500/95 text-white border-2 border-red-500',
												'shadow-2xl shadow-red-500/40 backdrop-blur-sm'
											)}
										>
											{t('sold')}
										</Badge>
									</motion.div>
								)}
								<motion.img
									variants={imageVariants}
									initial="hidden"
									animate="visible"
									src={car.image}
									alt={`${car.brand} ${car.model}`}
									className="w-full h-full object-cover"
									loading="lazy"
									decoding="async"
									fetchPriority="high"
								/>
								{/* Gradient Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
								
								{/* Price Badge */}
								{car.status === 'available' && (
									<motion.div
										initial={{ opacity: 0, scale: 0 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.3 }}
										className="absolute top-4 right-4 z-10"
									>
										<Badge className="bg-primary/90 text-primary-foreground border-2 border-primary shadow-lg text-lg px-4 py-2">
											{formatPrice(car.price)}
										</Badge>
									</motion.div>
								)}
							</div>

							<DialogHeader className="mb-6">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3 }}
								>
									<DialogTitle className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
										{car.brand} {car.model} {car.year}
									</DialogTitle>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 }}
								>
									<DialogDescription className="text-base md:text-lg mt-2 leading-relaxed text-muted-foreground">
										{car.details?.overview || car.description}
									</DialogDescription>
								</motion.div>
							</DialogHeader>

							{/* Car Specifications */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 }}
								className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
							>
								<Card className="border-2 hover:border-primary/50 transition-colors duration-300">
									<CardContent className="p-4 text-center">
										<Calendar className="h-6 w-6 text-primary mx-auto mb-2" />
										<p className="text-xs text-muted-foreground mb-1">{t('year')}</p>
										<p className="text-lg font-bold">{car.year}</p>
									</CardContent>
								</Card>
								<Card className="border-2 hover:border-primary/50 transition-colors duration-300">
									<CardContent className="p-4 text-center">
										<Gauge className="h-6 w-6 text-primary mx-auto mb-2" />
										<p className="text-xs text-muted-foreground mb-1">{t('mileage')}</p>
										<p className="text-lg font-bold">{formatMileage(car.mileage)}</p>
									</CardContent>
								</Card>
								<Card className="border-2 hover:border-primary/50 transition-colors duration-300">
									<CardContent className="p-4 text-center">
										<Fuel className="h-6 w-6 text-primary mx-auto mb-2" />
										<p className="text-xs text-muted-foreground mb-1">{t('fuel')}</p>
										<p className="text-lg font-bold">{translateFuel(car.fuel)}</p>
									</CardContent>
								</Card>
								<Card className="border-2 hover:border-primary/50 transition-colors duration-300">
									<CardContent className="p-4 text-center">
										<Settings className="h-6 w-6 text-primary mx-auto mb-2" />
										<p className="text-xs text-muted-foreground mb-1">{t('transmission')}</p>
										<p className="text-lg font-bold">{translateTransmission(car.transmission)}</p>
									</CardContent>
								</Card>
							</motion.div>

							{/* Location and Contact */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.45 }}
								className="flex flex-col sm:flex-row gap-4 mb-6"
							>
								<Card className="flex-1 border-2 hover:border-primary/50 transition-colors duration-300">
									<CardContent className="p-4 flex items-center gap-3">
										<MapPin className="h-5 w-5 text-primary" />
										<div>
											<p className="text-xs text-muted-foreground">{t('location')}</p>
											<p className="font-semibold">{car.location}</p>
										</div>
									</CardContent>
								</Card>
								{car.contactPhone && (
									<Card className="flex-1 border-2 hover:border-primary/50 transition-colors duration-300">
										<CardContent className="p-4 flex items-center gap-3">
											<Phone className="h-5 w-5 text-primary" />
											<div>
												<p className="text-xs text-muted-foreground">{t('contactSeller')}</p>
												<p className="font-semibold">{car.contactPhone}</p>
											</div>
										</CardContent>
									</Card>
								)}
							</motion.div>

							{car.details && (
								<div className="space-y-6 mt-6">
									{/* Features */}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.5 }}
									>
										<Card className="border-2 hover:border-primary/50 transition-colors duration-300 bg-card dark:bg-card/50 backdrop-blur-sm mb-4">
											<CardHeader>
												<CardTitle className="text-xl md:text-2xl font-bold flex items-center gap-2">
													<CarIcon className="h-5 w-5 text-primary" />
													{t('modalKeyFeatures')}
												</CardTitle>
											</CardHeader>
										</Card>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											{(car.details.features || []).map(
												(feature, index) => {
													const featureData = typeof feature === 'string' 
														? { title: feature, description: '' }
														: feature;
													
													return (
														<motion.div
															key={index}
															custom={index}
															variants={featureVariants}
															initial="hidden"
															animate="visible"
														>
															<Card className="border-2 hover:border-primary/50 transition-colors duration-300 bg-card dark:bg-card/50 backdrop-blur-sm h-full">
																<CardHeader>
																	<CardTitle className="text-lg md:text-xl font-bold text-foreground">
																		{featureData.title}
																	</CardTitle>
																</CardHeader>
																<CardContent>
																	<p className="text-sm text-muted-foreground leading-relaxed">
																		{featureData.description}
																	</p>
																</CardContent>
															</Card>
														</motion.div>
													);
												}
											)}
										</div>
									</motion.div>

									{/* Specifications */}
									{car.details.specifications && (
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.6 }}
										>
											<Card className="border-2 hover:border-primary/50 transition-colors duration-300 bg-card dark:bg-card/50 backdrop-blur-sm">
												<CardHeader>
													<CardTitle className="text-xl md:text-2xl font-bold flex items-center gap-2">
														<Settings className="h-5 w-5 text-primary" />
														{t('modalSpecifications')}
													</CardTitle>
												</CardHeader>
												<CardContent>
													<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
														{car.details.specifications.engine && (
															<div>
																<p className="text-sm text-muted-foreground mb-1">{t('specEngine')}</p>
																<p className="font-semibold">{car.details.specifications.engine}</p>
															</div>
														)}
														{car.details.specifications.power && (
															<div>
																<p className="text-sm text-muted-foreground mb-1">{t('specPower')}</p>
																<p className="font-semibold">{car.details.specifications.power}</p>
															</div>
														)}
														{car.details.specifications.torque && (
															<div>
																<p className="text-sm text-muted-foreground mb-1">{t('specTorque')}</p>
																<p className="font-semibold">{car.details.specifications.torque}</p>
															</div>
														)}
														{car.details.specifications.seats && (
															<div>
																<p className="text-sm text-muted-foreground mb-1">{t('specSeats')}</p>
																<p className="font-semibold">{car.details.specifications.seats}</p>
															</div>
														)}
														{car.details.specifications.doors && (
															<div>
																<p className="text-sm text-muted-foreground mb-1">{t('specDoors')}</p>
																<p className="font-semibold">{car.details.specifications.doors}</p>
															</div>
														)}
													</div>
												</CardContent>
											</Card>
										</motion.div>
									)}
								</div>
							)}

							{/* Contact Seller Button */}
							{car.contactPhone && car.status === 'available' && (
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.7 }}
									className="flex justify-center mt-6"
								>
									<Button
										asChild
										size="lg"
										className="group relative text-lg px-8 py-7 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300 overflow-hidden"
									>
										<motion.a
											href={`tel:${car.contactPhone}`}
											whileHover={{ scale: 1.05, y: -2 }}
											whileTap={{ scale: 0.98 }}
											className="relative z-10 flex items-center gap-2"
										>
											<Phone className="h-5 w-5" />
											<span>{t('callNow')}</span>
											{/* Shine Effect */}
											<motion.div
												className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"
												style={{ width: '100%' }}
											/>
										</motion.a>
									</Button>
								</motion.div>
							)}
						</motion.div>
					)}
				</AnimatePresence>
			</DialogContent>
		</Dialog>
	);
});

CarDetailModal.displayName = 'CarDetailModal';

export default CarDetailModal;

