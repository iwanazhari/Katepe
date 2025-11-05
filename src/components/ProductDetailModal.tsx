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
import { useProductTranslation } from '@/utils/productTranslations';
import type { Product } from '@/types';
import { cn } from '@/lib/utils';
import { Sparkles, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductDetailModalProps {
	product: Product;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

const ProductDetailModal = memo(({
	product,
	open,
	onOpenChange,
}: ProductDetailModalProps) => {
	const { t } = useLanguage();
	const { getProductTranslation } = useProductTranslation();
	const translation = useMemo(() => getProductTranslation(product.id), [getProductTranslation, product.id]);

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

	const techVariants = useMemo(() => ({
		hidden: { opacity: 0, scale: 0 },
		visible: (i: number) => ({
			opacity: 1,
			scale: 1,
			transition: {
				delay: 0.6 + i * 0.05,
				type: 'spring',
				stiffness: 200,
				damping: 15,
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
							{/* Image Section dengan Enhanced Design */}
							<div className="relative h-64 md:h-96 overflow-hidden rounded-xl mb-8 border-2 border-border/50 shadow-2xl">
								{product.status === 'coming-soon' && (
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										animate={{ opacity: 1, scale: 1 }}
										className="absolute inset-0 z-10 flex items-center justify-center backdrop-blur-[2px] bg-black/20 dark:bg-black/30"
									>
										<Badge
											variant="secondary"
											className={cn(
												'text-base md:text-lg font-bold px-5 py-2.5 md:px-6 md:py-3 tracking-wide uppercase',
												'bg-primary/95 text-primary-foreground border-2 border-primary',
												'shadow-2xl shadow-primary/40 backdrop-blur-sm'
											)}
										>
											{t('comingSoon')}
										</Badge>
									</motion.div>
								)}
								<motion.img
									variants={imageVariants}
									initial="hidden"
									animate="visible"
									src={product.image}
									alt={translation?.title || product.title}
									className="w-full h-full object-cover"
									loading="lazy"
									decoding="async"
									fetchPriority="high"
								/>
								{/* Gradient Overlay */}
								<div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
								{/* Status Badge */}
								{product.status === 'available' && (
									<motion.div
										initial={{ opacity: 0, scale: 0 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 0.3 }}
										className="absolute top-4 right-4 z-10"
									>
										<Badge className="bg-primary/90 text-primary-foreground border-2 border-primary shadow-lg">
											<Sparkles className="h-3 w-3 mr-1" />
											{t('available')}
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
										{translation?.title || product.title}
									</DialogTitle>
								</motion.div>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4 }}
								>
									<DialogDescription className="text-base md:text-lg mt-2 leading-relaxed text-muted-foreground">
										{translation?.overview || product.details?.overview}
									</DialogDescription>
								</motion.div>
							</DialogHeader>

							{product.details && (
								<div className="space-y-6 mt-6">
									{/* Features dengan Enhanced Design - 2x2 Grid */}
									<motion.div
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ delay: 0.5 }}
									>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
											{(translation?.features ||
												product.details.features).map(
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

									{/* Technologies dengan Enhanced Design */}
									{product.details.technologies && (
										<motion.div
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 0.6 }}
										>
											<Card className="border-2 hover:border-primary/50 transition-colors duration-300 bg-card dark:bg-card/50 backdrop-blur-sm">
												<CardHeader>
													<CardTitle className="text-xl md:text-2xl font-bold flex items-center gap-2">
														<ExternalLink className="h-5 w-5 text-primary" />
														{t('modalTechnologies')}
													</CardTitle>
												</CardHeader>
												<CardContent>
													<div className="flex flex-wrap gap-3">
														{product.details.technologies.map((tech, index) => (
															<motion.div
																key={index}
																custom={index}
																variants={techVariants}
																initial="hidden"
																animate="visible"
																whileHover={{ scale: 1.1, y: -2 }}
																className="cursor-default"
															>
																<Badge
																	variant="outline"
																	className="px-4 py-2 text-sm font-medium border-2 hover:border-primary hover:bg-primary/10 transition-all duration-200"
																>
																	{tech}
																</Badge>
															</motion.div>
														))}
													</div>
												</CardContent>
											</Card>
										</motion.div>
									)}

									{/* Try Demo Now Button */}
									{product.demoUrl && (
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
													href={product.demoUrl}
													target="_blank"
													rel="noopener noreferrer"
													whileHover={{ scale: 1.05, y: -2 }}
													whileTap={{ scale: 0.98 }}
													className="relative z-10 flex items-center gap-2"
												>
													<span>{t('tryDemoNow')}</span>
													<ExternalLink className="h-5 w-5" />
													{/* Shine Effect */}
													<motion.div
														className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"
														style={{ width: '100%' }}
													/>
												</motion.a>
											</Button>
										</motion.div>
									)}
								</div>
							)}
						</motion.div>
					)}
				</AnimatePresence>
			</DialogContent>
		</Dialog>
	);
});

ProductDetailModal.displayName = 'ProductDetailModal';

export default ProductDetailModal;
