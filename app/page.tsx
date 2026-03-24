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
	title: 'Matthias Truyzelaere - Junior Consultant | CV',
	description: 'This is my personal website and CV. Explore my skills, experiences, and academic background.',
	applicationName: 'Matthias Truyzelaere - Junior Consultant | CV',
	keywords: ['Matthias Truyzelaere', 'personal website', 'resume', 'experience', 'Belgium'],
	alternates: {
		canonical: 'https://matthiastruyzelaere.com',
	},
	openGraph: {
		type: 'website',
		url: 'https://matthiastruyzelaere.com',
		title: 'Matthias Truyzelaere - Junior Consultant | CV',
		description: 'This is my personal website and CV. Explore my skills, experiences, and academic background.',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Matthias Truyzelaere - Junior Consultant | CV',
		description: 'This is my personal website and CV. Explore my skills, experiences, and academic background.',
	},
}

const jsonLd = {
	title: 'Matthias Truyzelaere - Junior Consultant | CV',
	description: 'Personal website and CV of Matthias Truyzelaere, a Junior Consultant at Deloitte specializing in Control Assurance and AI.',
	url: 'https://matthiastruyzelaere.com',
	author: {
		'@type': 'Person',
		name: 'Matthias Truyzelaere',
		jobTitle: 'Junior Consultant in Control Assurance',
		worksFor: {
			'@type': 'Organization',
			name: 'Deloitte',
		},
		sameAs: ['https://www.linkedin.com/in/matthias-truyzelaere/', 'https://github.com/matthias-truyzelaere'],
		email: 'matthias@matthiastruyzelaere.com',
		nationality: {
			'@type': 'Country',
			name: 'Belgium',
		},
		knowsAbout: ['Artificial Intelligence', 'Web Development', 'Entrepreneurship', 'Control Assurance'],
		alumniOf: [
			{
				'@type': 'CollegeOrUniversity',
				name: 'Karel de Grote Hogeschool',
			},
		],
	},
	education: [
		{
			'@type': 'EducationalOccupationalCredential',
			credentialCategory: 'bachelor',
			educationalLevel: "Bachelor's Degree",
			description: 'Artificial Intelligence',
			provider: {
				'@type': 'CollegeOrUniversity',
				name: 'Karel de Grote Hogeschool',
			},
			dateOfGraduation: '2026',
		},
	],
	skills: ['Java', 'SQL', 'C#', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'AI Agent Development'],
	spokenLanguages: ['Dutch', 'English'],
}

export default function Home() {
	return (
		<>
			<script dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} type={'application/ld+json'} />
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
