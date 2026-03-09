import FadeIn from '@/components/animations/FadeIn'

export default function Languages() {
	return (
		<FadeIn>
			<section className={'flex w-full flex-col gap-8 border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-dashed border-(--border-color) px-4 py-8 sm:w-160'}>
				<h2 className={'font-mono text-sm font-medium tracking-wider uppercase'}>Languages</h2>
				<dl className={'flex flex-col gap-4'}>
					<div className={'flex flex-wrap justify-between gap-2'}>
						<dt>Dutch</dt>
						<dd className={'text-secondary'}>Native</dd>
					</div>
					<div className={'flex flex-wrap justify-between gap-2'}>
						<dt>English</dt>
						<dd className={'text-secondary'}>Fluent</dd>
					</div>
				</dl>
			</section>
		</FadeIn>
	)
}
