<template>
	<div class="blog">
		<h1>Blog</h1>
		<ul id="posts">
			<li v-bind:key="item.title" v-for="item in items">
				<router-link :to="{ name: 'Post', params: { title: item.route } }">
					{{ item.title }}
					{{ item.description }}
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Blog',

	data() {
		return {
			items: [],
		}
	},

	beforeRouteEnter(to, from, next) {
		const oReq = new XMLHttpRequest()
		oReq.addEventListener('load', () => {
			next(vm => {
				const posts = JSON.parse(oReq.response)
				posts.forEach(post => {
					post.route = post.title
						.toLowerCase()
						.split(' ')
						.join('-')
				})
				vm.items = posts
			})
		})

		oReq.open('GET', 'https://www.vladickostin.com/posts.json')
		oReq.send()
	},
}
</script>
