import { motion } from 'framer-motion';
import { Menu, Sun, Moon, Globe, Box } from 'lucide-react';
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
		// Jika href adalah anchor link (#products, #contact, dll)
		if (href.startsWith('#')) {
			// Jika sedang di halaman About, redirect ke Home dengan hash
			if (window.location.pathname === '/about') {
				window.location.href = `/${href}`;
			} else {
				// Jika sudah di Home, scroll ke section
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

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const navItems: Array<{ key: string; href: string; isRoute?: boolean }> = [
		{ key: 'navHome', href: '/', isRoute: true },
		{ key: 'navProducts', href: '#products', isRoute: false },
		{ key: 'navAbout', href: '/about', isRoute: true },
		{ key: 'navContact', href: '#contact', isRoute: false },
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
					? 'bg-background dark:bg-background shadow-lg shadow-black/5 dark:shadow-black/20'
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
						className="flex items-center gap-2 text-2xl font-extrabold tracking-tight"
					>
						<motion.div
							whileHover={{ rotate: 360 }}
							transition={{ duration: 0.6 }}
							className="p-1.5 rounded-lg bg-primary/10 dark:bg-primary/20"
						>
							<Box className="h-5 w-5 text-primary" />
						</motion.div>
						<span className="text-foreground dark:text-foreground font-bold">
							KATEPE
						</span>
					</motion.a>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-2">
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
									className="relative group transition-all duration-200"
								>
									<a 
										href={item.href} 
										onClick={(e) => {
											e.preventDefault();
											handleNavigation(item.href, item.isRoute || false);
										}}
										className="relative"
									>
										<span className="relative z-10 font-semibold text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors duration-200">{t(item.key)}</span>
										<motion.span
											className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
											initial={{ scaleX: 0 }}
											whileHover={{ scaleX: 1 }}
											transition={{ duration: 0.3 }}
										/>
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
							className="relative group transition-all duration-200"
							aria-label="Toggle language"
						>
							<motion.div
								whileHover={{ scale: 1.1, rotate: 360 }}
								transition={{ duration: 0.5 }}
							>
								<Globe className="h-4 w-4 mr-2 text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors" />
							</motion.div>
							<span className="text-sm font-semibold text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors">{language === 'id' ? 'ID' : 'EN'}</span>
						</Button>

						{/* Theme Switcher */}
						<Button
							variant="ghost"
							size="icon"
							onClick={toggleTheme}
							className="relative group transition-all duration-200"
							aria-label="Toggle theme"
						>
							<motion.div
								animate={{ rotate: theme === 'dark' ? 0 : 180 }}
								whileHover={{ scale: 1.1 }}
								transition={{ duration: 0.3, ease: 'easeInOut' }}
							>
								{theme === 'dark' ? (
									<Sun className="h-5 w-5 text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors" />
								) : (
									<Moon className="h-5 w-5 text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors" />
								)}
							</motion.div>
						</Button>

						{/* Mobile Menu */}
						<Sheet>
							<SheetTrigger asChild className="md:hidden">
								<Button variant="ghost" size="icon" className="group">
									<Menu className="h-5 w-5 text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors" />
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-[300px] sm:w-[400px]">
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
												className="justify-start w-full text-base h-12 transition-all duration-200"
											>
												<a 
													href={item.href} 
													onClick={(e) => {
														e.preventDefault();
														handleNavigation(item.href, item.isRoute || false);
													}}
												>
													{t(item.key)}
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
