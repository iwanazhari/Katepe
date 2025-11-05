import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { memo, useState } from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SubscribeSection = memo(() => {
	const { t } = useLanguage();
	const [email, setEmail] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (email) {
			setSubmitted(true);
			setTimeout(() => {
				setSubmitted(false);
				setEmail('');
			}, 3000);
		}
	};

	return (
		<section className="py-24 px-4 bg-background relative overflow-hidden">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10 dark:opacity-5">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)] bg-[size:40px_40px]"></div>
			</div>

			<div className="container mx-auto relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
					{/* Left Side - Text Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
						className="space-y-6"
					>
						<h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
							{t('subscribeTitle')}
						</h2>
						<p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
							{t('subscribeSubtitle')}
						</p>
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="flex flex-col sm:flex-row gap-4">
								<Input
									type="email"
									placeholder={t('subscribePlaceholder')}
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									className="flex-1 bg-card border-border text-foreground placeholder:text-muted-foreground focus:border-primary"
									required
								/>
								<Button
									type="submit"
									size="lg"
									className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6"
								>
									<motion.span
										className="flex items-center gap-2"
										whileHover={{ x: 5 }}
										transition={{ duration: 0.2 }}
									>
										{t('subscribeButton')}
										<Send className="h-5 w-5" />
									</motion.span>
								</Button>
							</div>
							{submitted && (
								<motion.p
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									className="text-green-400 text-sm"
								>
									{t('subscribeThankYou')}
								</motion.p>
							)}
						</form>
					</motion.div>

					{/* Right Side - Car Image */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
						className="relative"
					>
						{/* Glow effect */}
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
						
						<motion.div
							whileHover={{ scale: 1.02 }}
							transition={{ duration: 0.3 }}
							className="relative"
						>
							<img
								src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&h=800&fit=crop&q=90"
								alt="Electric Car"
								className="w-full h-auto rounded-lg shadow-2xl"
								loading="lazy"
							/>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
});

SubscribeSection.displayName = 'SubscribeSection';

export default SubscribeSection;

