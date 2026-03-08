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
	authors: [{ name: 'Matthias Truyzelaere' }],
	publisher: 'Matthias Truyzelaere',
	robots: {
		follow: true,
		index: true,
	},
	icons: {
		icon: '/favicon.ico',
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
