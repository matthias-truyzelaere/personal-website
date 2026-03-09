import Image from 'next/image'

import FadeIn from '@/components/animations/FadeIn'

import deloitte from '@/public/images/deloitte.svg'
import nyxaHosting from '@/public/images/nyxa-hosting.svg'

export default function Experience() {
	return (
		<FadeIn>
			<section className={'flex w-full flex-col gap-8 border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-dashed border-(--border-color) px-4 py-8 sm:w-160'}>
				<h2 className={'font-mono text-sm font-medium tracking-wider uppercase'}>Experience</h2>
				<ul className={'flex flex-col gap-8'}>
					<li className={'list-none'}>
						<article className={'flex gap-3'}>
							<div className={'flex h-12 w-12 shrink-0 items-center justify-center'}>
								<Image alt={''} aria-hidden={true} className={'h-12 w-12 object-contain'} height={48} priority={true} sizes={'48px'} src={deloitte} width={48} />
							</div>
							<div className={'flex flex-col gap-2'}>
								<div>
									<h3 className={'font-medium'}>Junior Consultant in Control Assurance</h3>
									<p className={'text-secondary font-mono text-xs tracking-wider uppercase'}>
										Deloitte • <time dateTime={'2026-09'}>September 2026</time>
									</p>
								</div>
								<p className={'text-secondary italic'}>To be continued...</p>
							</div>
						</article>
					</li>
					<li className={'list-none'}>
						<article className={'flex gap-3'}>
							<div className={'flex h-12 w-12 shrink-0 items-center justify-center'}>
								<Image alt={''} aria-hidden={true} className={'h-12 w-12 object-contain'} height={48} priority={true} sizes={'48px'} src={nyxaHosting} width={48} />
							</div>
							<div className={'flex flex-col gap-2'}>
								<div>
									<h3 className={'font-medium'}>Co-Founder &amp; CEO</h3>
									<p className={'text-secondary font-mono text-xs tracking-wider uppercase'}>
										Nyxa Hosting • <time dateTime={'2023'}>2023</time> - <time dateTime={'2025'}>2025</time>
									</p>
								</div>
								<p className={'text-secondary'}>Co-founded a hosting business serving 70+ clients across 15+ countries, later pivoted to B2B web development.</p>
							</div>
						</article>
					</li>
				</ul>
			</section>
		</FadeIn>
	)
}
