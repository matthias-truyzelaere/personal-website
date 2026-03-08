import Hero from '@/components/sections/Hero'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Education from '@/components/sections/Education'
import Languages from '@/components/sections/Languages'
import Experience from '@/components/sections/Experience'
import Certifications from '@/components/sections/Certifications'

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
