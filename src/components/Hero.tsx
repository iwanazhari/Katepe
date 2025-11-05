import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Zap } from 'lucide-react';
import {  memo } from 'react';

const Hero = memo(() => {
	const { t } = useLanguage();

	const titleVariants = {
		hidden: { opacity: 0, y: 30, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 1.2,
				ease: [0.16, 1, 0.3, 1],
				delay: 0.2,
			},
		},
	};

	const subtitleVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1.2,
				ease: [0.16, 1, 0.3, 1],
				delay: 0.5,
			},
		},
	};

	const buttonVariants = {
		hidden: { opacity: 0, scale: 0.9, y: 15 },
		visible: {
			opacity: 1,
			scale: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.16, 1, 0.3, 1],
				delay: 0.8,
			},
		},
	};

	const imageVariants = {
		hidden: { opacity: 0, scale: 1.1, x: 50 },
		visible: {
			opacity: 1,
			scale: 1,
			x: 0,
			transition: {
				duration: 1.5,
				ease: [0.16, 1, 0.3, 1],
				delay: 0.3,
			},
		},
	};

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background"
		>
			{/* Background Pattern */}
			<div className="absolute inset-0 z-0 overflow-hidden">
				{/* Animated grid pattern */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:40px_40px] opacity-30 dark:opacity-20 animate-pattern-move"></div>
				
				{/* Gradient overlays */}
				<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
			</div>

			<div className="relative z-10 container mx-auto px-4">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left Side - Car Image */}
					<motion.div
						variants={imageVariants}
						initial="hidden"
						animate="visible"
						className="relative"
					>
						{/* Car Image Container */}
						<div className="relative">
							{/* Glow effect behind car */}
							<motion.div
								className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"
								animate={{
									scale: [1, 1.2, 1],
									opacity: [0.3, 0.5, 0.3],
								}}
								transition={{
									duration: 4,
									repeat: Infinity,
									ease: 'easeInOut',
								}}
							/>
							
							{/* Car Image */}
							<motion.div
								className="relative"
								whileHover={{ scale: 1.02 }}
								transition={{ duration: 0.3 }}
							>
								<img
									src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&h=800&fit=crop&q=90"
									alt="Electric Car"
									className="w-full h-auto rounded-lg shadow-2xl"
									loading="eager"
								/>
								
								{/* Overlay with statistics */}
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 1, duration: 0.8 }}
									className="absolute bottom-6 right-6 bg-background/70 backdrop-blur-md rounded-lg p-4 border border-border/10"
								>
									<p className="text-4xl font-bold text-foreground mb-1">2.500+</p>
									<p className="text-sm text-muted-foreground">{t('heroSupercharges')}</p>
									<p className="text-sm text-muted-foreground">{t('heroSuperchargesSub')}</p>
								</motion.div>
							</motion.div>
						</div>
					</motion.div>

					{/* Right Side - Content */}
					<div className="space-y-8">
						{/* Main Title */}
						<motion.div
							variants={titleVariants}
							initial="hidden"
							animate="visible"
							className="space-y-4"
						>
							<h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-foreground">
								<span className="block">{t('heroTitleLine1')}</span>
								<span className="block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
									{t('heroTitleLine2')}
								</span>
							</h1>
						</motion.div>

						{/* Subtitle */}
						<motion.p
							variants={subtitleVariants}
							initial="hidden"
							animate="visible"
							className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl"
						>
							{t('heroSubtitleFull')}
						</motion.p>

						{/* Electric Badge */}
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.6, duration: 0.5 }}
							className="flex items-center gap-2"
						>
							<motion.div
								animate={{ rotate: [0, 360] }}
								transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
							>
								<Zap className="h-5 w-5 text-primary" />
							</motion.div>
							<span className="text-foreground font-medium">{t('heroElectricCar')}</span>
						</motion.div>

						{/* CTA Button */}
						<motion.div
							variants={buttonVariants}
							initial="hidden"
							animate="visible"
						>
							<Button
								asChild
								size="lg"
								className="group relative text-lg px-8 py-7 bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
							>
								<a
									href="#cars"
									className="relative z-10 flex items-center gap-2"
								>
									<span>{t('heroKnowMore')}</span>
									<ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
								</a>
							</Button>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1.2, duration: 0.6 }}
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{
						duration: 2,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
					className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center"
				>
					<motion.div
						animate={{ y: [0, 12, 0] }}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: 'easeInOut',
						}}
						className="w-1.5 h-3 bg-primary rounded-full mt-2"
					/>
				</motion.div>
			</motion.div>
		</section>
	);
});

Hero.displayName = 'Hero';

export default Hero;
