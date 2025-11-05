import { memo, useState, useCallback } from 'react';

interface BrandLogoProps {
	brand: string;
	className?: string;
}

const BrandLogo = memo(({ brand, className = '' }: BrandLogoProps) => {
	// Logo URLs with multiple fallback options
	const logoUrlSets: Record<string, string[]> = {
		Porsche: [
			'https://logos-world.net/wp-content/uploads/2021/03/Porsche-Logo.png',
			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Porsche_logo.svg/1200px-Porsche_logo.svg.png',
			'https://www.carlogos.org/logo/Porsche-logo-1920x1080.png',
			'https://1000logos.net/wp-content/uploads/2018/05/Porsche-Logo.png',
			'https://cdn.motor1.com/images/mgl/JB5rY/s1/porsche-logo.webp',
			'https://seeklogo.com/images/P/porsche-logo-8EEEC3C3D3-seeklogo.com.png',
		],
		Tesla: [
			'https://logos-world.net/wp-content/uploads/2020/04/Tesla-Logo.png',
			'https://www.carlogos.org/logo/Tesla-logo-2003-1920x1080.png',
			'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg',
		],
		Audi: [
			'https://logos-world.net/wp-content/uploads/2020/04/Audi-Logo.png',
			'https://www.carlogos.org/logo/Audi-logo-2009-1920x1080.png',
			'https://upload.wikimedia.org/wikipedia/commons/9/92/Audi-Logo_2016.svg',
		],
		BMW: [
			'https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png',
			'https://www.carlogos.org/logo/BMW-logo-1920x1080.png',
		],
	};

	const [currentIndex, setCurrentIndex] = useState(0);
	const urlSet = logoUrlSets[brand] || [];
	const currentUrl = urlSet[currentIndex] || '';

	const handleError = useCallback(() => {
		if (currentIndex < urlSet.length - 1) {
			const nextIndex = currentIndex + 1;
			setCurrentIndex(nextIndex);
		}
	}, [currentIndex, urlSet.length]);

	if (currentUrl) {
		// Always show original colors, no filters
		return (
			<img
				src={currentUrl}
				alt={`${brand} logo`}
				className={className.replace(/filter brightness-0 invert/g, '').trim()}
				loading="eager"
				style={{ 
					maxWidth: '100%', 
					height: 'auto', 
					display: 'block',
				}}
				onError={handleError}
			/>
		);
	}

	// Fallback to text if brand not found or all URLs fail
	return (
		<span className={`${className} font-bold text-lg flex items-center justify-center`}>
			{brand.charAt(0)}
		</span>
	);
});

BrandLogo.displayName = 'BrandLogo';

export default BrandLogo;
