import FadeIn from '@/components/animations/FadeIn'

export default function Certifications() {
	return (
		<FadeIn>
			<section className={'flex w-full flex-col gap-8 border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-dashed border-(--border-color) px-4 py-8 sm:w-160'}>
				<h2 className={'font-mono text-sm font-medium tracking-wider uppercase'}>Certifications</h2>
				<ul className={'flex flex-col gap-8'}>
					<li className={'list-none'}>
						<article className={'flex flex-col gap-2'}>
							<div>
								<h3 className={'font-medium'}>Build your own AI agent by AWS</h3>
								<p className={'text-secondary font-mono text-xs tracking-wider uppercase'}>
									Deloitte • <time dateTime={'2025'}>2025</time>
								</p>
							</div>
							<p className={'text-secondary'}>I got this certificate awarded for participating in the masterclass &apos;Build your own AI agent&apos; where I learned the conceptual fundamentals of AI agents and how to use Strands Agents for practical applications.</p>
						</article>
					</li>
				</ul>
			</section>
		</FadeIn>
	)
}
