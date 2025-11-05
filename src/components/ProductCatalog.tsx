import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Separator } from '@/components/ui/separator';
import { products } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Product } from '@/types';
import { Sparkles } from 'lucide-react';
import { memo, useMemo, useCallback } from 'react';

interface ProductCatalogProps {
	onProductSelect: (product: Product) => void;
}

const ProductCatalog = memo(({ onProductSelect }: ProductCatalogProps) => {
	const { t } = useLanguage();
	
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

	const handleProductClick = useCallback((product: Product) => {
		onProductSelect(product);
	}, [onProductSelect]);

	return (
		<section id="products" className="py-24 px-4 relative overflow-hidden">
			{/* Background Decoration dengan warna lebih menarik */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-60" />
			
			<div className="container mx-auto relative z-10">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
					className="text-center mb-20"
				>
					{/* Decorative Icon */}
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="flex justify-center mb-6"
					>
						<div className="relative">
							<Sparkles className="h-10 w-10 text-primary" />
							<motion.div
								className="absolute inset-0 bg-primary/20 blur-xl rounded-full"
								animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.3, 0.5] }}
								transition={{ duration: 3, repeat: Infinity }}
							/>
						</div>
					</motion.div>

					<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
						<span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
							{t('productsTitle')}
						</span>
					</h2>
					
					<div className="flex justify-center items-center gap-4 mb-4">
						<Separator className="w-16 h-1 bg-gradient-to-r from-transparent to-primary rounded-full" />
						<motion.div
							className="h-2 w-2 rounded-full bg-primary"
							animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
							transition={{ duration: 2, repeat: Infinity }}
						/>
						<Separator className="w-16 h-1 bg-gradient-to-l from-transparent to-primary rounded-full" />
					</div>
					
					<motion.p
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ delay: 0.4, duration: 0.6 }}
						className="text-muted-foreground dark:text-muted-foreground text-lg max-w-2xl mx-auto"
					>
						{t('productsSubtitle')}
					</motion.p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
				>
					{products.map((product, index) => (
						<ProductCard
							key={product.id}
							product={product}
							onClick={() => handleProductClick(product)}
							index={index}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
});

ProductCatalog.displayName = 'ProductCatalog';

export default ProductCatalog;
