<script setup lang="ts">
	import PostListComponent from "@/components/PostListComponetn.vue"
</script>

<template>
	<main class="container main">
		<div class="main__header">
			<div class="grid-cols-2">
				<div class="main__header--content">
					<h2>Love Nao Tomori Fovever</h2>
					<span
						>My name is Lyam and I'm here to share with you my knowledge and
						experience of over 10 years of monetizing my blog.</span
					>
				</div>
				<img
					class="main__header--img"
					src="../assets/nao.jpeg"
					height="460"
					width="320" />
			</div>
		</div>
		<div class="main__content grid-cols-3">
			<div class="main__content--post grid-cols-2 col-span-2">
				<PostListComponent />
			</div>
			<aside>sidebar</aside>
		</div>
	</main>
</template>
