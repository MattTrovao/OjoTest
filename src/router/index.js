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
		},
		{
			path: '/movie/:id',
			component: () => import("../views/Movie/MovieView.vue"),
			children:[{
				path:'',
				name: 'Movie',
				props: true,
				component: () => import("../pages/Movie/Movie.vue"),
			}]
		}
	]
})

export default router;