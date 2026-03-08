import FadeIn from '@/components/animations/FadeIn'

export default function Languages() {
	return (
		<FadeIn>
			<section className={'flex w-full flex-col gap-8 border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-dashed border-(--border-color) px-4 py-8 sm:w-160'}>
				<h3 className={'font-mono text-sm font-medium tracking-wider uppercase'}>Languages</h3>
				<div className={'flex flex-col gap-4'}>
					<div className={'flex flex-wrap justify-between gap-2'}>
						<span>Dutch</span>
						<span className={'text-secondary'}>Native</span>
					</div>
					<div className={'flex flex-wrap justify-between gap-2'}>
						<span>English</span>
						<span className={'text-secondary'}>Fluent</span>
					</div>
				</div>
			</section>
		</FadeIn>
	)
}
