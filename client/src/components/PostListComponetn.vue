<script setup lang="ts">
	import { useStore } from "vuex"
	import { onBeforeMount, reactive } from "vue"
	import type { IPostItem } from "@/store/post/post.state"
	import CardPostComponent from "./CardPostComponent.vue"
	import { useEventListener } from "@/composables/useEvent"
	const store = useStore()
	const obj = reactive<{ postList?: IPostItem[]; page: number }>({
		postList: store.getters["post/getPostList"],
		page: 1,
	})
	store.commit("post/reset")
	onBeforeMount(async () => {
		await store.dispatch("post/postList", { page: obj.page, limit: 3 })
		obj.postList = store.getters["post/getPostList"]
	})
	const handleScroll = async () => {
		const heightBody = document.body.scrollHeight
		const scrollYEnd = window.scrollY + window.innerHeight
		if (scrollYEnd > heightBody + 100) {
			await store.dispatch(
				"post/postList",
				{ page: obj.page, limit: 3 },
				{ root: true }
			)
			obj.postList = store.getters["post/getPostList"]
			obj.page++
		}
	}
	useEventListener(window, "scroll", handleScroll)
</script>
<template>
	<CardPostComponent
		v-for="item in obj.postList"
		:key="item.title"
		:post="item" />
</template>
