import { useState } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProductCatalog from '../components/ProductCatalog';
import Footer from '../components/Footer';
import ProductDetailModal from '../components/ProductDetailModal';
import type { Product } from '../types';

const HomePage = () => {
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

	return (
		<ThemeProvider>
			<LanguageProvider>
				<div className="min-h-screen bg-background text-foreground transition-colors duration-300">
					<Header />
					<main>
						<Hero />
						<ProductCatalog
							onProductSelect={(product) => setSelectedProduct(product)}
						/>
					</main>
					<Footer />
					{selectedProduct && (
						<ProductDetailModal
							product={selectedProduct}
							open={!!selectedProduct}
							onOpenChange={(open) => {
								if (!open) setSelectedProduct(null);
							}}
						/>
					)}
				</div>
			</LanguageProvider>
		</ThemeProvider>
	);
};

export default HomePage;

