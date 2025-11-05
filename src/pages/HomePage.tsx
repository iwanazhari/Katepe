import { useState } from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '../components/Header';
import Hero from '../components/Hero';
import StatisticsSection from '../components/StatisticsSection';
import CarCatalog from '../components/CarCatalog';
import SubscribeSection from '../components/SubscribeSection';
import Footer from '../components/Footer';
import CarDetailModal from '../components/CarDetailModal';
import type { Car } from '../types';

const HomePage = () => {
	const [selectedCar, setSelectedCar] = useState<Car | null>(null);

	return (
		<ThemeProvider>
			<LanguageProvider>
				<div className="min-h-screen bg-background text-foreground transition-colors duration-300">
					<Header />
					<main>
						<Hero />
						<StatisticsSection />
						<CarCatalog
							onCarSelect={(car) => setSelectedCar(car)}
						/>
						<SubscribeSection />
					</main>
					<Footer />
					{selectedCar && (
						<CarDetailModal
							car={selectedCar}
							open={!!selectedCar}
							onOpenChange={(open) => {
								if (!open) setSelectedCar(null);
							}}
						/>
					)}
				</div>
			</LanguageProvider>
		</ThemeProvider>
	);
};

export default HomePage;

