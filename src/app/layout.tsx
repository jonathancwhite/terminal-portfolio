import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'Jonathan White - Senior Software Engineer',
	description:
		'Senior Software Engineer crafting scalable, modern web applications using React, Next.js, Vue.js, and Node.js',
	keywords: [
		'software engineer',
		'developer',
		'portfolio',
		'programming',
		'technology',
		'react',
		'nextjs',
		'vue',
		'nodejs',
	],
	authors: [{ name: 'Jonathan White' }],
	icons: {
		icon: [
			{ url: '/favicon.svg', type: 'image/svg+xml' },
			{ url: '/favicon.ico', sizes: 'any' },
		],
		shortcut: '/favicon.ico',
		apple: '/favicon.svg',
	},
};

export const viewport = {
	width: 'device-width',
	initialScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className='scroll-smooth dark'>
			<body className='font-mono bg-black min-h-screen'>{children}</body>
		</html>
	);
}
