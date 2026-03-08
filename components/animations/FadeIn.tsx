'use client'

import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface FadeInProps {
	children: ReactNode
	duration?: number
	delay?: number
	direction?: 'up' | 'down' | 'none'
}

export default function FadeIn({ children, duration = 0.65, delay = 0, direction = 'up' }: FadeInProps) {
	// Determine the starting Y offset based on direction
	const yOffset = direction === 'up' ? 20 : direction === 'down' ? -20 : 0

	return (
		<motion.div
			className={'flex w-full flex-col items-center'}
			initial={{ opacity: 0, y: yOffset }}
			transition={{
				duration: duration,
				delay: delay,
				ease: 'easeOut',
			}}
			viewport={{ once: true, margin: '-50px' }}
			whileInView={{ opacity: 1, y: 0 }}>
			{children}
		</motion.div>
	)
}
