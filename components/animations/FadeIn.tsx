'use client'

import type { ReactNode } from 'react'
import type { Transition } from 'motion/react'
import { domAnimation, LazyMotion, m, useReducedMotion } from 'motion/react'

interface FadeInProps {
	children: ReactNode
	duration?: number
	delay?: number
	direction?: 'up' | 'down' | 'none'
}

export default function FadeIn({ children, duration = 0.65, delay = 0, direction = 'up' }: FadeInProps) {
	const shouldReduceMotion = useReducedMotion()
	const yOffset = direction === 'up' ? 20 : direction === 'down' ? -20 : 0
	const initial = shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: yOffset }
	const whileInView = shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
	const transition: Transition = shouldReduceMotion
		? {
				duration: 0,
				delay: 0,
			}
		: {
				duration: duration,
				delay: delay,
				ease: 'easeOut',
			}

	return (
		<LazyMotion features={domAnimation}>
			<m.div className={'flex w-full flex-col items-center'} initial={initial} transition={transition} viewport={{ once: true, margin: '-50px' }} whileInView={whileInView}>
				{children}
			</m.div>
		</LazyMotion>
	)
}
