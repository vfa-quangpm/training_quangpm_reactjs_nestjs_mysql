import { useRef, useState } from "react"
import useScrollY from "../../hooks/useScrollY"
interface height {
	prevHeight: number
	maxHeight: number
	minHeigh: number
}
enum StateScroll {
	Down = "down",
	Up = "up",
}
export const Header = () => {
	const stateScrollY = useScrollY()
	const { current } = useRef<height>({
		prevHeight: 120,
		maxHeight: 120,
		minHeigh: 80,
	})
	if (
		stateScrollY === StateScroll.Down &&
		current.prevHeight >= current.minHeigh
	)
		current.prevHeight -= 5
	else if (
		stateScrollY === StateScroll.Up &&
		current.prevHeight <= current.maxHeight
	)
		current.prevHeight += 5
	return (
		<header
			style={{ height: current.prevHeight }}
			className={`${scrollY} fixed w-full shadow-lg`}>
			Hello
		</header>
	)
}
