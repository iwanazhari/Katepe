import { motion } from 'framer-motion';
import { Menu, Sun, Moon, Globe, Car } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';
import { useState, useEffect, memo } from 'react';

const handleNavigation = (href: string, isRoute: boolean) => {
	if (isRoute) {
		window.location.href = href;
	} else {
		if (href.startsWith('#')) {
			if (window.location.pathname === '/about') {
				window.location.href = `/${href}`;
			} else {
				const element = document.querySelector(href);
				if (element) {
					element.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}
		} else {
			window.location.href = href;
		}
	}
};

const Header = memo(() => {
	const { theme, toggleTheme } = useTheme();
	const { t, language, toggleLanguage } = useLanguage();
	const [scrolled, setScrolled] = useState(false);
	const [activeNav, setActiveNav] = useState('Home');

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		const path = window.location.pathname;
		if (path === '/about') {
			setActiveNav('About');
		} else if (path.includes('popular')) {
			setActiveNav('Popular');
		} else if (path.includes('featured')) {
			setActiveNav('Featured');
		} else {
			setActiveNav('Home');
		}
	}, []);

	const navItems: Array<{ key: string; labelKey: string; href: string; isRoute?: boolean }> = [
		{ key: 'navHome', labelKey: 'navHome', href: '/', isRoute: true },
		{ key: 'navAbout', labelKey: 'navAbout', href: '/about', isRoute: true },
		{ key: 'navPopular', labelKey: 'navPopular', href: '#cars', isRoute: false },
		{ key: 'navFeatured', labelKey: 'navFeatured', href: '#cars', isRoute: false },
	];

	const navVariants = {
		hidden: { y: -50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
		},
	};

	return (
		<motion.header
			variants={navVariants}
			initial="hidden"
			animate="visible"
			className={cn(
				'fixed top-0 left-0 right-0 z-[100] border-b transition-all duration-300',
				scrolled
					? 'bg-background/95 dark:bg-background/95 backdrop-blur-md shadow-lg shadow-black/20'
					: 'bg-background dark:bg-background'
			)}
		>
			<div className="container mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<motion.a
						href="/"
						onClick={(e) => {
							if (window.location.pathname !== '/') {
								e.preventDefault();
								window.location.href = '/';
							}
						}}
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="flex items-center gap-3 text-2xl font-extrabold tracking-tight"
					>
						<motion.div
							whileHover={{ rotate: 360 }}
							transition={{ duration: 0.6 }}
							className="relative"
						>
							<div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center">
								<Car className="h-6 w-6 text-foreground" />
							</div>
						</motion.div>
						<span className="text-foreground font-bold">
							E-Car
						</span>
					</motion.a>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-1">
						{navItems.map((item, index) => (
							<motion.div
								key={item.key}
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 + 0.3 }}
							>
								<Button
									variant="ghost"
									asChild
									className={cn(
										'relative group transition-all duration-200 px-4 py-2',
										activeNav === item.key
											? 'text-primary'
											: 'text-foreground hover:text-primary'
									)}
								>
									<a 
										href={item.href} 
										onClick={(e) => {
											e.preventDefault();
											setActiveNav(item.key);
											handleNavigation(item.href, item.isRoute || false);
										}}
										className="relative"
									>
										<span className="relative z-10 font-semibold">{t(item.labelKey)}</span>
										{activeNav === item.key && (
											<motion.span
												className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
												layoutId="activeNav"
												transition={{ type: 'spring', stiffness: 380, damping: 30 }}
											/>
										)}
									</a>
								</Button>
							</motion.div>
						))}
					</nav>

					{/* Controls */}
					<div className="flex items-center gap-2">
						{/* Language Switcher */}
						<Button
							variant="ghost"
							onClick={toggleLanguage}
							className="relative group transition-all duration-200 text-foreground hover:text-primary"
							aria-label="Toggle language"
						>
							<motion.div
								whileHover={{ scale: 1.1, rotate: 360 }}
								transition={{ duration: 0.5 }}
							>
								<Globe className="h-4 w-4 mr-2" />
							</motion.div>
							<span className="text-sm font-semibold">{language === 'id' ? 'ID' : 'EN'}</span>
						</Button>

						{/* Theme Switcher */}
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleTheme}
							className="relative group transition-all duration-200 text-foreground hover:text-primary"
							aria-label="Toggle theme"
						>
							<motion.div
								animate={{ rotate: theme === 'dark' ? 0 : 180 }}
								whileHover={{ scale: 1.1 }}
								transition={{ duration: 0.3, ease: 'easeInOut' }}
							>
								{theme === 'dark' ? (
									<Sun className="h-5 w-5" />
								) : (
									<Moon className="h-5 w-5" />
								)}
							</motion.div>
						</Button>

						{/* Mobile Menu */}
						<Sheet>
							<SheetTrigger asChild className="md:hidden">
								<Button variant="ghost" size="icon" className="group text-foreground hover:text-primary">
									<Menu className="h-5 w-5" />
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background border-border">
								<nav className="flex flex-col gap-2 mt-8">
									{navItems.map((item, index) => (
										<motion.div
											key={item.key}
											initial={{ opacity: 0, x: 20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.1 }}
										>
											<Button
												variant="ghost"
												asChild
													className={cn(
													'justify-start w-full text-base h-12 transition-all duration-200 text-foreground hover:text-primary',
													activeNav === item.key && 'text-primary'
												)}
											>
												<a 
													href={item.href} 
													onClick={(e) => {
														e.preventDefault();
														setActiveNav(item.key);
														handleNavigation(item.href, item.isRoute || false);
													}}
												>
													{t(item.labelKey)}
												</a>
											</Button>
										</motion.div>
									))}
								</nav>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</div>
		</motion.header>
	);
});

Header.displayName = 'Header';

export default Header;
