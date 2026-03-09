'use client'

import type { ReactNode } from 'react'
import { domAnimation, LazyMotion } from 'motion/react'

interface MotionProviderProps {
	children: ReactNode
}

export default function MotionProvider({ children }: MotionProviderProps) {
	return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}
