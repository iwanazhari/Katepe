import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useMemo, memo } from 'react';

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

	const floatingElements = useMemo(() => Array.from({ length: 10 }).map((_, i) => {
		const colors = ['bg-primary/12', 'bg-purple-500/12', 'bg-cyan-500/10', 'bg-pink-500/8'];
		const color = colors[i % colors.length];
		return (
			<motion.div
				key={i}
				className={`absolute rounded-full ${color} blur-3xl`}
				style={{
					width: `${80 + Math.random() * 120}px`,
					height: `${80 + Math.random() * 120}px`,
					left: `${Math.random() * 100}%`,
					top: `${Math.random() * 100}%`,
				}}
				animate={{
					y: [0, -40, 0],
					x: [0, Math.random() * 30 - 15, 0],
					scale: [1, 1.2, 1],
					opacity: [0.15, 0.35, 0.15],
				}}
				transition={{
					duration: 5 + Math.random() * 5,
					repeat: Infinity,
					delay: Math.random() * 3,
					ease: 'easeInOut',
				}}
			/>
		);
	}), []);

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
		>
			{/* Dynamic & Attractive Background */}
			<div className="absolute inset-0 z-0 overflow-hidden">
				{/* Vibrant multi-color gradient background */}
				<div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-purple-500/20 to-pink-500/10 dark:from-primary/40 dark:via-purple-500/30 dark:to-pink-500/15"></div>
				
				{/* Additional cyan layer */}
				<div className="absolute inset-0 bg-gradient-to-tl from-transparent via-cyan-500/15 to-transparent dark:from-transparent dark:via-cyan-500/20 dark:to-transparent"></div>
				
				{/* Animated gradient overlay yang bergerak */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/15 to-pink-500/10 dark:from-primary/30 dark:via-purple-500/20 dark:to-pink-500/15"
					animate={{
						backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
						opacity: [0.6, 0.8, 0.6],
					}}
					transition={{
						duration: 12,
						repeat: Infinity,
						ease: 'linear',
					}}
					style={{
						backgroundSize: '200% 200%',
					}}
				/>
				
				{/* Animated radial gradients */}
				<motion.div
					className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
					animate={{
						x: [0, 100, 0],
						y: [0, 50, 0],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 8,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
				/>
				<motion.div
					className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
					animate={{
						x: [0, -80, 0],
						y: [0, -60, 0],
						scale: [1, 1.3, 1],
					}}
					transition={{
						duration: 10,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 1,
					}}
				/>
				<motion.div
					className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl"
					animate={{
						x: [0, -50, 0],
						y: [0, 30, 0],
						scale: [1, 1.15, 1],
					}}
					transition={{
						duration: 9,
						repeat: Infinity,
						ease: 'easeInOut',
						delay: 2,
					}}
				/>
				
				{/* Floating Elements dengan lebih banyak variasi */}
				{floatingElements}
				
				{/* Animated grid pattern dengan efek glow */}
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#4F46E515_1px,transparent_1px),linear-gradient(to_bottom,#4F46E515_1px,transparent_1px)] bg-[size:40px_40px] dark:bg-[linear-gradient(to_right,#6366F125_1px,transparent_1px),linear-gradient(to_bottom,#6366F125_1px,transparent_1px)]"></div>
				
				{/* Additional decorative dots pattern */}
				<div
					className="absolute inset-0 opacity-[0.08] dark:opacity-[0.12]"
					style={{
						backgroundImage: `radial-gradient(circle, #4F46E5 1px, transparent 1px)`,
						backgroundSize: '30px 30px',
					}}
				></div>
			</div>

			<div className="relative z-10 container mx-auto px-4 text-center">
				{/* Decorative Sparkle Icons */}
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="flex justify-center mb-6"
				>
					<Sparkles className="h-8 w-8 text-primary animate-pulse" />
				</motion.div>

				{/* Main Title dengan animasi yang lebih smooth - mengikuti contoh gambar 4 */}
				<motion.h1
					variants={titleVariants}
					initial="hidden"
					animate="visible"
					className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
				>
					<span className="text-white dark:text-white">
						{t('heroTitle')}
					</span>
				</motion.h1>

				{/* Subtitle dengan animasi bertahap */}
				<motion.p
					variants={subtitleVariants}
					initial="hidden"
					animate="visible"
					className="text-lg md:text-xl lg:text-2xl text-muted-foreground dark:text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed font-light"
				>
					{t('heroSubtitle')}
				</motion.p>

				{/* Enhanced CTA Button */}
				<motion.div
					variants={buttonVariants}
					initial="hidden"
					animate="visible"
					className="flex flex-col sm:flex-row items-center justify-center gap-4"
				>
					<Button
						asChild
						size="lg"
						className="group relative text-lg px-8 py-7 shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-300"
					>
						<a
							href="#products"
							className="relative z-10 flex items-center gap-2"
						>
							<span>{t('heroCTA')}</span>
							<ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
						</a>
					</Button>
				</motion.div>

				{/* Scroll Indicator */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1, duration: 0.6 }}
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
			</div>
		</section>
	);
});

Hero.displayName = 'Hero';

export default Hero;
