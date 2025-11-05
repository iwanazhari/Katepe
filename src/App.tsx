import { useEffect, useState, lazy, Suspense, Component, ErrorInfo, ReactNode } from 'react';

// Error Boundary Component
class ErrorBoundary extends Component<
	{ children: ReactNode },
	{ hasError: boolean; error: Error | null }
> {
	constructor(props: { children: ReactNode }) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Error caught by boundary:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0a] p-4">
					<div className="text-center">
						<h1 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
							Something went wrong
						</h1>
						<p className="text-gray-600 dark:text-gray-400 mb-4">
							{this.state.error?.message || 'An unexpected error occurred'}
						</p>
						<button
							onClick={() => window.location.reload()}
							className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
						>
							Reload Page
						</button>
					</div>
				</div>
			);
		}

		return this.props.children;
	}
}

// Lazy load pages untuk code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));

// Loading component yang ringan dengan background visible
const PageLoader = () => (
	<div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0a]">
		<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3B82F6]"></div>
	</div>
);

function App() {
	const [currentPath, setCurrentPath] = useState(() => {
		if (typeof window !== 'undefined') {
			return window.location.pathname;
		}
		return '/';
	});

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const handlePopState = () => {
			setCurrentPath(window.location.pathname);
		};

		window.addEventListener('popstate', handlePopState);
		return () => window.removeEventListener('popstate', handlePopState);
	}, []);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			setCurrentPath(window.location.pathname);
		}
	}, []);

	return (
		<ErrorBoundary>
			<Suspense fallback={<PageLoader />}>
				{currentPath === '/about' ? <AboutPage /> : <HomePage />}
			</Suspense>
		</ErrorBoundary>
	);
}

export default App;
