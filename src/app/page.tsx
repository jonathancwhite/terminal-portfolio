'use client';

import { useState, useEffect } from 'react';
import Desktop from '@/components/Desktop';
import MobilePortfolio from '@/components/Mobile/MobilePortfolio';

export default function Home() {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => setIsMobile(window.innerWidth <= 900);
		checkMobile();
		window.addEventListener('resize', checkMobile);
		return () => window.removeEventListener('resize', checkMobile);
	}, []);

	return isMobile ? <MobilePortfolio /> : <Desktop />;
}
