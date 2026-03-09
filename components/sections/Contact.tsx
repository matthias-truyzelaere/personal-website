import FadeIn from '@/components/animations/FadeIn'

export default function Contact() {
	const linkClassName = 'text-secondary decoration-(--color-primary) underline-offset-4 transition-colors hover:text-primary focus-visible:text-primary focus-visible:underline focus-visible:outline-none'

	return (
		<FadeIn>
			<section className={'flex w-full flex-col gap-8 border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-dashed border-(--border-color) px-4 py-8 sm:w-160'}>
				<h2 className={'font-mono text-sm font-medium tracking-wider uppercase'}>Contact</h2>
				<address className={'not-italic'}>
					<dl className={'flex flex-col gap-4'}>
						<div className={'flex flex-wrap justify-between gap-2'}>
							<dt>Email</dt>
							<dd>
								<a className={linkClassName} href={'mailto:matthias.truyzelaere@gmail.com'}>
									matthias.truyzelaere@gmail.com
								</a>
							</dd>
						</div>
						<div className={'flex flex-wrap justify-between gap-2'}>
							<dt>LinkedIn</dt>
							<dd>
								<a className={linkClassName} href={'https://www.linkedin.com/in/matthias-truyzelaere/'} rel={'noreferrer'} target={'_blank'}>
									/in/matthias-truyzelaere
								</a>
							</dd>
						</div>
						<div className={'flex flex-wrap justify-between gap-2'}>
							<dt>GitHub</dt>
							<dd>
								<a className={linkClassName} href={'https://github.com/matthias-truyzelaere'} rel={'noreferrer'} target={'_blank'}>
									@matthias-truyzelaere
								</a>
							</dd>
						</div>
					</dl>
				</address>
			</section>
		</FadeIn>
	)
}
