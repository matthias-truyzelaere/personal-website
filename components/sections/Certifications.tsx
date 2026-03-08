import FadeIn from '@/components/animations/FadeIn'

export default function Certifications() {
	return (
		<FadeIn>
			<section className={'flex w-full flex-col gap-8 border-r-[0.5px] border-b-[0.5px] border-l-[0.5px] border-dashed border-(--border-color) px-4 py-8 sm:w-160'}>
				<h3 className={'font-mono text-sm font-medium tracking-wider uppercase'}>Certifications</h3>
				<div className={'flex flex-col gap-2'}>
					<div>
						<h4 className={'font-medium'}>Build your own AI agent by AWS</h4>
						<span className={'text-secondary font-mono text-xs tracking-wider uppercase'}>Deloitte • 2025</span>
					</div>
					<p className={'text-secondary'}>I got this certificate awarded for participating in the masterclass &apos;Build your own AI agent&apos; where I learned the conceptual fundamentals of AI agents and how to use Strands Agents for practical applications.</p>
				</div>
			</section>
		</FadeIn>
	)
}
