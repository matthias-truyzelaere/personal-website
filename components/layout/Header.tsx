'use client'

import { useCurrentTime } from '@/hooks/time'

import FadeIn from '@/components/animations/FadeIn'

export default function Header() {
	const { label, time } = useCurrentTime()

	return (
		<FadeIn>
			<header className={'flex w-full gap-1 border-[0.5px] border-dashed border-(--border-color) px-4 py-6 sm:w-160'}>
				<div className={'flex w-full items-center justify-start gap-2'}>
					<svg aria-hidden={true} fill={'none'} focusable={false} height={16} stroke={'var(--color-secondary)'} strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={1.5} viewBox={'0 0 24 24'} width={16} xmlns={'http://www.w3.org/2000/svg'}>
						<path d={'M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0'} />
						<circle cx={12} cy={10} r={3} />
					</svg>
					<span className={'text-secondary font-mono text-xs tracking-wider uppercase'}>Antwerp, Belgium</span>
				</div>
				<div className={'flex w-full items-center justify-end gap-2'}>
					<svg aria-hidden={true} fill={'none'} focusable={false} height={16} stroke={'var(--color-secondary)'} strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={1.75} viewBox={'0 0 24 24'} width={16} xmlns={'http://www.w3.org/2000/svg'}>
						<path d={'M12 6v6l4 2'} />
						<circle cx={12} cy={12} r={10} />
					</svg>
					<span className={'text-secondary font-mono text-xs'}>
						{time} {label}
					</span>
				</div>
			</header>
		</FadeIn>
	)
}
