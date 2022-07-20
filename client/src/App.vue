<template>
	<div>
		<nav-bar :getPaths="getPaths()"  />
		<router-view></router-view>
	</div>
</template>

<script>
import "./assets/style.scss";
import NavBar from './components/Common/NavBar';
import { mapGetters } from 'vuex'


export default {
	name: "App",
	watch: {
		$route(to, from) {
			// обрабатываем изменение параметров маршрута...
			console.log(to, from);
		}
	},
	components: { NavBar },
	computed: {
		...mapGetters([
			'getIsAuth',
			'getUser'
		])
	},

	methods: {
		getPaths() {
			// console.log(this.routes, this.getIsAuth);
			return this.$router.options.routes.filter(route => {

				if (route.name === 'Device') return false

				if (!this.getIsAuth) {
					if (route.meta === undefined || !route.meta.requiresAuth) return true
				} else {
					return true
				}
			})
		}
	},
}
</script>

