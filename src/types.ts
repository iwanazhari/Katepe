export interface Product {
	id: string;
	title: string;
	description: string;
	image: string;
	status: 'available' | 'coming-soon';
	demoUrl?: string;
	details?: {
		features: string[] | Array<{ title: string; description: string }>;
		overview: string;
		technologies?: string[];
	};
}

