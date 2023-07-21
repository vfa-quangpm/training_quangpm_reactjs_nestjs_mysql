<script setup lang="ts">
	import type { IPostItem } from "@/store/post/post.state"
	import dayjs from "dayjs"
	import { toRefs } from "vue"
	const props = defineProps<{ post: IPostItem }>()
	const { post } = toRefs(props)
	const date = dayjs(post.value.createAt).format("DD/MM/YYYY")
</script>
<template>
	<article class="card__container">
		<img src="../assets/nao.jpeg" height="180" width="320" />
		<h2>{{ post.title }}</h2>
		<p>
			<span v-for="category in post.categories" v-bind:key="category.id">{{
				category.category
			}}</span>
		</p>
		<h5>{{ date }}</h5>
	</article>
</template>
