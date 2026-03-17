import FadeIn from '@/components/animations/FadeIn'

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<FadeIn>
			<footer className={'flex w-full justify-center border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-dashed border-(--border-color) px-4 py-6 sm:w-160'}>
				<p className={'text-secondary'}>&copy; {year} Matthias Truyzelaere. All rights reserved.</p>
			</footer>
		</FadeIn>
	)
}
