<script setup lang="ts">
	import { Marked } from "marked"
	import { reactive, ref } from "vue"
	import { useStore } from "vuex"
	const textarea = ref<HTMLTextAreaElement>(document.createElement("textarea"))
	const marked = new Marked({ headerIds: false })
	const store = useStore()
	const post = reactive<{
		title: string
		markdown: string
		categories: string[]
	}>({
		title: "",
		markdown: "",
		categories: [],
	})
	const resize = () => {
		textarea.value.style.height = "20px"
		textarea.value.style.height = textarea.value.scrollHeight + "px"
	}
	const reset = () => {
		post.title = ""
		post.markdown = ""
		post.categories = []
		textarea.value.style.height = "20px"
	}
	const handleSubmit = async (event: any) => {
		event.preventDefault()
		const message = await store.dispatch(
			"post/createPost",
			{
				title: post.title,
				post: post.markdown,
				categories: post.categories,
			},
			{
				root: true,
			}
		)
		console.log(message)
	}
	const handleCategories = (event: any) => {
		if (!post.categories.includes(event.target.textContent))
			post.categories = [...post.categories, event.target.textContent]
		else
			post.categories = post.categories.filter(
				(state) => state !== event.target.textContent
			)
	}
	const categories = [
		{ id: 1, category: "blog" },
		{ id: 2, category: "van hoa" },
		{ id: 3, category: "it" },
	]
</script>
<template>
	<main class="write__main grid-cols-2">
		<article class="write__text">
			<form @submit="handleSubmit">
				<input
					type="text"
					placeholder="Tiêu đề của bài viết"
					v-model="post.title" />
				<textarea
					placeholder="write some thing in here"
					class="write__text--input"
					contenteditable="true"
					ref="textarea"
					v-model="post.markdown"
					@input="resize"></textarea>
				<p>
					<span
						v-for="item in categories"
						:key="item.id"
						:value="item.category"
						@click="handleCategories"
						v-theme="{
							isFocus: post.categories.includes(item.category),
							colorFocus: '#DFD7BF',
							colorNotFocus: '#F2EAD3',
						}">
						{{ item.category }}
					</span>
				</p>
				<div>
					<button @click="reset">Reset</button>
					<button type="submit">Gửi</button>
				</div>
			</form>
		</article>
		<article class="write__show" v-html="marked.parse(post.markdown)"></article>
	</main>
</template>
<style lang="scss"></style>
