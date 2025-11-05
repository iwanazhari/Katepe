import type { Product } from '../types';

// @ts-ignore
import freightImage from '../lib/global-shipping-logistics-sunset-with-airplane-trucks.jpg';

export const products: Product[] = [
	{
		id: 'cash-management',
		title: 'Cash Management System',
		description: 'Streamline your financial operations with our comprehensive cash management solution.',
		image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
		status: 'available',
		demoUrl: 'https://cms.katepe.com/login?next=/',
		details: {
			features: [
				{
					title: 'Reimbursement Management',
					description: 'Employees can easily submit reimbursement requests with digital receipts and supporting documents. The system tracks approval status.'
				},
				{
					title: 'Cash Advance Request',
					description: 'Simplify the process of requesting, approving, and settling cash advances. Automated workflows ensure timely approval.'
				},
				{
					title: 'Approval Workflow',
					description: 'Customizable multi-level approval hierarchy to align with company policies and financial authority levels.'
				},
				{
					title: 'Expense Tracking',
					description: 'Monitor cash flow, expenditures, and outstanding advances with detailed reports and dashboards.'
				}
			],
			overview: 'Streamline your financial operations with our comprehensive cash management solution.',
		}
	},
	{
		id: 'warehouse-management',
		title: 'Warehouse Management System',
		description: 'Optimize your inventory management with our advanced warehouse solution.',
		image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&q=80',
		status: 'available',
		demoUrl: 'https://stock.katepe.com/login',
		details: {
			features: [
				{
					title: 'Real-time Inventory Tracking',
					description: 'Monitor stock levels, movements, and locations in real-time for better inventory control.'
				},
				{
					title: 'Automated Stock Management',
					description: 'Streamline stock operations with automated reordering and inventory optimization.'
				},
				{
					title: 'Barcode & QR Integration',
					description: 'Efficient item tracking and management using barcode and QR code technology.'
				},
				{
					title: 'Advanced Analytics',
					description: 'Comprehensive reporting and analytics for better inventory decision making.'
				}
			],
			overview: 'Optimize your inventory management with our advanced warehouse solution.',
		}
	},
	{
		id: 'hr-system',
		title: 'Human Resource Information System',
		description: 'Transform your HR operations with our comprehensive management solution.',
		image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&q=80',
		status: 'available',
		demoUrl: 'https://hris.katepe.com/hris/login',
		details: {
			features: [
				{
					title: 'Employee Management',
					description: 'Complete employee lifecycle management from recruitment to retirement.'
				},
				{
					title: 'Performance Tracking',
					description: 'Comprehensive performance evaluation and goal management system.'
				},
				{
					title: 'Payroll Integration',
					description: 'Seamless payroll processing with automated calculations and tax management.'
				},
				{
					title: 'Overtime Request Management',
					description: 'Allow employees to submit overtime requests with a clear approval workflow, linked directly to attendance and payroll systems.'
				}
			],
			overview: 'Transform your HR operations with our comprehensive management solution.',
		}
	},
	{
		id: 'courier-system',
		title: 'Courier System',
		description: 'courier service or a business managing its own small-package deliveries. It\'s designed to facilitate the rapid, secure, and often localized transportation of parcels, documents, and goods from a sender to a recipient.',
		image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop&q=80',
		status: 'available',
		demoUrl: 'https://xinmengyang.katepe.com/login/?next=/dashboard/',
		details: {
			features: [
				{
					title: 'Order Management',
					description: 'Easy entry and management of new delivery requests, including pickup and delivery addresses, package details.'
				},
				{
					title: 'Real-time Tracking and Visibility',
					description: 'Efficient overtime calculation and approval workflow for better resource management.'
				},
				{
					title: 'Driver Management & Mobile App',
					description: 'A dedicated mobile application for drivers to receive assignments, view route details, navigate, update delivery status.'
				},
				{
					title: 'Customer & User Management',
					description: 'web-based portal for customers to book deliveries, track orders, view past history, and manage their account.'
				}
			],
			overview: 'courier service or a business managing its own small-package deliveries. It\'s designed to facilitate the rapid, secure, and often localized transportation of parcels, documents, and goods from a sender to a recipient.',
		}
	},
	{
		id: 'freight-management',
		title: 'Freight Management System',
		description: 'Streamline and automate various aspects of the shipping and logistics process',
		image: freightImage,
		status: 'coming-soon',
		details: {
			features: [
				{
					title: 'Order Management',
					description: 'Integrating with order systems to capture shipping details and create shipments.'
				},
				{
					title: 'Real-time Tracking and Visibility',
					description: 'Providing updates on shipment status, location, and estimated time of arrival.'
				},
				{
					title: 'Proactive Notifications',
					description: 'Sends automated alerts (email/SMS) to customers or relevant parties in case of delays, route changes, or other unexpected events.'
				},
				{
					title: 'Electronic Bill of Lading (eBOL)',
					description: 'Replaces paper BOLs with digital versions that can be shared and signed electronically, speeding up processes and reducing errors.'
				}
			],
			overview: 'Streamline and automate various aspects of the shipping and logistics process',
		}
	},
	{
		id: 'integrated-management',
		title: 'Integrated Management System',
		description: 'Integrated Management System',
		image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
		status: 'coming-soon',
		details: {
			features: [
				{
					title: 'Unified Dashboard',
					description: 'Centralized view of all business operations and key performance indicators in one comprehensive dashboard.'
				},
				{
					title: 'Cross-System Integration',
					description: 'Seamless integration between different management systems for streamlined workflows and data consistency.'
				},
				{
					title: 'Advanced Reporting',
					description: 'Comprehensive reporting and analytics across all integrated systems for better decision-making.'
				},
				{
					title: 'Automated Workflows',
					description: 'Customizable automated workflows that connect different systems and processes for increased efficiency.'
				}
			],
			overview: 'A comprehensive integrated management system that combines multiple business functions into a unified platform.',
		}
	}
];
