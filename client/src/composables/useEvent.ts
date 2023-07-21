import { onMounted, onUnmounted } from "vue"

export function useEventListener(
	target: Window,
	event: string,
	callback: () => Promise<any>
) {
	onMounted(() => {
		target.addEventListener(event, callback)
	})
	onUnmounted(() => {
		target.removeEventListener(event, callback)
	})
}
