export interface Car {
	id: string;
	brand: string;
	model: string;
	year: number;
	price: number;
	mileage: number;
	fuel: 'petrol' | 'diesel' | 'electric' | 'hybrid';
	transmission: 'manual' | 'automatic' | 'cvt';
	color: string;
	description: string;
	image: string;
	status: 'available' | 'sold';
	location: string;
	contactPhone?: string;
	details?: {
		features: string[] | Array<{ title: string; description: string }>;
		overview: string;
		specifications?: {
			engine?: string;
			power?: string;
			torque?: string;
			seats?: number;
			doors?: number;
			acceleration?: string; // 0-100 km/h in seconds
			topSpeed?: string; // Top speed in km/h
			range?: number; // Range in km (for electric cars)
			battery?: string; // Battery capacity
		};
	};
}

