import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/contexts/LanguageContext';
import { Facebook, Linkedin, Youtube, Instagram } from 'lucide-react';
import { memo, useMemo } from 'react';

const Footer = memo(() => {
	const { t } = useLanguage();

	const socialLinks = useMemo(() => [
		{
			name: 'Facebook',
			icon: Facebook,
			href: '#',
		},
		{
			name: 'LinkedIn',
			icon: Linkedin,
			href: '#',
		},
		{
			name: 'YouTube',
			icon: Youtube,
			href: '#',
		},
		{
			name: 'Instagram',
			icon: Instagram,
			href: '#',
		},
	], []);

	return (
		<footer id="contact" className="relative border-t bg-card dark:bg-card/50 backdrop-blur-sm py-16 overflow-hidden">
			{/* Background Decoration */}
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50" />
			
			<div className="container mx-auto px-4 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
					{/* Company Info */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
					>
						<h3 className="text-2xl font-extrabold mb-6 bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent">
							{t('footerCompany')}
						</h3>
						<p className="text-muted-foreground mb-4 leading-relaxed">
							{t('footerCompanyFull')}
						</p>
						<p className="text-muted-foreground text-sm mb-4 leading-relaxed">
							{t('footerAddress')}
						</p>
						<div className="space-y-3 mt-6">
							<motion.div
								whileHover={{ x: 5 }}
								transition={{ duration: 0.2 }}
								className="flex items-center gap-2"
							>
								<span className="text-muted-foreground text-sm">Email:</span>
								<Button variant="link" asChild className="h-auto p-0 transition-all duration-200">
									<a href="mailto:info@katepe.com">info@katepe.com</a>
								</Button>
							</motion.div>
							<motion.div
								whileHover={{ x: 5 }}
								transition={{ duration: 0.2 }}
								className="flex items-center gap-2"
							>
								<span className="text-muted-foreground text-sm">Phone:</span>
								<Button variant="link" asChild className="h-auto p-0 transition-all duration-200">
									<a href="tel:+6285117588770">(+62) 851 1758 8770</a>
								</Button>
							</motion.div>
						</div>
					</motion.div>

					{/* Profile */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
					>
						<h3 className="text-xl font-bold mb-6">{t('footerProfile')}</h3>
						<ul className="space-y-3">
							<li>
								<Button
									variant="link"
									asChild
									className="h-auto p-0 transition-all duration-200"
								>
									<motion.a
										href="/about"
										onClick={(e) => {
											e.preventDefault();
											window.location.href = '/about';
										}}
										whileHover={{ x: 5 }}
										transition={{ duration: 0.2 }}
									>
										{t('footerAboutUs')}
									</motion.a>
								</Button>
							</li>
						</ul>
					</motion.div>

					{/* Services */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
					>
						<h3 className="text-xl font-bold mb-6">{t('footerServices')}</h3>
						<ul className="space-y-3">
							<li>
								<Button
									variant="link"
									asChild
									className="h-auto p-0 transition-all duration-200"
								>
									<motion.a
										href="#products"
										whileHover={{ x: 5 }}
										transition={{ duration: 0.2 }}
									>
										{t('footerDigitalMarketing')}
									</motion.a>
								</Button>
							</li>
							<li>
								<Button
									variant="link"
									asChild
									className="h-auto p-0 transition-all duration-200"
								>
									<motion.a
										href="#products"
										whileHover={{ x: 5 }}
										transition={{ duration: 0.2 }}
									>
										{t('footerITSolutions')}
									</motion.a>
								</Button>
							</li>
						</ul>
					</motion.div>

					{/* Follow Us */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
					>
						<h3 className="text-xl font-bold mb-6">{t('footerFollowUs')}</h3>
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
											className="relative group transition-all duration-300 border-2"
										>
											<a
												href={social.href}
												aria-label={social.name}
											>
												<motion.div
													whileHover={{ scale: 1.2, rotate: 360 }}
													transition={{ duration: 0.5 }}
												>
													<Icon className="h-5 w-5 transition-colors" />
												</motion.div>
											</a>
										</Button>
									</motion.div>
								);
							})}
						</div>
					</motion.div>
				</div>

				<Separator className="my-10 bg-gradient-to-r from-transparent via-border to-transparent" />

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
					className="text-center text-muted-foreground text-sm"
				>
					<p className="font-medium">
						&copy; {new Date().getFullYear()}{' '}
						<span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent font-bold">
							{t('footerCompany')}
						</span>
						. {t('footerAllRights')}
					</p>
				</motion.div>
			</div>
		</footer>
	);
});

Footer.displayName = 'Footer';

export default Footer;
