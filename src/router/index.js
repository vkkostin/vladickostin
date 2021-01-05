import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/resume',
		name: 'Resume',
		component: () => import('../views/Resume.vue'),
	},
	{
		path: '/blog',
		name: 'Blog',
		component: () => import('../views/Blog.vue'),
	},
	{
		path: '/blog/:title',
		name: 'Post',
		component: () => import('../views/Post.vue'),
	},
]

const router = new VueRouter({
	routes,
})

export default router
