import { useState } from "react"

export default function Header() {
	const [horizontalHeader, SetHorizontalHeader] = useState(0)
	const handle = () => {
		SetHorizontalHeader(() => window.scrollY)
	}
	window.addEventListener("scroll", handle)

	return (
		<header
			style={{
				height: horizontalHeader < 112 - 80 ? 112 - horizontalHeader : 80,
			}}
			className={`fixed w-full scroll-pt-2 bg-white z-10`}>
			<div>{horizontalHeader}</div>
		</header>
	)
}
