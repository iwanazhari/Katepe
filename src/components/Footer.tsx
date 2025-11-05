import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Facebook, Linkedin, Instagram, ArrowUp, Car } from 'lucide-react';
import { memo, useMemo, useState, useEffect } from 'react';
import BrandLogo from './BrandLogos';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = memo(() => {
	const { t } = useLanguage();
	const [showScrollTop, setShowScrollTop] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowScrollTop(window.scrollY > 400);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const socialLinks = useMemo(() => [
		{
			name: 'Facebook',
			icon: Facebook,
			href: '#',
		},
		{
			name: 'Instagram',
			icon: Instagram,
			href: '#',
		},
		{
			name: 'X (Twitter)',
			icon: Linkedin, // Using Linkedin icon as placeholder for X
			href: '#',
		},
	], []);

	const brandLogos = useMemo(() => [
		'Porsche',
		'Audi',
		'Tesla',
		'BMW',
	], []);

	return (
		<>
			{/* Brand Logos Section */}
			<section className="py-16 px-4 bg-background border-t border-border">
				<div className="container mx-auto">
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
					>
						{brandLogos.map((brand, index) => (
							<motion.div
								key={brand}
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1, duration: 0.5 }}
								whileHover={{ scale: 1.15, y: -5 }}
								className="text-muted-foreground hover:text-foreground transition-colors duration-300 cursor-pointer flex items-center justify-center"
							>
								<BrandLogo 
									brand={brand} 
									className="object-contain w-24 h-24 opacity-80 hover:opacity-100 transition-opacity duration-300"
								/>
							</motion.div>
						))}
					</motion.div>
				</div>
			</section>

			{/* Footer Content */}
			<footer id="contact" className="relative border-t border-border bg-background py-16 overflow-hidden">
				<div className="container mx-auto px-4 relative z-10">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
						{/* Company Info */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
						>
							<div className="flex items-center gap-3 mb-6">
								<div className="w-10 h-10 rounded-full border-2 border-foreground flex items-center justify-center">
								<Car className="h-6 w-6 text-foreground" />
							</div>
							<h3 className="text-2xl font-extrabold text-foreground">
									E-Car
								</h3>
							</div>
							<p className="text-muted-foreground mb-4 leading-relaxed">
								{t('footerDescription')}
							</p>
							<div className="space-y-3 mt-6">
								<motion.div
									whileHover={{ x: 5 }}
									transition={{ duration: 0.2 }}
									className="flex items-center gap-2"
								>
									<span className="text-muted-foreground text-sm">{t('footerEmail')}</span>
									<Button variant="link" asChild className="h-auto p-0 text-muted-foreground hover:text-primary transition-all duration-200">
										<a href="mailto:info@ecar.com">info@ecar.com</a>
									</Button>
								</motion.div>
								<motion.div
									whileHover={{ x: 5 }}
									transition={{ duration: 0.2 }}
									className="flex items-center gap-2"
								>
									<span className="text-muted-foreground text-sm">{t('footerPhone')}</span>
									<Button variant="link" asChild className="h-auto p-0 text-muted-foreground hover:text-primary transition-all duration-200">
										<a href="tel:+6285117588770">(+62) 851 1758 8770</a>
									</Button>
								</motion.div>
							</div>
						</motion.div>

						{/* Company Links */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
						>
							<h3 className="text-xl font-bold mb-6 text-foreground">{t('footerCompanyTitle')}</h3>
							<ul className="space-y-3">
								{[
									{ key: 'footerCompanyAbout', href: '#about', tKey: 'footerCompanyAbout' },
									{ key: 'footerCompanyCars', href: '#cars', tKey: 'footerCompanyCars' },
									{ key: 'footerCompanyHistory', href: '#history', tKey: 'footerCompanyHistory' },
									{ key: 'footerCompanyShop', href: '#shop', tKey: 'footerCompanyShop' },
								].map((link) => (
									<li key={link.key}>
										<motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
											<Button
												variant="link"
												asChild
												className="h-auto p-0 text-muted-foreground hover:text-primary transition-all duration-200"
											>
												<a href={link.href}>{t(link.tKey)}</a>
											</Button>
										</motion.div>
									</li>
								))}
							</ul>
						</motion.div>

						{/* Information Links */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
						>
							<h3 className="text-xl font-bold mb-6 text-foreground">{t('footerInformationTitle')}</h3>
							<ul className="space-y-3">
								{[
									{ key: 'footerInfoRequestQuote', href: '#request-quote', tKey: 'footerInfoRequestQuote' },
									{ key: 'footerInfoFindDealer', href: '#find-dealer', tKey: 'footerInfoFindDealer' },
									{ key: 'footerInfoContactUs', href: '#contact', tKey: 'footerInfoContactUs' },
									{ key: 'footerInfoServices', href: '#services', tKey: 'footerInfoServices' },
								].map((link) => (
									<li key={link.key}>
										<motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
											<Button
												variant="link"
												asChild
												className="h-auto p-0 text-muted-foreground hover:text-primary transition-all duration-200"
											>
												<a href={link.href}>{t(link.tKey)}</a>
											</Button>
										</motion.div>
									</li>
								))}
							</ul>
						</motion.div>

						{/* Follow Us */}
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
						>
							<h3 className="text-xl font-bold mb-6 text-foreground">{t('footerFollowUsTitle')}</h3>
							<div className="flex gap-3 flex-wrap">
								{socialLinks.map((social, index) => {
									const Icon = social.icon;
									return (
										<motion.div
											key={social.name}
											initial={{ opacity: 0, scale: 0, rotate: -180 }}
											whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
											viewport={{ once: true }}
											transition={{
												delay: 0.4 + index * 0.1,
												type: 'spring',
												stiffness: 200,
												damping: 15,
											}}
										>
											<Button
												variant="outline"
												size="icon"
												asChild
												className="relative group transition-all duration-300 border-2 border-gray-700 hover:border-primary bg-gray-900 hover:bg-gray-800"
											>
												<a
													href={social.href}
													aria-label={social.name}
												>
													<motion.div
														whileHover={{ scale: 1.2, rotate: 360 }}
														transition={{ duration: 0.5 }}
													>
														<Icon className="h-5 w-5 text-gray-400 group-hover:text-primary transition-colors" />
													</motion.div>
												</a>
											</Button>
										</motion.div>
									);
								})}
							</div>
						</motion.div>
					</div>

					<Separator className="my-10 bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
						className="text-center text-muted-foreground text-sm"
					>
						<p className="font-medium">
							&copy; {new Date().getFullYear()}{' '}
							<span className="text-primary font-bold">
								E-Car
							</span>
							. {t('footerAllRights')}
						</p>
					</motion.div>
				</div>
			</footer>

			{/* Scroll to Top Button */}
			<AnimatePresence>
				{showScrollTop && (
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0 }}
						className="fixed bottom-8 right-8 z-50"
					>
						<Button
							size="icon"
							onClick={scrollToTop}
							className="bg-card hover:bg-primary border-2 border-border hover:border-primary text-foreground rounded-lg w-12 h-12 shadow-lg"
						>
							<ArrowUp className="h-5 w-5" />
						</Button>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
});

Footer.displayName = 'Footer';

export default Footer;
