import FadeIn from '@/components/animations/FadeIn'

export default function Contact() {
	return (
		<FadeIn>
			<section className={'flex w-full flex-col gap-8 border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-dashed border-(--border-color) px-4 py-8 sm:w-160'}>
				<h3 className={'font-mono text-sm font-medium tracking-wider uppercase'}>Contact</h3>
				<div className={'flex flex-col gap-4'}>
					<div className={'flex flex-wrap justify-between gap-2'}>
						<span>Email</span>
						<a className={'text-secondary hover:text-primary'} href={'mailto:matthias.truyzelaere@gmail.com'}>
							matthias.truyzelaere@gmail.com
						</a>
					</div>
					<div className={'flex flex-wrap justify-between gap-2'}>
						<span>LinkedIn</span>
						<a className={'text-secondary hover:text-primary'} href={'https://www.linkedin.com/in/matthias-truyzelaere/'} target={'_blank'}>
							/in/matthias-truyzelaere
						</a>
					</div>
					<div className={'flex flex-wrap justify-between gap-2'}>
						<span>GitHub</span>
						<a className={'text-secondary hover:text-primary'} href={'https://github.com/matthias-truyzelaere'} target={'_blank'}>
							@matthias-truyzelaere
						</a>
					</div>
				</div>
			</section>
		</FadeIn>
	)
}
