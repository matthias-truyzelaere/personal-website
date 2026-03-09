import Image from 'next/image'

import FadeIn from '@/components/animations/FadeIn'

import profilePicJpg from '@/public/images/profile-pic.jpg'

export default function Hero() {
	return (
		<FadeIn>
			<section className={'flex w-full flex-col items-center gap-6 border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-dashed border-(--border-color) px-4 py-8 sm:w-160'}>
				<Image alt={"Matthias's profile picture"} className={'rounded-lg object-cover'} height={80} placeholder={'blur'} priority={true} sizes={'80px'} src={profilePicJpg} width={80} />
				<div className={'flex w-full flex-col items-center gap-1.5'}>
					<h1 className={'text-center text-3xl font-semibold tracking-tight'}>Matthias Truyzelaere</h1>
					<h2 className={'text-secondary text-center text-xl tracking-tight'}>Junior Consultant at Deloitte</h2>
				</div>
			</section>
		</FadeIn>
	)
}
