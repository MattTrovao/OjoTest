import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 };
	},
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import("../views/home/HomeView.vue")
		}
	]
})

export default router;