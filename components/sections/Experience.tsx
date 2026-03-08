import Image from 'next/image'

import FadeIn from '@/components/animations/FadeIn'

import deloitteJpg from '@/public/images/deloitte.jpg'
import nyxaHostingJpg from '@/public/images/nyxa-hosting.jpg'

export default function Experience() {
	return (
		<FadeIn>
			<section className={'flex w-full flex-col gap-8 border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-dashed border-(--border-color) px-4 py-8 sm:w-160'}>
				<h3 className={'font-mono text-sm font-medium tracking-wider uppercase'}>Experience</h3>
				<div className={'flex gap-3'}>
					<Image alt={'Deloitte Logo'} className={'shrink-0 rounded-lg object-cover'} height={32} placeholder={'blur'} priority src={deloitteJpg} width={32} />
					<div className={'flex flex-col gap-2'}>
						<div>
							<h4 className={'font-medium'}>Junior Consultant in Control Assurance</h4>
							<span className={'text-secondary font-mono text-xs tracking-wider uppercase'}>Deloitte • September 2026</span>
						</div>
						<p className={'text-secondary italic'}>To be continued...</p>
					</div>
				</div>
				<div className={'flex gap-3'}>
					<Image alt={'Nyxa Hosting Logo'} className={'shrink-0 rounded-lg object-cover'} height={32} placeholder={'blur'} priority src={nyxaHostingJpg} width={32} />
					<div className={'flex flex-col gap-2'}>
						<div>
							<h4 className={'font-medium'}>Co-Founder &amp; CEO</h4>
							<span className={'text-secondary font-mono text-xs tracking-wider uppercase'}>Nyxa Hosting • 2023 - 2025</span>
						</div>
						<p className={'text-secondary'}>Co-founded a hosting business serving 70+ clients across 15+ countries, later pivoted to B2B web development.</p>
					</div>
				</div>
			</section>
		</FadeIn>
	)
}
