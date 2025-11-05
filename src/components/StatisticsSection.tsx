import { motion } from 'framer-motion';
import { Gauge, Thermometer, Battery } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { memo, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const StatisticsSection = memo(() => {
	const { t } = useLanguage();
	
	const stats = useMemo(() => [
		{
			icon: Gauge,
			value: '873',
			labelKey: 'statsMileage',
			color: 'text-primary',
		},
		{
			icon: Thermometer,
			value: '24°',
			labelKey: 'statsTemperature',
			color: 'text-primary',
		},
		{
			icon: Battery,
			value: '94%',
			labelKey: 'statsBattery',
			color: 'text-primary',
		},
	], []);

	const containerVariants = useMemo(() => ({
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	}), []);

	const itemVariants = useMemo(() => ({
		hidden: { opacity: 0, y: 30, scale: 0.9 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	}), []);

	return (
		<section className="py-16 px-4 bg-background relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10 dark:opacity-5">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:40px_40px]"></div>
			</div>

			<div className="container mx-auto relative z-10">
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-50px' }}
					className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
				>
					{stats.map((stat, index) => {
						const Icon = stat.icon;
						return (
							<motion.div
								key={stat.labelKey}
								variants={itemVariants}
								whileHover={{ scale: 1.05, y: -5 }}
								transition={{ duration: 0.3 }}
							>
								<Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
									<CardContent className="p-8 text-center">
										<motion.div
											initial={{ scale: 0 }}
											animate={{ scale: 1 }}
											transition={{
												delay: 0.5 + index * 0.2,
												type: 'spring',
												stiffness: 200,
												damping: 15,
											}}
											className="mb-4 flex justify-center"
										>
											<Icon className={`h-10 w-10 ${stat.color}`} />
										</motion.div>
										<motion.p
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.7 + index * 0.2 }}
											className="text-4xl font-bold text-foreground mb-2"
										>
											{stat.value}
										</motion.p>
										<motion.p
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ delay: 0.9 + index * 0.2 }}
											className="text-sm text-muted-foreground uppercase tracking-wider"
										>
											{t(stat.labelKey)}
										</motion.p>
									</CardContent>
								</Card>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
});

StatisticsSection.displayName = 'StatisticsSection';

export default StatisticsSection;

