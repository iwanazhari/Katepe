import type { Car } from '../types';

// Import images from assets folder
// @ts-ignore - Vite handles image imports
import taycanImage from '../assets/taycan turbo s.jpg';
// @ts-ignore - Vite handles image imports
import teslaModelXImage from '../assets/tesla model x.jpg';
// @ts-ignore - Vite handles image imports
import teslaModel3Image from '../assets/tesla model 3.jpg';
// @ts-ignore - Vite handles image imports
import aeronGTImage from '../assets/aeron gt.jpg';
// @ts-ignore - Vite handles image imports
import caymanImage from '../assets/cayman.jpg';
// @ts-ignore - Vite handles image imports
import bmwI4Image from '../assets/bmw i4 m50.jpg';

export const cars: Car[] = [
	{
		id: 'porsche-taycan-2023',
		brand: 'Porsche',
		model: 'Taycan Turbo S',
		year: 2023,
		price: 2800000000, // 2.8 Miliar Rupiah
		mileage: 5000,
		fuel: 'electric',
		transmission: 'automatic',
		color: 'White',
		description: 'Porsche Taycan Turbo S - The ultimate electric sports car with incredible performance and cutting-edge technology.',
		image: taycanImage,
		status: 'available',
		location: 'Jakarta Selatan',
		contactPhone: '+6285117588770',
		details: {
			features: [
				{
					title: '800V Turbo Charging',
					description: 'Ultra-fast charging capability with 800V architecture, charging from 5% to 80% in just 22.5 minutes.'
				},
				{
					title: 'Range 450+ Km',
					description: 'Impressive range of over 450 km on a single charge, perfect for long-distance travel.'
				},
				{
					title: 'Futuristic Design',
					description: 'Cutting-edge design with aerodynamic optimization and premium materials throughout.'
				},
				{
					title: 'Advanced Technology',
					description: 'Latest Porsche technology including adaptive cruise control, lane keeping assist, and premium sound system.'
				}
			],
			overview: 'The Porsche Taycan Turbo S represents the pinnacle of electric vehicle engineering. With blistering acceleration, exceptional range, and the unmistakable Porsche driving experience.',
			specifications: {
				engine: 'Dual Electric Motors',
				power: '750 HP',
				torque: '1050 Nm',
				seats: 4,
				doors: 4,
				acceleration: '2.8sec',
				topSpeed: '260 Km/h',
				range: 450,
				battery: '93.4 kWh'
			}
		}
	},
	{
		id: 'tesla-model-x-2023',
		brand: 'Tesla',
		model: 'Model X',
		year: 2023,
		price: 1500000000, // 1.5 Miliar Rupiah
		mileage: 8000,
		fuel: 'electric',
		transmission: 'automatic',
		color: 'White',
		description: 'Tesla Model X - Revolutionary electric SUV with falcon-wing doors and unmatched performance.',
		image: teslaModelXImage,
		status: 'available',
		location: 'Jakarta Pusat',
		contactPhone: '+6285117588770',
		details: {
			features: [
				{
					title: 'Falcon Wing Doors',
					description: 'Signature falcon-wing doors provide easy access and stunning visual appeal.'
				},
				{
					title: 'Supercharging Network',
					description: 'Access to Tesla\'s extensive Supercharger network for convenient long-distance travel.'
				},
				{
					title: 'Autopilot Ready',
					description: 'Advanced Autopilot system with full self-driving capability (when regulations permit).'
				},
				{
					title: '7-Seat Configuration',
					description: 'Spacious interior with optional 7-seat configuration for family comfort.'
				}
			],
			overview: 'The Tesla Model X combines the utility of an SUV with the performance of a sports car. Experience the future of transportation.',
			specifications: {
				engine: 'Dual Electric Motors',
				power: '670 HP',
				torque: '840 Nm',
				seats: 7,
				doors: 5,
				acceleration: '3.1sec',
				topSpeed: '250 Km/h',
				range: 576,
				battery: '100 kWh'
			}
		}
	},
	{
		id: 'tesla-model-3-2023',
		brand: 'Tesla',
		model: 'Model 3',
		year: 2023,
		price: 700000000, // 700 Juta Rupiah
		mileage: 12000,
		fuel: 'electric',
		transmission: 'automatic',
		color: 'Red',
		description: 'Tesla Model 3 - The most popular electric car in the world, combining affordability with exceptional performance.',
		image: teslaModel3Image,
		status: 'available',
		location: 'Bekasi',
		contactPhone: '+6285117588770',
		details: {
			features: [
				{
					title: 'Minimalist Interior',
					description: 'Clean, minimalist interior with a 15-inch touchscreen controlling all vehicle functions.'
				},
				{
					title: 'Superior Range',
					description: 'Excellent range with efficient battery technology and regenerative braking.'
				},
				{
					title: 'Over-the-Air Updates',
					description: 'Regular software updates improve performance and add new features over time.'
				},
				{
					title: 'Safety First',
					description: '5-star safety rating with advanced safety features and autopilot capabilities.'
				}
			],
			overview: 'The Tesla Model 3 has revolutionized the electric vehicle market, making sustainable transportation accessible to everyone.',
			specifications: {
				engine: 'Dual Electric Motors',
				power: '450 HP',
				torque: '639 Nm',
				seats: 5,
				doors: 4,
				acceleration: '3.3sec',
				topSpeed: '261 Km/h',
				range: 629,
				battery: '75 kWh'
			}
		}
	},
	{
		id: 'audi-e-tron-2023',
		brand: 'Audi',
		model: 'E-tron GT',
		year: 2023,
		price: 2800000000, // 2.8 Miliar Rupiah
		mileage: 6000,
		fuel: 'electric',
		transmission: 'automatic',
		color: 'Grey',
		description: 'Audi E-tron GT - Premium electric grand tourer with stunning design and exceptional performance.',
		image: aeronGTImage,
		status: 'available',
		location: 'Jakarta Selatan',
		contactPhone: '+6285117588770',
		details: {
			features: [
				{
					title: 'Premium Craftsmanship',
					description: 'Luxurious interior with premium materials and attention to detail throughout.'
				},
				{
					title: 'Quattro All-Wheel Drive',
					description: 'Audi\'s legendary quattro all-wheel drive system adapted for electric powertrain.'
				},
				{
					title: 'Fast Charging',
					description: 'Support for 270 kW fast charging, adding range quickly on long journeys.'
				},
				{
					title: 'Dynamic Performance',
					description: 'Exceptional handling and performance with instant torque delivery.'
				}
			],
			overview: 'The Audi E-tron GT combines Audi\'s design language with cutting-edge electric technology for an unparalleled driving experience.',
			specifications: {
				engine: 'Dual Electric Motors',
				power: '637 HP',
				torque: '830 Nm',
				seats: 4,
				doors: 4,
				acceleration: '3.3sec',
				topSpeed: '245 Km/h',
				range: 488,
				battery: '93.4 kWh'
			}
		}
	},
	{
		id: 'porsche-cayman-2023',
		brand: 'Porsche',
		model: 'Cayman',
		year: 2023,
		price: 2000000000, // 2 Miliar Rupiah
		mileage: 3000,
		fuel: 'petrol',
		transmission: 'automatic',
		color: 'White',
		description: 'Porsche Cayman - Pure sports car essence with mid-engine layout and exceptional driving dynamics.',
		image: caymanImage,
		status: 'available',
		location: 'Jakarta Pusat',
		contactPhone: '+6285117588770',
		details: {
			features: [
				{
					title: 'Mid-Engine Design',
					description: 'Perfect weight distribution with mid-engine layout for exceptional handling.'
				},
				{
					title: 'Precision Engineering',
					description: 'Porsche\'s legendary engineering ensures exceptional performance and reliability.'
				},
				{
					title: 'Premium Interior',
					description: 'Driver-focused cockpit with premium materials and advanced infotainment.'
				},
				{
					title: 'Track-Ready',
					description: 'Optional Sport Chrono package for track enthusiasts.'
				}
			],
			overview: 'The Porsche Cayman delivers pure driving pleasure with its mid-engine layout and exceptional handling characteristics.',
			specifications: {
				engine: '4.0L Flat-6',
				power: '400 HP',
				torque: '450 Nm',
				seats: 2,
				doors: 2,
				acceleration: '4.0sec',
				topSpeed: '293 Km/h'
			}
		}
	},
	{
		id: 'bmw-i4-2023',
		brand: 'BMW',
		model: 'i4 M50',
		year: 2023,
		price: 1200000000, // 1.2 Miliar Rupiah
		mileage: 7000,
		fuel: 'electric',
		transmission: 'automatic',
		color: 'Blue',
		description: 'BMW i4 M50 - High-performance electric sedan with BMW M engineering and exceptional range.',
		image: bmwI4Image,
		status: 'available',
		location: 'Tangerang',
		contactPhone: '+6285117588770',
		details: {
			features: [
				{
					title: 'M Performance',
					description: 'BMW M engineering brings track-proven performance to electric mobility.'
				},
				{
					title: 'iDrive 8',
					description: 'Latest BMW iDrive 8 infotainment system with curved display and advanced features.'
				},
				{
					title: 'Rapid Charging',
					description: 'Support for 200 kW DC fast charging for quick charging stops.'
				},
				{
					title: 'Dynamic Handling',
					description: 'Precise steering and adaptive suspension for exceptional driving dynamics.'
				}
			],
			overview: 'The BMW i4 M50 combines BMW\'s sporting heritage with cutting-edge electric technology for an exhilarating driving experience.',
			specifications: {
				engine: 'Dual Electric Motors',
				power: '544 HP',
				torque: '795 Nm',
				seats: 5,
				doors: 4,
				acceleration: '3.9sec',
				topSpeed: '225 Km/h',
				range: 510,
				battery: '83.9 kWh'
			}
		}
	}
];

// Brand list for filtering
export const carBrands = ['All', 'Porsche', 'Tesla', 'Audi', 'BMW'] as const;
