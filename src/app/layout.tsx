import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import './globals.css';
import React from 'react';

export const metadata: Metadata = {
	title: 'Renan Leonel',
	description: 'Renan Leonel - CV',
	keywords: [
		'Renan Leonel'
	  ],
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
			<body>{children}
			<Analytics />
			</body>
		</html>
	);
}
