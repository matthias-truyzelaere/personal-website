import { useEffect, useState } from 'react'

const TIME_ZONE = 'Europe/Brussels'

const timeFormatter = new Intl.DateTimeFormat('en-GB', {
	hour: '2-digit',
	minute: '2-digit',
	hour12: false,
	timeZone: TIME_ZONE,
})

const zoneFormatter = new Intl.DateTimeFormat('en-GB', {
	timeZone: TIME_ZONE,
	timeZoneName: 'shortOffset',
})

const getCurrentDate = () => new Date()

const getTimeParts = (date: Date) => ({
	label: zoneFormatter.formatToParts(date).find((part) => part.type === 'timeZoneName')?.value ?? 'UTC',
	time: timeFormatter.format(date),
})

export const useCurrentTime = () => {
	const [currentDate, setCurrentDate] = useState(getCurrentDate)

	useEffect(() => {
		let intervalId: number | undefined

		const scheduleMinuteUpdates = () => {
			setCurrentDate(getCurrentDate())

			const now = getCurrentDate()
			const millisecondsUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds()

			const timeoutId = window.setTimeout(() => {
				setCurrentDate(getCurrentDate())
				intervalId = window.setInterval(() => {
					setCurrentDate(getCurrentDate())
				}, 60_000)
			}, millisecondsUntilNextMinute)

			return timeoutId
		}

		const timeoutId = scheduleMinuteUpdates()

		return () => {
			window.clearTimeout(timeoutId)
			if (intervalId) {
				window.clearInterval(intervalId)
			}
		}
	}, [])

	return getTimeParts(currentDate)
}
