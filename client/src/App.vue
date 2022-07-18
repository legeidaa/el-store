<template>
	<div>
		<div id="nav">
			<!-- <div v-for="route in getRoutes" :key="route.path">
				<router-link v-if="!route.meta" class="router-link" :to="route.path">{{ route.name }}</router-link>
			</div>  -->
			<div v-for="route in routes" :key="route.path">
				<!-- <router-link class="router-link" :to="route.path">{{ route.name }}</router-link> -->
				<router-link class="router-link" :to="route.path">{{ route.name }}</router-link>
			</div>
			<!-- <router-link class="router-link" :to="{ name: 'Device', params: { id: '3333' } }">
				Device/3333
			</router-link> -->
			<br>
			<!-- <button @click="$router.push('/auth')">Auth</button> -->
			<button @on="log"></button>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>

export default {
	name: 'App',
	data() {
		return {
			isAuth: true,
			routes: this.$router.options.routes
		}
	},
	computed: {
		// getAdminRotes() {
		// 	if (isAuth) {
		// 		this.routes = this.$router.options.routes
		// 	} else {
		// 		this.routes = this.$router.options.routes.filter(route)
		// 	}
		// },
		// getRoutes() {
		// 	return this.$router.options.routes
		// }
	},
	created() {
		console.log(this.routes);
		if (!this.isAuth) {
			console.log(this.routes);
			this.routes = this.$router.options.routes.filter(route => {
				if (route.meta === undefined || !route.meta.requiresAuth) return true
			})

			console.log(this.routes);
		}
	},
	// methods: {
	// 	log() {
	// 		console.log(this.$router)
	// 	}
	// },
	// created() {
	// 	this.$watch(
	// 		() => this.$route.params,
	// 		(toParams, previousParams) => {
	// 			console.log(toParams, previousParams);
	// 		}
	// 	)
	// },
	watch: {
		/* $route(to, from) {
			// обрабатываем изменение параметров маршрута...
			console.log(to, from);

		} */
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

#nav {
	/* display: flex; */
}

.router-link {
	display: block;
	width: 200px;
	margin: 5px;
	background-color: #a2f4f5;
}
</style>
