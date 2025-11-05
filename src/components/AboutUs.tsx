import { motion } from 'framer-motion';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from './Header';
import Footer from './Footer';
import { memo, useMemo } from 'react';

const AboutUsContent = memo(() => {
	const { t } = useLanguage();

	const titleContainerVariants = useMemo(() => ({
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.15,
				delayChildren: 0.3,
			},
		},
	}), []);

	const titleWordVariants = useMemo(() => ({
		hidden: { opacity: 0, y: 20, filter: 'blur(10px)', scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			filter: 'blur(0px)',
			scale: 1,
			transition: {
				duration: 0.9,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	}), []);

	const redSquareVariants = useMemo(() => ({
		hidden: { opacity: 0, scale: 0, rotate: -180 },
		visible: {
			opacity: 1,
			scale: 1,
			rotate: 0,
			transition: {
				duration: 0.6,
				ease: [0.34, 1.56, 0.64, 1],
				delay: 0.8,
			},
		},
	}), []);

	const paragraphVariants = useMemo(() => ({
		hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
		visible: {
			opacity: 1,
			y: 0,
			filter: 'blur(0px)',
			transition: {
				duration: 1.2,
				ease: [0.16, 1, 0.3, 1],
			},
		},
	}), []);

	const firstParagraphVariants = useMemo(() => ({
		hidden: { opacity: 0, y: 50, filter: 'blur(10px)' },
		visible: {
			opacity: 1,
			y: 0,
			filter: 'blur(0px)',
			transition: {
				duration: 1.4,
				ease: [0.16, 1, 0.3, 1],
				delay: 1.2,
			},
		},
	}), []);

	const containerVariants = useMemo(() => ({
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.25,
				delayChildren: 0.5,
			},
		},
	}), []);

	return (
		<div className="min-h-screen bg-background text-foreground transition-colors duration-300">
			<Header />
			
			{/* Hero Section with Title and First Paragraph */}
			<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-16">
				{/* Background dengan gradient seperti company profile */}
				<div className="absolute inset-0 z-0 overflow-hidden">
					{/* Vibrant multi-color gradient background */}
					<div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-purple-500/20 to-pink-500/10 dark:from-primary/40 dark:via-purple-500/30 dark:to-pink-500/15"></div>
					
					{/* Additional cyan layer */}
					<div className="absolute inset-0 bg-gradient-to-tl from-transparent via-cyan-500/15 to-transparent dark:from-transparent dark:via-cyan-500/20 dark:to-transparent"></div>
					
					{/* Animated gradient overlay */}
					<motion.div
						className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/15 to-pink-500/10 dark:from-primary/30 dark:via-purple-500/20 dark:to-pink-500/15"
						animate={{
							backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
							opacity: [0.6, 0.8, 0.6],
						}}
						transition={{
							duration: 8,
							repeat: Infinity,
							ease: 'easeInOut',
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
							scale: [1, 1.1, 1],
						}}
						transition={{
							duration: 12,
							repeat: Infinity,
							ease: 'easeInOut',
							delay: 0.5,
						}}
					/>
					
					{/* Subtle Dot Pattern Background */}
					<motion.div 
						className="absolute inset-0"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.5, ease: 'easeOut' }}
					>
						<div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
							backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
							backgroundSize: '24px 24px',
							backgroundPosition: '0 0',
						}}></div>
					</motion.div>
				</div>

				{/* Hero Content */}
				<div className="relative z-10 container mx-auto px-4 text-center max-w-5xl">
					{/* Title with Word-by-Word Animation */}
					<motion.div
						variants={titleContainerVariants}
						initial="hidden"
						animate="visible"
						className="mb-12 md:mb-16"
					>
						<motion.h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-relaxed md:leading-loose mb-4">
							<span className="text-foreground inline-block">
								{t('aboutHeroTitle').split(' ').map((word, index) => (
									<motion.span
										key={index}
										variants={titleWordVariants}
										className="inline-block mr-2 md:mr-3"
										whileHover={{ 
											scale: 1.05,
											y: -2,
											transition: { duration: 0.2 }
										}}
									>
										{word}
									</motion.span>
								))}
							</span>
							<motion.span
								variants={redSquareVariants}
								className="inline-block w-2.5 h-2.5 md:w-3 md:h-3 bg-red-500 ml-2 align-middle"
								style={{ marginBottom: '0.15em' }}
								whileHover={{ 
									scale: 1.3, 
									rotate: 90,
									transition: { duration: 0.3, ease: 'easeOut' }
								}}
							/>
						</motion.h1>
					</motion.div>

					{/* First Paragraph - Prominent */}
					<motion.div
						initial="hidden"
						animate="visible"
						variants={firstParagraphVariants}
						className="max-w-3xl mx-auto text-left"
					>
						<motion.p 
							className="text-lg md:text-xl lg:text-2xl leading-relaxed text-muted-foreground font-light"
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
						>
							{t('aboutParagraph1')}
						</motion.p>
					</motion.div>
				</div>
			</section>

			{/* Content Section with Remaining Paragraphs */}
			<section className="py-20 md:py-28 px-4 bg-background relative overflow-hidden border-t border-border">
				{/* Background dengan gradient lebih subtle */}
				<div className="absolute inset-0 z-0 overflow-hidden">
					{/* Subtle gradient background */}
					<div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
					
					{/* Subtle Dot Pattern Background */}
					<motion.div 
						className="absolute inset-0"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1.5, ease: 'easeOut' }}
					>
						<div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
							backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
							backgroundSize: '24px 24px',
							backgroundPosition: '0 0',
						}}></div>
					</motion.div>
				</div>

				<div className="relative z-10 container mx-auto max-w-4xl">
					<motion.div
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: '-100px' }}
						className="space-y-10 md:space-y-12"
					>
						{[2, 3, 4, 5].map((num) => (
							<motion.p
								key={num}
								variants={paragraphVariants}
								className="text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground text-left font-light"
								whileInView={{ 
									opacity: 1, 
									y: 0,
									filter: 'blur(0px)',
									transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
								}}
								viewport={{ once: true, margin: '-50px' }}
							>
								{t(`aboutParagraph${num}`)}
							</motion.p>
						))}
					</motion.div>
				</div>
			</section>

			<Footer />
		</div>
	);
});

AboutUsContent.displayName = 'AboutUsContent';

const AboutUs = () => {
	return (
		<ThemeProvider>
			<LanguageProvider>
				<AboutUsContent />
			</LanguageProvider>
		</ThemeProvider>
	);
};

export default AboutUs;

