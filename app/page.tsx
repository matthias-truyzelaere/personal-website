import type { Metadata } from 'next'

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Contact from '@/components/sections/Contact'
import Education from '@/components/sections/Education'
import Languages from '@/components/sections/Languages'
import Experience from '@/components/sections/Experience'
import Certifications from '@/components/sections/Certifications'

export const metadata: Metadata = {
	title: 'Matthias Truyzelaere - Resume & CV',
	description: 'The professional portfolio and CV of Matthias Truyzelaere. Explore my skills, projects, and academic background.',
	applicationName: 'Matthias Truyzelaere - Resume & CV',
	keywords: ['Matthias Truyzelaere', 'resume', 'CV', 'portfolio', 'software developer', 'web developer', 'projects', 'skills', 'experience', 'Belgium'],
	alternates: {
		canonical: 'https://matthiastruyzelaere.com',
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

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<About />
				<Experience />
				<Education />
				<Certifications />
				<Languages />
				<Contact />
			</main>
			<Footer />
		</>
	)
}
