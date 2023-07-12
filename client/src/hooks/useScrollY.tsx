import { useEffect, useRef, useState } from "react"

function useScrollY(): string {
	let data: string
	const [scrollY, setScrollY] = useState<number>(window.scrollY)
	const prevScrollY = useRef<number>(scrollY)
	useEffect(() => {
		prevScrollY.current = scrollY
		return () => window.removeEventListener("scroll", handleScroll)
	}, [scrollY])
	const handleScroll = (): void => {
		setScrollY(() => window.scrollY)
	}
	window.addEventListener("scroll", handleScroll)
	if (prevScrollY.current < scrollY) data = "down"
	else if (prevScrollY.current > scrollY) data = "up"
	else data = ""
	return data
}

export default useScrollY
