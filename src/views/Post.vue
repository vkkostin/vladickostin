<template>
	<div>
		Post {{ $route.params.title }}
		<div>{{ post }}</div>
	</div>
</template>

<script>
export default {
	name: 'Post',

	data() {
		return {
			post: null,
		}
	},

	beforeRouteEnter(to, from, next) {
		const oReq = new XMLHttpRequest()
		oReq.addEventListener('load', () => {
			next(vm => {
				vm.post = oReq.response
			})
		})

		oReq.open('GET', `https://www.vladickostin.com/posts/${to.params.title}.txt`)
		oReq.send()
	},
}
</script>
