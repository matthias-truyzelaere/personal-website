import { useEffect, useState } from 'react'

export const useCurrentTime = () => {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const timer = setInterval(() => {
			setTime(new Date())
		}, 1000)

		return () => clearInterval(timer)
	}, [])

	// Use Intl.DateTimeFormat for clean, localized formatting
	return time.toLocaleTimeString('en-GB', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false,
		timeZone: 'Europe/Brussels',
	})
}
