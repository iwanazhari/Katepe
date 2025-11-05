import { motion } from 'framer-motion';
import { useState, memo, useMemo, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { useProductTranslation } from '@/utils/productTranslations';
import type { Product } from '@/types';
import { cn } from '@/lib/utils';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ProductCardProps {
	product: Product;
	onClick: () => void;
	index: number;
}

const ProductCard = memo(({ product, onClick, index }: ProductCardProps) => {
	const [isHovered, setIsHovered] = useState(false);
	const { t } = useLanguage();
	const { getProductTranslation } = useProductTranslation();
	const translation = useMemo(() => getProductTranslation(product.id), [getProductTranslation, product.id]);

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
			y: -6,
			scale: 1.01,
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
					'hover:shadow-2xl hover:shadow-primary/30 border-2 border-border/80',
					'hover:border-primary/50 bg-card dark:bg-card/50 backdrop-blur-sm',
					'flex flex-col h-full'
				)}
				onClick={handleClick}
			>
				{/* Shine Effect on Hover */}
				<motion.div
					className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none z-10"
					initial={{ x: '-100%' }}
					whileHover={{ x: '100%' }}
					transition={{ duration: 0.6 }}
					style={{
						background:
							'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
					}}
				/>

				{/* Gradient Overlay */}
				<div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-[1]" />

				<div className="relative h-64 overflow-hidden flex-shrink-0">
					{product.status === 'coming-soon' && (
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							className="absolute inset-0 z-20 flex items-center justify-center backdrop-blur-[2px] bg-black/20 dark:bg-black/30"
						>
							<Badge
								variant="secondary"
								className={cn(
									'text-sm md:text-base font-bold px-4 py-2 md:px-5 md:py-2.5 tracking-wide uppercase',
									'bg-primary/95 text-primary-foreground border-2 border-primary',
									'shadow-2xl shadow-primary/40 backdrop-blur-sm'
								)}
							>
								{t('comingSoon')}
							</Badge>
						</motion.div>
					)}
					<motion.img
						src={product.image}
						alt={translation?.title || product.title}
						className="w-full h-full object-cover"
						animate={{
							scale: isHovered ? 1.12 : 1,
							filter: `brightness(${isHovered ? 1.15 : 1}) saturate(${isHovered ? 1.08 : 1})`,
						}}
						transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
						loading="lazy"
						decoding="async"
						fetchPriority="low"
					/>
					{/* Overlay Gradient */}
					<div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent z-[1]" />
				</div>

				<CardHeader className="relative z-10 flex-shrink-0">
					<CardTitle className="group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300 text-xl font-bold mb-2 text-foreground">
						{translation?.title || product.title}
					</CardTitle>
					{product.status === 'available' && (
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: index * 0.1 + 0.3 }}
							className="mt-2"
						>
							<Badge
								variant="outline"
								className="text-xs px-2 py-0.5 bg-primary/10 dark:bg-primary/10 border-primary/30 text-primary dark:text-primary"
							>
								<Sparkles className="h-3 w-3 mr-1" />
								{t('available')}
							</Badge>
						</motion.div>
					)}
				</CardHeader>

				<CardContent className="relative z-10 flex-grow flex flex-col justify-between">
					<p className="text-muted-foreground text-sm mb-6 line-clamp-2 leading-relaxed min-h-[3rem]">
						{translation?.description || product.description}
					</p>
					<Button
						variant="outline"
						className="w-full group/btn relative overflow-hidden border-2 hover:border-primary hover:bg-primary/5 dark:hover:bg-primary/10 transition-all duration-300 text-foreground hover:text-foreground dark:text-foreground dark:hover:text-foreground font-medium"
					>
						<span className="relative z-10 flex items-center justify-center gap-2">
							{t('learnMore')}
							<motion.span
								initial={{ x: -5, opacity: 0 }}
								whileHover={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.2 }}
								className="opacity-0 group-hover/btn:opacity-100"
							>
								<ArrowRight className="h-4 w-4" />
							</motion.span>
						</span>
						<motion.div
							className="absolute inset-0 bg-primary/10 dark:bg-primary/20"
							initial={{ scaleX: 0 }}
							whileHover={{ scaleX: 1 }}
							transition={{ duration: 0.3 }}
							style={{ originX: 0 }}
						/>
					</Button>
				</CardContent>
			</Card>
		</motion.div>
	);
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;
