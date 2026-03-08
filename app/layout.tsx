import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Geist_Mono, Inter } from 'next/font/google'

import '@/app/globals.css'

const geistMono = Geist_Mono({
	display: 'swap',
	subsets: ['latin'],
	fallback: ['monospace'],
	variable: '--font-mono',
})

const inter = Inter({
	display: 'swap',
	subsets: ['latin'],
	fallback: ['sans-serif'],
	variable: '--font-sans',
})

export const metadata: Metadata = {
	metadataBase: new URL('https://matthiastruyzelaere.com'),
	title: 'Matthias Truyzelaere - Resume & CV',
	description: 'The professional portfolio and CV of Matthias Truyzelaere. Explore my skills, projects, and academic background.',
	applicationName: 'Matthias Truyzelaere - Resume & CV',
	authors: [{ name: 'Matthias Truyzelaere' }],
	publisher: 'Matthias Truyzelaere',
	keywords: ['Matthias Truyzelaere', 'resume', 'CV', 'portfolio', 'software developer', 'web developer', 'projects', 'skills', 'experience', 'Belgium'],
	robots: {
		follow: true,
		index: true,
	},
	alternates: {
		canonical: 'https://matthiastruyzelaere.com',
	},
	icons: {
		icon: '/favicon.ico',
	},
	openGraph: {
		type: 'website',
		url: 'https://matthiastruyzelaere.com',
		title: 'Matthias Truyzelaere - Resume & CV',
		description: 'The professional portfolio and CV of Matthias Truyzelaere. Explore my skills, projects, and academic background.',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Matthias Truyzelaere - Resume & CV',
		description: 'The professional portfolio and CV of Matthias Truyzelaere. Explore my skills, projects, and academic background.',
	},
}

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html className={`${geistMono.variable} ${inter.variable} overscroll-none`} lang={'en'}>
			<body>{children}</body>
		</html>
	)
}
