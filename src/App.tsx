import { useEffect, useState, lazy, Suspense } from 'react';

// Lazy load pages untuk code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

// Loading component yang ringan
const PageLoader = () => (
	<div className="min-h-screen flex items-center justify-center bg-background">
		<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
	</div>
);

function App() {
	const [currentPath, setCurrentPath] = useState(window.location.pathname);

	useEffect(() => {
		const handlePopState = () => {
			setCurrentPath(window.location.pathname);
		};

		window.addEventListener('popstate', handlePopState);
		return () => window.removeEventListener('popstate', handlePopState);
	}, []);

	useEffect(() => {
		setCurrentPath(window.location.pathname);
	}, []);

	return (
		<Suspense fallback={<PageLoader />}>
			{currentPath === '/about' ? <AboutPage /> : <HomePage />}
		</Suspense>
	);
}

export default App;
