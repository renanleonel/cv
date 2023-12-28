import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '@/styles/globals.css';
import React from 'react';

export const metadata: Metadata = {
	title: 'Renan Leonel',
	description: 'Renan Leonel - CV',
	keywords: ['Renan Leonel'],
};

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' className={inter.className}>
			<head>
				<link rel='icon' href='/favicon.ico' sizes='any' />
				<link rel='manifest' href='/manifest.json' />
				<meta
					name='apple-mobile-web-app-status-bar-style'
					content='black-translucent'
				/>
				<meta
					name='viewport'
					content='initial-scale=1, viewport-fit=cover'
				/>
			</head>
			<body>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
